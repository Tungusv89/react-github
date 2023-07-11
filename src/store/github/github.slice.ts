import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const LS_FAV_KEY = 'rfk'
interface GithubSlice {
    favourites: string[]
}

const initialState: GithubSlice = {
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const gitHubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        },
        removeFavorite(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter(f => f !== action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        }

    }
})

export const githubActions = gitHubSlice.actions
export const githubReducer = gitHubSlice.reducer