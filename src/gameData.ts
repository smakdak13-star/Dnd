import { Item, Spell, Enemy, NPC } from './types';

// ============ WEAPONS ============

export const weapons: Item[] = [
  // Simple Melee
  { id: 'dagger', name: 'Кинжал', type: 'weapon', rarity: 'common', description: 'Маленький острый клинок, удобный для скрытного ношения', damage: '1d4 колющий', properties: ['фехтовальное', 'метательное (20/60)'], weight: 1, value: 2 },
  { id: 'club', name: 'Дубина', type: 'weapon', rarity: 'common', description: 'Простая тяжёлая палка, оружие бедняков', damage: '1d4 дробящий', properties: ['лёгкое'], weight: 2, value: 1 },
  { id: 'handaxe', name: 'Ручной топор', type: 'weapon', rarity: 'common', description: 'Компактный боевой топор дварфов', damage: '1d6 рубящий', properties: ['лёгкое', 'метательное (20/60)'], weight: 2, value: 5 },
  { id: 'javelin', name: 'Метательное копьё', type: 'weapon', rarity: 'common', description: 'Лёгкое копьё для метания', damage: '1d6 колющий', properties: ['метательное (30/120)'], weight: 2, value: 0.5 },
  { id: 'light_hammer', name: 'Лёгкий молот', type: 'weapon', rarity: 'common', description: 'Маленький боевой молот', damage: '1d4 дробящий', properties: ['лёгкое', 'метательное (20/60)'], weight: 2, value: 2 },
  { id: 'mace', name: 'Булава', type: 'weapon', rarity: 'common', description: 'Тяжёлая булава с шипами, крушащая доспехи', damage: '1d6 дробящий', weight: 4, value: 5 },
  { id: 'quarterstaff', name: 'Боевой посох', type: 'weapon', rarity: 'common', description: 'Длинный деревянный посох монахов', damage: '1d6 дробящий', properties: ['универсальное (1d8)'], weight: 4, value: 0.2 },
  { id: 'sickle', name: 'Серп', type: 'weapon', rarity: 'common', description: 'Изогнутый клинок жнеца', damage: '1d4 рубящий', properties: ['лёгкое'], weight: 2, value: 1 },
  { id: 'spear', name: 'Копьё', type: 'weapon', rarity: 'common', description: 'Длинное копьё пехотинца', damage: '1d6 колющий', properties: ['метательное (20/60)', 'универсальное (1d8)'], weight: 3, value: 1 },
  // Simple Ranged
  { id: 'shortbow', name: 'Короткий лук', type: 'weapon', rarity: 'common', description: 'Маленький лук эльфийских следопытов', damage: '1d6 колющий', properties: ['боеприпасы (80/320)', 'два оружия'], weight: 2, value: 25 },
  { id: 'light_crossbow', name: 'Лёгкий арбалет', type: 'weapon', rarity: 'common', description: 'Простой арбалет с механизмом перезарядки', damage: '1d8 колющий', properties: ['боеприпасы (80/320)', 'перезарядка', 'два оружия'], weight: 5, value: 25 },
  { id: 'dart', name: 'Дротик', type: 'weapon', rarity: 'common', description: 'Маленький метательный снаряд', damage: '1d4 колющий', properties: ['фехтовальное', 'метательное (20/60)'], weight: 0.25, value: 0.05 },
  // Martial Melee
  { id: 'longsword', name: 'Длинный меч', type: 'weapon', rarity: 'common', description: 'Классический рыцарский меч, символ благородства', damage: '1d8 рубящий', properties: ['универсальное (1d10)'], weight: 3, value: 15 },
  { id: 'greataxe', name: 'Секира', type: 'weapon', rarity: 'common', description: 'Огромный двуручный топор варваров', damage: '1d12 рубящий', properties: ['тяжёлое', 'двуручное'], weight: 7, value: 30 },
  { id: 'greatsword', name: 'Двуручный меч', type: 'weapon', rarity: 'common', description: 'Массивный двуручный клинок', damage: '2d6 рубящий', properties: ['тяжёлое', 'двуручное'], weight: 6, value: 50 },
  { id: 'longbow', name: 'Длинный лук', type: 'weapon', rarity: 'common', description: 'Большой боевой лук, требующий силы', damage: '1d8 колющий', properties: ['боеприпасы (150/600)', 'тяжёлое', 'два оружия'], weight: 2, value: 50 },
  { id: 'rapier', name: 'Рапира', type: 'weapon', rarity: 'common', description: 'Тонкий длинный клинок дуэлянтов', damage: '1d8 колющий', properties: ['фехтовальное'], weight: 2, value: 25 },
  { id: 'battleaxe', name: 'Боевой топор', type: 'weapon', rarity: 'common', description: 'Тяжёлый топор с рунами', damage: '1d8 рубящий', properties: ['универсальное (1d10)'], weight: 4, value: 10 },
  { id: 'warhammer', name: 'Боевой молот', type: 'weapon', rarity: 'common', description: 'Тяжёлый молот с рунами дварфов', damage: '1d8 дробящий', properties: ['универсальное (1d10)'], weight: 2, value: 15 },
  { id: 'halberd', name: 'Алебарда', type: 'weapon', rarity: 'common', description: 'Древковое оружие с топором и крюком', damage: '1d10 рубящий', properties: ['тяжёлое', 'двуручное', 'досягаемость'], weight: 6, value: 20 },
  { id: 'glaive', name: 'Глефа', type: 'weapon', rarity: 'common', description: 'Длинный клинок на древке', damage: '1d10 рубящий', properties: ['тяжёлое', 'двуручное', 'досягаемость'], weight: 6, value: 20 },
  { id: 'scimitar', name: 'Скимитар', type: 'weapon', rarity: 'common', description: 'Изогнутый клинок восточных воинов', damage: '1d6 рубящий', properties: ['фехтовальное', 'лёгкое'], weight: 3, value: 25 },
  { id: 'trident', name: 'Трезубец', type: 'weapon', rarity: 'common', description: 'Тройное копьё морских воинов', damage: '1d8 колющий', properties: ['метательное (20/60)', 'универсальное (1d10)'], weight: 4, value: 5 },
  { id: 'pike', name: 'Пика', type: 'weapon', rarity: 'common', description: 'Очень длинное копьё пехоты', damage: '1d10 колющий', properties: ['тяжёлое', 'двуручное', 'досягаемость'], weight: 18, value: 5 },
  { id: 'flail', name: 'Цеп', type: 'weapon', rarity: 'common', description: 'Шар на цепи, крушащий щиты', damage: '1d8 дробящий', weight: 2, value: 10 },
  { id: 'morningstar', name: 'Моргенштерн', type: 'weapon', rarity: 'common', description: 'Шар с шипами на рукояти', damage: '1d8 колющий', weight: 4, value: 15 },
  { id: 'whip', name: 'Кнут', type: 'weapon', rarity: 'common', description: 'Длинный гибкий кнут', damage: '1d4 рубящий', properties: ['фехтовальное', 'досягаемость'], weight: 3, value: 2 },
  // Rare Weapons
  { id: 'flame_tongue', name: 'Пламенный язык', type: 'weapon', rarity: 'rare', description: 'Меч, пылающий магическим огнём при активации. Лезвие из красного золота с рунами', damage: '1d8 рубящий + 2d6 огненный', properties: ['универсальное (1d10)'], weight: 3, value: 0, attunement: true, effect: 'Можно зажечь как бонусное действие, нанося 2d6 дополнительного огненного урона' },
  { id: 'frost_brand', name: 'Морозный клинок', type: 'weapon', rarity: 'veryRare', description: 'Меч из вечного льда, не тающего в огне. Испускает холодный свет', damage: '1d8 рубящий + 1d6 холод', properties: ['универсальное (1d10)'], weight: 3, value: 0, attunement: true, effect: 'Сопротивление огневому урону. Гасит немагический огонь в радиусе 10 фт.' },
  { id: 'holy_avenger', name: 'Святой мститель', type: 'weapon', rarity: 'legendary', description: 'Священный меч паладинов, сияющий божественным светом. Создан богами для борьбы со злом', damage: '1d8+3d10 излучающий', properties: ['универсальное (1d10)'], weight: 3, value: 0, attunement: true, effect: 'Преимущество по атакам против нежити и демонов. Аура защиты 10 фт.' },
  { id: 'vorpal_sword', name: 'Ворпальный меч', type: 'weapon', rarity: 'legendary', description: 'Легендарный клинок, способный отсекать головы одним ударом. Звон его лезвия слышен в других планах', damage: '1d8+3d8 рубящий', properties: ['универсальное (1d10)'], weight: 3, value: 0, attunement: true, effect: 'При 20 на к20 — мгновенное отсечение головы (если у существа есть голова)' },
  { id: 'luck_blade', name: 'Клинок удачи', type: 'weapon', rarity: 'legendary', description: 'Меч, приносящий удачу владельцу. Лезвие переливается всеми цветами', damage: '1d8+3 рубящий', properties: ['фехтовальное'], weight: 3, value: 0, attunement: true, charges: 3, maxCharges: 3, effect: 'Можно перебросить проваленный бросок атаки, проверки или спасброска' },
  { id: 'nine_lives_stealer', name: 'Похититель девяти жизней', type: 'weapon', rarity: 'veryRare', description: 'Зловещий меч, способный похищать жизни. Шепчет на мёртвом языке', damage: '1d8+2d6 некротический', properties: ['универсальное (1d10)'], weight: 3, value: 0, attunement: true, effect: 'При 20 на к20 — мгновенная смерть (если у цели менее 100 HP)' },
  { id: 'sword_of_sharpness', name: 'Меч остроты', type: 'weapon', rarity: 'veryRare', description: 'Невероятно острый клинок, рассекающий даже adamantий', damage: '1d8+4d6 рубящий', properties: ['универсальное (1d10)'], weight: 3, value: 0, attunement: true, effect: 'При 20 на к20 — отрубает конечность' },
  { id: 'javelin_of_lightning', name: 'Метательное копьё молнии', type: 'weapon', rarity: 'uncommon', description: 'Копьё, выпускающее молнию при броске', damage: '1d6 колющий + 4d6 электрический', properties: ['метательное (30/120)'], weight: 2, value: 0, effect: 'Одноразовое: при броске выпускает линию молнии' },
];

export const armors: Item[] = [
  { id: 'leather', name: 'Кожаный доспех', type: 'armor', rarity: 'common', description: 'Жёсткая кожа, прошитая ремнями', armorClass: 11, weight: 10, value: 10 },
  { id: 'padded', name: 'Стёганый доспех', type: 'armor', rarity: 'common', description: 'Толстый слой ваты между тканями', armorClass: 11, weight: 8, value: 5 },
  { id: 'studded_leather', name: 'Клёпаный кожаный доспех', type: 'armor', rarity: 'common', description: 'Кожаный доспех с металлическими заклёпками', armorClass: 12, weight: 13, value: 45 },
  { id: 'chain_shirt', name: 'Кольчужная рубашка', type: 'armor', rarity: 'common', description: 'Рубашка из переплетённых металлических колец', armorClass: 13, weight: 20, value: 50 },
  { id: 'scale_mail', name: 'Чешуйчатый доспех', type: 'armor', rarity: 'common', description: 'Доспех из металлических чешуек на кожаной основе', armorClass: 14, weight: 45, value: 50 },
  { id: 'breastplate', name: 'Кираса', type: 'armor', rarity: 'uncommon', description: 'Металлический нагрудник с кожаной подкладкой', armorClass: 14, weight: 20, value: 400 },
  { id: 'half_plate', name: 'Полулатный доспех', type: 'armor', rarity: 'uncommon', description: 'Металлические пластины на кожаной основе', armorClass: 15, weight: 40, value: 750 },
  { id: 'chain_mail', name: 'Кольчужный доспех', type: 'armor', rarity: 'common', description: 'Тяжёлая кольчуга с металлическими пластинами', armorClass: 16, weight: 55, value: 75 },
  { id: 'splint', name: 'Наборный доспех', type: 'armor', rarity: 'rare', description: 'Металлические полосы, соединённые кольчугой', armorClass: 17, weight: 60, value: 200 },
  { id: 'plate', name: 'Латный доспех', type: 'armor', rarity: 'rare', description: 'Полный латный доспех рыцаря, символ статуса', armorClass: 18, weight: 65, value: 1500 },
  { id: 'adamantine_armor', name: 'Адамантиновый доспех', type: 'armor', rarity: 'uncommon', description: 'Доспех из неземного металла, прочнее стали', armorClass: 0, weight: 0, value: 0, attunement: false, effect: 'Критические удары по вам становятся обычными' },
  { id: 'mithral_armor', name: 'Мифриловый доспех', type: 'armor', rarity: 'uncommon', description: 'Лёгкий доспех из серебристого мифрила', armorClass: 0, weight: 0, value: 0, effect: 'Не накладывает помехи на Ловкость, не требует силы' },
  { id: 'armor_of_invulnerability', name: 'Доспех неуязвимости', type: 'armor', rarity: 'legendary', description: 'Легендарный доспех, выкованный богами', armorClass: 0, weight: 50, value: 0, attunement: true, charges: 1, maxCharges: 1, effect: 'Иммунитет к немагическому урону на 10 минут (1 заряд в день)' },
  { id: 'demon_armor', name: 'Демонический доспех', type: 'armor', rarity: 'veryRare', description: 'Проклятый чёрный доспех с рогами. Шепчет тёмные обещания', armorClass: 18, weight: 65, value: 0, attunement: true, effect: 'Сопротивление немагическому урону, +1 к атаке и КД. Проклятие: нельзя снять' },
  { id: 'dwarven_plate', name: 'Дварфийские латы', type: 'armor', rarity: 'rare', description: 'Превосходная работа дварфийских кузнецов с рунами', armorClass: 17, weight: 60, value: 0, effect: 'Реакция: -4 к атаке против вас, когда вы видите атакующего' },
  { id: 'elven_chain', name: 'Эльфийская кольчуга', type: 'armor', rarity: 'rare', description: 'Лёгкая кольчуга из мифрила, созданная эльфами', armorClass: 13, weight: 20, value: 0, effect: 'Не накладывает помехи на Скрытность' },
];

export const shields: Item[] = [
  { id: 'shield', name: 'Щит', type: 'shield', rarity: 'common', description: 'Деревянный или металлический щит', armorClass: 2, weight: 6, value: 10 },
  { id: 'animated_shield', name: 'Оживлённый щит', type: 'shield', rarity: 'veryRare', description: 'Щит с магическими рунами, способный сражаться сам', armorClass: 2, weight: 6, value: 0, attunement: true, effect: 'Как бонусное действие — щит сражается сам, защищая вас' },
  { id: 'shield_of_missile_attraction', name: 'Щит притяжения снарядов', type: 'shield', rarity: 'rare', description: 'Проклятый щит, притягивающий стрелы', armorClass: 2, weight: 6, value: 0, attunement: true, effect: 'Помеха по дальним атакам против вас. ПРОКЛЯТИЕ: нельзя снять' },
  { id: 'shield_of_the_sentinel', name: 'Щит часового', type: 'shield', rarity: 'rare', description: 'Щит, защищающий союзников рядом', armorClass: 2, weight: 6, value: 0, attunement: true, effect: 'Когда существо атакует союзника рядом, вы можете реакцией перенаправить атаку на себя' },
];

export const potions: Item[] = [
  { id: 'potion_healing', name: 'Зелье лечения', type: 'potion', rarity: 'common', description: 'Красная жидкость, восстанавливающая плоть', weight: 0.5, value: 50, effect: 'heal_2d4+2' },
  { id: 'potion_greater_healing', name: 'Зелье большего лечения', type: 'potion', rarity: 'uncommon', description: 'Ярко-красная жидкость в хрустальном флаконе', weight: 0.5, value: 150, effect: 'heal_4d4+4' },
  { id: 'potion_superior_healing', name: 'Зелье превосходного лечения', type: 'potion', rarity: 'rare', description: 'Светящаяся жидкость в золотом флаконе', weight: 0.5, value: 450, effect: 'heal_8d4+8' },
  { id: 'potion_supreme_healing', name: 'Зелье высшего лечения', type: 'potion', rarity: 'veryRare', description: 'Сияющая жидкость в бриллиантовом флаконе', weight: 0.5, value: 1350, effect: 'heal_10d4+20' },
  { id: 'potion_invisibility', name: 'Зелье невидимости', type: 'potion', rarity: 'uncommon', description: 'Прозрачная жидкость, исчезающая на свету', weight: 0.5, value: 250, effect: 'Невидимость на 1 час' },
  { id: 'potion_flying', name: 'Зелье полёта', type: 'potion', rarity: 'uncommon', description: 'Жидкость с плавающими облачками', weight: 0.5, value: 300, effect: 'Скорость полёта 60 фт. на 1 час' },
  { id: 'potion_giant_strength', name: 'Зелье силы великана', type: 'potion', rarity: 'rare', description: 'Густая жидкость с осадком из костей', weight: 0.5, value: 500, effect: 'Сила 21 (холмовой), 23 (каменный), 25 (огненный)' },
  { id: 'potion_poison', name: 'Зелье яда', type: 'potion', rarity: 'uncommon', description: 'Зеленоватая зловонная жидкость', weight: 0.5, value: 100, effect: 'Урон ядом 3d6, спасбросок Телосложения' },
  { id: 'potion_resistance', name: 'Зелье сопротивления', type: 'potion', rarity: 'uncommon', description: 'Жидкость, меняющая цвет в зависимости от типа', weight: 0.5, value: 200, effect: 'Сопротивление одному типу урона на 1 час' },
  { id: 'potion_speed', name: 'Зелье скорости', type: 'potion', rarity: 'veryRare', description: 'Янтарная жидкость, пульсирующая энергией', weight: 0.5, value: 500, effect: 'Заклинание Ускорение на 1 минуту' },
  { id: 'potion_vitality', name: 'Зелье жизненной силы', type: 'potion', rarity: 'uncommon', description: 'Тёплая золотистая жидкость', weight: 0.5, value: 200, effect: 'Снимает истощение, болезни, яды. Макс HP на 24 часа' },
  { id: 'potion_heroism', name: 'Зелье героизма', type: 'potion', rarity: 'uncommon', description: 'Жидкость, переливающаяся как рассвет', weight: 0.5, value: 150, effect: 'Временные HP = уровень заклинателя на 1 минуту' },
  { id: 'potion_clairvoyance', name: 'Зелье ясновидения', type: 'potion', rarity: 'rare', description: 'Жидкость с мерцающими частицами', weight: 0.5, value: 300, effect: 'Видеть или слышать на расстоянии 1 миля в течение 10 минут' },
  { id: 'potion_diminution', name: 'Зелье уменьшения', type: 'potion', rarity: 'rare', description: 'Синяя жидкость с пузырьками', weight: 0.5, value: 250, effect: 'Уменьшение на 1d4 часа' },
  { id: 'potion_growth', name: 'Зелье увеличения', type: 'potion', rarity: 'uncommon', description: 'Красная густая жидкость', weight: 0.5, value: 250, effect: 'Увеличение на 1d4 часа, +1d4 к урону' },
  { id: 'potion_waterbreathing', name: 'Зелье водного дыхания', type: 'potion', rarity: 'uncommon', description: 'Жидкость с плавающими рыбьими чешуйками', weight: 0.5, value: 150, effect: 'Дыхание под водой на 24 часа' },
];

export const rings: Item[] = [
  { id: 'ring_protection', name: 'Кольцо защиты', type: 'ring', rarity: 'rare', description: 'Серебряное кольцо с рунами защиты', weight: 0, value: 0, attunement: true, effect: '+1 к КД и спасброскам' },
  { id: 'ring_regeneration', name: 'Кольцо регенерации', type: 'ring', rarity: 'legendary', description: 'Кольцо из зелёного металла, пульсирующее жизнью', weight: 0, value: 0, attunement: true, effect: 'Восстанавливает 1d6 HP каждые 10 минут. Отращивает утраченные части тела за 1d6 дней' },
  { id: 'ring_spell_storing', name: 'Кольцо хранения заклинаний', type: 'ring', rarity: 'rare', description: 'Кольцо с пустой полостью для магии', weight: 0, value: 0, attunement: true, charges: 5, maxCharges: 5, effect: 'Хранит заклинание до 5 уровня и позволяет использовать его' },
  { id: 'ring_invisibility', name: 'Кольцо невидимости', type: 'ring', rarity: 'legendary', description: 'Кольцо, мерцающее и исчезающее из виду', weight: 0, value: 0, attunement: true, charges: 3, maxCharges: 3, effect: 'Становитесь невидимым. Видимость восстанавливается при атаке или заклинании' },
  { id: 'ring_three_wishes', name: 'Кольцо трёх желаний', type: 'ring', rarity: 'legendary', description: 'Золотое кольцо с тремя бриллиантами. Каждое исполняет желание', weight: 0, value: 0, attunement: false, charges: 3, maxCharges: 3, effect: 'Исполняет 3 желания по выбору. После использования рассыпается в пыль' },
  { id: 'ring_free_action', name: 'Кольцо свободного действия', type: 'ring', rarity: 'rare', description: 'Кольцо, позволяющее двигаться сквозь препятствия', weight: 0, value: 0, attunement: true, effect: 'Нельзя быть схваченным, парализованным или обездвиженным магически' },
  { id: 'ring_feather_fall', name: 'Кольцо мягкого падения', type: 'ring', rarity: 'rare', description: 'Кольцо с пером феникса', weight: 0, value: 0, attunement: true, charges: 5, maxCharges: 5, effect: 'Реакция: заклинание Мягкое падение' },
  { id: 'ring_warmth', name: 'Кольцо тепла', type: 'ring', rarity: 'uncommon', description: 'Тёплое кольцо из красного металла', weight: 0, value: 0, attunement: false, effect: 'Сопротивление холодному урону. Комфорт при температуре до -50°F' },
  { id: 'ring_xray_vision', name: 'Кольцо рентгеновского зрения', type: 'ring', rarity: 'rare', description: 'Кольцо с тёмным кристаллом', weight: 0, value: 0, attunement: true, charges: 10, maxCharges: 10, effect: 'Видеть сквозь твёрдые предметы (1 заряд за раунд)' },
  { id: 'ring_mind_shielding', name: 'Кольцо защиты разума', type: 'ring', rarity: 'uncommon', description: 'Кольцо из свинца с рунами', weight: 0, value: 0, attunement: true, effect: 'Нельзя прочитать мысли, определить мировоззрение. Защита от очарования' },
];

export const wands: Item[] = [
  { id: 'wand_magic_missile', name: 'Жезл магической стрелы', type: 'wand', rarity: 'uncommon', description: 'Жезл из белого дерева с кристаллом на конце', weight: 1, value: 0, charges: 7, maxCharges: 7, effect: 'Создаёт 3 магические стрелы (1d4+1 каждая)' },
  { id: 'wand_fireballs', name: 'Жезл огненных шаров', type: 'wand', rarity: 'rare', description: 'Жезл из красного дерева, тёплый на ощупь', weight: 1, value: 0, attunement: true, charges: 7, maxCharges: 7, effect: 'Огненный шар (8d6 урона в радиусе 20 фт.)' },
  { id: 'wand_lightning', name: 'Жезл молний', type: 'wand', rarity: 'rare', description: 'Металлический жезл, искрящий электричеством', weight: 1, value: 0, attunement: true, charges: 7, maxCharges: 7, effect: 'Линия молнии (8d6 урона электричеством)' },
  { id: 'wand_of_wonder', name: 'Жезл чудес', type: 'wand', rarity: 'rare', description: 'Разноцветный жезл с непредсказуемой магией', weight: 1, value: 0, charges: 7, maxCharges: 7, effect: 'Случайный эффект из 20 возможных (от бабочек до метеоритного дождя)' },
  { id: 'wand_polymorph', name: 'Жезл превращения', type: 'wand', rarity: 'legendary', description: 'Жезл из меняющего форму металла', weight: 1, value: 0, attunement: true, charges: 7, maxCharges: 7, effect: 'Превращает цель в другое существо' },
  { id: 'wand_paralysis', name: 'Жезл паралича', type: 'wand', rarity: 'rare', description: 'Жезл из бледного дерева, холодный на ощупь', weight: 1, value: 0, attunement: true, charges: 7, maxCharges: 7, effect: 'Парализует гуманоида (спасбросок Мудрости)' },
  { id: 'wand_web', name: 'Жезл паутины', type: 'wand', rarity: 'rare', description: 'Жезл, покрытый тонкими нитями', weight: 1, value: 0, attunement: true, charges: 7, maxCharges: 7, effect: 'Создаёт паутину в радиусе 20 фт.' },
];

export const wondrousItems: Item[] = [
  { id: 'bag_of_holding', name: 'Сумка хранения', type: 'wondrous', rarity: 'uncommon', description: 'Обычная на вид сумка, вмещающая до 500 фунтов', weight: 15, value: 0, effect: 'Внутреннее пространство 64 кубических фута' },
  { id: 'portable_hole', name: 'Переносная дыра', type: 'wondrous', rarity: 'rare', description: 'Круг ткани из паутины фазового паука', weight: 0, value: 0, effect: 'Разворачивается в дыру 6 фт. в диаметре, 10 фт. глубины' },
  { id: 'cloak_of_elvenkind', name: 'Плащ эльфов', type: 'wondrous', rarity: 'uncommon', description: 'Серый плащ с капюшоном, меняющий цвет', weight: 1, value: 0, attunement: true, effect: 'Преимущество на проверки Скрытности' },
  { id: 'boots_of_elvenkind', name: 'Сапоги эльфов', type: 'wondrous', rarity: 'uncommon', description: 'Мягкие сапоги из эльфийской кожи', weight: 1, value: 0, attunement: true, effect: 'Шаги не оставляют следов. Преимущество на Скрытность от передвижения' },
  { id: 'gauntlets_of_ogre_power', name: 'Перчатки силы огра', type: 'wondrous', rarity: 'uncommon', description: 'Грубые кожаные перчатки великана', weight: 1, value: 0, attunement: true, effect: 'Сила становится 19' },
  { id: 'helm_of_teleportation', name: 'Шлем телепортации', type: 'wondrous', rarity: 'rare', description: 'Шлем с мерцающими рунами', weight: 3, value: 0, attunement: true, charges: 3, maxCharges: 3, effect: 'Телепортация на расстояние до 1000 миль' },
  { id: 'deck_of_many_things', name: 'Колода многих вещей', type: 'wondrous', rarity: 'legendary', description: 'Колода из 22 или 78 карт с непредсказуемыми эффектами', weight: 1, value: 0, effect: 'Каждая карта — уникальное событие: от богатства до гибели' },
  { id: 'pearl_of_power', name: 'Жемчужина силы', type: 'wondrous', rarity: 'uncommon', description: 'Чёрная жемчужина, пульсирующая магией', weight: 0, value: 0, attunement: true, effect: 'Восстанавливает одно использованное заклинание до 4 уровня' },
  { id: 'amulet_health', name: 'Амулет здоровья', type: 'wondrous', rarity: 'uncommon', description: 'Зелёный амулет с изумрудом', weight: 1, value: 0, attunement: true, effect: 'Телосложение становится 19' },
  { id: 'stone_of_good_luck', name: 'Камень удачи', type: 'wondrous', rarity: 'uncommon', description: 'Гладкий камень с прожилками золота', weight: 0, value: 0, attunement: true, effect: '+1 ко всем проверкам характеристик и спасброскам' },
  { id: 'carpet_of_flying', name: 'Ковёр-самолёт', type: 'wondrous', rarity: 'veryRare', description: 'Волшебный ковёр, способный летать', weight: 0, value: 0, effect: 'Летает со скоростью 50-80 фт. в зависимости от размера' },
  { id: 'rope_of_entanglement', name: 'Верёвка опутывания', type: 'wondrous', rarity: 'rare', description: 'Верёвка, оживающая по команде', weight: 3, value: 0, effect: 'Как действие — охватывает существо в радиусе 20 фт.' },
  { id: 'decanter_of_endless_water', name: 'Графин бесконечной воды', type: 'wondrous', rarity: 'uncommon', description: 'Графин, производящий воду по команде', weight: 2, value: 0, effect: 'Производит от 1 галлона до 30 галлонов воды за действие' },
  { id: 'figurines_of_wondrous_power', name: 'Статуэтки чудесной силы', type: 'wondrous', rarity: 'rare', description: 'Миниатюрные статуэтки, оживающие по команде', weight: 1, value: 0, effect: 'Превращается в существо-компаньона на определённое время' },
  { id: 'iron_flask', name: 'Железная фляга', type: 'wondrous', rarity: 'legendary', description: 'Фляга с тремя запечатанными пробками', weight: 5, value: 0, effect: 'Может заточить существо (бога, демона, элементала) внутри' },
  { id: 'manual_of_gainful_exercise', name: 'Руководство по упражнениям', type: 'wondrous', rarity: 'veryRare', description: 'Тяжёлый фолиант с упражнениями', weight: 5, value: 0, effect: 'Навсегда увеличивает Силу на 2 (48 часов чтения)' },
  { id: 'tome_of_clear_thought', name: 'Фолиант ясного разума', type: 'wondrous', rarity: 'veryRare', description: 'Книга с магическими формулами', weight: 5, value: 0, effect: 'Навсегда увеличивает Интеллект на 2 (48 часов чтения)' },
  { id: 'bag_of_beans', name: 'Мешок бобов', type: 'wondrous', rarity: 'rare', description: 'Мешок с 3d4 магическими бобами', weight: 0.5, value: 0, effect: 'Каждый боб даёт случайный эффект при посадке' },
  { id: 'heward_handy_haversack', name: 'Рюкзак Хьюарда', type: 'wondrous', rarity: 'rare', description: 'Синий рюкзак с магическими отделениями', weight: 5, value: 0, effect: 'Три отделения: 8, 64 и 272 кубических фута. Искомый предмет всегда сверху' },
];

export const scrolls: Item[] = [
  { id: 'scroll_healing_word', name: 'Свиток лечащего слова', type: 'scroll', rarity: 'common', description: 'Пергамент с рунами лечения', weight: 0, value: 50, effect: 'Заклинание 1-го уровня: Лечащее слово' },
  { id: 'scroll_fireball', name: 'Свиток огненного шара', type: 'scroll', rarity: 'rare', description: 'Обугленный пергамент, тёплый на ощупь', weight: 0, value: 500, effect: 'Заклинание 3-го уровня: Огненный шар (8d6)' },
  { id: 'scroll_resurrection', name: 'Свиток воскрешения', type: 'scroll', rarity: 'veryRare', description: 'Священный пергамент, сияющий светом', weight: 0, value: 5000, effect: 'Воскрешает существо, умершее не более 200 лет назад' },
  { id: 'scroll_wish', name: 'Свиток желания', type: 'scroll', rarity: 'legendary', description: 'Древний пергамент, написанный на языке богов', weight: 0, value: 0, effect: 'Исполняет любое желание. Может иметь непредсказуемые последствия!' },
  { id: 'scroll_true_resurrection', name: 'Свиток истинного воскрешения', type: 'scroll', rarity: 'legendary', description: 'Священный пергамент 9-го круга', weight: 0, value: 0, effect: 'Воскрешает существо, умершее до 2000 лет назад, даже без тела' },
  { id: 'scroll_power_word_kill', name: 'Свиток слова силы: Убийство', type: 'scroll', rarity: 'veryRare', description: 'Чёрный пергамент с красными рунами', weight: 0, value: 0, effect: 'Мгновенно убивает существо с 100 HP или меньше' },
  { id: 'scroll_time_stop', name: 'Свиток остановки времени', type: 'scroll', rarity: 'legendary', description: 'Пергамент, мерцающий вне времени', weight: 0, value: 0, effect: 'Останавливает время на 1d4+2 раунда для всех кроме вас' },
];

export const tools: Item[] = [
  { id: 'thieves_tools', name: 'Воровские инструменты', type: 'tool', rarity: 'common', description: 'Набор отмычек и инструментов для взлома', weight: 1, value: 25 },
  { id: 'herbalism_kit', name: 'Набор травника', type: 'tool', rarity: 'common', description: 'Ножницы, ступка и сушёные травы', weight: 3, value: 5 },
  { id: 'alchemist_supplies', name: 'Набор алхимика', type: 'tool', rarity: 'common', description: 'Колбы, реактивы и оборудование', weight: 8, value: 50 },
  { id: 'disguise_kit', name: 'Набор для маскировки', type: 'tool', rarity: 'common', description: 'Косметика, парики и реквизит', weight: 3, value: 25 },
  { id: 'forgery_kit', name: 'Набор для подделок', type: 'tool', rarity: 'common', description: 'Бумага, перья, чернила и печати', weight: 5, value: 15 },
  { id: 'poisoner_kit', name: 'Набор отравителя', type: 'tool', rarity: 'common', description: 'Флаконы, реактивы и яды', weight: 2, value: 50 },
  { id: 'navigators_tools', name: 'Навигационные инструменты', type: 'tool', rarity: 'common', description: 'Секстант, компас и карты', weight: 2, value: 25 },
  { id: 'musical_instrument', name: 'Музыкальный инструмент', type: 'tool', rarity: 'common', description: 'Лютня, флейта, барабан или другой инструмент', weight: 3, value: 10 },
];

export const allItems: Item[] = [
  ...weapons, ...armors, ...shields, ...potions, ...rings, ...wands, ...wondrousItems, ...scrolls, ...tools
];

// ============ SPELLS ============

export const spells: Spell[] = [
  // Cantrips (0)
  { name: 'Огненный снаряд', level: 0, school: 'evocation', castingTime: '1 действие', range: '120 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Бросает огненный шар. 1d10 огненного урона', damage: '1d10' },
  { name: 'Свет', level: 0, school: 'evocation', castingTime: '1 действие', range: 'Касание', duration: '1 час', components: 'В, М', description: 'Предмет излучает яркий свет в радиусе 20 фт.' },
  { name: 'Малая иллюзия', level: 0, school: 'illusion', castingTime: '1 действие', range: '30 фт.', duration: '1 минута', components: 'С, М', description: 'Создаёт звук или изображение' },
  { name: 'Ядовитые брызги', level: 0, school: 'conjuration', castingTime: '1 действие', range: '30 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Ядовитая жидкость, 1d12 урона ядом', damage: '1d12' },
  { name: 'Ледяной луч', level: 0, school: 'evocation', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Луч холода, 1d8 урона холодом', damage: '1d8' },
  { name: 'Священное пламя', level: 0, school: 'evocation', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Пламя излучающего урона, 1d8', damage: '1d8' },
  { name: 'Починка', level: 0, school: 'transmutation', castingTime: '1 минута', range: 'Касание', duration: 'Мгновенная', components: 'В, С, М', description: 'Чинит одно повреждение на предмете' },
  { name: 'Указание', level: 0, school: 'enchantment', castingTime: '1 действие', range: 'Касание', duration: 'Концентрация, 1 минута', components: 'В, С', description: '+1d4 к одной проверке характеристики', concentration: true },
  { name: 'Дубинка', level: 0, school: 'transmutation', castingTime: '1 бонусное действие', range: 'На себя', duration: '1 минута', components: 'В, С, М', description: 'Посох становится магическим оружием +1d6 дробящего', damage: '1d6' },
  { name: 'Друидство', level: 0, school: 'transmutation', castingTime: '1 действие', range: '30 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Создаёт природный эффект: цветы, погоду, звуки' },
  { name: 'Чудотворство', level: 0, school: 'transmutation', castingTime: '1 действие', range: '30 фт.', duration: 'До 1 минуты', components: 'В', description: 'Создаёт небольшой божественный эффект' },
  { name: 'Пляшущие огоньки', level: 0, school: 'evocation', castingTime: '1 действие', range: '120 фт.', duration: 'Концентрация, 1 минута', components: 'В, С, М', description: 'Создаёт до 3 огоньков, атакующих врагов', damage: '1d8', concentration: true },
  { name: 'Зловонное облако', level: 0, school: 'conjuration', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Облако ядовитого газа, 1d8 урона ядом', damage: '1d8' },
  { name: 'Ледяной кинжал', level: 0, school: 'conjuration', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Кинжал из льда, 1d10 колющего урона', damage: '1d10' },
  { name: 'Послание', level: 0, school: 'enchantment', castingTime: '1 действие', range: '120 фт.', duration: '1 раунд', components: 'С', description: 'Шепчет сообщение, слышимое только целью' },
  { name: 'Луч слабости', level: 0, school: 'necromancy', castingTime: '1 действие', range: '60 фт.', duration: 'Концентрация, 1 минута', components: 'В, С', description: 'Урон некротической энергией, цель не может лечиться', damage: '2d6', concentration: true },
  { name: 'Клеймящая кара', level: 0, school: 'evocation', castingTime: '1 бонусное действие', range: 'На себя', duration: '1 минута', components: 'В', description: 'Следующая атака наносит +1d6 излучающего урона', damage: '1d6' },
  { name: 'Зелёный шип', level: 0, school: 'conjuration', castingTime: '1 действие', range: '30 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Лоза с шипами, 1d8 колющего урона', damage: '1d8' },
  { name: 'Медвежья хватка', level: 0, school: 'conjuration', castingTime: '1 действие', range: '30 фт.', duration: 'Мгновенная', components: 'В, С, М', description: 'Призрачная лапа хватает цель, 1d8 дробящего', damage: '1d8' },
  { name: 'Мечный удар', level: 0, school: 'evocation', castingTime: '1 действие', range: 'На себя', duration: '1 раунд', components: 'В, С', description: 'Следующая атака оружием наносит +1d8 урона силовым полем', damage: '1d8' },
  
  // 1st Level
  { name: 'Волшебная стрела', level: 1, school: 'evocation', castingTime: '1 действие', range: '120 фт.', duration: 'Мгновенная', components: 'В, С', description: '3 стрелы по 1d4+1 урона силовым полем', damage: '3x(1d4+1)' },
  { name: 'Щит', level: 1, school: 'abjuration', castingTime: '1 реакция', range: 'На себя', duration: '1 раунд', components: 'В, С', description: '+5 к КД до начала следующего хода' },
  { name: 'Лечащее слово', level: 1, school: 'evocation', castingTime: '1 бонусное действие', range: '60 фт.', duration: 'Мгновенная', components: 'В', description: 'Восстанавливает 1d4 + модификатор HP', save: 'heal' },
  { name: 'Доспехи мага', level: 1, school: 'conjuration', castingTime: '1 действие', range: 'Касание', duration: '8 часов', components: 'В, С, М', description: 'КД = 13 + модификатор Ловкости' },
  { name: 'Волна грома', level: 1, school: 'evocation', castingTime: '1 действие', range: '15 фт. куб', duration: 'Мгновенная', components: 'В, С', description: 'Волна звука, 2d8 урона звуком', damage: '2d8', save: 'Телосложение' },
  { name: 'Спячка', level: 1, school: 'enchantment', castingTime: '1 действие', range: '90 фт.', duration: '1 минута', components: 'В, С, М', description: 'Усыпляет существ с суммой HP до 5d8', save: 'Мудрость' },
  { name: 'Туманное облако', level: 1, school: 'conjuration', castingTime: '1 действие', range: '120 фт.', duration: 'Концентрация, 1 час', components: 'В, С', description: 'Облако тумана, сильно заслонённая местность', concentration: true },
  { name: 'Опознание', level: 1, school: 'divination', castingTime: '1 минута', range: 'Касание', duration: 'Мгновенная', components: 'В, С, М', ritual: true, description: 'Узнаёте свойства магического предмета' },
  { name: 'Щит веры', level: 1, school: 'abjuration', castingTime: '1 бонусное действие', range: '60 фт.', duration: 'Концентрация, 10 минут', components: 'В', description: '+2 к КД цели', concentration: true },
  { name: 'Лечение ран', level: 1, school: 'evocation', castingTime: '1 действие', range: 'Касание', duration: 'Мгновенная', components: 'В, С', description: 'Восстанавливает 1d8 + модификатор HP', save: 'heal' },
  { name: 'Направляющий снаряд', level: 1, school: 'evocation', castingTime: '1 бонусное действие', range: '60 фт.', duration: '1 раунд', components: 'В, С', description: 'Следующая атака союзника +1d6 излучающего', damage: '1d6' },
  { name: 'Доспехи Агатиса', level: 1, school: 'abjuration', castingTime: '1 действие', range: 'На себя', duration: '1 час', components: 'В, С, М', description: '+5 временных HP, атакующие в ближнем бою получают 5 урона холодом' },
  { name: 'Поиск фамильяра', level: 1, school: 'conjuration', castingTime: '1 час', range: '10 фт.', duration: 'Мгновенная', components: 'В, С, М', ritual: true, description: 'Призывает духа-помощника в форме животного' },
  { name: 'Прыжок', level: 1, school: 'transmutation', castingTime: '1 действие', range: 'Касание', duration: '1 минута', components: 'В, С, М', description: 'Утраивает прыжковую способность цели' },
  { name: 'Долгая стрела', level: 1, school: 'transmutation', castingTime: '1 действие', range: 'Касание', duration: '1 час', components: 'В, С', description: 'Оружие игнорирует укрытие, +10 фт. дистанции' },
  { name: 'Божественное благоволение', level: 1, school: 'enchantment', castingTime: '1 бонусное действие', range: '60 фт.', duration: 'Концентрация, 1 минута', components: 'В', description: 'Цель добавляет 1d4 к атакам и спасброскам', concentration: true },
  { name: 'Громовая кара', level: 1, school: 'evocation', castingTime: '1 бонусное действие', range: 'На себя', duration: '1 минута', components: 'В', description: 'Следующая атака +2d6 урона звуком', damage: '2d6' },
  { name: 'Меткий выстрел', level: 1, school: 'divination', castingTime: '1 бонусное действие', range: 'На себя', duration: '1 минута', components: 'В', description: '+1d10 к следующей атаке оружием', damage: '1d10' },
  { name: 'Щитящая рука', level: 1, school: 'evocation', castingTime: '1 бонусное действие', range: 'На себя', duration: '1 раунд', components: 'В, С', description: '+2 к КД, 2d6 урона силовым полем атакующим' },
  
  // 2nd Level
  { name: 'Невидимость', level: 2, school: 'illusion', castingTime: '1 действие', range: 'Касание', duration: 'Концентрация, 1 час', components: 'В, С, М', description: 'Существо становится невидимым', concentration: true },
  { name: 'Туманный шаг', level: 2, school: 'conjuration', castingTime: '1 бонусное действие', range: 'На себя', duration: 'Мгновенная', components: 'В', description: 'Телепортация на 30 футов в видимое место' },
  { name: 'Удержание личности', level: 2, school: 'enchantment', castingTime: '1 действие', range: '60 фт.', duration: 'Концентрация, 1 минута', components: 'В, С, М', description: 'Парализует гуманоида', save: 'Мудрость', concentration: true },
  { name: 'Мистический доспех', level: 2, school: 'abjuration', castingTime: '1 действие', range: 'Касание', duration: '8 часов', components: 'В, С, М', description: '+5 к КД цели' },
  { name: 'Лечение ран (больших)', level: 2, school: 'evocation', castingTime: '1 действие', range: 'Касание', duration: 'Мгновенная', components: 'В, С', description: 'Восстанавливает 2d8 + модификатор HP', save: 'heal' },
  { name: 'Паутина', level: 2, school: 'conjuration', castingTime: '1 действие', range: '60 фт.', duration: 'Концентрация, 1 час', components: 'В, С, М', description: 'Паутина в радиусе 20 фт., ограничение движения', save: 'Ловкость', concentration: true },
  { name: 'Тьма', level: 2, school: 'evocation', castingTime: '1 действие', range: '60 фт.', duration: 'Концентрация, 10 минут', components: 'В, М', description: 'Сфера тьмы 15 фт., не пропускающая свет', concentration: true },
  { name: 'Полёт', level: 2, school: 'transmutation', castingTime: '1 действие', range: 'Касание', duration: 'Концентрация, 10 минут', components: 'В, С, М', description: 'Скорость полёта 60 фт. для цели', concentration: true },
  { name: 'Зеркальный образ', level: 2, school: 'illusion', castingTime: '1 действие', range: 'На себя', duration: '1 минута', components: 'В, С', description: 'Создаёт 3 иллюзорные копии, атаки могут попасть в копии' },
  { name: 'Окаменение', level: 2, school: 'transmutation', castingTime: '1 действие', range: 'Касание', duration: 'Мгновенная', components: 'В, С', description: 'Превращает существо или предмет в камень' },
  { name: 'Раскалённый металл', level: 2, school: 'transmutation', castingTime: '1 действие', range: '60 фт.', duration: 'Концентрация, 10 минут', components: 'В, С, М', description: 'Металлическое оружие наносит +2d8 огненного урона', damage: '2d8', concentration: true },
  { name: 'Молния (малая)', level: 2, school: 'evocation', castingTime: '1 действие', range: 'На себя (линия 60 фт.)', duration: 'Мгновенная', components: 'В, С, М', description: 'Линия молнии, 3d8 урона электричеством', damage: '3d8', save: 'Ловкость' },
  { name: 'Восстановление малое', level: 2, school: 'abjuration', castingTime: '1 действие', range: 'Касание', duration: 'Мгновенная', components: 'В, С', description: 'Прекращает один эффект: очарование, паралич' },
  { name: 'Звериные узы', level: 2, school: 'enchantment', castingTime: '1 действие', range: 'На себя', duration: 'Концентрация, 1 час', components: 'В', description: 'Видите глазами фамильяра, делитесь чувствами', concentration: true },
  
  // 3rd Level
  { name: 'Огненный шар', level: 3, school: 'evocation', castingTime: '1 действие', range: '150 фт.', duration: 'Мгновенная', components: 'В, С, М', description: 'Взрыв огня в радиусе 20 футов, 8d6 урона', damage: '8d6', save: 'Ловкость' },
  { name: 'Молния', level: 3, school: 'evocation', castingTime: '1 действие', range: 'На себя (линия 100 фт.)', duration: 'Мгновенная', components: 'В, С, М', description: 'Линия молнии, 8d6 урона электричеством', damage: '8d6', save: 'Ловкость' },
  { name: 'Контрзаклинание', level: 3, school: 'abjuration', castingTime: '1 реакция', range: '60 фт.', duration: 'Мгновенная', components: 'С', description: 'Прерывает заклинание противника' },
  { name: 'Рассеивание магии', level: 3, school: 'abjuration', castingTime: '1 действие', range: '120 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Прекращает заклинание или магический эффект' },
  { name: 'Ускорение', level: 3, school: 'transmutation', castingTime: '1 действие', range: '30 фт.', duration: 'Концентрация, 1 минута', components: 'В, С, М', description: 'Удваивает скорость, +2 КД, дополнительное действие', concentration: true },
  { name: 'Полёт (массовый)', level: 3, school: 'transmutation', castingTime: '1 действие', range: 'Касание', duration: 'Концентрация, 10 минут', components: 'В, С, М', description: 'До 5 существ получают скорость полёта 60 фт.', concentration: true },
  { name: 'Огненный щит', level: 3, school: 'evocation', castingTime: '1 действие', range: 'На себя', duration: '10 минут', components: 'В, С, М', description: 'Аура огня или холода, 2d8 урона атакующим', damage: '2d8' },
  { name: 'Лечение ран (больших)', level: 3, school: 'evocation', castingTime: '1 действие', range: '30 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Восстанавливает 3d8 + модификатор HP', save: 'heal' },
  { name: 'Разговор с животными', level: 3, school: 'divination', castingTime: '1 действие', range: 'На себя', duration: '10 минут', components: 'В, С', description: 'Общаетесь с животными и понимаете их' },
  { name: 'Призыв молнии', level: 3, school: 'conjuration', castingTime: '1 действие', range: '120 фт.', duration: 'Концентрация, до 10 минут', components: 'В, С', description: 'Столб молнии, 3d10 урона электричеством', damage: '3d10', save: 'Телосложение', concentration: true },
  { name: 'Подводное дыхание', level: 3, school: 'transmutation', castingTime: '1 действие', range: '30 фт.', duration: '24 часа', components: 'В, С, М', ritual: true, description: 'До 10 существ могут дышать под водой' },
  { name: 'Охранные руны', level: 3, school: 'abjuration', castingTime: '1 час', range: 'Касание', duration: 'До вскрытия или 10 дней', components: 'В, С, М', description: 'Ловушка, взрывающаяся при активации, 3d8 урона', damage: '3d8', save: 'Ловкость' },
  { name: 'Медвежья выносливость', level: 3, school: 'transmutation', castingTime: '1 действие', range: 'Касание', duration: 'Концентрация, 1 минута', components: 'В, С, М', description: '+2d8 временных HP цели', concentration: true },
  { name: 'Снятие проклятия', level: 3, school: 'abjuration', castingTime: '1 действие', range: 'Касание', duration: 'Мгновенная', components: 'В, С', description: 'Снимает одно проклятие с существа или предмета' },
  
  // 4th Level
  { name: 'Каменная кожа', level: 4, school: 'abjuration', castingTime: '1 действие', range: 'Касание', duration: 'Концентрация, 1 час', components: 'В, С, М', description: 'Сопротивление немагическому урону', concentration: true },
  { name: 'Свобода движения', level: 4, school: 'abjuration', castingTime: '1 действие', range: 'Касание', duration: '1 час', components: 'В, С, М', description: 'Нельзя быть схваченным или парализованным' },
  { name: 'Владение смертью', level: 4, school: 'necromancy', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В, С', description: '7d8 урона некротической энергией, половина восстанавливает HP', damage: '7d8', save: 'Мудрость' },
  { name: 'Изгнание', level: 4, school: 'abjuration', castingTime: '1 действие', range: '60 фт.', duration: 'Концентрация, 1 минута', components: 'В, С, М', description: 'Отправляет цель на другой план, если HP < 50', save: 'Харизма', concentration: true },
  { name: 'Огромное лечение ран', level: 4, school: 'evocation', castingTime: '1 действие', range: 'Касание', duration: 'Мгновенная', components: 'В, С', description: 'Восстанавливает 4d8 + модификатор HP', save: 'heal' },
  { name: 'Каменная форма', level: 4, school: 'transmutation', castingTime: '1 действие', range: 'Касание', duration: 'Мгновенная', components: 'В, С', description: 'Превращает камень в глину или наоборот' },
  { name: 'Превращение', level: 4, school: 'transmutation', castingTime: '1 действие', range: '60 фт.', duration: 'Концентрация, 10 минут', components: 'В, С, М', description: 'Превращает существо в другое существо', concentration: true },
  { name: 'Стена огня', level: 4, school: 'evocation', castingTime: '1 действие', range: '120 фт.', duration: 'Концентрация, 10 минут', components: 'В, С, М', description: 'Стена огня, 5d8 урона при прохождении', damage: '5d8', save: 'Ловкость', concentration: true },
  { name: 'Изготовление', level: 4, school: 'transmutation', castingTime: '10 минут', range: '120 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Создаёт предмет из сырья' },
  
  // 5th Level
  { name: 'Огненная буря', level: 5, school: 'evocation', castingTime: '1 действие', range: '120 фт.', duration: 'Мгновенная', components: 'В, С', description: '10 огненных столбов, 8d6 урона', damage: '8d6', save: 'Ловкость' },
  { name: 'Оживление', level: 5, school: 'necromancy', castingTime: '1 час', range: 'Касание', duration: 'Мгновенная', components: 'В, С, М', description: 'Воскрешает существо, умершее в течение 10 дней' },
  { name: 'Стена силы', level: 5, school: 'evocation', castingTime: '1 действие', range: '120 фт.', duration: 'Концентрация, 10 минут', components: 'В, С, М', description: 'Невидимая стена, 10d6 урона при разрушении', damage: '10d6', concentration: true },
  { name: 'Круг силы', level: 5, school: 'abjuration', castingTime: '1 действие', range: 'На себя (радиус 10 фт.)', duration: 'Концентрация, 10 минут', components: 'В, С, М', description: 'Сопротивление урону от небожителей, исчадий, фей', concentration: true },
  { name: 'Обет', level: 5, school: 'enchantment', castingTime: '1 минута', range: '60 фт.', duration: '30 дней', components: 'В', description: 'Существо не может нарушить обет' },
  { name: 'Общение с природой', level: 5, school: 'divination', castingTime: '1 минута', range: 'На себя', duration: 'Мгновенная', components: 'В, С', ritual: true, description: 'Узнаёте 3 факта о местности в радиусе 3 миль' },
  { name: 'Восставший труп', level: 5, school: 'necromancy', castingTime: '1 минута', range: '10 фт.', duration: 'Мгновенная', components: 'В, С, М', description: 'Создаёт нежить из трупа' },
  { name: 'Древесный путь', level: 5, school: 'conjuration', castingTime: '1 действие', range: 'На себя', duration: '1 минута', components: 'В, С', description: 'Телепортация через деревья' },
  { name: 'Священное оружие', level: 5, school: 'evocation', castingTime: '1 бонусное действие', range: '60 фт.', duration: 'Концентрация, 1 минута', components: 'В, С', description: 'Призрачное оружие атакует по вашему выбору, 2d8+мод', damage: '2d8', concentration: true },
  
  // 6th Level
  { name: 'Истинное зрение', level: 6, school: 'divination', castingTime: '1 действие', range: 'Касание', duration: '1 час', components: 'В, С, М', description: 'Видит скрытых, невидимых, эфирных существ и истинную форму' },
  { name: 'Слово Сили: Оглушение', level: 6, school: 'enchantment', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В', description: 'Оглушает существо с 150 HP или меньше' },
  { name: 'Лечение ран (массовое)', level: 6, school: 'evocation', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В, С', description: 'Восстанавливает 3d8 HP всем существам в радиусе 30 фт.' },
  { name: 'Слово возвращения', level: 6, school: 'conjuration', castingTime: '1 действие', range: 'На себя', duration: 'Мгновенная', components: 'В', description: 'Телепортация в известное святилище' },
  { name: 'Героизм', level: 6, school: 'enchantment', castingTime: '1 действие', range: 'Касание', duration: 'Концентрация, 1 минута', components: 'В, С', description: 'Иммунитет к испугу, +10 временных HP', concentration: true },
  { name: 'Необнаружимость', level: 6, school: 'abjuration', castingTime: '1 действие', range: 'Касание', duration: '8 часов', components: 'В, С, М', description: 'Существо не обнаруживается прорицанием' },
  
  // 7th Level
  { name: 'Замедление падения', level: 7, school: 'transmutation', castingTime: '1 реакция', range: '60 фт.', duration: 'Мгновенная', components: 'В, М', description: 'Падение существа замедляется до 0 урона' },
  { name: 'Врата', level: 7, school: 'conjuration', castingTime: '1 действие', range: '60 фт.', duration: 'Концентрация, 1 минута', components: 'В, С, М', description: 'Открывает портал в другой план существования', concentration: true },
  { name: 'Огненная буря (мощная)', level: 7, school: 'evocation', castingTime: '1 действие', range: '150 фт.', duration: 'Мгновенная', components: 'В, С, М', description: 'Огненный дождь, 10d6 урона', damage: '10d6', save: 'Ловкость' },
  { name: 'Телепортация', level: 7, school: 'conjuration', castingTime: '1 действие', range: '10 фт.', duration: 'Мгновенная', components: 'В', description: 'Телепортация до 8 существ в известное место' },
  { name: 'Регенерация', level: 7, school: 'transmutation', castingTime: '1 минута', range: 'Касание', duration: '1 час', components: 'В, С, М', description: 'Цель восстанавливает 4d8 + 3 HP каждый раунд' },
  { name: 'Возрождение', level: 7, school: 'necromancy', castingTime: '1 час', range: 'Касание', duration: 'Мгновенная', components: 'В, С, М', description: 'Воскрешает существо, умершее не более 100 лет назад' },
  
  // 8th Level
  { name: 'Слово Сили: Смерть', level: 8, school: 'enchantment', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В', description: 'Мгновенно убивает существо с 100 HP или меньше' },
  { name: 'Воплощение смерти', level: 8, school: 'necromancy', castingTime: '1 действие', range: '60 фт.', duration: 'Мгновенная', components: 'В, С', description: '10d6+40 урона некротической энергией', damage: '10d6+40', save: 'Телосложение' },
  { name: 'Власть над погодой', level: 8, school: 'transmutation', castingTime: '10 минут', range: 'На себя (радиус 5 миль)', duration: 'Концентрация, 8 часов', components: 'В, С, М', description: 'Контролируете погоду в огромной области', concentration: true },
  { name: 'Землетрясение', level: 8, school: 'evocation', castingTime: '1 действие', range: '500 фт.', duration: 'Концентрация, 1 минута', components: 'В, С, М', description: 'Мощное землетрясение в радиусе 100 фт.', damage: '50', save: 'Ловкость', concentration: true },
  { name: 'Истинное воскрешение', level: 8, school: 'necromancy', castingTime: '1 час', range: 'Касание', duration: 'Мгновенная', components: 'В, С, М', description: 'Воскрешает существо, умершее до 200 лет назад' },
  
  // 9th Level
  { name: 'Желание', level: 9, school: 'conjuration', castingTime: '1 действие', range: 'На себя', duration: 'Мгновенная', components: 'В', description: 'Исполняет любое желание. Может иметь непредсказуемые последствия!' },
  { name: 'Чудо', level: 9, school: 'evocation', castingTime: '1 минута', range: 'На себя', duration: 'Мгновенная', components: 'В, С', description: 'Просит божество о чуде' },
  { name: 'Истинное воскрешение', level: 9, school: 'necromancy', castingTime: '1 час', range: 'Касание', duration: 'Мгновенная', components: 'В, С, М', description: 'Воскрешает существо, умершее до 2000 лет назад, даже без тела' },
  { name: 'Остановка времени', level: 9, school: 'transmutation', castingTime: '1 действие', range: 'На себя', duration: 'Мгновенная', components: 'В', description: 'Останавливает время для всех кроме вас на 1d4+2 раунда' },
  { name: 'Метеоритный дождь', level: 9, school: 'conjuration', castingTime: '1 действие', range: '1 миля', duration: 'Мгновенная', components: 'В, С', description: '8 огненных шаров, 20d6 урона каждый', damage: '8x20d6', save: 'Ловкость' },
  { name: 'Буря гнева', level: 9, school: 'conjuration', castingTime: '1 действие', range: 'На себя (радиус 300 фт.)', duration: 'Концентрация, до 1 минуты', components: 'В, С', description: 'Мощная буря: огонь, лёд, град, молнии', damage: '2d8', save: 'Ловкость', concentration: true },
];

// ============ ENEMIES ============

export const enemies: Enemy[] = [
  // CR 0-1/4
  { name: 'Крыса-гигант', hp: 7, maxHp: 7, ac: 12, attack: 'Укус', damage: '1 колющий', cr: 0.125, xp: 10, type: 'зверь', abilities: ['Обоняние'], loot: [] },
  { name: 'Гоблин', hp: 7, maxHp: 7, ac: 15, attack: 'Скимитар', damage: '1d6+2 рубящий', cr: 0.25, xp: 50, type: 'гуманоид (гоблиноид)', abilities: ['Уход в тень'], loot: [{ ...weapons[0] }] },
  { name: 'Скелет', hp: 13, maxHp: 13, ac: 13, attack: 'Короткий меч', damage: '1d6+2 колющий', cr: 0.25, xp: 50, type: 'нежить', abilities: ['Уязвимость к дробящему'], loot: [] },
  { name: 'Зомби', hp: 22, maxHp: 22, ac: 8, attack: 'Удар', damage: '1d6+2 дробящий', cr: 0.25, xp: 50, type: 'нежить', abilities: ['Невосприимчивость к морали'], loot: [] },
  { name: 'Кобольд', hp: 5, maxHp: 5, ac: 12, attack: 'Кинжал', damage: '1d4+2 колющий', cr: 0.125, xp: 10, type: 'гуманоид (рептилоид)', abilities: ['Тактика стаи'], loot: [] },
  { name: 'Ор', hp: 15, maxHp: 15, ac: 13, attack: 'Скимитар', damage: '1d6+3 рубящий', cr: 0.5, xp: 100, type: 'гуманоид (орк)', abilities: ['Агрессия'], loot: [] },
  { name: 'Кенку', hp: 13, maxHp: 13, ac: 13, attack: 'Короткий меч', damage: '1d6+2 колющий', cr: 0.25, xp: 50, type: 'гуманоид (птица)', abilities: ['Имитация'], loot: [] },
  // CR 1/2
  { name: 'Огромный паук', hp: 26, maxHp: 26, ac: 14, attack: 'Укус', damage: '1d8+4 колющий + яд', cr: 1, xp: 200, type: 'зверь', abilities: ['Хождение по паутине', 'Паутина'], loot: [] },
  { name: 'Гарпия', hp: 52, maxHp: 52, ac: 11, attack: 'Когти', damage: '2d6+2 рубящий', cr: 1, xp: 200, type: 'чудовище', abilities: ['Песнь очарования'], loot: [] },
  { name: 'Тень', hp: 16, maxHp: 16, ac: 12, attack: 'Касание', damage: '2d6+2 некротический', cr: 0.5, xp: 100, type: 'нежить', abilities: ['Слияние с тенью', 'Ослабление силы'], loot: [] },
  { name: 'Гигантский скорпион', hp: 52, maxHp: 52, ac: 15, attack: 'Жало', damage: '1d10+4 колющий + яд', cr: 3, xp: 700, type: 'зверь', abilities: ['Хвостовой удар'], loot: [] },
  // CR 1
  { name: 'Бандит-капитан', hp: 65, maxHp: 65, ac: 15, attack: 'Скимитар', damage: '1d6+3 рубящий', cr: 2, xp: 450, type: 'гуманоид', abilities: ['Парирование'], loot: [{ ...weapons[12] }, { ...armors[5] }] },
  { name: 'Огр', hp: 59, maxHp: 59, ac: 11, attack: 'Дубина', damage: '2d8+4 дробящий', cr: 2, xp: 450, type: 'великан', abilities: [], loot: [{ ...weapons[13] }] },
  { name: 'Волк-оборотень', hp: 58, maxHp: 58, ac: 14, attack: 'Укус', damage: '2d6+4 колющий', cr: 3, xp: 700, type: 'оборотень', abilities: ['Оборотничество', 'Регенерация', 'Уязвимость к серебру'], loot: [{ ...potions[0] }] },
  { name: 'Гигант-огненный', hp: 138, maxHp: 138, ac: 14, attack: 'Двуручный меч', damage: '3d6+7 рубящий + 1d6 огненный', cr: 9, xp: 5000, type: 'великан', abilities: ['Огненное дыхание'], loot: [{ ...weapons[13] }] },
  // CR 2-3
  { name: 'Минотавр', hp: 76, maxHp: 76, ac: 14, attack: 'Секира', damage: '2d12+4 рубящий', cr: 3, xp: 700, type: 'чудовище', abilities: ['Рывок', 'Обвинение'], loot: [{ ...weapons[13] }] },
  { name: 'Тёмный маг', hp: 45, maxHp: 45, ac: 12, attack: 'Магическая стрела', damage: '3d4+3 силовое поле', cr: 3, xp: 700, type: 'гуманоид', abilities: ['Контрзаклинание', 'Огненный шар'], loot: [{ ...scrolls[1] }, { ...wands[0] }] },
  { name: 'Мантикора', hp: 80, maxHp: 80, ac: 14, attack: 'Укус', damage: '2d10+3 колющий', cr: 3, xp: 700, type: 'чудовище', abilities: ['Полёт', 'Шипы хвоста'], loot: [] },
  { name: 'Бехолдер', hp: 180, maxHp: 180, ac: 18, attack: 'Укус', damage: '4d8+5 колющий', cr: 13, xp: 10000, type: 'аберрация', abilities: ['Антимагия', 'Глазные лучи'], loot: [{ ...rings[0] }] },
  // CR 5+
  { name: 'Василиск', hp: 85, maxHp: 85, ac: 15, attack: 'Укус', damage: '2d10+3 колющий', cr: 5, xp: 1800, type: 'чудовище', abilities: ['Окаменение взглядом'], loot: [{ ...rings[0] }] },
  { name: 'Химера', hp: 114, maxHp: 114, ac: 14, attack: 'Укус', damage: '2d10+4 колющий', cr: 6, xp: 2300, type: 'чудовище', abilities: ['Три головы', 'Огненное дыхание'], loot: [{ ...weapons[26] }] },
  { name: 'Молодой красный дракон', hp: 178, maxHp: 178, ac: 18, attack: 'Укус', damage: '2d10+6 колющий', cr: 10, xp: 5900, type: 'дракон', abilities: ['Огненное дыхание', 'Полёт'], loot: [{ ...weapons[15] }, { ...armors[7] }] },
  { name: 'Молодой синий дракон', hp: 152, maxHp: 152, ac: 18, attack: 'Укус', damage: '2d10+6 колющий', cr: 9, xp: 5000, type: 'дракон', abilities: ['Молниевое дыхание', 'Полёт'], loot: [{ ...weapons[15] }] },
  { name: 'Молодой зелёный дракон', hp: 136, maxHp: 136, ac: 18, attack: 'Укус', damage: '2d10+6 колющий', cr: 8, xp: 3900, type: 'дракон', abilities: ['Ядовитое дыхание', 'Полёт'], loot: [{ ...weapons[15] }] },
  { name: 'Молодой белый дракон', hp: 133, maxHp: 133, ac: 17, attack: 'Укус', damage: '2d10+5 колющий', cr: 6, xp: 2300, type: 'дракон', abilities: ['Ледяное дыхание', 'Полёт'], loot: [{ ...weapons[15] }] },
  { name: 'Молодой чёрный дракон', hp: 127, maxHp: 127, ac: 18, attack: 'Укус', damage: '2d10+5 колющий', cr: 7, xp: 2900, type: 'дракон', abilities: ['Кислотное дыхание', 'Полёт'], loot: [{ ...weapons[15] }] },
  // CR 10+
  { name: 'Лич', hp: 135, maxHp: 135, ac: 17, attack: 'Парализующее касание', damage: '3d6 холод + паралич', cr: 21, xp: 33000, type: 'нежить', abilities: ['Магия 18 уровня', 'Восстановление', 'Сопротивление урону'], loot: [{ ...weapons[16] }, { ...rings[1] }, { ...scrolls[3] }] },
  { name: 'Древний красный дракон', hp: 546, maxHp: 546, ac: 22, attack: 'Укус', damage: '2d10+10 колющий', cr: 24, xp: 75000, type: 'дракон', abilities: ['Огненное дыхание', 'Ужас', 'Магия 18 уровня'], loot: [{ ...weapons[17] }, { ...armors[11] }, { ...rings[1] }] },
  { name: 'Древний синий дракон', hp: 481, maxHp: 481, ac: 22, attack: 'Укус', damage: '2d10+10 колющий', cr: 23, xp: 50000, type: 'дракон', abilities: ['Молниевое дыхание', 'Ужас', 'Магия'], loot: [{ ...weapons[17] }, { ...rings[1] }] },
  { name: 'Демон-лорд Демогоргон', hp: 406, maxHp: 406, ac: 22, attack: 'Удар', damage: '4d6+10 рубящий', cr: 26, xp: 90000, type: 'демон', abilities: ['Телепортация', 'Магия', 'Регенерация', 'Две головы'], loot: [{ ...weapons[17] }, { ...rings[4] }] },
  { name: 'Демон-лорд Оркус', hp: 406, maxHp: 406, ac: 17, attack: 'Жезл смерти', damage: '3d8+10 некротический', cr: 26, xp: 90000, type: 'демон', abilities: ['Власть над нежитью', 'Телепортация', 'Магия'], loot: [{ ...weapons[17] }, { ...rings[1] }] },
  { name: 'Архидьявол Асмодей', hp: 997, maxHp: 997, ac: 22, attack: 'Скипетр', damage: '4d6+10 дробящий + 4d6 огненный', cr: 30, xp: 155000, type: 'дьявол', abilities: ['Власть над дьяволами', 'Магия 18 уровня', 'Регенерация'], loot: [{ ...weapons[17] }, { ...rings[4] }] },
  { name: 'Тираннозавр', hp: 136, maxHp: 136, ac: 13, attack: 'Укус', damage: '4d12+7 колющий', cr: 8, xp: 3900, type: 'зверь', abilities: [], loot: [] },
  { name: 'Фи', hp: 36, maxHp: 36, ac: 12, attack: 'Касание', damage: '1d4 урона + болезнь', cr: 0, xp: 0, type: 'фея', abilities: ['Невидимость', 'Создание иллюзий'], loot: [] },
  { name: 'Суккуб', hp: 66, maxHp: 66, ac: 15, attack: 'Касание', damage: '2d6+3 некротический', cr: 4, xp: 1100, type: 'демон (фиенд)', abilities: ['Очарование', 'Телепортация', 'Превращение'], loot: [] },
  { name: 'Элементаль огня', hp: 102, maxHp: 102, ac: 13, attack: 'Удар', damage: '2d6+3 огненный', cr: 5, xp: 1800, type: 'элементаль', abilities: ['Огненная аура', 'Уязвимость к воде'], loot: [] },
  { name: 'Элементаль воды', hp: 114, maxHp: 114, ac: 14, attack: 'Удар', damage: '2d8+4 дробящий', cr: 5, xp: 1800, type: 'элементаль', abilities: ['Водный вихрь', 'Уязвимость к огню'], loot: [] },
  { name: 'Элементаль земли', hp: 126, maxHp: 126, ac: 17, attack: 'Удар', damage: '2d8+5 дробящий', cr: 5, xp: 1800, type: 'элементаль', abilities: ['Осаждение', 'Уязвимость к звуку'], loot: [] },
  { name: 'Элементаль воздуха', hp: 90, maxHp: 90, ac: 15, attack: 'Удар', damage: '2d8+4 дробящий', cr: 5, xp: 1800, type: 'элементаль', abilities: ['Вихрь', 'Полёт'], loot: [] },
];

// ============ NPC ============

export const npcTemplates: NPC[] = [
  { name: 'Эльдрин Мудрый', description: 'Старый маг в синем капюшоне с длинной седой бородой и посохом из лунного дерева', disposition: 'friendly', questGiver: true, secret: 'Знает о древнем артефакте в руинах, но боится говорить об этом', dialogue: ['Приветствую тебя, путник. Я чувствую в тебе силу...', 'Древние пророчества говорят о грядущей тьме...', 'Мои кости помнят времена, когда драконы правили небом...', 'В библиотеке есть свиток, который может помочь...'] },
  { name: 'Торин Железный Молот', description: 'Мускулистый дварф с заплетённой бородой и боевым молотом за поясом', disposition: 'neutral', questGiver: true, shopkeeper: true, secret: 'Его кузница стоит на месте древнего храма', dialogue: ['Ха! Ещё один искатель приключений!', 'Мой молот не знает пощады!', 'Лучшее оружие — у меня в кузнице!', 'Предки шепчут мне о надвигающейся беде...'] },
  { name: 'Лирэль Лунная Тень', description: 'Загадочная эльфийка с серебристыми волосами и зелёными глазами, светящимися в темноте', disposition: 'mysterious', questGiver: true, secret: 'Она — принцесса изгнанных эльфов, скрывающаяся от убийц', dialogue: ['Луна шепчет мне твоё имя...', 'Тёмные времена грядут, герой...', 'Я видела твою судьбу в звёздах...', 'Доверяй теням — они вернее света...'] },
  { name: 'Гримбальд Чёрный Клык', description: 'Наёмник с шрамом через всё лицо и холодным взглядом, в потёртой кольчуге', disposition: 'neutral', questGiver: true, secret: 'Работает на тайную организацию, планирующую переворот', dialogue: ['Работа есть для тех, у кого хватит смелости...', 'Золото — мой единственный бог.', 'Не задавай вопросов, если хочешь жить долго.', 'Я видел вещи, от которых у тебя волосы встанут дыбом...'] },
  { name: 'Сестра Милисента', description: 'Жрица в белых одеждах с символом солнца на груди, излучающая покой', disposition: 'friendly', questGiver: true, secret: 'Потеряла веру после смерти семьи, но скрывает это', dialogue: ['Да пребудет с тобой свет, дитя моё...', 'Храм нуждается в помощи...', 'Зло распространяется, мы должны действовать!', 'Боги испытывают нас, но не оставляют...'] },
  { name: 'Зара Тёмная', description: 'Ведьма с вороном на плече и странными амулетами, живущая в хижине на курьих ножках', disposition: 'mysterious', questGiver: true, shopkeeper: true, secret: 'На самом деле — замаскированная hag (карга), но помогает из своих интересов', dialogue: ['Мой котёл видит будущее...', 'Хочешь зелье? У меня есть всё...', 'Осторожнее с желаниями, милый...', 'Ворон принёс весть — грядёт буря...'] },
  { name: 'Капитан Родрик', description: 'Седой ветеран с множеством наград и усталым взглядом, командующий городской стражей', disposition: 'friendly', questGiver: true, secret: 'Его сын пропал при исполнении, и он ищет его', dialogue: ['Солдат, мне нужна твоя помощь!', 'Враг у ворот, мы должны действовать!', 'За короля и родину!', 'Я видел слишком много смертей на этой войне...'] },
  { name: 'Финдук Полурослик', description: 'Весёлый полурослик с огромным рюкзаком и улыбкой до ушей, торгующий на дорогах', disposition: 'friendly', shopkeeper: true, secret: 'Контрабандист, но только запрещённых книг', dialogue: ['О, чудесный день для торговли!', 'У меня есть вещи, которые вы не найдёте больше нигде!', 'Скидка для друзей!', 'Знаете, в тех горах я видел кое-что интересное...'] },
  { name: 'Призрак Леди Изабель', description: 'Прозрачная фигура женщины в старинном платье, парящая над полом замка', disposition: 'mysterious', questGiver: true, secret: 'Убита собственным мужем 200 лет назад, её дух привязан к медальону', dialogue: ['Помоги мне обрести покой...', 'Он предал меня... отомсти за меня...', 'Найди мой медальон...', 'Стены помнят мои крики...'] },
  { name: 'Дракон-метаморф Векс', description: 'Загадочный незнакомец с вертикальными зрачками и неестественно бледной кожей', disposition: 'mysterious', questGiver: true, secret: 'На самом деле — серебряный дракон, защищающий регион от вторжения', dialogue: ['Интересный экземпляр...', 'Я видел многое за свои... годы...', 'Судьба мира в ваших руках, смертные.', 'Будьте осторожны — не всё золото то, что блестит...'] },
  { name: 'Мастер Шэдоу', description: 'Ниндзя в чёрном, чьё лицо скрыто маской. Движется бесшумно', disposition: 'neutral', questGiver: true, secret: 'Лидер гильдии убийц, но следует строгому кодексу чести', dialogue: ['Тишина — лучший друг воина...', 'Я научу тебя, если докажешь свою ценность...', 'Тени не лгут.', 'Смерть приходит без предупреждения...'] },
  { name: 'Профессор Арканиус', description: 'Рассеянный учёный в очках с толстыми линзами, окружённый книгами', disposition: 'friendly', questGiver: true, secret: 'Открыл портал в Бездну, но пытается это скрыть', dialogue: ['Ах, молодой искатель знаний!', 'Эта книга содержит великие тайны...', 'Осторожнее с артефактами, они могут быть опасны!', 'Мои исследования почти завершены... почти...'] },
  { name: 'Король Трон', description: 'Могучий воин-король в золотой короне и латах, правящий железной рукой', disposition: 'neutral', questGiver: true, secret: 'Болен неизлечимой болезнью, скрывает это от всех', dialogue: ['Говори, подданный.', 'Королевство нуждается в верных воинах.', 'Моя власть — моя ответственность.', 'Предательство карается смертью...'] },
  { name: 'Мадам Фортuna', description: 'Гадалка-циганка с картами Таро и хрустальным шаром', disposition: 'mysterious', questGiver: true, secret: 'На самом деле — агент тайной полиции, но иногда говорит правду', dialogue: ['Карты говорят... интересно...', 'Вижу опасность в твоём будущем...', 'За монету я расскажу больше...', 'Судьба неумолима, но её можно изменить...'] },
  { name: 'Грок', description: 'Полуорк-гладиатор с огромными мускулами и добрыми глазами', disposition: 'friendly', questGiver: false, secret: 'Бывший наёмник, ставший гладиатором, чтобы заработать свободу для семьи', dialogue: ['Арена — мой дом.', 'Сильный не тот, кто бьёт, а тот, кто защищает.', 'Хочешь совет? Бей первым.', 'Мои братья ждут, когда я куплю их свободу...'] },
];

// ============ LOCATIONS ============

export const locations = [
  { name: 'Тёмный лес Шепчущих Деревьев', description: 'Деревья здесь шепчут древние тайны. Туман стелется между стволами, а корни шевелятся, когда ты отводишь взгляд. Говорят, лес живой — и он наблюдает.', danger: 'medium' },
  { name: 'Заброшенная таверна "Сломанный Меч"', description: 'Пыльные столы и разбитые кружки. Когда-то здесь кипела жизнь, но теперь только ветер гуляет между пустых бутылок. На стене — карта с отмеченными крестами.', danger: 'low' },
  { name: 'Кристальные пещеры', description: 'Подземелье, освещённое мерцающими кристаллами всех цветов радуги. Каждый кристалл издаёт тихий звон, создавая мелодию. Некоторые кристаллы пульсируют в такт твоему сердцу.', danger: 'medium' },
  { name: 'Горная тропа к Храму Ветров', description: 'Узкая тропа вдоль обрыва. Ветер воет между скалами, пытаясь столкнуть тебя вниз. Вдалеке виднеется храм, парящий над вершиной.', danger: 'high' },
  { name: 'Болота Гнилой Топи', description: 'Зловонный туман. Пузыри газа поднимаются из чёрной воды. Деревья искривлены, а из воды иногда вылезают бледные руки.', danger: 'high' },
  { name: 'Подземный город Унтервир', description: 'Город дроу, освещённый магическим светом. Тёмная красота чёрных башен контрастирует с жестокостью обитателей. Рабы трудятся на улицах.', danger: 'very_high' },
  { name: 'Руины замка Вороньей Скалы', description: 'Разрушенный замок на вершине утёса. Вороньи гнёзда повсюду. Стены покрыты странными рунами, которые светятся в полнолуние.', danger: 'medium' },
  { name: 'Рыночная площадь Ватердипа', description: 'Шумная площадь, полная торговцев, покупателей и бродяг. Запах специй смешивается с ароматом жареного мяса. Карманники снуют между толпой.', danger: 'low' },
  { name: 'Великая Библиотека Кандлкипа', description: 'Бесконечные полки с книгами. Запах пергамента и пыли. Тихие монахи перемещаются между стеллажами. Здесь хранятся знания тысячелетий.', danger: 'low' },
  { name: 'Логово Дракона Пепельной Горы', description: 'Воздух раскалён. Кости жертв хрустят под ногами. Стены пещеры покрыты сажей и золотом. Где-то в глубине слышно тяжёлое дыхание.', danger: 'very_high' },
  { name: 'Таверна "Отдыхающий путник"', description: 'Уютная таверна с камином и запахом жареного мяса. Бард играет на лютне в углу. Хозяйка — добродушная полурослица — наливает эль.', danger: 'low' },
  { name: 'Заброшенные шахты Фанданте', description: 'Тёмные тоннели, где когда-то добывали мифрил. Рельсы ржавые, вагонетки перевёрнуты. Из глубины доносится стук кирок — но шахты давно заброшены.', danger: 'high' },
  { name: 'Храм Забытого Бога', description: 'Древний храм с разрушенными статуями. Магия всё ещё пульсирует в стенах. Алтарь покрыт пылью, но свечи горят сами собой.', danger: 'medium' },
  { name: 'Порт Чёрной Воды', description: 'Пиратский порт с подозрительными типами в каждой тени. Корабли с чёрными парусами покачиваются на волнах. Таверны полны пьяных матросов.', danger: 'medium' },
  { name: 'Эльфийские руины Сильванести', description: 'Разрушенные эльфийские башни, поросшие мхом и плющом. Даже в руинах чувствуется магия. Деревья вокруг цветут, хотя на дворе зима.', danger: 'medium' },
  { name: 'Арена Крови', description: 'Гладиаторская арена. Крики толпы оглушают. Песок пропитан кровью. В клетках рычат чудовища, ожидающие своего выхода.', danger: 'high' },
  { name: 'Лесная поляна Дриад', description: 'Волшебная поляна, где танцуют феи. Воздух наполнен магией и ароматом цветов. Деревья кланяются тебе, а ручей поёт мелодию.', danger: 'low' },
  { name: 'Гробница Древних Королей', description: 'Каменные саркофаги. Мумии спят вечным сном. На стенах — фрески, рассказывающие о забытых войнах. Воздух сухой и пахнет вечностью.', danger: 'very_high' },
  { name: 'Парящие острова Зефира', description: 'Острова, парящие в небе, соединённые мостами из облаков. Водопады стекают в пустоту. Здесь живут воздушные элементали и птицы-гиганты.', danger: 'high' },
  { name: 'Подводный город Мерфолии', description: 'Город на дне океана, защищённый магическим куполом. Коралловые здания светятся изнутри. Рыбы-гиганты плавают между башнями.', danger: 'medium' },
  { name: 'Пустошь Мёртвых Земель', description: 'Выжженная земля, где когда-то стоял великий город. Теперь здесь только пепел и кости. Небо всегда серое, а солнце не проникает сквозь облака.', danger: 'very_high' },
  { name: 'Серебряный лес Эльфхейма', description: 'Лес с серебряными деревьями и золотыми листьями. Эльфы живут в гармонии с природой. Воздух чист и наполнен магией. Здесь время течёт иначе.', danger: 'low' },
  { name: 'Канализация Подземного Города', description: 'Тёмные тоннели, полные крыс и нечистот. Здесь скрываются изгнанники и cultists. Стены покрыты странными символами.', danger: 'high' },
  { name: 'Ледяные пустоши Рауквина', description: 'Бескрайняя тундра, покрытая вечным льдом. Ветер режет как нож. Вдалеке виднеются ледяные великаны. Северное сияние танцует в небе.', danger: 'high' },
  { name: 'Вулкан Огненной Горы', description: 'Активный вулкан с реками лавы. Жар нестерпим. Здесь живут саламандры и огненные элементали. В глубине — кузница гигантов.', danger: 'very_high' },
  { name: 'Грибной лес Миркорра', description: 'Лес из гигантских грибов, достигающих 50 футов в высоту. Споры создают радужную дымку. Здесь живут грибные существа и странные твари.', danger: 'medium' },
  { name: 'Некромантская башня', description: 'Чёрная башня, окружённая кольцом мёртвых деревьев. Молнии бьют в её шпиль даже в ясную погоду. Из окон доносится зловещий смех.', danger: 'very_high' },
  { name: 'Друидская роща', description: 'Священная роща с древними дубами. В центре — камень, на котором друиды проводят ритуалы. Животные не боятся тебя здесь.', danger: 'low' },
  { name: 'Город воров Шэдоуглуб', description: 'Город, построенный в каньоне. Узкие улочки, тёмные переулки. Здесь правит гильдия воров, а закон — только для тех, кто может заплатить.', danger: 'high' },
  { name: 'Озеро Загадок', description: 'Кристально чистое озеро в центре гор. На дне видны руины затонувшего храма. По ночам из воды поднимается свет.', danger: 'medium' },
  { name: 'Планарный перекрёсток', description: 'Место, где сходятся границы планов. Здесь можно встретить существ из других миров. Реальность нестабильна — здания появляются и исчезают.', danger: 'very_high' },
  { name: 'Дворец Песчаного Султана', description: 'Величественный дворец из белого мрамора в центре пустыни. Фонтаны, сады, сокровищницы. Но за роскошью скрываются интриги.', danger: 'medium' },
  { name: 'Древний амфитеатр', description: 'Каменные трибуны, поросшие травой. Когда-то здесь выступали барды со всего мира. Акустика идеальна — даже шёпот слышен на последнем ряду.', danger: 'low' },
  { name: 'Кладбище Костей', description: 'Бесконечное кладбище с тысячами могил. Надгробия покрыты мхом. По ночам мертвецы поднимаются из могил, следуя зову некроманта.', danger: 'very_high' },
  { name: 'Лабиринт Минотавра', description: 'Бесконечные каменные коридоры, меняющие конфигурацию. На стенах — царапины от когтей. Где-то в глубине ревёт чудовище.', danger: 'high' },
  { name: 'Замок на краю мира', description: 'Замок, висящий над бездной. Мосты ведут в никуда. Хозяин замка — древний лич, собирающий знания со всех планов.', danger: 'very_high' },
  { name: 'Деревня на дереве', description: 'Деревня полуросликов, построенная на гигантском дубе. Домики соединены верёвочными мостами. Запах свежей выпечки витает в воздухе.', danger: 'low' },
  { name: 'Пиратский корабль "Чёрная Жемчужина"', description: 'Быстрый парусник с чёрными парусами. Пушки заряжены, команда готова к абордажу. Капитан — легендарный морой разбойник.', danger: 'medium' },
  { name: 'Школа магии', description: 'Академия для одарённых магией. Башни, библиотеки, лаборатории. Студенты практикуют заклинания во дворе. Директор — архимаг.', danger: 'low' },
  { name: 'Долина Драконов', description: 'Долина, где живут несколько драконов разных цветов. Они редко воюют друг с другом, но смертельны для смертных. Здесь можно заключить сделку.', danger: 'very_high' },
];

// ============ EVENTS ============

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
  'Деревья вокруг начинают двигаться',
  'Дождь из лягушек обрушивается на вас',
  'Вы видите двойника — точную свою копию',
  'Время останавливается на мгновение',
  'Звёзды на небе складываются в послание',
  'Земля раскрывается, и из глубины поднимается рука',
  'Стая летучих мышей проносится мимо',
  'Вы слышите далёкий звук рога',
  'Дорога раздваивается — какую выберете?',
  'Мост через пропасть начинает рушиться',
  'Вы находите дневник путешественника с описанием опасностей впереди',
  'Группа паломников просит защиты',
  'Вы видите мираж оазиса в пустыне',
  'Лунный свет превращает камни в серебро',
  'Древний голем пробуждается от долгого сна',
  'Вы чувствуете, что за вами следят',
  'Колокол звонит сам по себе',
  'Книга на полке начинает светиться',
  'Вы находите монету, которая всегда падает орлом',
  'Ветер приносит запах цветов, хотя вокруг пустошь',
  'Вы слышите свой собственный голос из будущего',
  'Тень отделяется от вас и уходит',
  'Фонтан начинает извергать вино вместо воды',
  'Статуя поворачивает голову и смотрит на вас',
  'Вы находите зеркало, показывающее другое измерение',
];

// ============ QUESTS ============

export const questTemplates = [
  { name: 'Проклятие Чёрного Леса', description: 'Деревня на краю леса страдает от странного проклятия. Жители медленно превращаются в деревья, их кожа покрывается корой. Старейшина просит найти источник зла.', type: 'main' as const, reward: { xp: 500, gold: 300 }, objectives: ['Найти источник проклятия', 'Победить ведьму', 'Снять чары с жителей'] },
  { name: 'Потерянный караван', description: 'Торговый караван с важным грузом пропал по пути из Ватердипа в Сильвермун. В караване были редкие артефакты. Купец обещает щедрую награду за возвращение товаров.', type: 'side' as const, reward: { xp: 200, gold: 500 }, objectives: ['Найти следы каравана', 'Спасти выживших', 'Вернуть товары'] },
  { name: 'Гробница Ужаса', description: 'В древней гробнице пробудилась нежить. Мертвецы выходят по ночам и нападают на путников. Местный лорд просит зачистить гробницу и найти источник воскрешения.', type: 'side' as const, reward: { xp: 350, gold: 200 }, objectives: ['Исследовать гробницу', 'Уничтожить источник нежити', 'Найти сокровища'] },
  { name: 'Драконье Наследие', description: 'Легендарный артефакт — Драконий Глаз — спрятан в логове древнего красного дракона. Артефакт может спасти королевство от надвигающейся войны. Но дракон не отдаст его добровольно.', type: 'main' as const, reward: { xp: 1000, gold: 1000 }, objectives: ['Найти логово дракона', 'Проникнуть внутрь незамеченными', 'Украсть или победить'] },
  { name: 'Тайна пропавшего мага', description: 'Известный маг Арканиус исчез при исследовании планарных порталов. Его ученики просят найти его или хотя бы узнать, что случилось. Последние записи ведут в заброшенную башню.', type: 'side' as const, reward: { xp: 300, gold: 150 }, objectives: ['Найти лабораторию мага', 'Изучить записи', 'Найти мага или его останки'] },
  { name: 'Восстание нежити', description: 'Кладбище оживает ночью. Мёртвые восстают из могил и бродят по окрестностям. Жители в ужасе. Священник подозревает некроманта, устроившего логово nearby.', type: 'main' as const, reward: { xp: 600, gold: 400 }, objectives: ['Исследовать кладбище ночью', 'Найти логово некроманта', 'Остановить ритуал'] },
  { name: 'Турнир героев', description: 'Великий турнир собирает лучших воинов королевства. Победитель получит легендарный меч и титул Чемпиона Короля. Но среди участников есть те, кто хочет использовать турнир для тёмных целей.', type: 'side' as const, reward: { xp: 400, gold: 600 }, objectives: ['Зарегистрироваться', 'Победить в поединках', 'Выиграть финал', 'Раскрыть заговор'] },
  { name: 'Кольцо Теней', description: 'Таинственная организация "Кольцо Теней" манипулирует событиями в городе. Они контролируют гильдии, подкупают стражу и готовят переворот. Нужно найти их лидера и остановить.', type: 'main' as const, reward: { xp: 800, gold: 500 }, objectives: ['Найти следы организации', 'Проникнуть в их логово', 'Разоблачить заговор', 'Победить лидера'] },
  { name: 'Утраченная реликвия', description: 'Священная реликвия храма была украдена cultists. Без неё защитные чары храма ослабевают, и древнее зло может вырваться на свободу. Нужно вернуть реликвию до полнолуния.', type: 'side' as const, reward: { xp: 450, gold: 350 }, objectives: ['Найти cultists', 'Проникнуть в их убежище', 'Вернуть реликвию', 'Восстановить чары'] },
  { name: 'Песнь сирены', description: 'Моряки исчезают один за другим. Говорят, их заманивает песня сирены из nearby острова. Нужно найти источник песни и спасти моряков, пока не стало слишком поздно.', type: 'side' as const, reward: { xp: 350, gold: 250 }, objectives: ['Добраться до острова', 'Найти сирену', 'Спасти моряков', 'Уничтожить или подчинить сирену'] },
  { name: 'Война кланов', description: 'Два дварфийских клана ведут кровопролитную войну за контроль над мифриловыми шахтами. Обе стороны просят помощи. Нужно найти мирное решение или выбрать сторону.', type: 'main' as const, reward: { xp: 700, gold: 800 }, objectives: ['Поговорить с обоими кланами', 'Найти причину войны', 'Разрешить конфликт'] },
  { name: 'Дитя пророчества', description: 'Пророчество гласит, что ребёнок, рождённый под кровавой луной, спасёт или уничтожит мир. Cultists ищут этого ребёнка. Нужно найти его раньше них.', type: 'main' as const, reward: { xp: 900, gold: 600 }, objectives: ['Найти ребёнка', 'Защитить от cultists', 'Раскрыть истинное пророчество'] },
];

// ============ RARITY ============

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

// ============ LOOT GENERATION ============

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
