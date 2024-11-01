import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Quote {
  content: string;
  author: string;
}

interface QuoteState {
  quote: Quote | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: QuoteState = {
  quote: null,
  status: 'idle',
  error: null
};

export const fetchRandomQuote = createAsyncThunk(
  'quote/fetchRandomQuote',
  async () => {
    const response = await axios.get(
      'https://quoteslate.vercel.app/api/quotes/random'
    );
    return response.data;
  }
);

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRandomQuote.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.quote = {
          content: action.payload.quote,
          author: action.payload.author
        };
        state.error = null;
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  }
});

export default quoteSlice.reducer;
