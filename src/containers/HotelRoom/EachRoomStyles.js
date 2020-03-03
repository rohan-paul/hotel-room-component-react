import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    margin: "auto",
    backgroundColor: theme.common.white,
  },

  tableContainer: {
    position: "relative",
    margin: "auto",
    maxWidth: "1100px",
    height: "80px",
    // minHeight: "calc(100vh - 100px)",
    alignItems: "center ",
    justifyContent: "center",
    verticalAlign: "middle",
    textAlign: "center",
    border: "1px solid #aaa",
  },
  buttonDisabled: {
    color: theme.palette.primary.dark,
  },

  avatar: {
    width: "30px",
    height: "30px",
  },
  roomsContainer: {
    height: "70px",
    float: "left",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    // backgroundColor: "red",
  },
  ctaContainer: {
    height: "70px",
    float: "right",
    marginRight: "15px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    // backgroundColor: "green",
  },
  leftTextContainer: {
    verticalAlign: "middle",
    alignItems: "center",
    textAlign: "center",
  },
}))

export { useStyles }
