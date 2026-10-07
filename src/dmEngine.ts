import { Character, GameState } from './types';

const locations = [
  'тёмный лес, где деревья шепчут древние тайны',
  'заброшенная таверна на перекрёстке торговых путей',
  'подземелье, освещённое мерцающими кристаллами',
  'горная тропа, ведущая к древнему храму',
  'болотистая низина, окутанная зловонным туманом',
  'подземный город дроу, сияющий магическим светом',
  'руины замка на вершине утёса',
  'рыночная площадь оживлённого города',
  'библиотека, полная запретных знаний',
  'пещера дракона, где воздух раскалён от жара'
];

const npcs = [
  'загадочный старик в капюшоне',
  'раненый эльфийский следопыт',
  'торговец с подозрительной улыбкой',
  'призрак бывшей королевы',
  'гном-изобретатель с кучей механизмов',
  'полурослик-бард, ищущий вдохновение',
  'дворянин с тайными намерениями',
  'жрец забытого бога',
  'наёмник с шрамом через всё лицо',
  'ведьма, живущая в чаще леса'
];

const events = [
  'Вы слышите странные звуки из-за стены',
  'Земля начинает дрожать под ногами',
  'Вдалеке виднеется столб чёрного дыма',
  'Стая воронов проносится над вами',
  'Магический портал мерцает неподалёку',
  'Группа гоблинов пересекает вам дорогу',
  'Незнакомый путник просит о помощи',
  'Древний механизм начинает работать',
  'Небо окрашивается в багровый цвет',
  'Вы находите странный символ на камне'
];

const combatEnemies = [
  'гоблин-разведчик', 'скелет-воин', 'огромный паук', 'волк-одиночка',
  'бандит-грабитель', 'зомби', 'огр', 'тёмный маг',
  'минотавр', 'василиск', 'химера', 'лич'
];

const treasures = [
  'сундук с золотыми монетами', 'светящийся меч', 'зелье лечения',
  'свиток с заклинанием', 'магический амулет', 'карта сокровищ',
  'кольцо невидимости', 'древний артефакт', 'ключ от тайной двери',
  'зачарованный щит'
];

const weatherTypes = ['ясно', 'облачно', 'дождь', 'туман', 'гроза', 'снег', 'ветер'];
const timesOfDay = ['рассвет', 'утро', 'полдень', 'день', 'вечер', 'закат', 'ночь'];

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

export function generateInitialGameState(): GameState {
  return {
    location: random(locations),
    timeOfDay: random(timesOfDay),
    weather: random(weatherTypes),
    quest: '',
    npcs: [random(npcs), random(npcs)],
    events: []
  };
}

const npcDialogues = [
  'Помоги мне, путник...',
  'Я знаю, где спрятано сокровище...',
  'Будь осторожен, здесь водятся монстры...',
  'Ты выглядишь как тот, кто ищет приключений...',
  'Грядут тёмные времена...'
];

const npcActions = [
  'машет тебе рукой',
  'наблюдает за тобой с интересом',
  'что-то шепчет',
  'протягивает свиток',
  'указывает на север'
];

const npcActions2 = [
  'сидит у костра',
  'стоит на перекрёстке',
  'прячется за деревом',
  'бежит в твою сторону',
  'медитирует у камня'
];

const inscriptions = [
  'Здесь покоится забытый герой',
  'Ищи свет в тьме',
  'Осторожно, мёртвые не спят',
  'Сокровище ждёт достойного'
];

export function generateOpeningNarrative(character: Character): string {
  const location = random(locations);
  const weather = random(weatherTypes);
  const time = random(timesOfDay);
  
  const weatherDesc = weather === 'дождь' || weather === 'гроза' 
    ? 'Капли дождя барабанят по твоему шлему.' 
    : weather === 'туман' 
    ? 'Густой туман ограничивает видимость до нескольких шагов.' 
    : 'Природа вокруг спокойна, но что-то подсказывает тебе, что это обманчиво.';

  const backstoryPart = character.backstory 
    ? 'Твоя история: ' + character.backstory 
    : 'Ты ищешь приключений и славы.';

  const narrative1 = `Ты — ${character.name}, ${character.race} ${character.class} ${character.level}-го уровня. Твой путь привёл тебя в ${location}. ${weatherDesc}\n\nПеред тобой ${random(npcs)}, который ${random(npcActions)}.\n\nЧто ты будешь делать?`;
  
  const narrative2 = `Ты — ${character.name}, ${character.race} ${character.class}. ${backstoryPart}\n\nСейчас ты находишься в ${location}. ${weather === 'туман' ? 'Мгла скрывает очертания зданий.' : 'Место выглядит живописно.'}\n\nРядом с тобой — ${random(npcs)}, который говорит: "${random(npcDialogues)}"\n\nТвои действия?`;
  
  const narrative3 = `Приключение начинается!\n\n${character.name}, ${character.race} ${character.class} ${character.level}-го уровня, стоит в ${location}. Время — ${time}, погода — ${weather}.\n\nТы замечаешь ${random(npcs)}, который ${random(npcActions2)}.\n\n${random(events)}.\n\nЧто ты предпримешь?`;

  const timeEmoji = time === 'ночь' || time === 'закат' ? '🌙' : time === 'рассвет' ? '🌅' : '☀️';
  
  return `${timeEmoji} *${time.charAt(0).toUpperCase() + time.slice(1)}. Погода: ${weather}.*\n\n` + random([narrative1, narrative2, narrative3]);
}

export function generateDMResponse(playerInput: string, character: Character, gameState: GameState): { response: string; updatedState: GameState } {
  const input = playerInput.toLowerCase();
  const newState = { ...gameState };
  
  // Combat check
  if (input.includes('атак') || input.includes('удар') || input.includes('сраж') || input.includes('бой') || input.includes('убить') || input.includes('напасть')) {
    return generateCombatResponse(character, newState);
  }
  
  // Exploration
  if (input.includes('осмотр') || input.includes('исслед') || input.includes('огляд') || input.includes('поиск') || input.includes('найти')) {
    return generateExplorationResponse(character, newState);
  }
  
  // NPC interaction
  if (input.includes('говор') || input.includes('спрос') || input.includes('поговор') || input.includes('диалог') || input.includes('убед') || input.includes('договор')) {
    return generateNPCResponse(character, newState);
  }
  
  // Movement
  if (input.includes('ид') || input.includes('пойд') || input.includes('беж') || input.includes('двиг') || input.includes('путеш') || input.includes('направ')) {
    return generateMovementResponse(character, newState);
  }
  
  // Rest
  if (input.includes('отдых') || input.includes('спать') || input.includes('привал') || input.includes('костёр') || input.includes('костер')) {
    return generateRestResponse(character, newState);
  }
  
  // Magic
  if (input.includes('заклин') || input.includes('маги') || input.includes('колдов') || input.includes('каст')) {
    return generateMagicResponse(character, newState);
  }
  
  // Stealth
  if (input.includes('тих') || input.includes('скрыт') || input.includes('красть') || input.includes('прят') || input.includes('незамеч')) {
    return generateStealthResponse(character, newState);
  }

  // Default response
  return generateDefaultResponse(playerInput, character, newState);
}

function generateCombatResponse(character: Character, state: GameState): { response: string; updatedState: GameState } {
  const enemy = random(combatEnemies);
  const playerRoll = rollDice(20) + Math.floor((character.stats.strength + character.stats.dexterity) / 4);
  const enemyRoll = rollDice(20) + randomInt(1, 5);
  const damage = rollDice(8) + Math.floor(character.stats.strength / 2);
  
  const victoryLines = [
    enemy + ' ранен и отступает, шипя от боли. Ты победил!',
    'Твой удар приходится точно в цель! ' + enemy + ' повержен!',
    enemy + ' пытается контратаковать, но ты уклоняешься и добиваешь его!'
  ];
  
  const continueLines = [
    'Но ты не сдаёшься! Ты можешь контратаковать или попытаться сбежать.',
    'Рана кровоточит, но ты ещё в бою. Что будешь делать?',
    enemy + ' готовится к следующему удару. У тебя есть шанс действовать.'
  ];
  
  let result: string;
  if (playerRoll >= enemyRoll + 5) {
    result = `⚔️ **Боевая сцена!**\n\nПеред тобой появляется ${enemy}! Ты бросаешь инициативу: 🎲 ${playerRoll} (против ${enemyRoll} врага).\n\nТы наносишь мощный удар! Урон: ${damage} очков.\n\n${random(victoryLines)}\n\n*Ты получаешь ${randomInt(5, 20)} опыта и находишь ${random(treasures)}.*`;
  } else if (playerRoll >= enemyRoll) {
    result = `⚔️ **Боевая сцена!**\n\n${enemy} преграждает тебе путь! Инициатива: 🎲 ${playerRoll} vs ${enemyRoll}.\n\nБой идёт вничью! Ты и ${enemy} обмениваетесь ударами. Ты получаешь ${randomInt(2, 6)} урона.\n\n*Враг всё ещё стоит. Что будешь делать?*`;
    state.events.push('Сражение с ' + enemy + ' продолжается');
  } else {
    const takenDamage = randomInt(3, 10);
    result = `⚔️ **Боевая сцена!**\n\n${enemy} нападает первым! Инициатива: 🎲 ${playerRoll} vs ${enemyRoll}.\n\nВраг наносит тебе ${takenDamage} урона! Ты получаешь ранение.\n\n${random(continueLines)}\n\n*Твои действия?*`;
    state.events.push('Получен урон ' + takenDamage + ' от ' + enemy);
  }
  
  return { response: result, updatedState: state };
}

function generateExplorationResponse(character: Character, state: GameState): { response: string; updatedState: GameState } {
  const perception = rollDice(20) + Math.floor(character.stats.wisdom / 2);
  const found = perception >= 10;
  
  const hiddenPlaces = ['деревом', 'камнем', 'гобеленом', 'статуей', 'книжным шкафом'];
  const directions = ['север', 'юг', 'восток', 'запад'];
  
  const successFindings = [
    'Ты замечаешь скрытый проход за ' + random(hiddenPlaces) + '.',
    'На земле ты находишь ' + random(treasures) + '!',
    'Ты обнаруживаешь следы — кто-то прошёл здесь недавно. Следы ведут на ' + random(directions) + '.',
    'Ты замечаешь ловушку на полу! Благодаря своей внимательности, ты избежал её.',
    'Ты находишь древнюю надпись на стене: "' + random(inscriptions) + '"'
  ];
  
  const failFindings = [
    'Место кажется обычным, но ты чувствуешь, что что-то упустил.',
    'Ничего необычного... или тебе так кажется?',
    'Твои поиски не дали результата. Может, стоит поискать в другом месте?'
  ];
  
  let result: string;
  if (found) {
    result = `🔍 **Проверка Внимательности:** 🎲 ${perception}\n\nТы тщательно осматриваешь местность. Твоя проверка (${perception}) успешна!\n\n${random(successFindings)}\n\n*Что ты будешь делать?*`;
  } else {
    result = `🔍 **Проверка Внимательности:** 🎲 ${perception}\n\nТы осматриваешь местность, но не замечаешь ничего особенного. Проверка (${perception}) не удалась.\n\n${random(failFindings)}\n\n*Что ты будешь делать?*`;
  }
  
  return { response: result, updatedState: state };
}

function generateNPCResponse(character: Character, state: GameState): { response: string; updatedState: GameState } {
  const npc = random(state.npcs.length > 0 ? state.npcs : npcs);
  const persuasion = rollDice(20) + Math.floor(character.stats.charisma / 2);
  
  const npcDialogueOptions = [
    'Я видел странное существо в пещерах к северу. Говорят, оно охраняет древний артефакт...',
    'Будь осторожен, путник. В этих землях не всё так, как кажется.',
    'Мне нужна помощь. Моё дитя пропало в тёмном лесу. Прошу, найди его!',
    'Я могу предложить тебе работу. Плата будет щедрой — 500 золотых.',
    'Ты выглядишь как герой из легенд. Возможно, именно ты сможешь помочь нам...',
    'Этот амулет? Он достался мне от деда. Говорят, он защищает от тёмной магии...',
    'Если ты ищешь приключений, отправляйся в старые руины на востоке. Там водятся сокровища... и опасности.'
  ];
  
  const successFollowups = [
    '*NPC выглядит довольным разговором и готов помочь в будущем.*',
    '*NPC кивает и передаёт тебе небольшой подарок — зелье.*',
    '*NPC рассказывает тебе о nearby квесте и предлагает помощь.*'
  ];
  
  const failResponses = [
    'не хочет разговаривать и отворачивается.',
    'бормочет что-то невразумительное и уходит.',
    'смотрит на тебя с подозрением: "Не доверяю я тебе, путник..."'
  ];
  
  let result = `💬 **Разговор с ${npc}**\n\n`;
  
  if (persuasion >= 12) {
    result += `Проверка Харизмы: 🎲 ${persuasion} — Успех!\n\n${npc} расположен к тебе и делится информацией:\n\n"${random(npcDialogueOptions)}"\n\n${random(successFollowups)}`;
  } else {
    result += `Проверка Харизмы: 🎲 ${persuasion} — Провал.\n\n${npc} ${random(failResponses)}\n\n*Может, стоит попробовать другой подход?*`;
  }
  
  return { response: result, updatedState: state };
}

function generateMovementResponse(character: Character, state: GameState): { response: string; updatedState: GameState } {
  const newLocation = random(locations);
  const encounter = Math.random() > 0.5;
  
  state.location = newLocation;
  state.timeOfDay = random(timesOfDay);
  state.weather = random(weatherTypes);
  
  const npcBehaviors = ['торгует товарами', 'отдыхает у костра', 'читает карту', 'точит меч', 'наблюдает за горизонтом'];
  
  let result = `🚶 **Путешествие**\n\nТы отправляешься в путь. Дорога занимает несколько часов...\n\n`;
  result += `*Погода: ${state.weather}. Время: ${state.timeOfDay}.*\n\n`;
  
  if (encounter) {
    const enemy = random(combatEnemies);
    result += `По пути тебе встречается ${random(npcs)}, который предупреждает: "Осторожно! Впереди ${enemy}!"\n\n`;
    result += `Ты достигаешь нового места: **${newLocation}**.\n\n*${random(events)}.*\n\nЧто ты будешь делать?`;
  } else {
    result += `Путь был спокойным. Ты достигаешь нового места: **${newLocation}**.\n\n`;
    result += `Здесь ты видишь ${random(npcs)}, который ${random(npcBehaviors)}.\n\n*Что ты будешь делать?*`;
  }
  
  return { response: result, updatedState: state };
}

function generateRestResponse(character: Character, state: GameState): { response: string; updatedState: GameState } {
  const healAmount = randomInt(3, 10) + Math.floor(character.stats.constitution / 3);
  
  const restEvents = [
    'Во сне тебе является видение: древний храм, окружённый тьмой...',
    'Ты слышишь странные звуки в ночи, но ничего не находишь.',
    'К тебе во сне приходит мудрый старец и говорит загадочную фразу...',
    'Утром ты обнаруживаешь странные следы вокруг лагеря.',
    'Ночь проходит спокойно. Ты чувствуешь себя отдохнувшим.'
  ];
  
  let result = `🏕️ **Отдых**\n\nТы устраиваешь привал и разжигаешь костёр. Огонь потрескивает, а звёзды мерцают над головой.\n\n`;
  result += `Ты восстанавливаешь ${healAmount} HP.\n\n`;
  
  if (Math.random() > 0.6) {
    result += random(restEvents) + '\n\n';
  }
  
  result += `*Ты полон сил и готов к новым приключениям. Что будешь делать?*`;
  
  return { response: result, updatedState: state };
}

function generateMagicResponse(character: Character, state: GameState): { response: string; updatedState: GameState } {
  const magicRoll = rollDice(20) + Math.floor(character.stats.intelligence / 2);
  
  const successEffects = [
    'Мощный поток энергии вырывается из твоих рук!',
    'Магический щит окружает тебя, мерцая радужными огнями.',
    'Ты создаёшь иллюзию, которая обманывает всех вокруг.',
    'Твоё заклинание лечения исцеляет раны.',
    'Огненный шар взрывается в центре врагов!'
  ];
  
  const failEffects = [
    'Заклинание даёт сбой! Магическая энергия рассеивается в воздухе.',
    'Ты теряешь контроль над заклинанием. Оно бьёт в неожиданном направлении!',
    'Магия не подчиняется. Нужно попробовать ещё раз или использовать другой подход.'
  ];
  
  let result = `✨ **Магическая проверка**\n\n`;
  result += `Бросок: 🎲 ${magicRoll}\n\n`;
  
  if (magicRoll >= 12) {
    result += `Заклинание успешно! ${random(successEffects)}\n\n`;
    result += `*Магия послушна тебе. Что будешь делать дальше?*`;
  } else {
    result += `${random(failEffects)}\n\n`;
    result += `*Что ты будешь делать?*`;
  }
  
  return { response: result, updatedState: state };
}

function generateStealthResponse(character: Character, state: GameState): { response: string; updatedState: GameState } {
  const stealthRoll = rollDice(20) + Math.floor(character.stats.dexterity / 2);
  
  const successActions = [
    'проскальзываешь мимо стражей',
    'растворяешься в тенях',
    'пробираешься через охраняемую территорию',
    'подкрадываешься к врагу со спины',
    'скрываешься от преследователей'
  ];
  
  const failEvents = [
    'Ветка хрустит под твоей ногой! Стражники настораживаются.',
    'Ты задеваешь предмет, и он с грохотом падает!',
    'Кто-то замечает твоё движение! "Эй, кто здесь?!"'
  ];
  
  let result = `🥷 **Проверка Скрытности**\n\n`;
  result += `Бросок: 🎲 ${stealthRoll}\n\n`;
  
  if (stealthRoll >= 12) {
    result += `Ты бесшумно ${random(successActions)}! Никто не замечает твоего присутствия.\n\n`;
    result += `*Ты в безопасности. Что будешь делать?*`;
  } else {
    result += `${random(failEvents)}\n\n`;
    result += `*Тревога! Что ты будешь делать?*`;
  }
  
  return { response: result, updatedState: state };
}

function generateDefaultResponse(input: string, character: Character, state: GameState): { response: string; updatedState: GameState } {
  const intros = [
    'Ты пытаешься сделать это, и...',
    'Мир реагирует на твои действия...',
    'Судьба благосклонна к смелым...',
    'Твоё решение имеет последствия...'
  ];
  
  const outcomes = [
    'Ты замечаешь, что окружение меняется. Что-то происходит.',
    'Рядом появляется новый путь, которого раньше не было.',
    'К тебе обращается прохожий с необычной просьбой.',
    'Ты чувствуешь странную энергию, исходящую из-под земли.'
  ];
  
  const midOutcomes = [
    'Твоё действие приводит к неожиданному результату.',
    'Мир вокруг реагирует на твоё решение.',
    'Ты замечаешь новую деталь, которая меняет ситуацию.',
    'Происходит нечто, чего ты не ожидал.'
  ];
  
  const finalScenes = [
    'Ты находишься в ' + state.location + '. ' + random(npcs) + ' обращает на тебя внимание.',
    'Время идёт. ' + state.timeOfDay + ' сменяется новыми тенями. Ты всё ещё в ' + state.location + '.',
    'Твоё решение принято. Мир D&D реагирует: ' + random(events).toLowerCase() + '.',
    random(npcs) + ' подходит к тебе: "Эй, ' + character.name + ', у меня есть для тебя дело..."'
  ];
  
  const responses = [
    `🎲 *Мастер задумывается...*\n\nИнтересное решение, ${character.name}. ${random(intros)}\n\n${random(outcomes)}\n\n*Что ты будешь делать?*`,
    
    `🎲 ${character.name} действует! Мастер проверяет ситуацию...\n\n${random(midOutcomes)}\n\n${random(events)}.\n\n*Твои действия?*`,
    
    `🎲 *Кубики брошены...*\n\n${random(finalScenes)}\n\n*Что ты будешь делать?*`
  ];
  
  return { response: random(responses), updatedState: state };
}

export function generateQuestHook(character: Character): string {
  const questGivers = [
    'в древнем храме произошло нечто ужасное',
    'в заброшенных шахтах пробудилось зло',
    'деревня подверглась нападению нежити',
    'пропал караван с важным грузом',
    'открылся портал в другой мир'
  ];
  
  const questTypes = [
    'найти древний артефакт',
    'уничтожить логово монстров',
    'сопроводить караван',
    'разведать неизвестные руины',
    'спасти пленника'
  ];
  
  const guilds = ['авантюристов', 'магов', 'наёмников', 'следопытов'];
  
  const questItems = ['зелье', 'серебряный кинжал', 'свиток защиты', 'факел'];
  
  const quests = [
    `📜 **Новый квест!**\n\n${random(npcs)} обращается к тебе: "${character.name}, ${random(questGivers)}. ${random(['Древнее зло пробудилось', 'Пропали люди', 'Найдено странное устройство', 'Открылся портал'])}. Нам нужна твоя помощь! Награда: ${randomInt(100, 1000)} золотых."`,
    `📜 **Задание от гильдии!**\n\nГильдия ${random(guilds)} поручает тебе ${random(questTypes)}.`,
    `📜 **Таинственное послание!**\n\nТы находишь записку: "${character.name}, если ты это читаешь — время пришло. Приди в ${random(locations)} в ${random(timesOfDay)}. Приходи один. Возьми с собой ${random(questItems)}."`
  ];
  
  return random(quests);
}
