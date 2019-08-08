export const charSelect = (char = 1) => {
    return `char${char}.jpg`
}

export const monsterSelect = (area, difficulty) => {
    let x;
    if (difficulty === 'easy') {
        x = 1;
    } else if (difficulty === 'medium') {
        x = 2;
    } else {
        x = 3;
    }
    return `m${area}${x}.png`;
}

export const backgroundSelect = (area) => {
    return `bg${area}.jpg`
}