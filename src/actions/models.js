export const ADD_MODEL = 'ADD_MODEL';

const addModel = model => {
  return {
    type: ADD_MODEL,
    payload: model
  };
};

export { addModel };
