import { useState, useRef, useEffect } from 'react';
import { Character, CharacterStats, Message, GameState, Item, Skill, Spell } from './types';
import {
  generateOpeningNarrative,
  generateDMResponse,
  generateInitialGameState,
  generateQuestHook,
  rollDice,
  rollMultipleDice,
  getModifier,
  getProficiencyBonus,
  getXpForLevel,
} from './dmEngine';
import { spells, rarityColors, rarityNames } from './gameData';

// Все расы из всех редакций D&D
const races = [
  // Основные расы (PHB)
  'Человек', 'Эльф', 'Дварф', 'Полурослик', 'Драконорождённый', 'Гном', 'Полуэльф', 'Тифлинг', 'Полуорк',
  // Из дополнений и других редакций
  'Аасимар', 'Геновид (Джинни)', 'Голиаф', 'Кенку', 'Табакси', 'Тритон', 'Ящеролюд', 'Человекоящер',
  'Гоблин', 'Орк', 'Кобольд', 'Фейри', 'Минотавр', 'Леонин', 'Сатир', 'Центавр',
  'Ведьмак (Hexblood)', 'Дхampir', 'Шейпшифтер', 'Калибан',
  // Экзотические расы
  'Лоха', 'Аарокра', 'Ведьминский отпрыск', 'Гитъянки', 'Гитзераи',
  'Траскен', 'Глубинный гном (Свирфнеблин)', 'Морской эльф', 'Теневой эльф (Дроу)',
  'Горный дварф', 'Холмовой дварф', 'Лесной эльф', 'Высший эльф',
  'Скаут-полурослик', 'Коренастый полурослик', 'Лесной гном', 'Скальный гном'
];

// Все классы из всех редакций D&D
const classes = [
  // Основные классы (PHB)
  'Воин', 'Маг', 'Плут', 'Жрец', 'Следопыт', 'Бард', 'Паладин', 'Колдун', 'Друид', 'Монах', 'Варвар', 'Чародей',
  // Из дополнений и других редакций
  'Мистик', 'Изобретатель (Artificer)', 'Рыцарь (Cavalier)', 'Охотник на нежить',
  'Мастер меча', 'Теневой клинок', 'Танцор клинков',
  'Призыватель духов', 'Мастер рун', 'Проводник стихий',
  'Алхимик', 'Наёмник', 'Глашатай', 'Трикстер',
  'Мастер зверей', 'Охотник', 'Следопыт-разведчик',
  'Жрец битвы', 'Жрец смерти', 'Жрец бури', 'Жрец света', 'Жрец знаний', 'Жрец природы',
  'Паладин преданности', 'Паладин мести', 'Паладин древних', 'Паладин славы',
  'Колдун архифеи', 'Колдун исчадия', 'Колдун великого древнего', 'Колдун клинка',
  'Друид земли', 'Друид луны', 'Друид круга спор',
  'Монах открытой ладони', 'Монах тени', 'Монах четырёх стихий',
  'Бард колледжа знаний', 'Бард колледжа доблести', 'Бард колледжа красноречия',
  'Воин чемпион', 'Воин боевой мастер', 'Воин мистический рыцарь',
  'Маг школы воплощения', 'Маг школы преобразования', 'Маг школы некромантии', 'Маг школы прорицания',
  'Плут вор', 'Плут убийца', 'Плут мистический ловкач',
  'Чародей дикой магии', 'Чародей драконьей крови', 'Чародей божественной души',
  'Варвар берсерк', 'Варвар тотемный воин', 'Варвар первобытный путь',
  // Из других редакций
  'Ассасин', 'Ниндзя', 'Самурай', 'Викинг', 'Шаман', 'Ведьма (Warlock)',
  'Некромант', 'Иллюзионист', 'Пиромант', 'Криомант',
  'Рыцарь-защитник', 'Тёмный рыцарь', 'Паладин крови',
  'Мастер клинка', 'Фехтовальщик', 'Дуэлянт'
];

function generateStats(): CharacterStats {
  const finalStats: number[] = [];
  for (let i = 0; i < 6; i++) {
    const rolls = [rollDice(6), rollDice(6), rollDice(6), rollDice(4)];
    const sorted = [...rolls].sort((a, b) => b - a);
    finalStats.push(sorted[0] + sorted[1] + sorted[2]);
  }
  return {
    strength: finalStats[0],
    dexterity: finalStats[1],
    constitution: finalStats[2],
    intelligence: finalStats[3],
    wisdom: finalStats[4],
    charisma: finalStats[5],
  };
}

function CharacterCreation({ onComplete }: { onComplete: (char: Character) => void }) {
  const [name, setName] = useState('');
  const [race, setRace] = useState(races[0]);
  const [charClass, setCharClass] = useState(classes[0]);
  const [stats, setStats] = useState<CharacterStats>(generateStats());
  const [backstory, setBackstory] = useState('');
  const [rolling, setRolling] = useState(false);

  const handleReroll = () => {
    setRolling(true);
    setTimeout(() => {
      setStats(generateStats());
      setRolling(false);
    }, 500);
  };

  const handleStart = () => {
    if (!name.trim()) return;
    
    const hp = 10 + getModifier(stats.constitution) + rollDice(8);
    const character: Character = {
      name: name.trim(),
      race,
      class: charClass,
      level: 1,
      hp,
      maxHp: hp,
      tempHp: 0,
      stats,
      inventory: [],
      spells: [],
      spellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0],
      maxSpellSlots: [2, 0, 0, 0, 0, 0, 0, 0, 0],
      skills: [
        { name: 'Атлетика', ability: 'strength', proficient: false },
        { name: 'Акробатика', ability: 'dexterity', proficient: false },
        { name: 'Скрытность', ability: 'dexterity', proficient: charClass === 'Плут' || charClass === 'Следопыт' },
        { name: 'Внимательность', ability: 'wisdom', proficient: false },
        { name: 'Убеждение', ability: 'charisma', proficient: false },
        { name: 'Обман', ability: 'charisma', proficient: charClass === 'Плут' || charClass === 'Бард' },
      ],
      conditions: [],
      xp: 0,
      xpToNext: getXpForLevel(2),
      gold: rollDice(20) + 10,
      speed: race === 'Полурослик' || race === 'Гном' ? 25 : 30,
      armorClass: 10 + getModifier(stats.dexterity),
      proficiencyBonus: 2,
      inspiration: false,
      hitDice: '1d8',
      maxHitDice: 1,
      currentHitDice: 1,
      backstory,
      alignment: 'Нейтральный',
      personalityTraits: ['Храбрый', 'Решительный'],
      ideals: ['Свобода'],
      bonds: ['Защитить невинных'],
      flaws: ['Слишком доверчив'],
      languages: ['Общий', race === 'Эльф' ? 'Эльфийский' : race === 'Дварф' ? 'Дварфийский' : 'Общий'],
      toolProficiencies: [],
      savingThrowProficiencies: ['strength', 'constitution'],
      features: ['Второе дыхание'],
      deathSaves: { successes: 0, failures: 0 },
    };
    
    onComplete(character);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-amber-700/50 shadow-2xl shadow-purple-900/50 p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-400 mb-2" style={{ fontFamily: 'serif' }}>
            ⚔️ Создание Персонажа
          </h1>
          <p className="text-gray-400">Создай своего героя для приключений в мире D&D 5e</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-amber-300 text-sm font-medium mb-2">Имя героя</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введи имя персонажа..."
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-amber-300 text-sm font-medium mb-2">Раса</label>
              <select
                value={race}
                onChange={(e) => setRace(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-amber-500 transition"
              >
                {races.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-amber-300 text-sm font-medium mb-2">Класс</label>
              <select
                value={charClass}
                onChange={(e) => setCharClass(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-amber-500 transition"
              >
                {classes.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-amber-300 text-sm font-medium">Характеристики</label>
              <button
                onClick={handleReroll}
                disabled={rolling}
                className="px-3 py-1 bg-purple-700 hover:bg-purple-600 text-white text-sm rounded-lg transition disabled:opacity-50"
              >
                🎲 {rolling ? 'Бросок...' : 'Перебросить'}
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(stats).map(([key, value]) => (
                <div key={key} className={`bg-gray-700/50 rounded-lg p-3 text-center border transition-all ${rolling ? 'animate-pulse' : ''} border-gray-600`}>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    {key === 'strength' ? 'Сила' : key === 'dexterity' ? 'Ловкость' : key === 'constitution' ? 'Телосл.' : key === 'intelligence' ? 'Интеллект' : key === 'wisdom' ? 'Мудрость' : 'Харизма'}
                  </div>
                  <div className="text-2xl font-bold text-amber-400 mt-1">{value}</div>
                  <div className="text-xs text-gray-500">
                    {value >= 15 ? '⭐' : value >= 12 ? '✨' : value >= 8 ? '' : '💀'} 
                    {' '}({value >= 10 ? '+' : ''}{Math.floor((value - 10) / 2)})
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-amber-300 text-sm font-medium mb-2">Предыстория (необязательно)</label>
            <textarea
              value={backstory}
              onChange={(e) => setBackstory(e.target.value)}
              placeholder="Расскажи историю своего персонажа..."
              rows={3}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition resize-none"
            />
          </div>

          <button
            onClick={handleStart}
            disabled={!name.trim()}
            className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-lg rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-900/30"
          >
            🎮 Начать Приключение
          </button>
        </div>
      </div>
    </div>
  );
}

function DiceRoller({ onResult }: { onResult: (text: string) => void }) {
  const [diceType, setDiceType] = useState(20);
  const [count, setCount] = useState(1);
  const [lastRoll, setLastRoll] = useState<number[] | null>(null);

  const handleRoll = () => {
    const results = rollMultipleDice(count, diceType);
    setLastRoll(results);
    const total = results.reduce((a, b) => a + b, 0);
    const text = count > 1 
      ? `🎲 ${count}d${diceType}: [${results.join(', ')}] = **${total}**`
      : `🎲 d${diceType}: **${total}**`;
    onResult(text);
  };

  return (
    <div className="bg-gray-800/80 rounded-xl border border-gray-700 p-4">
      <h3 className="text-amber-400 font-medium mb-3 text-sm">🎲 Бросок Кубиков</h3>
      <div className="flex gap-2 mb-3">
        <select
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm"
        >
          {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <span className="text-gray-400 self-center text-sm">d</span>
        <select
          value={diceType}
          onChange={(e) => setDiceType(Number(e.target.value))}
          className="px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm"
        >
          {[4, 6, 8, 10, 12, 20, 100].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <button
          onClick={handleRoll}
          className="px-4 py-1 bg-purple-700 hover:bg-purple-600 text-white rounded text-sm transition"
        >
          Бросить
        </button>
      </div>
      {lastRoll && (
        <div className="text-center text-lg font-bold text-amber-300">
          {lastRoll.length > 1 ? `[${lastRoll.join(', ')}] = ${lastRoll.reduce((a, b) => a + b, 0)}` : lastRoll[0]}
        </div>
      )}
    </div>
  );
}

function GameScreen({ character: initialCharacter }: { character: Character }) {
  const [character, setCharacter] = useState(initialCharacter);
  const [gameState, setGameState] = useState<GameState>(generateInitialGameState());
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showInventory, setShowInventory] = useState(false);
  const [showQuests, setShowQuests] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const opening = generateOpeningNarrative(initialCharacter);
    const openingMsg: Message = {
      id: '0',
      type: 'dm',
      content: opening,
      timestamp: new Date(),
    };
    setMessages([openingMsg]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    const playerMsg: Message = {
      id: Date.now().toString(),
      type: 'player',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, playerMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const { response, updatedState, updatedCharacter } = generateDMResponse(input.trim(), character, gameState);
      
      const dmMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'dm',
        content: response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, dmMsg]);
      setGameState(updatedState);
      if (updatedCharacter) {
        setCharacter(updatedCharacter);
      }
      setIsTyping(false);
    }, 800 + Math.random() * 1200);
  };

  const handleQuest = () => {
    const quest = generateQuestHook(character);
    const questMsg: Message = {
      id: Date.now().toString(),
      type: 'dm',
      content: quest,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, questMsg]);
  };

  const handleDiceResult = (text: string) => {
    const diceMsg: Message = {
      id: Date.now().toString(),
      type: 'roll',
      content: text,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, diceMsg]);
  };

  const formatMessage = (content: string) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-300">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-gray-400 italic">$1</em>')
      .replace(/\n/g, '<br/>');
  };

  const getItemRarityColor = (rarity: string) => {
    return rarityColors[rarity] || '#9ca3af';
  };

  return (
    <div className="h-screen flex bg-gray-900 overflow-hidden">
      {/* Sidebar */}
      <div className={`${showSidebar ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden border-r border-gray-700 bg-gray-800/50 flex flex-col`}>
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-amber-400 font-bold text-lg flex items-center gap-2">
            🛡️ {character.name}
          </h2>
          <p className="text-gray-400 text-sm">{character.race} {character.class} ур.{character.level}</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* HP */}
          <div className="bg-gray-700/50 rounded-lg p-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-red-400">❤️ HP</span>
              <span className="text-white">{character.hp}/{character.maxHp}</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div 
                className="bg-red-500 h-2 rounded-full transition-all"
                style={{ width: `${(character.hp / character.maxHp) * 100}%` }}
              />
            </div>
          </div>

          {/* XP */}
          <div className="bg-gray-700/50 rounded-lg p-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-blue-400">⭐ Опыт</span>
              <span className="text-white">{character.xp}/{character.xpToNext}</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${(character.xp / character.xpToNext) * 100}%` }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gray-700/50 rounded-lg p-3">
            <h3 className="text-amber-300 text-sm font-medium mb-2">Характеристики</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex justify-between"><span className="text-gray-400">Сила</span><span className="text-white">{character.stats.strength} ({getModifier(character.stats.strength) >= 0 ? '+' : ''}{getModifier(character.stats.strength)})</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Ловкость</span><span className="text-white">{character.stats.dexterity} ({getModifier(character.stats.dexterity) >= 0 ? '+' : ''}{getModifier(character.stats.dexterity)})</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Телосл.</span><span className="text-white">{character.stats.constitution} ({getModifier(character.stats.constitution) >= 0 ? '+' : ''}{getModifier(character.stats.constitution)})</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Интеллект</span><span className="text-white">{character.stats.intelligence} ({getModifier(character.stats.intelligence) >= 0 ? '+' : ''}{getModifier(character.stats.intelligence)})</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Мудрость</span><span className="text-white">{character.stats.wisdom} ({getModifier(character.stats.wisdom) >= 0 ? '+' : ''}{getModifier(character.stats.wisdom)})</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Харизма</span><span className="text-white">{character.stats.charisma} ({getModifier(character.stats.charisma) >= 0 ? '+' : ''}{getModifier(character.stats.charisma)})</span></div>
            </div>
          </div>

          {/* Combat Stats */}
          <div className="bg-gray-700/50 rounded-lg p-3">
            <h3 className="text-amber-300 text-sm font-medium mb-2">Боевые параметры</h3>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between"><span className="text-gray-400">КД</span><span className="text-white">{character.armorClass}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Инициатива</span><span className="text-white">{getModifier(character.stats.dexterity) >= 0 ? '+' : ''}{getModifier(character.stats.dexterity)}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Скорость</span><span className="text-white">{character.speed} фт.</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Бонус мастерства</span><span className="text-white">+{character.proficiencyBonus}</span></div>
            </div>
          </div>

          {/* Inventory Button */}
          <button
            onClick={() => setShowInventory(!showInventory)}
            className="w-full py-2 bg-gray-700/50 hover:bg-gray-600/50 text-amber-300 text-sm rounded-lg transition border border-gray-600"
          >
            🎒 Инвентарь ({character.inventory.length}) 💰 {character.gold}з
          </button>

          {showInventory && (
            <div className="bg-gray-700/50 rounded-lg p-3">
              <h3 className="text-amber-300 text-sm font-medium mb-2">Предметы</h3>
              <ul className="space-y-1 max-h-40 overflow-y-auto">
                {character.inventory.length === 0 ? (
                  <li className="text-gray-500 text-xs">Пусто</li>
                ) : (
                  character.inventory.map((item, i) => (
                    <li key={i} className="text-xs flex items-center gap-1" style={{ color: getItemRarityColor(item.rarity) }}>
                      <span>•</span> {item.name} <span className="text-gray-500">({rarityNames[item.rarity]})</span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}

          {/* Quests Button */}
          <button
            onClick={() => setShowQuests(!showQuests)}
            className="w-full py-2 bg-gray-700/50 hover:bg-gray-600/50 text-amber-300 text-sm rounded-lg transition border border-gray-600"
          >
            📜 Квесты ({gameState.quests.length})
          </button>

          {showQuests && (
            <div className="bg-gray-700/50 rounded-lg p-3">
              <h3 className="text-amber-300 text-sm font-medium mb-2">Активные квесты</h3>
              <ul className="space-y-2 max-h-40 overflow-y-auto">
                {gameState.quests.length === 0 ? (
                  <li className="text-gray-500 text-xs">Нет активных квестов</li>
                ) : (
                  gameState.quests.map((quest, i) => (
                    <li key={i} className="text-xs">
                      <div className="text-white font-medium">{quest.name}</div>
                      <div className="text-gray-400">{quest.description}</div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}

          {/* Game State */}
          <div className="bg-gray-700/50 rounded-lg p-3">
            <h3 className="text-amber-300 text-sm font-medium mb-2">🌍 Мир</h3>
            <div className="space-y-1 text-xs">
              <div><span className="text-gray-400">Место:</span> <span className="text-white">{gameState.location}</span></div>
              <div><span className="text-gray-400">Время:</span> <span className="text-white">{gameState.timeOfDay}</span></div>
              <div><span className="text-gray-400">Погода:</span> <span className="text-white">{gameState.weather}</span></div>
              <div><span className="text-gray-400">День:</span> <span className="text-white">{gameState.day}</span></div>
            </div>
          </div>

          {/* Dice Roller */}
          <DiceRoller onResult={handleDiceResult} />
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-gray-800/80 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="text-gray-400 hover:text-white transition p-1"
            >
              {showSidebar ? '◀' : '▶'}
            </button>
            <div>
              <h1 className="text-amber-400 font-bold text-lg" style={{ fontFamily: 'serif' }}>
                🐉 AI Dungeon Master
              </h1>
              <p className="text-gray-500 text-xs">D&D 5e • Мастер подземелий ведёт твою историю...</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleQuest}
              className="px-3 py-1.5 bg-amber-700/50 hover:bg-amber-700 text-amber-300 text-sm rounded-lg transition border border-amber-700/50"
            >
              📜 Квест
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === 'player' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                msg.type === 'player' 
                  ? 'bg-purple-700/80 text-white rounded-br-sm' 
                  : msg.type === 'roll'
                  ? 'bg-gray-700/60 border border-purple-500/30 text-purple-200 rounded-bl-sm'
                  : 'bg-gray-700/80 text-gray-200 rounded-bl-sm border border-gray-600/50'
              }`}>
                {msg.type === 'dm' && (
                  <div className="text-amber-400 text-xs font-medium mb-1">🐉 Мастер</div>
                )}
                {msg.type === 'roll' && (
                  <div className="text-purple-400 text-xs font-medium mb-1">🎲 Бросок кубиков</div>
                )}
                <div 
                  className="text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
                />
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-700/80 rounded-2xl rounded-bl-sm px-4 py-3 border border-gray-600/50">
                <div className="text-amber-400 text-xs font-medium mb-1">🐉 Мастер</div>
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-gray-800/80 border-t border-gray-700 p-4">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Опиши действия своего персонажа..."
                disabled={isTyping}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition disabled:opacity-50"
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-medium rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              ▶
            </button>
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            {['⚔️ Атаковать', '🔍 Осмотреть', '💬 Говорить', '🚶 Идти', '🏕️ Отдых', '✨ Магия', '🥷 Скрыться', '🎒 Использовать'].map(action => (
              <button
                key={action}
                onClick={() => {
                  setInput(action.split(' ').slice(1).join(' '));
                  inputRef.current?.focus();
                }}
                className="px-2 py-1 bg-gray-700/50 hover:bg-gray-600/50 text-gray-400 hover:text-white text-xs rounded-lg transition border border-gray-700"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<'character-creation' | 'game'>('character-creation');
  const [character, setCharacter] = useState<Character | null>(null);

  const handleCharacterComplete = (char: Character) => {
    setCharacter(char);
    setScreen('game');
  };

  if (screen === 'character-creation') {
    return <CharacterCreation onComplete={handleCharacterComplete} />;
  }

  if (screen === 'game' && character) {
    return <GameScreen character={character} />;
  }

  return null;
}
