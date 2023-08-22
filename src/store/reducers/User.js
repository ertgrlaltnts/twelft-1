import {createSlice} from '@reduxjs/toolkit';
import moment from 'moment';

const UserSlice = createSlice({
  name: 'User',
  initialState: {
    isLoggedIn: false,
    user: {},
    bets: [],
    ownedIds: [],
    winners: [],
    language: '',
  },

  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.bets = action.payload.bets;
      state.ownedIds = state.user.coupons;
      state.winners = action.payload.winners;
    },

    logoutUser: (state, action) => {
      state.isLoggedIn = false;
      state.user = {};
      state.bets = [];
      state.ownedIds = [];
      state.winners = [];
    },

    buyBet: (state, action) => {
      let tempOwneds = state.ownedIds;
      tempOwneds.push(action.payload.bet._id);
      state.ownedIds = tempOwneds;
      state.user.coin = state.user.coin - action.payload.coin;
    },

    buyVip: (state, action) => {
      if (state.user.isVip) {
        state.user.finishVip = moment(state.user.finishVip, 'DD/MM/YYYY')
          .add(action.payload, 'd')
          .format('DD/MM/YYYY');
      } else {
        state.user.isVip = true;
        state.user.finishVip = moment()
          .add(action.payload, 'd')
          .format('DD/MM/YYYY');
      }
    },

    buyCoin: (state, action) => {
      state.user.coin += action.payload;
    },

    refreshBet: (state, action) => {
      state.bets = action.payload.bets;
      state.winners = action.payload.winners;
    },
    setLang: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const {
  loginUser,
  logoutUser,
  buyBet,
  refreshBet,
  buyVip,
  buyCoin,
  setLang,
} = UserSlice.actions;

export default UserSlice.reducer;
