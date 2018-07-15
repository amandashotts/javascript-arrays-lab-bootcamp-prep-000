var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten () {
  kittens.push("Ralph");
} 

function destructivelyPrependKitten () {
  kittens.unshift("Bob");
} 

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}


function destructivelyRemoveLastKitten () {
  kittens.pop();
} 

function appendKitten () {
  kittens["Ted"];
} 