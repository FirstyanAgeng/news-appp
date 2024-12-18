// kerangka untuk menyimpan data menggunakan redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedArticles: [],
}; // inisalisasi data awal berupa array kosong, karena akan diisi list

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    // disini akan diisi action creator yang dipakai di file yang lain
    saveArticle: (state, action) => {
      state.savedArticles.push(state.payload);
    },
    unsaveArticle: (state, action) => {
      state.savedArticles = state.savedArticles.filter(
        (article) => article.title !== action.payload
      );
      //   memfilter article agar bisa dihapus
    },
  },
});

export const { saveArticle, unsaveArticle } = articleSlice.actions;

export default articleSlice.reducer;
