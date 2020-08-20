import * as getUserActions from "../getUserActions"

describe("User Actions Tests", () => {
  it("should increment RoomsNo correctly when executing incrementRoomsNo() ", () => {
    const handleincrementRoomsNoPayload = getUserActions.incrementRoomsNo(2, 3)
    expect(handleincrementRoomsNoPayload).toEqual({
      type: "INCREMENT_NO_OF_ROOMS",
      payload: {
        roomsNo: 2,
        adultsNo: 3,
      },
    })
  })

  it("should decrement RoomsNo correctly when executing decrementRoomsNo() ", () => {
    const handledecrementRoomsNooPayload = getUserActions.decrementRoomsNo(
      2,
      3,
      1,
    )
    expect(handledecrementRoomsNooPayload).toEqual({
      type: "DECREMENT_NO_OF_ROOMS",
      payload: {
        noRooms: 2,
        noAdults: 3,
        noChildren: 1,
      },
    })
  })

  it("should increment AdultNo correctly when executing incrementAdultsNo() ", () => {
    const handleincrementAdultsNoPayload = getUserActions.incrementAdultsNo()
    expect(handleincrementAdultsNoPayload).toEqual({
      type: "INCREMENT_NO_OF_ADULTS",
      payload: 1,
    })
  })

  it("should decrement AdultNo correctly when executing decrementAdultsNo() ", () => {
    const handledecrementAdultsNoPayload = getUserActions.decrementAdultsNo()
    expect(handledecrementAdultsNoPayload).toEqual({
      type: "DECREMENT_NO_OF_ADULTS",
      payload: 1,
    })
  })

  it("should increment ChildrenNo correctly when executing incrementAdultsNo() ", () => {
    const handleincrementChildrenNoPayload = getUserActions.incrementChildrenNo()
    expect(handleincrementChildrenNoPayload).toEqual({
      type: "INCREMENT_NO_OF_CHILDREN",
      payload: 1,
    })
  })

  it("should decrement ChildrenNo correctly when executing decrementAdultsNo() ", () => {
    const handledecrementChildrenNoPayload = getUserActions.decrementChildrenNo()
    expect(handledecrementChildrenNoPayload).toEqual({
      type: "DECREMENT_NO_OF_CHILDREN",
      payload: 1,
    })
  })
})
