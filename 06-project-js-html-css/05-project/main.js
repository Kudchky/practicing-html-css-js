let $h2 = document.getElementById("result");
let $p = document.getElementById("list-numbers");

function suma(...args) {
    let result = "";
    $h2.innerHTML = args.reduce((acc, el) => acc + el, 0);

    args.forEach((element) => {
        result += `<li>${element}</li>`;
    });

    $p.innerHTML = result;
}

suma(3, 5, 6, 10, 10, 40);
