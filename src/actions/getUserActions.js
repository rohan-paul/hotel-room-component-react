/* eslint-disable import/prefer-default-export */
import {
  INCREMENT_NO_OF_ROOMS,
  DECREMENT_NO_OF_ROOMS,
  INCREMENT_NO_OF_ADULTS,
  DECREMENT_NO_OF_ADULTS,
  INCREMENT_NO_OF_CHILDREN,
  DECREMENT_NO_OF_CHILDREN,
} from "./types"

export const incrementRoomsNo = () => {
  return {
    type: INCREMENT_NO_OF_ROOMS,
    payload: 1,
  }
}

export const decrementRoomsNo = () => {
  return {
    type: DECREMENT_NO_OF_ROOMS,
    payload: 1,
  }
}

export const incrementAdultsNo = () => {
  return {
    type: INCREMENT_NO_OF_ADULTS,
    payload: 1,
  }
}

export const decrementAdultsNo = () => {
  return {
    type: DECREMENT_NO_OF_ADULTS,
    payload: 1,
  }
}

export const incrementChildrenNo = () => {
  return {
    type: INCREMENT_NO_OF_CHILDREN,
    payload: 1,
  }
}

export const decrementChildrenNo = () => {
  return {
    type: DECREMENT_NO_OF_CHILDREN,
    payload: 1,
  }
}
