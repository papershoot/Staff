import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosIns from "../store/AxiosAPI";
const initialState = {
    ListStaff: [],

    deletesuccess: null,
};

const ACTION = {
    GET_STAFF: 'staff/getstaff',

    CREATE_STAFF: 'staff/creatstaff',
    DELETE_STAFF: 'staff/delstaff'
};

export const getstaff = createAsyncThunk(ACTION.GET_STAFF, async body => {
    return AxiosIns.get('/user', body);

});
// export const createstaff = createAsyncThunk(ACTION)

export const dellStaff = createAsyncThunk(ACTION.DELETE_STAFF, async ({ _id }) => {
    return AxiosIns.delete(`/user/${_id}`)
})


const StaffSilce = createSlice({
    name: 'staff',
    initialState: initialState,
    extraReducers: {
        [getstaff.pending.toString()]: state => {
            state.loading = true;
        },
        [getstaff.rejected.toString()]: state => {
            state.loading = false;
        },
        [getstaff.fulfilled.toString()]: (state, action) => {
            state.loading = false;
            state.ListStaff = action.payload.data;
        },


        [dellStaff.pending.toString()]: state => {
            state.loading = true;
        },
        [dellStaff.rejected.toString()]: state => {
            state.loading = false;
        },
        [dellStaff.fulfilled.toString()]: (state, action) => {
            state.loading = false;
            state.deletesuccess = [action.payload.data.info];
        }
    }
});

const { reducer: Staffreducer } = StaffSilce;
export default Staffreducer;