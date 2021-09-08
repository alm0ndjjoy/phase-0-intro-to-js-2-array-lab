const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(){
    cats.push('Ralph');
}

function destructivelyPrependCat(){
    cats.unshift('Bob');
}


function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(Broom){
    const newCats = [...cats];
    newCats.push('Broom');
    return newCats
}

function prependCat(Arnold){
    const newCatNames = [...cats];
    newCatNames.unshift('Arnold');
    return newCatNames
}
// function prependCat(name){
//     return [name,... cats]
// }

function removeLastCat(){
    const newCats = [...cats];
    newCats.pop(2);
    return newCats
}


function removeFirstCat(){
    const firstCatRemoved = [... cats];
    firstCatRemoved.shift(0);
    return firstCatRemoved
}

// function removeFirstCat(){
//     return cats.slice(1)
// }