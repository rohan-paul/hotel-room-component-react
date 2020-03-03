import {
  INCREMENT_NO_OF_ROOMS,
  DECREMENT_NO_OF_ROOMS,
  INCREMENT_NO_OF_ADULTS,
  DECREMENT_NO_OF_ADULTS,
  INCREMENT_NO_OF_CHILDREN,
  DECREMENT_NO_OF_CHILDREN,
} from "../actions/types"

const initialState = {
  no_of_rooms: 1,
  no_of_adults: 2,
  no_of_children: 0,
}

export default (state = initialState, actions) => {
  const totalPersons = state.no_of_adults + state.no_of_children
  switch (actions.type) {
    case INCREMENT_NO_OF_ROOMS:
      console.log("ACTIONS RECD IN REDUCER", actions.payload)
      return {
        ...state,
        no_of_rooms: state.no_of_rooms + actions.payload,
      }

    case DECREMENT_NO_OF_ROOMS:
      return {
        ...state,
        no_of_rooms: state.no_of_rooms - actions.payload,
      }

    case INCREMENT_NO_OF_ADULTS:
      console.log("ACTIONS RECD IN REDUCER", actions.payload)
      return {
        ...state,
        no_of_adults: state.no_of_adults + actions.payload,
      }

    case DECREMENT_NO_OF_ADULTS:
      return {
        ...state,
        no_of_adults: state.no_of_adults - actions.payload,
      }

    case INCREMENT_NO_OF_CHILDREN:
      console.log("ACTIONS RECD IN REDUCER", actions.payload)
      return {
        ...state,
        no_of_children: state.no_of_children + actions.payload,
      }

    case DECREMENT_NO_OF_CHILDREN:
      return {
        ...state,
        no_of_children: state.no_of_children - actions.payload,
      }

    default:
      return state
  }
}
