function age() {
    let yearBirth =  parseInt(prompt("Enter your year of birth: "));
    let currentYear = new Date().getFullYear();

    while(yearBirth < 1910) {
        yearBirth = parseInt(prompt("Enter your year of birth again: "));
    }

    alert(`You are ${currentYear - yearBirth} years old!`);
}

age();