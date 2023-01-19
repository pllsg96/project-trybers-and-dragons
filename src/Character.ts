import Archetype from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints:number ;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = race;
    this._dexterity = this.dexterity();
  }

  public get race() {
    return this._race;
  }

  private get dexterity(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
}