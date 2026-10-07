import { Item, Spell, Enemy, NPC } from './types';

// ============ ПРЕДМЕТЫ ============

export const weapons: Item[] = [
  // Простое оружие
  { id: 'dagger', name: 'Кинжал', type: 'weapon', rarity: 'common', description: 'Маленький острый клинок', damage: '1d4 колющий', properties: ['фехтовальное', 'метательное'], weight: 1, value: 2 },
  { id: 'club', name: 'Дубина', type: 'weapon', rarity: 'common', description: 'Простая деревянная дубина', damage: '1d4 дробящий', properties: ['лёгкое'], weight: 2, value: 1 },
  { id: 'handaxe', name: 'Ручной топор', type: 'weapon', rarity: 'common', description: 'Маленький боевой топор', damage: '1d6 рубящий', properties: ['лёгкое', 'метательное'], weight: 2, value: 5 },
  { id: 'javelin', name: 'Метательное копьё', type: 'weapon', rarity: 'common', description: 'Лёгкое копьё для метания', damage: '1d6 колющий', properties: ['метательное'], weight: 2, value: 0.5 },
  { id: 'light_hammer', name: 'Лёгкий молот', type: 'weapon', rarity: 'common', description: 'Маленький боевой молот', damage: '1d4 дробящий', properties: ['лёгкое', 'метательное'], weight: 2, value: 2 },
  { id: 'mace', name: 'Булава', type: 'weapon', rarity: 'common', description: 'Тяжёлая боевая булава с шипами', damage: '1d6 дробящий', weight: 4, value: 5 },
  { id: 'quarterstaff', name: 'Боевой посох', type: 'weapon', rarity: 'common', description: 'Длинный деревянный посох', damage: '1d6 дробящий', properties: ['универсальное'], weight: 4, value: 0.2 },
  { id: 'shortbow', name: trim('Короткий лук'), type: 'weapon', rarity: 'common', description: 'Маленький лук', damage: '1d6 колющий', properties: ['боеприпасы', 'два оружия'], weight: 2, value: 25 },
  // Воинское оружие
  { id: 'longsword', name: 'Длинный меч', type: 'weapon', rarity: 'common', description: 'Классический рыцарский меч', damage: '1d8 рубящий', properties: ['универсальное'], weight: 3, value: 15 },
  { id: 'greataxe', name: 'Секира', type: 'weapon', rarity: 'common', description: 'Огромный двуручный топор', damage: '1d12 рубящий', properties: ['тяжёлое', 'двуручное'], weight: 7, value: 30 },
  { id: 'greatsword', name: 'Двуручный меч', type: 'weapon', rarity: 'common', description: 'Массивный двуручный клинок', damage: '2d6 рубящий', properties: ['тяжёлое', 'двуручное'], weight: 6, value: 50 },
  { id: 'longbow', name: 'Длинный лук', type: 'weapon', rarity: 'common', description: 'Большой боевой лук', damage: '1d8 колющий', properties: ['боеприпасы', 'тяжёлое', 'два оружия'], weight: 2, value: 50 },
  { id: 'rapier', name: 'Рапира', type: 'weapon', rarity: 'common', description: 'Тонкий длинный клинок', damage: '1d8 колющий', properties: ['фехтовальное'], weight: 2, value: 25 },
  { id: 'battleaxe', name: 'Боевой топор', type: 'weapon', rarity: 'common', description: 'Тяжёлый боевой топор', damage: '1d8 рубящий', properties: ['универсальное'], weight: 4, value: 10 },
  { id: 'warhammer', name: 'Боевой молот', type: 'weapon', rarity: 'common', description: 'Тяжёлый молот с рунами', damage: '1d8 дробящий', properties: ['универсальное'], weight: 2, value: 15 },
  // Необычное оружие
  { id: 'flame_tongue', name: 'Пламенный язык', type: 'weapon', rarity: 'rare', description: 'Меч, пылающий магическим огнём', damage: '1d8 рубящий + 2d6 огненный', properties: ['универсальное'], weight: 3, value: 0, attunement: true, effect: 'Можно зажечь как бонусное действие' },
  { id: 'frost_brand', name: 'Морозный клинок', type: 'weapon', rarity: 'veryRare', description: 'Меч из вечного льда', damage: '1d8 рубящий + 1d6 холод', properties: ['универсальное'], weight: 3, value: 0, attunement: true, effect: 'Сопротивление огню' },
  { id: 'holy_avenger', name: 'Святой мститель', type: 'weapon', rarity: 'legendary', description: 'Легендарный меч паладинов', damage: '1d8+3d10 излучающий', properties: ['универсальное'], weight: 3, value: 0, attunement: true, effect: 'Преимущество против нежити и демонов' },
  { id: 'vorpal_sword', name: 'Ворпальный меч', type: 'weapon', rarity: 'legendary', description: 'Меч, способный отсекать головы', damage: '1d8+3d8 рубящий', properties: ['универсальное'], weight: 3, value: 0, attunement: true, effect: 'При 20 на к20 — мгновенное убийство' },
  { id: 'luck_blade', name: 'Клинок удачи', type: 'weapon', rarity: 'legendary', description: 'Меч, приносящий удачу', damage: '1d8+3 рубящий', properties: ['фехтовальное'], weight: 3, value: 0, attunement: true, charges: 3, maxCharges: 3, effect: 'Можно перебросить проваленный бросок' },
];

export const armors: Item[] = [
  { id: 'leather', name: 'Кожаный доспех', type: 'armor', rarity: 'common', description: 'Лёгкий кожаный доспех', armorClass: 11, weight: 10, value: 10 },
  { id: 'studded_leather', name: 'Клёпаный кожаный доспех', type: 'armor', rarity: 'common', description: 'Кожаный доспех с металлическими заклёпками', armorClass: 12, weight: 13, value: 45 },
  { id: 'chain_shirt', name: 'Кольчуга', type: 'armor', rarity: 'common', description: 'Рубашка из металлических колец', armorClass: 13, weight: 20, value: 50 },
  { id: 'scale_mail', name: 'Чешуйчатый доспех', type: 'armor', rarity: 'common', description: 'Доспех из металлических чешуек', armorClass: 14, weight: 45, value: 50 },
  { id: 'breastplate', name: 'Кираса', type: 'armor', rarity: 'uncommon', description: 'Металлический нагрудник', armorClass: 14, weight: 20, value: 400 },
  { id: 'half_plate', name: 'Полулаторный доспех', type: 'armor', rarity: 'uncommon', description: 'Металлические пластины на кожаной основе', armorClass: 15, weight: 40, value: 750 },
  { id: 'chain_mail', name: 'Кольчужный доспех', type: 'armor', rarity: 'common', description: 'Тяжёлая кольчуга', armorClass: 16, weight: 55, value: 75 },
  { id: 'splint', name: 'Наборный доспех', type: 'armor', rarity: 'rare', description: 'Полные металлические пластины', armorClass: 17, weight: 60, value: 200 },
  { id: 'plate', name: 'Латный доспех', type: 'armor', rarity: 'rare', description: 'Полный латный доспех рыцаря', armorClass: 18, weight: 65, value: 1500 },
  // Магическая броня
  { id: 'adamantine_armor', name: 'Адамантиновый доспех', type: 'armor', rarity: 'uncommon', description: 'Доспех из неземного металла', armorClass: 0, weight: 0, value: 0, attunement: false, effect: 'Критические удары становятся обычными' },
  { id: 'mithral_armor', name: 'Мифриловый доспех', type: 'armor', rarity: 'uncommon', description: 'Лёгкий доспех из мифрила', armorClass: 0, weight: 0, value: 0, effect: 'Не накладывает помехи на Ловкость' },
  { id: 'armor_of_invulnerability', name: 'Доспех неуязвимости', type: 'armor', rarity: 'legendary', description: 'Легендарный доспех богов', armorClass: 0, weight: 50, value: 0, attunement: true, charges: 1, maxCharges: 1, effect: 'Иммунитет к немагическому урону на 10 минут' },
  { id: 'demon_armor', name: 'Демонический доспех', type: 'armor', rarity: 'veryRare', description: 'Проклятый чёрный доспех', armorClass: 18, weight: 65, value: 0, attunement: true, effect: 'Сопротивление немагическому урону, бонус к атаке' },
];

export const shields: Item[] = [
  { id: 'shield', name: 'Щит', type: 'shield', rarity: 'common', description: 'Деревянный или металлический щит', armorClass: 2, weight: 6, value: 10 },
  { id: 'shield_of_missile_attraction', name: 'Щит притяжения снарядов', type: 'shield', rarity: 'rare', description: 'Проклятый щит', armorClass: 2, weight: 6, value: 0, attunement: true, effect: 'Помеха по дальним атакам против вас' },
  { id: 'animated_shield', name: 'Оживлённый щит', type: 'shield', rarity: 'veryRare', description: 'Щит, сражающийся сам', armorClass: 2, weight: 6, value: 0, attunement: true, effect: 'Сражается самостоятельно' },
];

export const potions: Item[] = [
  { id: 'potion_healing', name: 'Зелье лечения', type: 'potion', rarity: 'common', description: 'Восстанавливает 2d4+2 HP', weight: 0.5, value: 50, effect: 'heal_2d4+2' },
  { id: 'potion_greater_healing', name: 'Зелье большего лечения', type: 'potion', rarity: 'uncommon', description: 'Восстанавливает 4d4+4 HP', weight: 0.5, value: 150, effect: 'heal_4d4+4' },
  { id: 'potion_superior_healing', name: 'Зелье превосходного лечения', type: 'potion', rarity: 'rare', description: 'Восстанавливает 8d4+8 HP', weight: 0.5, value: 450, effect: 'heal_8d4+8' },
  { id: 'potion_supreme_healing', name: 'Зелье высшего лечения', type: 'potion', rarity: 'veryRare', description: 'Восстанавливает 10d4+20 HP', weight: 0.5, value: 1350, effect: 'heal_10d4+20' },
  { id: 'potion_invisibility', name: 'Зелье невидимости', type: 'potion', rarity: 'uncommon', description: 'Делает невидимым на 1 час', weight: 0.5, value: 250, effect: 'invisible_1h' },
  { id: 'potion_flying', name: 'Зелье полёта', type: 'potion', rarity: 'uncommon', description: 'Позволяет летать 1 час', weight: 0.5, value: 300, effect: 'fly_1h' },
  { id: 'potion_giant_strength', name: 'Зелье силы великана', type: 'potion', rarity: 'varies', description: 'Устанавливает Силу 21-25', weight: 0.5, value: 500, effect: 'str_21' },
  { id: 'potion_poison', name: 'Зелье яда', type: 'potion', rarity: 'uncommon', description: 'Смертельный яд', weight: 0.5, value: 100, effect: 'poison_10d10' },
  { id: 'potion_resistance', name: 'Зелье сопротивления', type: 'potion', rarity: 'uncommon', description: 'Сопротивление одному типу урона', weight: 0.5, value: 200, effect: 'resistance_1h' },
  { id: 'potion_speed', name: 'Зелье скорости', type: 'potion', rarity: 'veryRare', description: 'Удваивает скорость на 1 минуту', weight: 0.5, value: 500, effect: 'haste_1m' },
];

export const rings: Item[] = [
  { id: 'ring_protection', name: 'Кольцо защиты', type: 'ring', rarity: 'rare', description: '+1 к КД и спасброскам', weight: 0, value: 0, attunement: true, effect: '+1 AC, +1 saves' },
  { id: 'ring_regeneration', name: 'Кольцо регенерации', type: 'ring', rarity: 'legendary', description: 'Восстанавливает 1d6 HP каждые 10 минут', weight: 0, value: 0, attunement: true, effect: 'regen_1d6_10min' },
  { id: 'ring_spell_storing', name: 'Кольцо хранения заклинаний', type: 'ring', rarity: 'rare', description: 'Хранит заклинание до 5 уровня', weight: 0, value: 0, attunement: true, charges: 5, maxCharges: 5, effect: 'store_spell' },
  { id: 'ring_invisibility', name: 'Кольцо невидимости', type: 'ring', rarity: 'legendary', description: 'Становитесь невидимым', weight: 0, value: 0, attunement: true, charges: 3, maxCharges: 3, effect: 'invisibility' },
  { id: 'ring_three_wishes', name: 'Кольцо трёх желаний', type: 'ring', rarity: 'legendary', description: 'Исполняет 3 желания', weight: 0, value: 0, attunement: false, charges: 3, maxCharges: 3, effect: 'wish' },
  { id: 'ring_free_action', name: 'Кольцо свободного действия', type: 'ring', rarity: 'rare', description: 'Нельзя быть схваченным или парализованным', weight: 0, value: 0, attunement: true, effect: 'free_action' },
];

export const wands: Item[] = [
  { id: 'wand_magic_missile', name: 'Жезл магической стрелы', type: 'wand', rarity: 'uncommon', description: 'Стреляет магическими стрелами', weight: 1, value: 0, charges: 7, maxCharges: 7, effect: 'magic_missile' },
  { id: 'wand_fireballs', name: 'Жезл огненных шаров', type: 'wand', rarity: 'rare', description: 'Создаёт огненные шары', weight: 1, value: 0, attunement: true, charges: 7, maxCharges: 7, effect: 'fireball' },
  { id: 'wand_lightning', name: 'Жезл молний', type: 'wand', rarity: 'rare', description: 'Бьёт молниями', weight: 1, value: 0, attunement: true, charges: 7, maxCharges: 7, effect: 'lightning_bolt' },
  { id: 'wand_of_wonder', name: 'Жезл чудес', type: 'wand', rarity: 'rare', description: 'Случайный эффект', weight: 1, value: 0, charges: 7, maxCharges: 7, effect: 'random' },
];

export const wondrousItems: Item[] = [
  { id: 'bag_of_holding', name: 'Сумка хранения', type: 'wondrous', rarity: 'uncommon', description: 'Вмещает 500 фунтов', weight: 15, value: 0, effect: 'extra_storage' },
  { id: 'portable_hole', name: 'Переносная дыра', type: 'wondrous', rarity: 'rare', description: '6 футов в диаметре, 10 футов глубины', weight: 0, value: 0, effect: 'pocket_dimension' },
  { id: 'cloak_of_elvenkind', name: 'Плащ эльфов', type: 'wondrous', rarity: 'uncommon', description: 'Преимущество на Скрытность', weight: 1, value: 0, attunement: true, effect: 'stealth_advantage' },
  { id: 'boots_of_elvenkind', name: 'Сапоги эльфов', type: 'wondrous', rarity: 'uncommon', description: 'Бесшумное передвижение', weight: 1, value: 0, attunement: true, effect: 'silent_step' },
  { id: 'gauntlets_of_ogre_power', name: 'Перчатки силы огра', type: 'wondrous', rarity: 'uncommon', description: 'Устанавливает Силу 19', weight: 1, value: 0, attunement: true, effect: 'str_19' },
  { id: 'helm_of_teleportation', name: 'Шлем телепортации', type: 'wondrous', rarity: 'rare', description: 'Телепортация на 1000 миль', weight: 3, value: 0, attunement: true, charges: 3, maxCharges: 3, effect: 'teleport' },
  { id: 'deck_of_many_things', name: 'Колода многих вещей', type: 'wondrous', rarity: 'legendary', description: 'Легендарная колода карт с непредсказуемыми эффектами', weight: 1, value: 0, effect: 'random_fate' },
  { id: 'pearl_of_power', name: 'Жемчужина силы', type: 'wondrous', rarity: 'uncommon', description: 'Восстанавливает заклинание до 4 уровня', weight: 0, value: 0, attunement: true, effect: 'restore_spell' },
  { id: 'amulet_health', name: 'Амулет здоровья', type: 'wondrous', rarity: 'uncommon', description: 'Устанавливает Телосложение 19', weight: 1, value: 0, attunement: true, effect: 'con_19' },
  { id: 'stone_of_good_luck', name: 'Камень удачи', type: 'wondrous', rarity: 'uncommon', description: '+1 ко всем проверкам характеристик и спасброскам', weight: 0, value: 0, attunement: true, effect: '+1_all' },
];

export const scrolls: Item[] = [
  { id: 'scroll_healing_word', name: 'Свиток лечащего слова', type: 'scroll', rarity: 'common', description: 'Заклинание 1 уровня', weight: 0, value: 50, effect: 'healing_word' },
  { id: 'scroll_fireball', name: 'Свиток огненного шара', type: 'scroll', rarity: 'rare', description: 'Заклинание 3 уровня', weight: 0, value: 500, effect: 'fireball' },
  { id: 'scroll_resurrection', name: 'Свиток воскрешения', type: 'scroll', rarity: 'veryRare', description: 'Воскрешает мёртвого', weight: 0, value: 5000, effect: 'resurrection' },
  { id: 'scroll_wish', name: 'Свиток желания', type: 'scroll', rarity: 'legendary', description: 'Исполняет любое желание', weight: 0, value: 0, effect: 'wish' },
];

export const tools: Item[] = [
  { id: 'thieves_tools', name: 'Воровские инструменты', type: 'tool', rarity: 'common', description: 'Набор для взлома замков', weight: 1, value: 25 },
  { id: 'herbalism_kit', name: 'Набор травника', type: 'tool', rarity: 'common', description: 'Для создания зелий', weight: 3, value: 5 },
  { id: 'alchemist_supplies', name: 'Набор алхимика', type: 'tool', rarity: 'common', description: 'Для создания зелий и ядов', weight: 8, value: 50 },
  { id: 'disguise_kit', name: 'Набор для маскировки', type: 'tool', rarity: 'common', description: 'Для смены внешности', weight: 3, value: 25 },
];

export const allItems: Item[] = [
  ...weapons, ...armors, ...shields, ...potions, ...rings, ...wands, ...wondrousItems, ...scrolls, ...tools
];

// ============ ЗАКЛИНАНИЯ ============

export const spells: Spell[] = [
  // Заговоры (0 уровень)
  { name: 'Огненный снаряд', level: 0, school: 'evocation', castingTime: '1 действие', range: '120 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Бросает огненный шар, наносящий 1d10 огненного урона', damage: '1d10' },
  { name: 'Свет', level: 0, school: 'evocation', castingTime: '1 действие', range: 'Касание', duration: '1 час', components: 'В, М', description: 'Предмет начинает светиться ярким светом' },
  { name: 'Малая иллюзия', level: 0, school: 'illusion', castingTime: '1 действие', range: '30 фт.', duration: '1 минута', description: 'Создаёт звук или изображение' },
  { name: 'Ядовитые брызги', level: 0, school: 'conjuration', castingTime: '1 действие', range: '30 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Ядовитая жидкость, 1d12 урона ядом', damage: '1d12' },
  { name: 'Ледяной луч', level: 0, school: 'evocation', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Луч холода, 1d8 урона холодом', damage: '1d8' },
  { name: 'Священное пламя', level: 0, school: 'evocation', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Пламя излучающего урона', damage: '1d8' },
  { name: 'Починка', level: 0, school: 'transmutation', castingTime: '1 минута', range: 'Касание', duration: 'Мгновенная', components: 'В, С, М', description: 'Чинит небольшой предмет' },
  { name: 'Указание', level: 0, school: 'enchantment', castingTime: '1 действие', range: 'Касание', duration: 'Концентрация, 1 минута', components: 'В, С', description: '+1d4 к одной проверке характеристики' },
  
  // 1-й круг
  { name: 'Волна грома', level: 1, school: 'evocation', castingTime: '1 действие', range: '15 фт. куб', duration: 'Мгновенная', components: 'В, С', description: 'Волна звука, 2d8 урона звуком', damage: '2d8', save: 'Телосложение' },
  { name: 'Доспехи мага', level: 1, school: 'conjuration', castingTime: '1 действие', range: 'Касание', duration: '8 часов', components: 'В, С, М', description: 'КД становится 13 + модификатор Ловкости' },
  { name: 'Волшебная стрела', level: 1, school: 'evocation', castingTime: '1 действие', range: '120 фт.', duration: 'Мгновенная', components: 'В, С', description: '3 стрелы по 1d4+1 урона силовым полем', damage: '3x(1d4+1)' },
  { name: 'Щит', level: 1, school: 'abjuration', castingTime: '1 реакция', range: 'На себя', duration: '1 раунд', components: 'В, С', description: '+5 к КД до начала следующего хода' },
  { name: 'Лечащее слово', level: 1, school: 'evocation', castingTime: '1 бонусное действие', range: '60 фт.', duration: 'Мгновенная', components: 'В', description: 'Восстанавливает 1d4 + модификатор заклинательной характеристики HP', save: 'heal' },
  { name: 'Спячка', level: 1, school: 'enchantment', castingTime: '1 действие', range: '90 фт.', duration: '1 минута', components: 'В, С, М', description: 'Усыпляет 5d8 HP существ', save: 'Мудрость' },
  { name: 'Туманное облако', level: 1, school: 'conjuration', castingTime: '1 действие', range: '120 фт.', duration: 'Концентрация, 1 час', components: 'В, С', description: 'Облако тумана, сильно заслонённая местность', concentration: true },
  { name: 'Опознание', level: 1, school: 'divination', castingTime: '1 минута', range: 'Касание', duration: 'Мгновенная', components: 'В, С, М', ritual: true, description: 'Узнаёте свойства магического предмета' },
  { name: 'Щит веры', level: 1, school: 'abjuration', castingTime: '1 бонусное действие', range: '60 фт.', duration: 'Концентрация, 10 минут', components: 'В', description: '+2 к КД цели', concentration: true },
  
  // 2-й круг
  { name: 'Огненный снаряд', level: 2, school: 'evocation', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Огненные стрелы, 3d6 урона', damage: '3d6' },
  { name: 'Невидимость', level: 2, school: 'illusion', castingTime: '1 действие', range: 'Касание', duration: 'Концентрация, 1 час', components: 'В, С, М', description: 'Существо становится невидимым', concentration: true },
  { name: 'Туманный шаг', level: 2, school: 'conjuration', castingTime: '1 бонусное действие', range: 'На себя', duration: 'Мгновенная', components: 'В', description: 'Телепортация на 30 футов' },
  { name: 'Удержание личности', level: 2, school: 'enchantment', castingTime: '1 действие', range: '60 фт.', duration: 'Концентрация, 1 минута', components: 'В, С, М', description: 'Парализует гуманоида', save: 'Мудрость', concentration: true },
  { name: 'Мистический доспех', level: 2, school: 'abjuration', castingTime: '1 действие', range: 'Касание', duration: '8 часов', components: 'В, С, М', description: '+5 к КД цели' },
  
  // 3-й круг
  { name: 'Огненный шар', level: 3, school: 'evocation', castingTime: '1 действие', range: '150 фт.', duration: 'Мгновенная', components: 'В, С, М', description: 'Взрыв огня в радиусе 20 футов, 8d6 урона', damage: '8d6', save: 'Ловкость' },
  { name: 'Молния', level: 3, school: 'evocation', castingTime: '1 действие', range: 'На себя (линия 100 фт.)', duration: 'Мгновенная', components: 'В, С, М', description: 'Линия молнии, 8d6 урона электричеством', damage: '8d6', save: 'Ловкость' },
  { name: 'Контрзаклинание', level: 3, school: 'abjuration', castingTime: '1 реакция', range: '60 фт.', duration: 'Мгновенная', components: 'С', description: 'Прерывает заклинание противника' },
  { name: 'Рассеивание магии', level: 3, school: 'abjuration', castingTime: '1 действие', range: '120 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Прекращает заклинание или магический эффект' },
  { name: 'Полёт', level: 3, school: 'transmutation', castingTime: '1 действие', range: 'Касание', duration: 'Концентрация, 10 минут', components: 'В, С, М', description: 'Существо получает скорость полёта 60 фт.', concentration: true },
  { name: 'Ускорение', level: 3, school: 'transmutation', castingTime: '1 действие', range: '30 фт.', duration: 'Концентрация, 1 минута', components: 'В, С, М', description: 'Удваивает скорость, +2 КД, дополнительное действие', concentration: true },
  
  // 4-й круг
  { name: 'Огненный щит', level: 4, school: 'evocation', castingTime: '1 действие', range: 'На себя', duration: '10 минут', components: 'В, С, М', description: 'Аура огня или холода, 2d8 урона атакующим', damage: '2d8' },
  { name: 'Владение смертью', level: 4, school: 'necromancy', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В, С', description: '7d8 урона некротической энергией, половина восстанавливает HP', damage: '7d8', save: 'Мудрость' },
  { name: 'Каменная кожа', level: 4, school: 'abjuration', castingTime: '1 действие', range: 'Касание', duration: 'Концентрация, 1 час', components: 'В, С, М', description: 'Сопротивление немагическому урону', concentration: true },
  { name: 'Свобода движения', level: 4, school: 'abjuration', castingTime: '1 действие', range: 'Касание', duration: '1 час', components: 'В, С, М', description: 'Нельзя быть схваченным или парализованным' },
  
  // 5-й круг
  { name: 'Огненная буря', level: 5, school: 'evocation', castingTime: '1 действие', range: '120 фт.', duration: 'Мгновенная', components: 'В, С', description: '10 огненных столбов, 8d6 урона', damage: '8d6', save: 'Ловкость' },
  { name: 'Оживление', level: 5, school: 'necromancy', castingTime: '1 час', range: 'Касание', duration: 'Мгновенная', components: 'В, С, М', description: 'Воскрешает существо, умершее в течение 1 минуты' },
  { name: 'Стена огня', level: 5, school: 'evocation', castingTime: '1 действие', range: '120 фт.', duration: 'Концентрация, 10 минут', components: 'В, С, М', description: 'Стена огня, 5d8 урона', damage: '5d8', save: 'Ловкость', concentration: true },
  
  // 6-й круг
  { name: 'Истинное зрение', level: 6, school: 'divination', castingTime: '1 действие', range: 'Касание', duration: '1 час', components: 'В, С, М', description: 'Видит скрытые, невидимые, эфирные существа' },
  { name: 'Слово Сили: Оглушение', level: 6, school: 'enchantment', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В', description: 'Оглушает существо с 150 HP или меньше' },
  
  // 7-й круг
  { name: 'Замедление падения', level: 7, school: 'transmutation', castingTime: '1 реакция', range: '60 фт.', duration: 'Мгновенная', components: 'В, М', description: 'Падение существа замедляется' },
  { name: 'Врата', level: 7, school: 'conjuration', castingTime: '1 действие', range: '60 фт.', duration: 'Концентрация, 1 минута', components: 'В, С, М', description: 'Открывает портал в другой план', concentration: true },
  
  // 8-й круг
  { name: 'Слово Сили: Смерть', level: 8, school: 'enchantment', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В', description: 'Мгновенно убивает существо с 100 HP или меньше' },
  { name: 'Воплощение смерти', level: 8, school: 'necromancy', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В, С', description: '10d6+40 урона некротической энергией', damage: '10d6+40', save: 'Телосложение' },
  
  // 9-й круг
  { name: 'Желание', level: 9, school: 'conjuration', castingTime: '1 действие', range: 'На себя', duration: 'Мгновенная', components: 'В', description: 'Исполняет любое желание. Может иметь непредсказуемые последствия!' },
  { name: 'Чудо', level: 9, school: 'evocation', castingTime: '1 минута', range: 'На себя', duration: 'Мгновенная', components: 'В, С', description: 'Просит божество о чуде' },
  { name: 'Истинное воскрешение', level: 9, school: 'necromancy', castingTime: '1 час', range: 'Касание', duration: 'Мгновенная', components: 'В, С, М', description: 'Воскрешает существо, умершее до 200 лет назад' },
];

// ============ ВРАГИ ============

export const enemies: Enemy[] = [
  // CR 0-1/4
  { name: 'Крыса-гигант', hp: 7, maxHp: 7, ac: 12, attack: 'Укус', damage: '1', cr: 0.125, xp: 10, type: 'зверь', abilities: ['Обоняние'], loot: [] },
  { name: 'Гоблин', hp: 7, maxHp: 7, ac: 15, attack: 'Скимитар', damage: '1d6+2 рубящий', cr: 0.25, xp: 50, type: 'гуманоид', abilities: ['Уход'], loot: [weapons[0]] },
  { name: 'Скелет', hp: 13, maxHp: 13, ac: 13, attack: 'Короткий меч', damage: '1d6+2 колющий', cr: 0.25, xp: 50, type: 'нежить', abilities: ['Уязвимость к дробящему'], loot: [] },
  { name: 'Зомби', hp: 22, maxHp: 22, ac: 8, attack: 'Удар', damage: '1d6+2 дробящий', cr: 0.25, xp: 50, type: 'нежить', abilities: ['Невосприимчивость'], loot: [] },
  // CR 1/2
  { name: 'Огромный паук', hp: 26, maxHp: 26, ac: 14, attack: 'Укус', damage: '1d8+4 колющий + яд', cr: 1, xp: 200, type: 'зверь', abilities: ['Хождение по паутине', 'Паутина'], loot: [] },
  { name: 'Волк-оборотень', hp: 58, maxHp: 58, ac: 14, attack: 'Укус', damage: '2d6+4 колющий', cr: 3, xp: 700, type: 'оборотень', abilities: ['Оборотничество', 'Регенерация'], loot: [potions[0]] },
  // CR 1
  { name: 'Бандит-капитан', hp: 65, maxHp: 65, ac: 15, attack: 'Скимитар', damage: '1d6+3 рубящий', cr: 2, xp: 450, type: 'гуманоид', abilities: ['Парирование'], loot: [weapons[8], armors[3]] },
  { name: 'Огр', hp: 59, maxHp: 59, ac: 11, attack: 'Дубина', damage: '2d8+4 дробящий', cr: 2, xp: 450, type: 'великан', abilities: [], loot: [weapons[9]] },
  // CR 2-3
  { name: 'Минотавр', hp: 76, maxHp: 76, ac: 14, attack: 'Секира', damage: '2d12+4 рубящий', cr: 3, xp: 700, type: 'чудовище', abilities: ['Рывок', 'Обвинение'], loot: [weapons[9]] },
  { name: 'Тёмный маг', hp: 45, maxHp: 45, ac: 12, attack: 'Магическая стрела', damage: '3d4+3 силовое поле', cr: 3, xp: 700, type: 'гуманоид', abilities: ['Контрзаклинание', 'Огненный шар'], loot: [scrolls[1], wands[0]] },
  // CR 5+
  { name: 'Василиск', hp: 85, maxHp: 85, ac: 15, attack: 'Укус', damage: '2d10+3 колющий', cr: 5, xp: 1800, type: 'чудовище', abilities: ['Окаменение'], loot: [rings[0]] },
  { name: 'Химера', hp: 114, maxHp: 114, ac: 14, attack: 'Укус', damage: '2d10+4 колющий', cr: 6, xp: 2300, type: 'чудовище', abilities: ['Три головы', 'Огненное дыхание'], loot: [weapons[15]] },
  { name: 'Молодой красный дракон', hp: 178, maxHp: 178, ac: 18, attack: 'Укус', damage: '2d10+6 колющий', cr: 10, xp: 5900, type: 'дракон', abilities: ['Огненное дыхание', 'Полёт'], loot: [weapons[16], armors[7]] },
  // CR 10+
  { name: 'Лич', hp: 135, maxHp: 135, ac: 17, attack: 'Парализующее касание', damage: '3d6 холод + паралич', cr: 21, xp: 33000, type: 'нежить', abilities: ['Магия 18 уровня', 'Восстановление', 'Сопротивление'], loot: [weapons[17], rings[1], scrolls[3]] },
  { name: 'Древний красный дракон', hp: 546, maxHp: 546, ac: 22, attack: 'Укус', damage: '2d10+10 колющий', cr: 24, xp: 75000, type: 'дракон', abilities: ['Огненное дыхание', 'Ужас', 'Магия'], loot: [weapons[17], armors[11], rings[1]] },
  { name: 'Демон-лорд', hp: 464, maxHp: 464, ac: 22, attack: 'Удар', damage: '4d6+10 рубящий', cr: 26, xp: 90000, type: 'демон', abilities: ['Телепортация', 'Магия', 'Регенерация'], loot: [weapons[17], rings[4]] },
];

// ============ NPC ============

export const npcTemplates: NPC[] = [
  { name: 'Эльдрин Мудрый', description: 'Старый маг в синем капюшоне с длинной седой бородой', disposition: 'friendly', questGiver: true, secret: 'Знает о древнем артефакте в руинах', dialogue: ['Приветствую тебя, путник. Я чувствую в тебе силу...', 'Древние пророчества говорят о грядущей тьме...', 'Мои кости помнят времена, когда драконы правили небом...'] },
  { name: 'Торин Железный Молот', description: 'Мускулистый дварф с заплетённой бородой и боевым молотом', disposition: 'neutral', questGiver: true, shopkeeper: true, dialogue: ['Ха! Ещё один искатель приключений!', 'Мой молот не знает пощады!', 'Лучшее оружие — у меня в кузнице!'] },
  { name: 'Лирэль Лунная Тень', description: 'Загадочная эльфийка с серебристыми волосами и зелёными глазами', disposition: 'mysterious', questGiver: true, secret: 'Она — принцесса изгнанных эльфов', dialogue: ['Луна шепчет мне твоё имя...', 'Тёмные времена грядут, герой...', 'Я видела твою судьбу в звёздах...'] },
  { name: 'Гримбальд Чёрный Клык', description: 'Наёмник с шрамом через всё лицо и холодным взглядом', disposition: 'neutral', questGiver: true, dialogue: ['Работа есть для тех, у кого хватит смелости...', 'Золото — мой единственный бог.', 'Не задавай вопросов, если хочешь жить долго.'] },
  { name: 'Сестра Милисента', description: 'Жрица в белых одеждах с символом солнца на груди', disposition: 'friendly', questGiver: true, dialogue: ['Да пребудет с тобой свет, дитя моё...', 'Храм нуждается в помощи...', 'Зло распространяется, мы должны действовать!'] },
  { name: 'Зара Тёмная', description: 'Ведьма с вороном на плече и странными амулетами', disposition: 'mysterious', questGiver: true, shopkeeper: true, secret: 'На самом деле — замаскированная hag', dialogue: ['Мой котёл видит будущее...', 'Хочешь зелье? У меня есть всё...', 'Осторожнее с желаниями, милый...'] },
  { name: 'Капитан Родрик', description: 'Седой ветеран с множеством наград и усталым взглядом', disposition: 'friendly', questGiver: true, dialogue: ['Солдат, мне нужна твоя помощь!', 'Враг у ворот, мы должны действовать!', 'За короля и родину!'] },
  { name: 'Финдук Полурослик', description: 'Весёлый полурослик с огромным рюкзаком и улыбкой до ушей', disposition: 'friendly', shopkeeper: true, dialogue: ['О, чудесный день для торговли!', 'У меня есть вещи, которые вы не найдёте больше нигде!', 'Скидка для друзей!'] },
  { name: 'Призрак Леди Изабель', description: 'Прозрачная фигура женщины в старинном платье', disposition: 'mysterious', questGiver: true, secret: 'Убита собственным мужем 200 лет назад', dialogue: ['Помоги мне обрести покой...', 'Он предал меня... отомсти за меня...', 'Найди мой медальон...'] },
  { name: 'Дракон-метаморф Векс', description: 'Загадочный незнакомец с вертикальными зрачками', disposition: 'mysterious', questGiver: true, secret: 'На самом деле — серебряный дракон', dialogue: ['Интересный экземпляр...', 'Я видел многое за свои... годы...', 'Судьба мира в ваших руках, смертные.'] },
];

// ============ ЛОКАЦИИ ============

export const locations = [
  { name: 'Тёмный лес Шепчущих Деревьев', description: 'Деревья здесь шепчут древние тайны. Туман стелется между стволами.', danger: 'medium' },
  { name: 'Заброшенная таверна "Сломанный Меч"', description: 'Пыльные столы и разбитые кружки. Когда-то здесь кипела жизнь.', danger: 'low' },
  { name: 'Кристальные пещеры', description: 'Подземелье, освещённое мерцающими кристаллами всех цветов радуги.', danger: 'medium' },
  { name: 'Горная тропа к Храму Ветров', description: 'Узкая тропа вдоль обрыва. Ветер воет между скалами.', danger: 'high' },
  { name: 'Болота Гнилой Топи', description: 'Зловонный туман. Пузыри газа поднимаются из чёрной воды.', danger: 'high' },
  { name: 'Подземный город Унтервир', description: 'Город дроу, освещённый магическим светом. Тёмная красота.', danger: 'very_high' },
  { name: 'Руины замка Вороньей Скалы', description: 'Разрушенный замок на вершине утёса. Вороньи гнёзда повсюду.', danger: 'medium' },
  { name: 'Рыночная площадь Ватердипа', description: 'Шумная площадь, полная торговцев, покупателей и бродяг.', danger: 'low' },
  { name: 'Великая Библиотека Кандлкипа', description: 'Бесконечные полки с книгами. Запах пергамента и пыли.', danger: 'low' },
  { name: 'Логово Дракона Пепельной Горы', description: 'Воздух раскалён. Кости жертв хрустят под ногами.', danger: 'very_high' },
  { name: 'Таверна "Отдыхающий путник"', description: 'Уютная таверна с камином и запахом жареного мяса.', danger: 'low' },
  { name: 'Заброшенные шахты Фанданте', description: 'Тёмные тоннели, где когда-то добывали мифрил.', danger: 'high' },
  { name: 'Храм Забытого Бога', description: 'Древний храм с разрушенными статуями. Магия всё ещё пульсирует.', danger: 'medium' },
  { name: 'Порт Чёрной Воде', description: 'Пиратский порт с подозрительными типами в каждой тени.', danger: 'medium' },
  { name: 'Эльфийские руины Сильванести', description: 'Разрушенные эльфийские башни, поросшие мхом и плющом.', danger: 'medium' },
  { name: 'Арена Крови', description: 'Гладиаторская арена. Крики толпы оглушают.', danger: 'high' },
  { name: 'Лесная поляна Дриад', description: 'Волшебная поляна, где танцуют феи. Воздух наполнен магией.', danger: 'low' },
  { name: 'Гробница Древних Королей', description: 'Каменные саркофаги. Мумии спят вечным сном.', danger: 'very_high' },
];

// ============ СОБЫТИЯ ============

export const randomEvents = [
  'Вы слышите странные звуки из-за стены',
  'Земля начинает дрожать под ногами',
  'Вдалеке виднеется столб чёрного дыма',
  'Стая воронов проносится над вами',
  'Магический портал мерцает неподалёку',
  'Группа гоблинов пересекает вам дорогу',
  'Незнакомый путник просит о помощи',
  'Древний механизм начинает работать',
  'Небо окрашивается в багровый цвет',
  'Вы находите странный символ на камне',
  'Призрак появляется перед вами и указывает на север',
  'Земля проваливается — это ловушка!',
  'Вы находите тайник с припасами',
  'Странный торговец предлагает необычный товар',
  'Внезапно начинается магическая буря',
  'Вы замечаете следы дракона',
  'Голос из ниоткуда шепчет предупреждение',
  'Вы находите карту сокровищ',
  'Группа искателей приключений предлагает объединиться',
  'Вы чувствуете присутствие невидимого существа',
];

// ============ КВЕСТЫ ============

export const questTemplates = [
  { name: 'Проклятие Чёрного Леса', description: 'Деревня на краю леса страдает от странного проклятия. Жители превращаются в деревья.', type: 'main' as const, reward: { xp: 500, gold: 300 }, objectives: ['Найти источник проклятия', 'Победить ведьму', 'Снять чары'] },
  { name: 'Потерянный караван', description: 'Торговый караван пропал по пути из Ватердипа в Сильвермун.', type: 'side' as const, reward: { xp: 200, gold: 500 }, objectives: ['Найти следы каравана', 'Спасти выживших', 'Вернуть товары'] },
  { name: 'Гробница Ужаса', description: 'В древней гробнице пробудилась нежить. Местный лорд просит зачистить её.', type: 'side' as const, reward: { xp: 350, gold: 200 }, objectives: ['Исследовать гробницу', 'Уничтожить источник нежити', 'Найти сокровища'] },
  { name: 'Драконье Наследие', description: 'Легендарный артефакт спрятан в логове древнего дракона.', type: 'main' as const, reward: { xp: 1000, gold: 1000 }, objectives: ['Найти логово дракона', 'Проникнуть внутрь', 'Украсть артефакт'] },
  { name: 'Тайна пропавшего мага', description: 'Известный маг исчез при исследовании порталов.', type: 'side' as const, reward: { xp: 300, gold: 150 }, objectives: ['Найти лабораторию мага', 'Изучить записи', 'Найти мага или его останки'] },
  { name: 'Восстание нежити', description: 'Кладбище оживает ночью. Мёртвые восстают из могил.', type: 'main' as const, reward: { xp: 600, gold: 400 }, objectives: ['Исследовать кладбище', 'Найти некроманта', 'Остановить ритуал'] },
  { name: 'Турнир героев', description: 'Великий турнир собирает лучших воинов королевства.', type: 'side' as const, reward: { xp: 400, gold: 600 }, objectives: ['Зарегистрироваться', 'Победить в поединках', 'Выиграть финал'] },
  { name: 'Кольцо Теней', description: 'Таинственная организация манипулирует событиями в городе.', type: 'main' as const, reward: { xp: 800, gold: 500 }, objectives: ['Найти следы организации', 'Проникнуть в их логово', 'Разоблачить заговор'] },
];

// ============ РЕДКОСТЬ ============

export const rarityColors: Record<string, string> = {
  common: '#9ca3af',
  uncommon: '#22c55e',
  rare: '#3b82f6',
  veryRare: '#a855f7',
  legendary: '#f59e0b',
  artifact: '#ef4444',
};

export const rarityNames: Record<string, string> = {
  common: 'Обычный',
  uncommon: 'Необычный',
  rare: 'Редкий',
  veryRare: 'Очень редкий',
  legendary: 'Легендарный',
  artifact: 'Артефакт',
};

// ============ ПОЛУЧЕНИЕ ЛУТА ============

export function getRandomLoot(level: number): Item[] {
  const loot: Item[] = [];
  const count = Math.floor(Math.random() * 3) + 1;
  
  for (let i = 0; i < count; i++) {
    const roll = Math.random();
    let pool: Item[];
    
    if (level >= 10 && roll > 0.9) {
      pool = [...weapons.filter(w => w.rarity === 'legendary'), ...rings.filter(r => r.rarity === 'legendary')];
    } else if (level >= 5 && roll > 0.7) {
      pool = [...weapons.filter(w => ['rare', 'veryRare'].includes(w.rarity)), ...rings.filter(r => r.rarity === 'rare'), ...wands];
    } else if (level >= 3 && roll > 0.4) {
      pool = [...potions.filter(p => ['uncommon', 'rare'].includes(p.rarity)), ...wondrousItems.filter(w => w.rarity === 'uncommon')];
    } else {
      pool = [...potions.filter(p => p.rarity === 'common'), ...tools, ...weapons.filter(w => w.rarity === 'common')];
    }
    
    if (pool.length > 0) {
      loot.push(pool[Math.floor(Math.random() * pool.length)]);
    }
  }
  
  return loot;
}
