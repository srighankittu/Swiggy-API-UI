// store ==> Throughut our app, we will have only one store
// slice ==> We can have multiiple slices, logcal partitions of out code,
// restaurantSlice
// paymentsModule related state manangement utility functions will be there in payments slice,

import restaurantsReducer from "./restaurantSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    restaurant: restaurantsReducer,
  },
});

export default store;
