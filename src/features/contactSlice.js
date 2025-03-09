import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API Base URL (Change it if needed)
const API_URL = "http://localhost:5000/api/contact";

// Async Thunk to Submit the Contact Form
export const submitContactForm = createAsyncThunk(
  "contact/submit",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Something went wrong");
    }
  }
);

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axios.get(`${API_URL}/all`);
  return response.data.contacts;
});

// Delete a contact
export const deleteContact = createAsyncThunk("contacts/delete", async (id, { dispatch }) => {
  await axios.delete(`${API_URL}/${id}`);
  dispatch(fetchContacts()); // Refresh the list after deletion
});


// Async Thunk to Get Contact Count
export const fetchContactCount = createAsyncThunk(
  "contact/getCount",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/count`);
      return response.data.count;
    } catch (error) {
      return rejectWithValue(error.response.data || "Something went wrong");
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    count: 0,
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    clearMessage: (state) => {
      state.successMessage = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle Contact Form Submission
      .addCase(submitContactForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle Contact Count Fetch
      .addCase(fetchContactCount.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContactCount.fulfilled, (state, action) => {
        state.loading = false;
        state.count = action.payload;
      })
      .addCase(fetchContactCount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export const { clearMessage } = contactSlice.actions;
export default contactSlice.reducer;
