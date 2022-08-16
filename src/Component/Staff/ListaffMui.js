import { idID } from "@mui/material/locale";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { getstaff } from "../../redux/ListStaff";
import { useDispatch, useSelector } from 'react-redux';



function ListStaffMui() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getstaff());
    }, [])
    const ListUser = useSelector(state => state.staff.ListStaff);
    console.log(ListUser);

    const Columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name' },
        { field: 'email', headerName: 'Email' },
        { field: 'phone', headerName: 'Phone' }
    ]

    return (

        <>
            {/* <DataGrid
                columns={Columns}
                checkboxSelection
            /> */}
        </>
    )
}
export default ListStaffMui;