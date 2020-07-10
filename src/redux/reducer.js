import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

export const initialState = {
 dishes: DISHES,
 selectedDish: null,
 promotions: PROMOTIONS,
 leaders: LEADERS,
 comments: COMMENTS
};

export const Reducer = (state = initialState, action) => {
 return state;
};