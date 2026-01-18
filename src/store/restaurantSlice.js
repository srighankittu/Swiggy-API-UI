import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchStart(state, action) {
      state.loading = true;
      state.error = null;
    },

    fetchSuccess(state, action) {
      state.loading = false;
      state.list = action.payload;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchError } = restaurantSlice.actions;
export default restaurantSlice.reducer;
