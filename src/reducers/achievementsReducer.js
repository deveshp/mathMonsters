const achievementsInitialState = {
  additionAreaComplete: false,
  subtractionAreaComplete: false,
  multiplicationAreaComplete: false,
  divisionAreaComplete: false,
};

const achievementsReducer = (state = achievementsInitialState, action) => {
  switch (action.type) {
    case 'UPDATE_AREA_COMPLETE':
      return {
        ...state,
        [`${action.payload.area}AreaComplete`]: action.payload.complete,
      };
    default:
      return state;
  }
};

export default achievementsReducer;
