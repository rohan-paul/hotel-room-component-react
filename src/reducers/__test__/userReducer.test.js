import reducer from "../userReducer"
import expect from "expect"
import * as actions from "../../actions/getUserActions"
import {
  INCREMENT_NO_OF_ROOMS,
  DECREMENT_NO_OF_ROOMS,
  INCREMENT_NO_OF_ADULTS,
  DECREMENT_NO_OF_ADULTS,
  INCREMENT_NO_OF_CHILDREN,
  DECREMENT_NO_OF_CHILDREN,
} from "../../actions/types"

const initialState = {
  no_of_rooms: 1,
  no_of_adults: 2,
  no_of_children: 0,
}

describe("post reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it("should handle INCREMENT_NO_OF_ROOMS", () => {
    const incrementRoomNoAction = {
      type: INCREMENT_NO_OF_ROOMS,
      payload: { roomsNo: 1, adultsNo: 2 },
    }

    const expectedState = {
      no_of_rooms: 2,
      no_of_adults: 2,
      no_of_children: 0,
    }

    expect(reducer(initialState, incrementRoomNoAction)).toEqual(expectedState)
  })

  it("should handle INCREMENT_NO_OF_ROOMS-2", () => {
    const incrementRoomNoAction = {
      type: INCREMENT_NO_OF_ROOMS,
      payload: { roomsNo: 2, adultsNo: 2 },
    }

    const initialState2 = {
      no_of_rooms: 2,
      no_of_adults: 2,
      no_of_children: 0,
    }

    const expectedState = {
      no_of_rooms: 3,
      no_of_adults: 3,
      no_of_children: 0,
    }

    expect(reducer(initialState2, incrementRoomNoAction)).toEqual(expectedState)
  })

  it("should handle INCREMENT_NO_OF_ROOMS-3", () => {
    const incrementRoomNoAction = {
      type: INCREMENT_NO_OF_ROOMS,
      payload: { roomsNo: 3, adultsNo: 3 },
    }

    const initialState2 = {
      no_of_rooms: 3,
      no_of_adults: 3,
      no_of_children: 0,
    }

    const expectedState = {
      no_of_rooms: 4,
      no_of_adults: 4,
      no_of_children: 0,
    }

    expect(reducer(initialState2, incrementRoomNoAction)).toEqual(expectedState)
  })

  it("should handle DECREMENT_NO_OF_ROOMS-1", () => {
    const decrementRoomNoAction = {
      type: DECREMENT_NO_OF_ROOMS,
      payload: { noRooms: 2, noAdults: 2, noChildren: 0 },
    }

    const initialState1 = {
      no_of_rooms: 2,
      no_of_adults: 2,
      no_of_children: 0,
    }
    const expectedState = {
      no_of_rooms: 1,
      no_of_adults: 2,
      no_of_children: 0,
    }

    expect(reducer(initialState1, decrementRoomNoAction)).toEqual(expectedState)
  })

  it("should handle DECREMENT_NO_OF_ROOMS-2", () => {
    const decrementRoomNoAction = {
      type: DECREMENT_NO_OF_ROOMS,
      payload: { noRooms: 2, noAdults: 6, noChildren: 0 },
    }

    const initialState2 = {
      no_of_rooms: 2,
      no_of_adults: 6,
      no_of_children: 0,
    }

    const expectedState = {
      no_of_rooms: 1,
      no_of_adults: 4,
      no_of_children: 0,
    }

    expect(reducer(initialState2, decrementRoomNoAction)).toEqual(expectedState)
  })

  it("should handle DECREMENT_NO_OF_ROOMS-3", () => {
    const decrementRoomNoAction = {
      type: DECREMENT_NO_OF_ROOMS,
      payload: { noRooms: 2, noAdults: 4, noChildren: 2 },
    }

    const initialState3 = {
      no_of_rooms: 2,
      no_of_adults: 4,
      no_of_children: 2,
    }

    const expectedState = {
      no_of_rooms: 1,
      no_of_adults: 4,
      no_of_children: 0,
    }

    expect(reducer(initialState3, decrementRoomNoAction)).toEqual(expectedState)
  })

  it("should handle DECREMENT_NO_OF_ROOMS-4", () => {
    const decrementRoomNoAction = {
      type: DECREMENT_NO_OF_ROOMS,
      payload: { noRooms: 2, noAdults: 5, noChildren: 1 },
    }

    const initialState4 = {
      no_of_rooms: 2,
      no_of_adults: 5,
      no_of_children: 1,
    }

    const expectedState = {
      no_of_rooms: 1,
      no_of_adults: 4,
      no_of_children: 0,
    }

    expect(reducer(initialState4, decrementRoomNoAction)).toEqual(expectedState)
  })

  it("should handle DECREMENT_NO_OF_ROOMS-5", () => {
    const decrementRoomNoAction = {
      type: DECREMENT_NO_OF_ROOMS,
      payload: { noRooms: 3, noAdults: 9, noChildren: 3 },
    }

    const initialState5 = {
      no_of_rooms: 3,
      no_of_adults: 9,
      no_of_children: 3,
    }

    const expectedState = {
      no_of_rooms: 2,
      no_of_adults: 8,
      no_of_children: 0,
    }

    expect(reducer(initialState5, decrementRoomNoAction)).toEqual(expectedState)
  })

  it("should handle INCREMENT_NO_OF_ADULTS", () => {
    const incrementAdultNoAction = {
      type: INCREMENT_NO_OF_ADULTS,
      payload: 1,
    }

    const expectedState = {
      no_of_rooms: 1,
      no_of_adults: 3,
      no_of_children: 0,
    }
    expect(reducer(initialState, incrementAdultNoAction)).toEqual(expectedState)
  })
})
