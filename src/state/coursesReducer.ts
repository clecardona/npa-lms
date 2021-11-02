//@ts-nocheck
export default function coursesReducer(state, action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return createCourse(state, action);
    case "UPDATE_COURSE":
      return updateCourse(state, action);
    case "SET_DATA":
      return setCourses(action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

/**
 * There is a huge waste of oportunity here.
 * The reason we use dispatch instead of useState in the global state
 * is to be able to validate data before mutating it.
 */

function createCourse(state, action) {
  const { payload } = action;

  // hey!!! you are asuming that whoever calls dispatch is passing data correctly.
  // What happens if someone calls dispatch(type: "CREATE_COURSE", payload: "pepito")
  return [...state, payload];
}

function updateCourse(state, action) {
  const { payload } = action;
  const newState = [...state];
  const index = newState.findIndex((item) => item.id === payload.id);

  newState[index] = { ...payload };
  return newState;
}

function setCourses(action) {
  const { payload } = action;
  return payload;
}
