import React from "react"
import renderer from "react-test-renderer"
import { create } from "react-test-renderer"
import { MuiThemeProvider } from "@material-ui/core/styles"
import globalTheme from "../../../globalTheme"
import PropTypes from "prop-types"
import { mount, shallow } from "enzyme"
import expect from "expect"
import { createShallow, createMount } from "@material-ui/core/test-utils"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import EachRoom from "../EachRoom"
import { render, fireEvent } from "@testing-library/react"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const store = mockStore({
  globalStore: {
    no_of_rooms: 1,
    no_of_adults: 2,
    no_of_children: 0,
  },
})

describe("EachRoom Component", () => {
  it("should match snapshot", () => {
    const matches = (children, theme = globalTheme) =>
      expect(
        renderer
          .create(
            <MuiThemeProvider theme={globalTheme}>{children}</MuiThemeProvider>,
          )
          .toJSON(),
      ).toMatchSnapshot()
  })

  it("should should match snapshot", () => {
    const wrapper = create(
      <Provider store={store}>
        <MuiThemeProvider theme={globalTheme}>
          <EachRoom />
        </MuiThemeProvider>
      </Provider>,
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
