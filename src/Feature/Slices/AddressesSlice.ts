import { createSlice } from "@reduxjs/toolkit";
import {getAllAddresses,getAddresseById,createAddresse,updateAddresse,deleteAddresse,} from "../Actions/AddressesActions";
import { UpdateAddresse } from "@/Interfaces/AddresseInterface";

const initialState = {
  AllAddresses: {Addresses:[] as UpdateAddresse[]},
  Addresse: {} as { Addresse: UpdateAddresse ,status:number},
  loading: false,
  error: null as string | null,
};

const AddresseSlice = createSlice({
  name: "Addresses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllAddresses.fulfilled, (state, action) => {
        state.AllAddresses = action.payload;
        state.loading = false;
      })
      .addCase(getAllAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getAddresseById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAddresseById.fulfilled, (state, action) => {
        state.Addresse = action.payload;
        state.loading = false;
      })
      .addCase(getAddresseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createAddresse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAddresse.fulfilled, (state, action) => {
        state.Addresse = action.payload;
        state.loading = false;
      })
      .addCase(createAddresse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateAddresse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAddresse.fulfilled, (state, action) => {
        state.Addresse = action.payload;
        state.loading = false;
      })
      .addCase(updateAddresse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteAddresse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAddresse.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteAddresse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default AddresseSlice.reducer;
