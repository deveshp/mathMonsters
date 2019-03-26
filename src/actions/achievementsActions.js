export const additionComplete = input => {
  return {
    complete: input,
    type: 'ADDITION_COMPLETE',
  };
};

export const subtractionComplete = input => {
  return {
    complete: input,
    type: 'SUBTRACTION_COMPLETE',
  };
};

export const multiplicationComplete = () => {
  return {
    complete: true,
    type: 'MULTIPLICATION_COMPLETE',
  };
};

export const divisionComplete = () => {
  return {
    complete: true,
    type: 'DIVISION_COMPLETE',
  };
};
