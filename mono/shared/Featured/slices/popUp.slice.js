import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    data: [],
    loading: false,
};

const popUpSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        setPopupData: (state, action) => {
            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});
export const {setPopupData, setLoading} = popUpSlice.actions;
export default popUpSlice.reducer;
