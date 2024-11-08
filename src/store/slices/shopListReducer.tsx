import { createSlice } from "@reduxjs/toolkit";

export interface ShopItem {
  index: number;
  path: string;
  name: string;
  cost: string;
  count: number;
}

const initialState = {
  shopList: [] as ShopItem[],
  totalCost: 0,
  count: 0,
};

const shopListSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addToShopList: (state, action) => {
      const { index, path, name, cost } = action.payload;

      const existingItem = state.shopList.find((item) => item.index === index);
      if (existingItem) {
        state.shopList = state.shopList.map((item) =>
          item.index === index ? { ...item, count: item.count + 1 } : item
        );
      } else {
        state.shopList = [
          ...state.shopList,
          { index, path, name, cost, count: 1 },
        ];
      }
      let sum = 0;
      state.shopList.forEach((item) => {
        sum += Number(item.cost) * item.count;
      });
      state.totalCost = sum;
    },

    clearShopList: (state) => {
      state.shopList = []
    },

    removeProduct: (state, action) => {
      state.shopList = state.shopList.filter(
        (item) => item.index !== action.payload
      );
      let sum = 0;
      state.shopList.forEach((item) => {
        sum += Number(item.cost) * item.count;
      });
      state.totalCost = sum;
    },

    increaseCount: (state, action) => {
      state.shopList.map((item) => {
        return item.index === action.payload ? item.count++ : item;
      });
      let sum = 0;
      state.shopList.forEach((item) => {
        sum += Number(item.cost) * item.count;
      });
      state.totalCost = sum;
    },
    decreaseCount: (state, action) => {
      state.shopList.map((item) => {
        return item.index === action.payload ? item.count-- : item;
      });
      let sum = 0;
      state.shopList.forEach((item) => {
        sum += Number(item.cost) * item.count;
      });
      state.totalCost = sum;
    },
  },
});

export const { addToShopList, clearShopList, removeProduct, increaseCount, decreaseCount } =
  shopListSlice.actions;

export default shopListSlice.reducer;
