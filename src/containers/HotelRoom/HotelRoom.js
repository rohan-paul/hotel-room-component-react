/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable-next-line react-hooks/exhaustive-deps */
import React from "react"
// import PropTypes from "prop-types"
// import { useSelector, useDispatch } from "react-redux"
import { useStyles } from "./HotelRoomStyles"
import EachRoom from "./EachRoom"
import {
  incrementAdultsNo,
  decrementAdultsNo,
  incrementRoomsNo,
  decrementRoomsNo,
  incrementChildrenNo,
  decrementChildrenNo,
} from "../../actions/getUserActions"

const HotelRoom = () => {
  const classes = useStyles()
  // const globalStore = useSelector(state => state.globalStore)
  // const dispatch = useDispatch()

  return (
    <div className={classes.container}>
      <EachRoom
        rooms
        leftText={"ROOMS"}
        incrementRoomsNo={incrementRoomsNo}
        decrementRoomsNo={decrementRoomsNo}
      ></EachRoom>
      <EachRoom
        adults
        leftText={"ADULTS"}
        incrementAdultsNo={incrementAdultsNo}
        decrementAdultsNo={decrementAdultsNo}
      ></EachRoom>
      <EachRoom
        children
        leftText={"CHILDREN"}
        incrementChildrenNo={incrementChildrenNo}
        decrementChildrenNo={decrementChildrenNo}
      ></EachRoom>
    </div>
  )
}

// HotelRoom.propTypes = {
//   globalStore: PropTypes.object,
// }

export default HotelRoom
