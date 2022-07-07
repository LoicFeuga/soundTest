var player = require('play-sound')(opts = {})

// $ mplayer foo.mp3
player.play('sound1.mp3', function (err) {
  if (err) throw err
})

// { timeout: 300 } will be passed to child process
player.play('sound1.mp3', {timeout: 300}, function (err) {
  if (err) throw err
})

// configure arguments for executable if any
player.play('sound1.mp3', {afplay: ['-v', 1] /* lower volume for afplay on OSX */}, function (err) {
  if (err) throw err
})

// access the node child_process in case you need to kill it on demand
var audio = player.play('sound1.mp3', function (err) {
  if (err && !err.killed) throw err
})
audio.kill()


var pokedex = [
  {id: '3', name: 'Salameche', quantity: 1, version: 'rubis', attack: 2, defense: 1},
  {id: '1', name: 'Carapuce', quantity: 1, version: 'bleu', attack: 1, defense: 1},
  {id: '1', name: 'Carapuce', quantity: 1, version: 'argent'},
  {id: '2', name: 'Bulbizare', quantity: 2, version: 'bleu'},
  {id: '3', name: 'Salameche', quantity: 3, version: 'bleu'}
];


// console.log(pokedex);


/**
 * Supprime le pokemon contenu dans le tableau avec son nom
 * @param name
 */
function relacherPokemen(tab, name) {
  var newTab = [];
  for (let i = 0; i < tab.length; i++) {
    if (tab[i].name != name) {
      newTab.push(tab[i]);
    }
  }

  return newTab;
}

function relacherPokemon2(tab, name) {
  return tab.filter(pokemon => pokemon.name != name)
}

function fightPokemon(pokemon1, pokemon2) {
  var pokemon1Win = (pokemon1.attack - pokemon2.defense) > (pokemon2.attack - pokemon1.defense);
  return ' WINNER : ' + (pokemon1Win ? pokemon1.name : pokemon2.name);
}

console.log(fightPokemon(pokedex[0], pokedex[1]));

// pokedex = relacherPokemon2(pokedex, 'Salameche');
// console.log(pokedex);
// console.log(relacherPokemon2(pokedex, 'Carapuce'));
