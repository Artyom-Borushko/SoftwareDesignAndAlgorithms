import { Item } from "./Item";

export abstract class Weapon extends Item {
  protected static readonly MODIFIER_CHANGE_RATE = 0.05;
  protected damageModifier = 0;
  protected durabilityModifier = 0;

  constructor(
    name: string,
    protected baseDamage: number,
    protected baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);
  }

  use(): string {
    if (this.baseDurability <= 0) {
      return `You can't use the ${this.name}, it is broken.`;
    }
    this.baseDurability = this.baseDurability - Weapon.MODIFIER_CHANGE_RATE;
    const weaponUsageMessage = `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.`;
    return this.baseDurability === 0 ? weaponUsageMessage + `\nThe ${this.name} breaks.` : weaponUsageMessage;
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
