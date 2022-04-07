import { combineReducers } from "redux";

let initial_state = [{ title: '', employmentType: '', location: '', jobs: '', workplaceType: '', pay: '', short_description: '' }];


let reducer = (state, action) => {
    if (action.type === 'store') {
        let payload = action.payload;
        initial_state = [...initial_state, payload];
        return [...initial_state];
    }
    else {
        return initial_state;
    }

}


const rootReducer = combineReducers({ reducer })

export default rootReducer;