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
    default:
      return state;
  }
};
export default BurgerReducer;
