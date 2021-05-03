const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = () => {
      return Math.floor(Math.random()*(dragon.strength-15) + 16);
  }
  const warriorAttack = () => {
    const { weaponDmg } = warrior;
    const minDmg = warrior.strength;
    const maxDmg = minDmg * weaponDmg;
    const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
    return warriorDamage;
  };
  

  console.log( warriorAttack());