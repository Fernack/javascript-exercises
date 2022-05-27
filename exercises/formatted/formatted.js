const formatted = (str, n) => {
    const strWithoutDash = str.split('-').join('').split('').reverse();
    let count = 0

    return strWithoutDash.reduce((acc, caracter) => {
        if (n === count) {
            count = 1;
            return [...[caracter, '-'], ...acc];
        }
        else {
            count++;
            return [caracter, ...acc];
        }
    }, []).join("");
}