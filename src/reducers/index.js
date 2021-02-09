import {ADD_REMINDER} from "../types"

const reminders = (state = [], action) => {
    let reminders = [];
    if(action.type === ADD_REMINDER){
      reminders = [...state , {text: action.text, date:action.date , id:Math.random()}]
      console.log(reminders);
      return reminders;
    }
};

export default reminders;
