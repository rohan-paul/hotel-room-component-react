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
  switch (actions.type) {
    case INCREMENT_NO_OF_ROOMS:
      return {
        ...state,
        no_of_rooms: state.no_of_rooms + actions.payload,
      }

    case DECREMENT_NO_OF_ROOMS:
      console.log("DECREMENT ROOM NO ", actions.payload)
      const { noRooms, noAdults, noChildren } = actions.payload
      const totalPersons = noAdults + noChildren
      const excessPersonsAfterRoomDecrement = totalPersons - (noRooms - 1) * 4
      console.log("EXCESS ", excessPersonsAfterRoomDecrement)

      const excessChildrenToReduce =
        excessPersonsAfterRoomDecrement > 0 &&
        noChildren > 0 &&
        excessPersonsAfterRoomDecrement >= noChildren
          ? noChildren
          : excessPersonsAfterRoomDecrement > 0 &&
            noChildren > 0 &&
            excessPersonsAfterRoomDecrement < noChildren
          ? excessPersonsAfterRoomDecrement
          : 0

      const leftOverExcessAfterReducingChildren =
        excessPersonsAfterRoomDecrement > 0 &&
        excessPersonsAfterRoomDecrement - excessChildrenToReduce

      console.log("EXCESS Children ", excessChildrenToReduce)
      console.log(
        "LEFT OverExcessAfterReducingChildren ",
        leftOverExcessAfterReducingChildren,
      )

      return {
        ...state,
        no_of_rooms: state.no_of_rooms - 1,
        no_of_children: state.no_of_children - excessChildrenToReduce,
        no_of_adults: state.no_of_adults - leftOverExcessAfterReducingChildren,
      }

    case INCREMENT_NO_OF_ADULTS:
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
