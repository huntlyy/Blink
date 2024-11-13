import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilmDetailsSchema } from "../types/FilmDetailsSchema";
import { fetchFilmById } from "../services/fetchFilmById/fetchFilmById";
import { Film } from "../types/Film";

const initialState: FilmDetailsSchema = {
    data: undefined,
    error: undefined,
    isLoading: false
}

export const FilmDetailsSlice = createSlice({
    name: "FilmDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFilmById.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        .addCase(fetchFilmById.fulfilled, (state, action: PayloadAction<Film>) => {
            state.isLoading = false
            state.data = action.payload
        })
        .addCase(fetchFilmById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const {actions: FilmDetailsActions} = FilmDetailsSlice
export const {reducer: FilmDetailsReducer} = FilmDetailsSlice