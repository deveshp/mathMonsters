export const updateAreaComplete = (area, complete) => {
  return {
    type: 'UPDATE_AREA_COMPLETE',
    payload: {
      area,
      complete,
    },
  };
};
