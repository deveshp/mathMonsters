const gameStateInitialState = {
  character: 0,
};

const gameStateReducer = (state = gameStateInitialState, action) => {
  // console.log(action);
  switch (action.type) {
    case 'SET_CHARACTER':
      return {
        ...state,
        character: action.character,
      };
    default:
      return state;
  }
};

export default gameStateReducer;
