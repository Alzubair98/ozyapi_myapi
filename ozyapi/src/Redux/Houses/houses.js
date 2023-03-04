import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const LOADING = "LOADING";

const url = "http://localhost:3001/houses";

export const loadHouses = createAsyncThunk(LOADING, async () => {
  const response = await axios.get(url).catch((error) => {
    console.log("Error", error);
  });
  const res = response.data;
  const data = res.map((item) => ({
    id: item.id,
    house_type: item.house_type,
    price: item.price,
    real_price: item.real_price,
    location: item.location,
    owner_number: item.owner_number,
    age: item.age,
    size: item.size,
    rooms: item.rooms,
    bath_rooms: item.bath_rooms,
    ref_number: item.ref_number,
    description: item.description,
    images_urls: item.images_urls,
  }));
  return data;
});

export const storeSlice = createSlice({
  name: "Houses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadHouses.fulfilled, (state, action) => action.payload);
  },
});

export const dataAction = storeSlice.actions;
export default storeSlice.reducer;
