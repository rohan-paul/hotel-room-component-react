import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    margin: "auto",
    backgroundColor: theme.common.white,
  },
}))

export { useStyles }
