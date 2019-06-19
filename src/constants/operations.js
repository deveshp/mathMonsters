const additionFunction = () => {
    let varOne = (Math.floor((Math.random() * 12) + 1));
    let varTwo = (Math.floor((Math.random() * 12) + 1));
    return {
        correctResult: varOne + varTwo,
        questionText: `What is ${varOne} + ${varTwo}?`
    }
}

const subtractionFunction = () => {
    let varOne = (Math.floor((Math.random() * 24) + 1));
    let varTwo = (Math.floor((Math.random() * 12) + 1) + varOne);
    return {
        correctResult: varTwo - varOne,
        questionText: `What is ${varTwo} - ${varOne}?`
    }
}

const multiplicationFunction = () => {
    let varOne = (Math.floor((Math.random() * 12) + 1));
    let varTwo = (Math.floor((Math.random() * 12) + 1));
    return {
        correctResult: varTwo * varOne,
        questionText: `What is ${varTwo} * ${varOne}?`
    }
}

const divisionFunction = () => {
    let varOne = (Math.floor((Math.random() * 12) + 1));
    let varTwo = (Math.floor((Math.random() * 12) + 1));
    return {
        correctResult: varOne, 
        questionText: `What is ${varOne * varTwo} ÷ ${varTwo}?`
    }
}

export const operation = (input) => {
    if (input === 1) {
        return additionFunction();
    } if (input === 2) {
        return subtractionFunction();
    } if (input === 3) {
        return multiplicationFunction();
    } else {
        return divisionFunction();
    }
}