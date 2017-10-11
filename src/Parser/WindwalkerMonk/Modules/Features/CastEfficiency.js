import SPELLS from 'common/SPELLS';
import CoreCastEfficiency from 'Parser/Core/Modules/CastEfficiency';

class CastEfficiency extends CoreCastEfficiency {
  static CPM_ABILITIES = [
    ...CoreCastEfficiency.CPM_ABILITIES,
    {
      spell: SPELLS.STRIKE_OF_THE_WINDLORD,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => 40,
    },
    {
      spell: SPELLS.FISTS_OF_FURY_CAST,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => 24,
    },
    {
      spell: SPELLS.RISING_SUN_KICK,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => 10,
    },
    {
      spell: SPELLS.WHIRLING_DRAGON_PUNCH_TALENT,
      category: CastEfficiency.SPELL_CATEGORIES.ROTATIONAL,
      getCooldown: haste => 24,
      isActive: combatant => combatant.hasTalent(SPELLS.WHIRLING_DRAGON_PUNCH_TALENT.id),
    },
    // cooldowns
    {
      spell: SPELLS.TOUCH_OF_KARMA_CAST,
      category: CastEfficiency.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 90,     
    },
    {
      spell: SPELLS.TOUCH_OF_DEATH,
      category: CastEfficiency.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 120,
    },
    {
      spell: SPELLS.SERENITY_TALENT,
      category: CastEfficiency.SPELL_CATEGORIES.COOLDOWNS,
      getCooldown: haste => 70,
        isActive: combatant => combatant.hasTalent(SPELLS.SERENITY_TALENT.id),
    },
    // other spells
    {
      spell: SPELLS.BLACKOUT_KICK,
      category: CastEfficiency.SPELL_CATEGORIES.OTHERS,
      getCooldown: haste => null,
    },
    {
      spell: SPELLS.TIGER_PALM,
      category: CastEfficiency.SPELL_CATEGORIES.OTHERS,
      getCooldown: haste => null,
    },
    {
      spell: SPELLS.CHI_WAVE_TALENT,
      category: CastEfficiency.SPELL_CATEGORIES.OTHERS,
      getCooldown: haste => 15,
      isActive: combatant => combatant.hasTalent(SPELLS.CHI_WAVE_TALENT.id),
    },
    {
      spell: SPELLS.SPINNING_CRANE_KICK,
      category: CastEfficiency.SPELL_CATEGORIES.OTHERS,
      getCooldown: haste => null,
    },
  ];
}

export default CastEfficiency;
