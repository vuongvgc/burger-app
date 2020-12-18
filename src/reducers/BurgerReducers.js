import { ADD, REMOVE, RESET } from "../constans/burger";
const initialState = {
  burger: { salad: 1, cheese: 1, beef: 1 }, // [{name:'salad',amount:1},{name:'cheese',amount:1},{name:'beef',amount:1}]

  menu: {
    salad: 10,

    cheese: 20,

    beef: 55,
  },

  total: 85,
};
const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      //   console.log(action.payload);
      return {
        ...state,
        burger: {
          ...state.burger,
          [action.payload]: state.burger[action.payload] + 1,
        },
      };
    case REMOVE:
      //   console.log(action.payload);
      return {
        ...state,
        burger: {
          ...state.burger,
          [action.payload]:
            state.burger[action.payload] > 0
              ? state.burger[action.payload] - 1
              : 0,
        },
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
export default BurgerReducer;
