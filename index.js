// Write your solution here!
/*     cats
      ✓ is assigned an initial value of ["Milo", "Otis", "Garfield"]
    Array functions
      destructivelyAppendCat(name)
        1) appends a cat to the end of the cats array
      destructivelyPrependCat(name)
        2) prepends a cat to the beginning of the cats array
      destructivelyRemoveLastCat()
        3) removes the last cat from the cats array
      destructivelyRemoveFirstCat()
        4) removes the first cat from the cats array
      appendCat(name)
        5) appends a cat to the cats array and returns a new array, leaving the cats array unchanged
      prependCat(name)
        6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
      removeLastCat()
        7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
      removeFirstCat()
        8) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
*/

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    const copyOfCats = [...cats, name];
    return copyOfCats;
}

function prependCat(name){
    const copyOfCats = [name, ...cats];
    return copyOfCats;
}

function removeLastCat(){
    const copyOfCats = [...cats];
    copyOfCats.pop();
    return copyOfCats;
}

function removeFirstCat(){
    const copyOfCats = [...cats];
    copyOfCats.shift();
    return copyOfCats;
}