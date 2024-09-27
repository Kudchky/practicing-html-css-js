let $h1 = document.getElementById("word-uppercase");
let $p = document.getElementById("number-letters");
let word = prompt("Enter a word");

function wordUpperCase(word) {
    let count = 0;
    $h1.innerHTML = word.toUpperCase();

    for (const el of word) {
        count += 1;
    }

    $p.innerHTML = `The word ${word} has ${count} words!`;
}

wordUpperCase(word);