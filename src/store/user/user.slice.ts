import { createSlice } from '@reduxjs/toolkit'

const InitUserState = {
    user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: InitUserState,
  reducers: {
    setUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers
      state.user = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;
export default userSlice.reducer;