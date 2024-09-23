function table(number) {
    let result = "";
    for (let i = 0; i <= 10; i++) {
        result += `<span class="table__span">${number} * ${i} = ${number * i}</span>`;
    }

    return result;
}

function showTables() {
    for (let i = 1; i <= 10 ; i++) {
        document.getElementById(`box-${i}`).innerHTML = table(i);
    }
}

showTables();