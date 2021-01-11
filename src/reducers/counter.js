import { INCREMENT_NUM, DECREMENT_NUM, SLIDE_NUM, RESET, TIMER } from "../constants/ActionTypes";

export default function reducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT_NUM:
      return state + 1;
    case DECREMENT_NUM:
      return state - 1;
    case RESET:
      return 0;

    case SLIDE_NUM:
      {
        return +action.payload;


      };


    case TIMER: {
      setTimeout(() => {
        return state + 1;
      }, 1000)
    }



  }

  return state;
}