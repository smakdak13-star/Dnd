export interface CharacterStats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'veryRare' | 'legendary' | 'artifact';

export interface Item {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'shield' | 'potion' | 'scroll' | 'ring' | 'wand' | 'staff' | 'wondrous' | 'tool' | 'ammo' | 'food' | 'material' | 'treasure';
  rarity: ItemRarity;
  description: string;
  damage?: string;
  armorClass?: number;
  properties?: string[];
  weight: number;
  value: number;
  attunement?: boolean;
  charges?: number;
  maxCharges?: number;
  effect?: string;
}

export interface Spell {
  name: string;
  level: number;
  school: 'abjuration' | 'conjuration' | 'divination' | 'enchantment' | 'evocation' | 'illusion' | 'necromancy' | 'transmutation';
  castingTime: string;
  range: string;
  duration: string;
  components: string;
  description: string;
  damage?: string;
  save?: string;
  concentration?: boolean;
  ritual?: boolean;
}

export type Condition = 
  | 'blinded' | 'charmed' | 'deafened' | 'frightened' | 'grappled'
  | 'incapacitated' | 'invisible' | 'paralyzed' | 'petrified' | 'poisoned'
  | 'prone' | 'restrained' | 'stunned' | 'unconscious' | 'exhaustion';

export interface ConditionEffect {
  type: Condition;
  duration: number; // rounds remaining
  source: string;
  severity?: number; // for exhaustion (1-6)
}

export interface Skill {
  name: string;
  ability: keyof CharacterStats;
  proficient: boolean;
  expertise?: boolean;
}

export interface Character {
  name: string;
  race: string;
  subrace?: string;
  class: string;
  subclass?: string;
  level: number;
  hp: number;
  maxHp: number;
  tempHp: number;
  stats: CharacterStats;
  inventory: Item[];
  equippedWeapon?: Item;
  equippedArmor?: Item;
  equippedShield?: Item;
  spells: Spell[];
  spellSlots: number[];
  maxSpellSlots: number[];
  skills: Skill[];
  conditions: ConditionEffect[];
  xp: number;
  xpToNext: number;
  gold: number;
  speed: number;
  armorClass: number;
  proficiencyBonus: number;
  inspiration: boolean;
  hitDice: string;
  maxHitDice: number;
  currentHitDice: number;
  backstory: string;
  alignment: string;
  personalityTraits: string[];
  ideals: string[];
  bonds: string[];
  flaws: string[];
  languages: string[];
  toolProficiencies: string[];
  savingThrowProficiencies: (keyof CharacterStats)[];
  features: string[];
  deathSaves: { successes: number; failures: number };
}

export interface Message {
  id: string;
  type: 'dm' | 'player' | 'system' | 'roll' | 'loot' | 'levelup' | 'combat';
  content: string;
  timestamp: Date;
}

export interface NPC {
  name: string;
  description: string;
  disposition: 'friendly' | 'neutral' | 'hostile' | 'mysterious';
  questGiver?: boolean;
  shopkeeper?: boolean;
  secret?: string;
  dialogue: string[];
}

export interface Quest {
  id: string;
  name: string;
  description: string;
  giver: string;
  reward: { xp: number; gold: number; items?: Item[] };
  objectives: string[];
  completed: boolean;
  failed: boolean;
  type: 'main' | 'side' | 'personal';
}

export interface GameState {
  location: string;
  locationDescription: string;
  timeOfDay: string;
  weather: string;
  day: number;
  quests: Quest[];
  npcs: NPC[];
  events: string[];
  combatActive: boolean;
  currentEnemy?: Enemy;
  dungeonLevel?: number;
  discoveredAreas: string[];
  reputation: number;
  storyFlags: string[];
}

export interface Enemy {
  name: string;
  hp: number;
  maxHp: number;
  ac: number;
  attack: string;
  damage: string;
  cr: number;
  xp: number;
  type: string;
  abilities: string[];
  loot: Item[];
}

export type GameScreen = 'character-creation' | 'game';

export interface Choice {
  text: string;
  action: string;
  check?: { stat: keyof CharacterStats; dc: number };
}
