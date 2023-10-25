import { Item } from "./Item";

export abstract class Weapon extends Item {
  static MODIFIER_CHANGE_RATE = 0.05;
  protected damageModifier = 0;
  protected durabilityModifier = 0;
  private isBroken = false;

  constructor(
    name: string,
    protected baseDamage: number,
    private baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);
  }

  use(): string {
    if (this.isBroken) {
      return `You can't use the ${this.name}, it is broken.`;
    }
    this.durabilityModifier = this.durabilityModifier - Weapon.MODIFIER_CHANGE_RATE;
    const weaponUsageMessage = `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.`;
    if (this.getEffectiveDurability() === 0) {
      this.isBroken = true;
      return weaponUsageMessage + `\nThe ${this.name} breaks.`;
    }
    return weaponUsageMessage;
  }

  abstract polish(): void;

  toString(): string {
    return (
      super.toString() +
      `, Damage: ${this.getEffectiveDamage().toFixed(2)}, Durability: ${(this.getEffectiveDurability() * 100).toFixed(
        2
      )}%`
    );
  }

  getEffectiveDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getEffectiveDurability(durabilityModifier?: number): number {
    return durabilityModifier
      ? Math.round(this.baseDurability + durabilityModifier)
      : this.baseDurability + this.durabilityModifier;
  }
}
