const additionFunction = (difficulty = 'easy') => {
    let varOne = (Math.floor((Math.random() * 12) + 1));
    let varTwo = (Math.floor((Math.random() * 12) + 1));
    let seconds, numberOfQuestions, hitPoints;
    if (difficulty === 'easy') {
        seconds = 10;
        numberOfQuestions = 3;
        hitPoints = 3;
    } else if (difficulty === 'medium') {
        seconds = 6;
        numberOfQuestions = 3;
        hitPoints = 3;
    } else {
        seconds = 4;
        numberOfQuestions = 3;
        hitPoints = 3; 
    }
    return {
        correctResult: varOne + varTwo,
        questionText: `What is ${varOne} + ${varTwo}?`,
        seconds,
        numberOfQuestions,
        hitPoints
    }
}

const subtractionFunction = (difficulty = 'easy') => {
    let varOne = (Math.floor((Math.random() * 24) + 1));
    let varTwo = (Math.floor((Math.random() * 12) + 1) + varOne);
    let seconds, numberOfQuestions, hitPoints;
    if (difficulty === 'easy') {
        seconds = 11;
        numberOfQuestions = 50;
        hitPoints = 25;
    } else if (difficulty === 'medium') {
        seconds = 10;
        numberOfQuestions = 65;
        hitPoints = 25;
    } else {
        seconds = 9; 
        numberOfQuestions = 100;
        hitPoints = 20;
    }
    return {
        correctResult: varTwo - varOne,
        questionText: `What is ${varTwo} - ${varOne}?`,
        seconds,
        numberOfQuestions,
        hitPoints
    }
}

const multiplicationFunction = (difficulty = 'seconds') => {
    let varOne = (Math.floor((Math.random() * 12) + 1));
    let varTwo = (Math.floor((Math.random() * 12) + 1));
    let seconds, numberOfQuestions, hitPoints;
    if (difficulty === 'easy') {
        seconds = 10;
        numberOfQuestions = 60;
        hitPoints = 30;
    } else if (difficulty === 'medium') {
        seconds = 9;
        numberOfQuestions = 80;
        hitPoints = 30;
    } else {
        seconds = 8; 
        numberOfQuestions = 100;
        hitPoints = 20;
    }
    return {
        correctResult: varTwo * varOne,
        questionText: `What is ${varTwo} * ${varOne}?`,
        seconds,
        numberOfQuestions,
        hitPoints
    }
}

const divisionFunction = (difficulty = 'easy') => {
    let varOne = (Math.floor((Math.random() * 12) + 1));
    let varTwo = (Math.floor((Math.random() * 12) + 1));    
    let seconds, numberOfQuestions, hitPoints;
    if (difficulty === 'easy') {
        seconds = 12;
        numberOfQuestions = 50;
        hitPoints = 20;
    } else if (difficulty === 'medium') {
        seconds = 11;
        numberOfQuestions = 60;
        hitPoints = 25
    } else {
        seconds = 10;
        numberOfQuestions = 80;
        hitPoints = 16;
    }
    return {
        correctResult: varOne, 
        questionText: `What is ${varOne * varTwo} ÷ ${varTwo}?`,
        seconds, 
        numberOfQuestions,
        hitPoints
    }
}

export const operation = (input, difficulty) => {
    if (input === 1) {
        return additionFunction(difficulty);
    } if (input === 2) {
        return subtractionFunction(difficulty);
    } if (input === 3) {
        return multiplicationFunction(difficulty);
    } else {
        return divisionFunction(difficulty);
    }
}