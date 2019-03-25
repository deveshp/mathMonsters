const gameStateInitialState = {
  character: 0,
};

const gameStateReducer = (state = gameStateInitialState, action) => {
  // console.log(action);
  switch (action.type) {
    case 'CHARACTER_CHOICE':
      return {
        ...state,
        character: action.character,
      };
    default:
      return state;
  }
};

export default gameStateReducer;
