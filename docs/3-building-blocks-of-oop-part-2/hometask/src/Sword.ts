import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super("sword", baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    if (this.damageModifier < 0.25 * this.baseDamage) {
      this.damageModifier = this.damageModifier + Weapon.MODIFIER_CHANGE_RATE;
    }
    if (this.damageModifier > 0.25 * this.baseDamage) {
      this.damageModifier = 0.25 * this.baseDamage;
    }
  }
}
