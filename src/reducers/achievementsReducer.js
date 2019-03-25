const achievementsInitialState = {
  additionWorldComplete: false,
  subtractionWorldComplete: false,
  multiplicationWorldComplete: false,
  divisionWorldComplete: false,
};

const achievementsReducer = (state = achievementsInitialState, action) => {
  switch (action.type) {
    case 'ADDITION_COMPLETE':
      return {
        ...state,
        additionWorldComplete: action.complete,
      };
    case 'SUBTRACTION_COMPLETE':
      return {
        ...state,
        subtractionWorldComplete: action.complete,
      };
    case 'MULTIPLICATION_COMPLETE':
      return {
        ...state,
        multiplicationWorldComplete: action.complete,
      };
    case 'DIVISION_COMPLETE':
      return {
        ...state,
        divisionWorldComplete: action.complete,
      };
    default:
      return state;
  }
};

export default achievementsReducer;
