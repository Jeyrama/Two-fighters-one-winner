/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills 
the other first is victorious. Death is defined as having health <= 0.

Both health and damagePerAttack will be integers larger than 0. 
You can mutate the Fighter objects.

Your function also receives a third argument, a string, 
with the name of the fighter that attacks first.

Example:

  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew")

  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

  
Note: Each fighter is an object and has 3 parameters:

  function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
  */


// Solution 

function declareWinner(fighter1, fighter2, firstAttacker) {
  let fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  let fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if (fac1 < fac2) {
    return fighter2.name;
  } else if (fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

// or

function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }

  if (fighter1.health <= 0 && fighter2.health <= 0)
    return firstAttacker;
  else if (fighter1.health <= 0)
    return fighter2.name;
  else
    return fighter1.name;
}