import { createSlice } from '@reduxjs/toolkit'
// import { User } from '~/model/userType'

const initialState = {
  user: null,
  error: false,
  loading: false,
  access_token: null,
  lastSuccessAt: null
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload
    },
    setAccessToken(state, { payload }) {
      state.access_token = payload
    },
    setLastSuccessAt(state, { payload }) {
      state.lastSuccessAt = payload
    }
  }
})

export const { setUser, setAccessToken, setLastSuccessAt } = AuthSlice.actions

export default AuthSlice.reducer
