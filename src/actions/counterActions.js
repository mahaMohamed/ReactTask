import { INCREMENT_NUM, DECREMENT_NUM, RESET, SLIDE_NUM, TIMER} from "../constants/ActionTypes";

export function incrementNum(payload) {
  return {
    type: INCREMENT_NUM,
    payload: payload
  };
}

export function decrementNum(payload) {
  return {
    type: DECREMENT_NUM,
    payload: payload
  };
}


export function reset(payload){
  return{
    type: RESET, 
    payload: payload
  }
}

export function slideNum(payload){
  return{
    type: SLIDE_NUM, 
    payload: payload
  }

}

export function startTimer (payload){
  return{
    type: TIMER, 
    payload: payload
  }
}