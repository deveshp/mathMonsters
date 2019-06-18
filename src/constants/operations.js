export const additionFunction = () => {
    let varOne = (Math.floor((Math.random() * 12) + 1));
    let varTwo = (Math.floor((Math.random() * 12) + 1)) ;
    return {
        varOne,
        varTwo,
        correctResult: varOne + varTwo,
        questionText: `What is ${varOne} + ${varTwo}?`
    }
}