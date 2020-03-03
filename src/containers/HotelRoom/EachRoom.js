import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Typography } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import { useStyles } from "./EachRoomStyles"

const EachRoom = ({
  rooms,
  adults,
  children,
  leftText,
  incrementRoomsNo,
  decrementRoomsNo,
  incrementAdultsNo,
  decrementAdultsNo,
  incrementChildrenNo,
  decrementChildrenNo,
}) => {
  const globalStore = useSelector(state => state.globalStore)
  const classes = useStyles()
  const dispatch = useDispatch()
  const { no_of_rooms, no_of_adults, no_of_children } = globalStore

  const handleIncrementClick = () => {
    if (rooms) {
      dispatch(incrementRoomsNo())
    } else if (adults) {
      dispatch(incrementAdultsNo())
    } else if (children) {
      dispatch(incrementChildrenNo())
    }
  }

  const handleDecrementClick = () => {
    if (rooms) {
      dispatch(decrementRoomsNo())
    } else if (adults) {
      dispatch(decrementAdultsNo())
    } else if (children) {
      dispatch(decrementChildrenNo())
    }
  }

  const maxPersons = no_of_rooms * 4

  return (
    <>
      <div className={classes.tableContainer}>
        <div className={classes.roomsContainer}>
          <IconButton
            aria-label="Filter list"
            classes={{ root: classes.button, disabled: classes.buttonDisabled }}
          >
            <img
              src={
                adults
                  ? require("../../assets/images/adult-icon.png")
                  : children
                  ? require("../../assets/images/child-icon.png")
                  : rooms
                  ? require("../../assets/images/bed-icon.png")
                  : null
              }
              className={classes.avatar}
              alt=""
            />
          </IconButton>
          <div className={classes.leftTextContainer}>
            <Typography variant="subtitle1">{leftText}</Typography>
          </div>
        </div>
        <div className={classes.ctaContainer}>
          <IconButton
            aria-label="Filter list"
            className={classes.adultIconContainer}
            disabled={
              (rooms && no_of_rooms <= 1) ||
              (adults && no_of_adults <= 1) ||
              (children && no_of_children <= 0)
            }
            onClick={handleDecrementClick}
          >
            <img
              src={
                (rooms && no_of_rooms <= 1) ||
                (adults && no_of_adults <= 1) ||
                (children && no_of_children <= 0)
                  ? require("../../assets/images/minus-icon-disabled.png")
                  : require("../../assets/images/minus-icon.png")
              }
              className={classes.avatar}
              alt=""
            />
          </IconButton>
          <div className={classes.leftTextContainer}>
            <Typography variant="subtitle1">
              {rooms
                ? no_of_rooms
                : adults
                ? no_of_adults
                : children
                ? no_of_children
                : null}
            </Typography>
          </div>
          <IconButton
            aria-label="Filter list"
            className={classes.adultIconContainer}
            onClick={handleIncrementClick}
            disabled={
              (rooms && no_of_rooms >= 5) ||
              (adults && no_of_adults + no_of_children >= maxPersons) ||
              (children && no_of_adults + no_of_children >= maxPersons)
            }
          >
            <img
              src={
                (rooms && no_of_rooms >= 5) ||
                (adults && no_of_adults + no_of_children >= maxPersons) ||
                (children && no_of_adults + no_of_children >= maxPersons)
                  ? require("../../assets/images/plus-icon-disabled.png")
                  : require("../../assets/images/plus-icon.png")
              }
              className={classes.avatar}
              alt=""
            />
          </IconButton>
        </div>
      </div>
    </>
  )
}

export default EachRoom
