import { Character, GameState, Message, Item, Enemy, NPC, Quest, ConditionEffect } from './types';
import { locations, randomEvents, enemies, npcTemplates, questTemplates, getRandomLoot, potions, weapons, rings, wondrousItems } from './gameData';

function random<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function rollDice(sides: number): number {
  return randomInt(1, sides);
}

export function rollMultipleDice(count: number, sides: number): number[] {
  const results: number[] = [];
  for (let i = 0; i < count; i++) {
    results.push(rollDice(sides));
  }
  return results;
}

export function getModifier(stat: number): number {
  return Math.floor((stat - 10) / 2);
}

export function getProficiencyBonus(level: number): number {
  return Math.ceil(level / 4) + 1;
}

export function getXpForLevel(level: number): number {
  const xpTable = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];
  return xpTable[level] || 999999;
}

export function generateInitialGameState(): GameState {
  const loc = random(locations);
  return {
    location: loc.name,
    locationDescription: loc.description,
    timeOfDay: random(['рассвет', 'утро', 'полдень', 'день', 'вечер', 'закат', 'ночь']),
    weather: random(['ясно', 'облачно', 'дождь', 'туман', 'гроза', 'снег', 'ветер']),
    day: 1,
    quests: [],
    npcs: [random(npcTemplates), random(npcTemplates)],
    events: [],
    combatActive: false,
    discoveredAreas: [loc.name],
    reputation: 0,
    storyFlags: [],
  };
}

export function generateOpeningNarrative(character: Character): string {
  const loc = random(locations);
  const weather = random(['ясно', 'облачно', 'дождь', 'туман', 'гроза', 'снег', 'ветер']);
  const time = random(['рассвет', 'утро', 'полдень', 'день', 'вечер', 'закат', 'ночь']);
  
  const weatherDesc = weather === 'дождь' || weather === 'гроза' 
    ? 'Капли дождя барабанят по твоему доспеху.' 
    : weather === 'туман' 
    ? 'Густой туман ограничивает видимость до нескольких шагов.' 
    : weather === 'снег'
    ? 'Снежинки кружатся в воздухе, покрывая всё белым покровом.'
    : 'Природа вокруг спокойна, но что-то подсказывает тебе, что это обманчиво.';

  const backstoryPart = character.backstory 
    ? character.backstory 
    : 'Ты ищешь приключений и славы, следуя зову судьбы.';

  const npc = random(npcTemplates);
  const npcAction = random(['машет тебе рукой', 'наблюдает за тобой с интересом', 'что-то шепчет', 'протягивает свиток', 'указывает на север', 'сидит у огня и манит подойти']);

  const timeEmoji = time === 'ночь' || time === 'закат' ? '🌙' : time === 'рассвет' ? '🌅' : '☀️';
  
  const narratives = [
    `${timeEmoji} *${time.charAt(0).toUpperCase() + time.slice(1)}. Погода: ${weather}.*\n\nТы — **${character.name}**, ${character.race} ${character.class} ${character.level}-го уровня.\n\n${backstoryPart}\n\nТвой путь привёл тебя в **${loc.name}**. ${loc.description}\n\n${weatherDesc}\n\nПеред тобой **${npc.name}** — ${npc.description}. Он ${npcAction}.\n\n*Что ты будешь делать?*`,
    
    `${timeEmoji} *День ${1}. ${time.charAt(0).toUpperCase() + time.slice(1)}, ${weather}.*\n\n**${character.name}**, ${character.race} ${character.class}, стоит в **${loc.name}**.\n\n${loc.description}\n\n${weatherDesc}\n\n${backstoryPart}\n\nРядом с тобой — **${npc.name}**, ${npc.description}. ${random(npc.dialogue)}\n\n*Твои действия?*`,
  ];

  return random(narratives);
}

export function generateDMResponse(playerInput: string, character: Character, gameState: GameState): { response: string; updatedState: GameState; updatedCharacter?: Character } {
  const input = playerInput.toLowerCase();
  const newState = { ...gameState };
  let newChar = { ...character };
  
  // Combat
  if (input.includes('атак') || input.includes('удар') || input.includes('сраж') || input.includes('бой') || input.includes('убить') || input.includes('напасть')) {
    const result = generateCombatResponse(newChar, newState);
    return { response: result.response, updatedState: result.updatedState, updatedCharacter: result.updatedCharacter };
  }
  
  // Exploration
  if (input.includes('осмотр') || input.includes('исслед') || input.includes('огляд') || input.includes('поиск') || input.includes('найти') || input.includes('обыск')) {
    const result = generateExplorationResponse(newChar, newState);
    return { response: result.response, updatedState: result.updatedState, updatedCharacter: result.updatedCharacter };
  }
  
  // NPC interaction
  if (input.includes('говор') || input.includes('спрос') || input.includes('поговор') || input.includes('диалог') || input.includes('убед') || input.includes('договор')) {
    const result = generateNPCResponse(newChar, newState);
    return { response: result.response, updatedState: result.updatedState, updatedCharacter: result.updatedCharacter };
  }
  
  // Movement
  if (input.includes('ид') || input.includes('пойд') || input.includes('беж') || input.includes('двиг') || input.includes('путеш') || input.includes('направ')) {
    const result = generateMovementResponse(newChar, newState);
    return { response: result.response, updatedState: result.updatedState, updatedCharacter: result.updatedCharacter };
  }
  
  // Rest
  if (input.includes('отдых') || input.includes('спать') || input.includes('привал') || input.includes('костёр') || input.includes('костер')) {
    const result = generateRestResponse(newChar, newState);
    return { response: result.response, updatedState: result.updatedState, updatedCharacter: result.updatedCharacter };
  }
  
  // Magic
  if (input.includes('заклин') || input.includes('маги') || input.includes('колдов') || input.includes('каст') || input.includes('чар')) {
    const result = generateMagicResponse(newChar, newState);
    return { response: result.response, updatedState: result.updatedState, updatedCharacter: result.updatedCharacter };
  }
  
  // Stealth
  if (input.includes('тих') || input.includes('скрыт') || input.includes('красть') || input.includes('прят') || input.includes('незамеч')) {
    const result = generateStealthResponse(newChar, newState);
    return { response: result.response, updatedState: result.updatedState, updatedCharacter: result.updatedCharacter };
  }

  // Use item
  if (input.includes('использ') || input.includes('примен') || input.includes('вып') || input.includes('пь') || input.includes('equip') || input.includes('экип')) {
    const result = generateUseItemResponse(newChar, newState);
    return { response: result.response, updatedState: result.updatedState, updatedCharacter: result.updatedCharacter };
  }

  // Default
  return generateDefaultResponse(playerInput, newChar, newState);
}

function generateCombatResponse(character: Character, state: GameState): { response: string; updatedState: GameState; updatedCharacter: Character } {
  const enemy = random(enemies.filter(e => e.cr <= character.level + 2));
  const playerRoll = rollDice(20) + getModifier(character.stats.strength) + character.proficiencyBonus;
  const enemyRoll = rollDice(20) + Math.floor(enemy.cr * 2);
  const damage = rollDice(8) + getModifier(character.stats.strength);
  
  let result: string;
  let newChar = { ...character };
  
  if (playerRoll >= enemyRoll + 5) {
    result = `⚔️ **БОЕВАЯ СЦЕНА!**\n\nПеред тобой появляется **${enemy.name}** (${enemy.type}, ОП ${enemy.cr})!\n\n🎲 Инициатива: Ты — ${playerRoll} | Враг — ${enemyRoll}\n\nТы наносишь мощный удар! **Урон: ${damage}** (${enemy.hp <= damage ? 'убит с одного удара!' : 'осталось ' + (enemy.hp - damage) + ' HP'})\n\n${random([
      `${enemy.name} ранен и отступает, шипя от боли!`,
      `Твой удар приходится точно в цель! ${enemy.name} повержен!`,
      `${enemy.name} пытается контратаковать, но ты уклоняешься и добиваешь его!`
    ])}\n\n🏆 **Награда:** ${enemy.xp} опыта\n\n📦 **Добыча:**`;
    
    const loot = getRandomLoot(character.level);
    if (loot.length > 0) {
      loot.forEach(item => {
        result += `\n- ${item.name} (${item.rarity === 'common' ? 'Обычный' : item.rarity === 'uncommon' ? 'Необычный' : item.rarity === 'rare' ? 'Редкий' : item.rarity === 'veryRare' ? 'Очень редкий' : 'Легендарный'})`;
        newChar.inventory.push(item);
      });
    } else {
      const gold = randomInt(5, 50) * character.level;
      newChar.gold += gold;
      result += `\n- ${gold} золотых монет`;
    }
    
    newChar.xp += enemy.xp;
    
    // Level up check
    if (newChar.xp >= newChar.xpToNext) {
      newChar.level += 1;
      newChar.xpToNext = getXpForLevel(newChar.level + 1);
      newChar.proficiencyBonus = getProficiencyBonus(newChar.level);
      const hpGain = rollDice(8) + getModifier(newChar.stats.constitution);
      newChar.maxHp += hpGain;
      newChar.hp = newChar.maxHp;
      result += `\n\n🎉 **ПОВЫШЕНИЕ УРОВНЯ!**\n\nТы достиг ${newChar.level}-го уровня!\n+${hpGain} к максимальному HP\nБонус мастерства: +${newChar.proficiencyBonus}`;
    }
  } else if (playerRoll >= enemyRoll) {
    const takenDamage = randomInt(2, 6);
    newChar.hp -= takenDamage;
    result = `⚔️ **БОЕВАЯ СЦЕНА!**\n\n${enemy.name} преграждает тебе путь!\n\n🎲 Инициатива: Ты — ${playerRoll} | Враг — ${enemyRoll}\n\nБой идёт вничью! Ты и ${enemy.name} обмениваетесь ударами. Ты получаешь **${takenDamage} урона**.\n\n*Враг всё ещё стоит. Что будешь делать?*`;
    state.combatActive = true;
    state.currentEnemy = enemy;
  } else {
    const takenDamage = randomInt(3, 10);
    newChar.hp -= takenDamage;
    result = `⚔️ **БОЕВАЯ СЦЕНА!**\n\n${enemy.name} нападает первым!\n\n🎲 Инициатива: Ты — ${playerRoll} | Враг — ${enemyRoll}\n\nВраг наносит тебе **${takenDamage} урона!**\n\n${random([
      'Но ты не сдаёшься! Контратакуй или попробуй сбежать.',
      'Рана кровоточит, но ты ещё в бою. Что будешь делать?',
      `${enemy.name} готовится к следующему удару.`
    ])}\n\n*Твои действия?*`;
    state.combatActive = true;
    state.currentEnemy = enemy;
  }
  
  if (newChar.hp <= 0) {
    newChar.hp = 0;
    result += `\n\n💀 **ТЫ ПАЛ В БОЮ!**\n\nТвоё сознание меркнет... Но это ещё не конец. Ты можешь бороться за жизнь (спасброски от смерти) или быть воскрешённым союзниками.`;
  }
  
  return { response: result, updatedState: state, updatedCharacter: newChar };
}

function generateExplorationResponse(character: Character, state: GameState): { response: string; updatedState: GameState; updatedCharacter: Character } {
  const perception = rollDice(20) + getModifier(character.stats.wisdom) + (character.skills.find(s => s.name === 'Внимательность')?.proficient ? character.proficiencyBonus : 0);
  const found = perception >= 10;
  
  let result: string;
  let newChar = { ...character };
  
  if (found) {
    const findings = [
      () => `Ты замечаешь скрытый проход за ${random(['деревом', 'камнем', 'гобеленом', 'статуей', 'книжным шкафом'])}.`,
      () => {
        const loot = getRandomLoot(character.level);
        if (loot.length > 0) {
          loot.forEach(item => newChar.inventory.push(item));
          return `На земле ты находишь: ${loot.map(i => `**${i.name}**`).join(', ')}!`;
        }
        const gold = randomInt(10, 100);
        newChar.gold += gold;
        return `Ты находишь ${gold} золотых монет в старом сундуке!`;
      },
      () => `Ты обнаруживаешь следы — кто-то прошёл здесь недавно. Следы ведут на ${random(['север', 'юг', 'восток', 'запад'])}.`,
      () => `Ты замечаешь ловушку на полу! Благодаря своей внимательности (${perception}), ты избежал её.`,
      () => `Ты находишь древнюю надпись: "${random(['Здесь покоится забытый герой', 'Ищи свет в тьме', 'Осторожно, мёртвые не спят', 'Сокровище ждёт достойного'])}"`,
    ];
    
    result = `🔍 **Проверка Внимательности:** 🎲 ${perception} — Успех!\n\nТы тщательно осматриваешь местность.\n\n${random(findings)()}\n\n*Что ты будешь делать?*`;
  } else {
    result = `🔍 **Проверка Внимательности:** 🎲 ${perception} — Провал.\n\nТы осматриваешь местность, но не замечаешь ничего особенного.\n\n${random([
      'Место кажется обычным, но ты чувствуешь, что что-то упустил.',
      'Ничего необычного... или тебе так кажется?',
      'Твои поиски не дали результата.'
    ])}\n\n*Что ты будешь делать?*`;
  }
  
  return { response: result, updatedState: state, updatedCharacter: newChar };
}

function generateNPCResponse(character: Character, state: GameState): { response: string; updatedState: GameState; updatedCharacter: Character } {
  const npc = state.npcs.length > 0 ? random(state.npcs) : random(npcTemplates);
  const persuasion = rollDice(20) + getModifier(character.stats.charisma) + (character.skills.find(s => s.name === 'Убеждение')?.proficient ? character.proficiencyBonus : 0);
  
  let result = `💬 **Разговор с ${npc.name}**\n\n*${npc.description}*\n\n`;
  
  if (persuasion >= 12) {
    result += `Проверка Харизмы: 🎲 ${persuasion} — Успех!\n\n${npc.name} расположен к тебе:\n\n"${random(npc.dialogue)}"\n\n`;
    
    if (npc.questGiver && Math.random() > 0.5 && state.quests.length < 3) {
      const questTemplate = random(questTemplates);
      const newQuest: Quest = {
        id: Date.now().toString(),
        name: questTemplate.name,
        description: questTemplate.description,
        giver: npc.name,
        reward: questTemplate.reward,
        objectives: [...questTemplate.objectives],
        completed: false,
        failed: false,
        type: questTemplate.type,
      };
      state.quests.push(newQuest);
      result += `\n📜 **Новый квест!**\n\n**${newQuest.name}**\n${newQuest.description}\n\n*Награда: ${newQuest.reward.xp} опыта, ${newQuest.reward.gold} золотых*`;
    }
  } else {
    result += `Проверка Харизмы: 🎲 ${persuasion} — Провал.\n\n${npc.name} ${random([
      'не хочет разговаривать и отворачивается.',
      'бормочет что-то невразумительное и уходит.',
      'смотрит на тебя с подозрением: "Не доверяю я тебе, путник..."'
    ])}\n\n*Может, стоит попробовать другой подход?*`;
  }
  
  return { response: result, updatedState: state, updatedCharacter: character };
}

function generateMovementResponse(character: Character, state: GameState): { response: string; updatedState: GameState; updatedCharacter: Character } {
  const newLoc = random(locations);
  const encounter = Math.random() > 0.5;
  
  state.location = newLoc.name;
  state.locationDescription = newLoc.description;
  state.timeOfDay = random(['рассвет', 'утро', 'полдень', 'день', 'вечер', 'закат', 'ночь']);
  state.weather = random(['ясно', 'облачно', 'дождь', 'туман', 'гроза', 'снег', 'ветер']);
  state.day += 1;
  
  if (!state.discoveredAreas.includes(newLoc.name)) {
    state.discoveredAreas.push(newLoc.name);
  }
  
  let result = `🚶 **Путешествие**\n\nТы отправляешься в путь. Дорога занимает несколько часов...\n\n*Погода: ${state.weather}. Время: ${state.timeOfDay}. День ${state.day}.*\n\n`;
  
  if (encounter) {
    const enemy = random(enemies.filter(e => e.cr <= character.level + 1));
    result += `По пути тебе встречается **${enemy.name}**! (${enemy.type})\n\n`;
    result += `Ты достигаешь нового места: **${newLoc.name}**\n\n*${newLoc.description}*\n\n${random(randomEvents)}.\n\n*Что ты будешь делать?*`;
  } else {
    const npc = random(npcTemplates);
    result += `Путь был спокойным. Ты достигаешь нового места: **${newLoc.name}**\n\n*${newLoc.description}*\n\nЗдесь ты видишь **${npc.name}** — ${npc.description}. ${random(npc.dialogue)}\n\n*Что ты будешь делать?*`;
    state.npcs = [npc, random(npcTemplates)];
  }
  
  return { response: result, updatedState: state, updatedCharacter: character };
}

function generateRestResponse(character: Character, state: GameState): { response: string; updatedState: GameState; updatedCharacter: Character } {
  const healAmount = randomInt(3, 10) + getModifier(character.stats.constitution);
  let newChar = { ...character };
  
  newChar.hp = Math.min(newChar.maxHp, newChar.hp + healAmount);
  
  // Clear some conditions
  newChar.conditions = newChar.conditions.filter(c => c.duration > 1);
  
  let result = `🏕️ **Отдых**\n\nТы устраиваешь привал и разжигаешь костёр. Огонь потрескивает, а звёзды мерцают над головой.\n\n`;
  result += `❤️ Ты восстанавливаешь **${healAmount} HP** (текущие: ${newChar.hp}/${newChar.maxHp})\n\n`;
  
  if (Math.random() > 0.6) {
    const events = [
      'Во сне тебе является видение: древний храм, окружённый тьмой...',
      'Ты слышишь странные звуки в ночи, но ничего не находишь.',
      'К тебе во сне приходит мудрый старец и говорит загадочную фразу...',
      'Утром ты обнаруживаешь странные следы вокруг лагеря.',
      'Ночь проходит спокойно. Ты чувствуешь себя отдохнувшим.',
      'Ты видишь во время сна дракона, летящего на север...',
      'Странный торговец появляется у твоего костра и предлагает сделку...',
    ];
    result += random(events) + '\n\n';
  }
  
  result += `*Ты полон сил и готов к новым приключениям. Что будешь делать?*`;
  
  return { response: result, updatedState: state, updatedCharacter: newChar };
}

function generateMagicResponse(character: Character, state: GameState): { response: string; updatedState: GameState; updatedCharacter: Character } {
  const magicRoll = rollDice(20) + getModifier(character.stats.intelligence);
  
  let result = `✨ **Магическая проверка**\n\n`;
  result += `Бросок: 🎲 ${magicRoll}\n\n`;
  
  if (magicRoll >= 12) {
    const effects = [
      'Мощный поток энергии вырывается из твоих рук!',
      'Магический щит окружает тебя, мерцая радужными огнями.',
      'Ты создаёшь иллюзию, которая обманывает всех вокруг.',
      'Твоё заклинание лечения исцеляет раны.',
      'Огненный шар взрывается в центре врагов!',
      'Ты телепортируешься на короткое расстояние.',
      'Магический свет озаряет всё вокруг.',
    ];
    result += `Заклинание успешно! ${random(effects)}\n\n`;
    result += `*Магия послушна тебе. Что будешь делать дальше?*`;
  } else {
    const fails = [
      'Заклинание даёт сбой! Магическая энергия рассеивается в воздухе.',
      'Ты теряешь контроль над заклинанием. Оно бьёт в неожиданном направлении!',
      'Магия не подчиняется. Нужно попробовать ещё раз.',
    ];
    result += `${random(fails)}\n\n`;
    result += `*Что ты будешь делать?*`;
  }
  
  return { response: result, updatedState: state, updatedCharacter: character };
}

function generateStealthResponse(character: Character, state: GameState): { response: string; updatedState: GameState; updatedCharacter: Character } {
  const stealthRoll = rollDice(20) + getModifier(character.stats.dexterity) + (character.skills.find(s => s.name === 'Скрытность')?.proficient ? character.proficiencyBonus : 0);
  
  let result = `🥷 **Проверка Скрытности**\n\n`;
  result += `Бросок: 🎲 ${stealthRoll}\n\n`;
  
  if (stealthRoll >= 12) {
    const actions = [
      'проскальзываешь мимо стражей',
      'растворяешься в тенях',
      'пробираешься через охраняемую территорию',
      'подкрадываешься к врагу со спины',
      'скрываешься от преследователей',
    ];
    result += `Ты бесшумно ${random(actions)}! Никто не замечает твоего присутствия.\n\n`;
    result += `*Ты в безопасности. Что будешь делать?*`;
  } else {
    const fails = [
      'Ветка хрустит под твоей ногой! Стражники настораживаются.',
      'Ты задеваешь предмет, и он с грохотом падает!',
      'Кто-то замечает твоё движение! "Эй, кто здесь?!"',
    ];
    result += `${random(fails)}\n\n`;
    result += `*Тревога! Что ты будешь делать?*`;
  }
  
  return { response: result, updatedState: state, updatedCharacter: character };
}

function generateUseItemResponse(character: Character, state: GameState): { response: string; updatedState: GameState; updatedCharacter: Character } {
  let newChar = { ...character };
  
  if (newChar.inventory.length === 0) {
    return { response: '🎒 Твой инвентарь пуст. Нечего использовать.', updatedState: state, updatedCharacter: newChar };
  }
  
  const item = random(newChar.inventory);
  let result = `🎒 **Использование предмета: ${item.name}**\n\n*${item.description}*\n\n`;
  
  if (item.type === 'potion') {
    const healAmount = rollDice(4) + rollDice(4) + 2;
    newChar.hp = Math.min(newChar.maxHp, newChar.hp + healAmount);
    newChar.inventory = newChar.inventory.filter(i => i.id !== item.id);
    result += `❤️ Ты выпиваешь зелье и восстанавливаешь **${healAmount} HP**!\n\nТекущие HP: ${newChar.hp}/${newChar.maxHp}`;
  } else if (item.type === 'weapon') {
    newChar.equippedWeapon = item;
    result += `⚔️ Ты экипируешь **${item.name}**!\n\nУрон: ${item.damage}`;
  } else if (item.type === 'armor') {
    newChar.equippedArmor = item;
    newChar.armorClass = item.armorClass! + getModifier(newChar.stats.dexterity);
    result += `🛡️ Ты надеваешь **${item.name}**!\n\nКласс Доспеха: ${newChar.armorClass}`;
  } else {
    result += `Ты используешь **${item.name}**.\n\n${item.effect || 'Предмет проявляет свои магические свойства.'}`;
  }
  
  result += `\n\n*Что ты будешь делать?*`;
  
  return { response: result, updatedState: state, updatedCharacter: newChar };
}

function generateDefaultResponse(input: string, character: Character, state: GameState): { response: string; updatedState: GameState; updatedCharacter: Character } {
  const intros = [
    'Ты пытаешься сделать это, и...',
    'Мир реагирует на твои действия...',
    'Судьба благосклонна к смелым...',
    'Твоё решение имеет последствия...',
  ];
  
  const outcomes = [
    'Ты замечаешь, что окружение меняется. Что-то происходит.',
    'Рядом появляется новый путь, которого раньше не было.',
    'К тебе обращается прохожий с необычной просьбой.',
    'Ты чувствуешь странную энергию, исходящую из-под земли.',
  ];
  
  const finalScenes = [
    `Ты находишься в **${state.location}**. ${random(npcTemplates).name} обращает на тебя внимание.`,
    `Время идёт. ${state.timeOfDay} сменяется новыми тенями. Ты всё ещё в **${state.location}**.`,
    `Твоё решение принято. Мир D&D реагирует: ${random(randomEvents).toLowerCase()}.`,
    `${random(npcTemplates).name} подходит к тебе: "Эй, ${character.name}, у меня есть для тебя дело..."`,
  ];
  
  const responses = [
    `🎲 *Мастер задумывается...*\n\nИнтересное решение, **${character.name}**. ${random(intros)}\n\n${random(outcomes)}\n\n*Что ты будешь делать?*`,
    `🎲 **${character.name}** действует! Мастер проверяет ситуацию...\n\n${random(outcomes)}\n\n${random(randomEvents)}.\n\n*Твои действия?*`,
    `🎲 *Кубики брошены...*\n\n${random(finalScenes)}\n\n*Что ты будешь делать?*`,
  ];
  
  return { response: random(responses), updatedState: state, updatedCharacter: character };
}

export function generateQuestHook(character: Character): string {
  const quest = random(questTemplates);
  const npc = random(npcTemplates);
  
  return `📜 **Новый квест от ${npc.name}!**\n\n**${quest.name}**\n\n${quest.description}\n\n*Цели:*\n${quest.objectives.map((o, i) => `${i + 1}. ${o}`).join('\n')}\n\n*Награда: ${quest.reward.xp} опыта, ${quest.reward.gold} золотых*`;
}
