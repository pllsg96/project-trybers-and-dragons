import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _createdArchetypesInstances = 0;
  private _energyType : EnergyType = 'stamina';

  constructor(
    name: string,
  ) {
    super(name);
    Warrior._createdArchetypesInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._createdArchetypesInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
