import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
  // thunk is a middleware that allows us to return a function from an action creator
  preloadedState: {},     // this is the initial state
});
// this is the store that we will use in our app
