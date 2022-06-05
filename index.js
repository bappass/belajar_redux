const redux = require("redux");
const createStore = redux.createStore;

//action
const withdraw = (amount) => {
  return {
    type: "WITHDRAW",
    payload: amount,
  };
};

const deposit = (amount) => {
  return {
    type: "DEPOSIT",
    payload: amount,
  };
};

//reducer
//(previousState, action) => newState
const reducer = (state = { balance: 1000 }, action) => {
  switch (action.type) {
    case "WITHDRAW":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "DEPOSIT":
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    default:
      return state;
  }
};

//store
const store = createStore(reducer);

console.log("Default State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(deposit(500));
store.dispatch(withdraw(200));

unsubscribe();
