import { ADD, REMOVE } from "../constans/burger";
export const addBurger = (name) => {
  return {
    type: ADD,
    payload: name,
  };
};
export const removeBurger = (name) => {
  return {
    type: REMOVE,
    payload: name,
  };
};
