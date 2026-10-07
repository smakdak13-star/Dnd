export interface CharacterStats {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface Character {
  name: string;
  race: string;
  class: string;
  level: number;
  hp: number;
  maxHp: number;
  stats: CharacterStats;
  inventory: string[];
  gold: number;
  backstory: string;
}

export interface Message {
  id: string;
  type: 'dm' | 'player' | 'system' | 'roll';
  content: string;
  timestamp: Date;
}

export interface GameState {
  location: string;
  timeOfDay: string;
  weather: string;
  quest: string;
  npcs: string[];
  events: string[];
}

export type GameScreen = 'character-creation' | 'game';
