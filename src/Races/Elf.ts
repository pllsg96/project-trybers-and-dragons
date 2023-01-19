import Race from './Race';

export default class Elf extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints = 99;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Elf._createdRacesInstances += 1;
  }

  public static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
