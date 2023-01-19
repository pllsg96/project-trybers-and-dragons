import Race from './Race';

export default class Dwarf extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints = 80;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Dwarf._createdRacesInstances += 1;
  }

  public static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
