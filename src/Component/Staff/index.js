import { Delete } from "@mui/icons-material";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";


const Columns = [
    { field: 'id', headerName: 'ID', Width: 100 },
    { field: 'id', headerName: 'ID', Width: 100 },
    { field: 'id', headerName: 'ID', Width: 100 },
    { field: 'id', headerName: 'ID', Width: 100 },
    { field: 'id', headerName: 'ID', Width: 100 },
    {
        field: "name",
        headerName: "Name",
        width: 200,
        editable: false

    },
    {
        field: "email",
        headerName: "Email",
        width: 200,
        editable: true
    },
    {
        field: 'phonenumber',
        headerName: "PhoneNumber",
        width: 200,
        editable: false
    },
    {
        field: 'role',
        headerName: "Role",
        width: 200,
        editable: false
    },
    {
        field: 'action',
        headerName: "Action",
        width: 100
    }
];

const rows = [

    { id: 1, name: "Tài", email: "tai@gmail.com", phonenumber: "0979164201", role: "Admin", action: (< Delete />) },
    { id: 2, name: "Tài", email: "tai@gmail.com", phonenumber: "0979164201", role: "Admin" },
    { id: 3, name: "Tài", email: "tai@gmail.com", phonenumber: "0979164201", role: "Admin" },
    { id: 4, name: "Tài", email: "tai@gmail.com", phonenumber: "0979164201", role: "Admin" },
    { id: 5, name: "Tài", email: "tai@gmail.com", phonenumber: "0979164201", role: "Admin" },
    { id: 6, name: "Tài", email: "tai@gmail.com", phonenumber: "0979164201", role: "Admin" },
    { id: 7, name: "Tài", email: "tai@gmail.com", phonenumber: "0979164201", role: "Admin" },
    { id: 8, name: "Tài", email: "tai@gmail.com", phonenumber: "0979164201", role: "Admin" },
    { id: 9, name: "Tài", email: "tai@gmail.com", phonenumber: "0979164201", role: "Admin" },
    { id: 10, name: "Tài", email: "tai@gmail.com", phonenumber: "0979164201", role: "Admin" },
    { id: 11, name: "Tài", email: "tai@gmail.com", phonenumber: "0979164201", role: "Admin" },
];


export default function listStaff() {

    return (


        <Box sx={{ height: 400, width: '100%', alignItems: "center", mt: 8, mb: 5 }}>
            <DataGrid
                rows={rows}
                columns={Columns}
                pageSize={5}
                checkboxSelection
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
        </Box>
    )

}