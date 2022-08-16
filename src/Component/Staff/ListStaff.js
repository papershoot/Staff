import { useEffect, useRef, useState } from "react";
import { Col, Container, FormInput, Row } from "shards-react";
import '../../asset/Style/home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { dellStaff } from "../../redux/ListStaff";
import { getstaff } from "../../redux/ListStaff";
import CreateStaff from "./createstaff";
import ListStaffMui from "./ListaffMui";
import { saveAs } from "file-saver";
import Excel from "exceljs";



function ListStaff() {
    const ListUser = useSelector(state => state.staff.ListStaff);
    const deletesuccess = useSelector(state => state.staff.deletesuccess)
    const dispatch = useDispatch();
    const [OpenMode, SetOpenModel] = useState(false);
    const [search, setSearch] = useState('');


    const workSheetName = "Danh sách nhân viên";
    const workBookName = "Liststaff";
    const myInputId = "myInput";
    const workbook = new Excel.Workbook();
    const columns = [
        { header: "STT", key: "id" },
        { header: "TÊN", key: "Name" },
        { header: "EMAIL", key: "Email" },
        { header: "SỐ ĐIỆN THOẠI", key: "Phone" },

    ];

    const saveExcel = async () => {
        // const newDataCreditToExport =
        try {
            const myInput = document.getElementById(myInputId);
            const fileName = myInput.value || workBookName;

            // creating one worksheet in workbook
            const worksheet = workbook.addWorksheet(workSheetName);

            // add worksheet columns
            // each columns contains header and its mapping key from data
            worksheet.columns = columns;

            // updated the font for first row.
            worksheet.getRow(1).font = { bold: true };

            // loop through all of the columns and set the alignment with width.
            worksheet.columns.forEach((column) => {
                column.width = column.header.length + 10;
                column.alignment = { horizontal: "center" };
            });

            // loop through data and add each one to worksheet
            ListUser.forEach((staff, index) => {
                const newData = {
                    id: index + 1,
                    Name: staff.Name,
                    Phone: staff.Phone,
                    Email: staff.Email,
                };
                worksheet.addRow(newData);
            });

            // loop through all of the rows and set the outline style.
            worksheet.eachRow({ includeEmpty: false }, (row) => {
                // store each cell to currentCell
                const currentCell = row._cells;

                // loop through currentCell to apply border only for the non-empty cell of excel
                currentCell.forEach((singleCell) => {
                    // store the cell address i.e. A1, A2, A3, B1, B2, B3, ...
                    const cellAddress = singleCell._address;

                    // apply border
                    worksheet.getCell(cellAddress).border = {
                        top: { style: "thin" },
                        left: { style: "thin" },
                        bottom: { style: "thin" },
                        right: { style: "thin" },
                    };
                });
            });

            // write the content using writeBuffer
            const buf = await workbook.xlsx.writeBuffer();

            // download the processed file
            saveAs(new Blob([buf]), `${fileName}.xlsx`);
        } catch (error) {
            console.error("<<<ERRROR>>>", error);
            console.error("Something Went Wrong", error.message);
        } finally {
            // removing worksheet's instance to create new one
            workbook.removeWorksheet(workSheetName);
        }
    };

    useEffect(() => {
        dispatch(getstaff());
    }, [])

    useEffect(() => {
        if (deletesuccess) {
            dispatch(getstaff());
        }
    }, [deletesuccess])


    const wrapperRef = useRef(null);
    const handledelete = (_id) => {
        dispatch(dellStaff({ _id }))

    }
    const handleOpen = () => {
        SetOpenModel(true);
    }
    const handleClose = () => {
        SetOpenModel(false);
    }
    const closeModel = (e) => {
        if (e.target === wrapperRef.current)
            SetOpenModel(false);
    }

    return (
        <div className='list-staff-main'>

            <Container   >
                <h1 className="heading">
                    List Staff
                    <button className="btn btn-create" > <i className="fas fa-plus"></i></button>
                    <button onClick={saveExcel} className="btn btn-download"><i className="fas fa-download"> Download ListStaff</i>
                        <input
                            style={{ display: "none" }}
                            id={myInputId}
                            defaultValue={workBookName}
                        />
                    </button>

                </h1>
                <Row>
                    <Col>
                        <div className="lu-header">
                            <div className="search-left">
                                <div className="form-search">
                                    <FormInput
                                        className="search-input"
                                        type='text'
                                        name='search'
                                        placeholder='nhập tên'
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    // style={{ width: 270, height: 30 }}
                                    />
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>

                        </div>
                        {/* {OpenMode && (
                            <>
                                <div className="modal-overlay"></div>
                                <div ref={wrapperRef} onClick={closeModel} className="modal-popup_style2 open">
                                    <div className="popup-container pu-general">
                                        <h3 className="pu-heading">add</h3>
                                        <div className="popup-close" onClick={() => handleClose()}>
                                            <span className="fa fa-times"></span>
                                        </div>
                                        <CreateStaff />

                                    </div>
                                </div>
                            </>
                        )} */}
                        <div className="wrapper">
                            <table className="table-list-staff">
                                <thead className="header-table">
                                    <tr>
                                        <th scope="col" className="title-col">ID</th>
                                        <th scope="col" className="title-col">Name</th>
                                        <th scope="col" className="title-col">EMAIL</th>
                                        <th scope="col" className="title-col">PHONE</th>
                                        <th scope="col" className="title-col">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ListUser?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td> {index + 1}</td>
                                                    <td>{item.Name}</td>
                                                    <td>{item.Email}</td>
                                                    <td>{item.Phone}</td>
                                                    <td>
                                                        <button className="btn btn-del"
                                                            onClick={() => { if (window.confirm('Do you want delete' + ' ' + (item.Name) + '?')) { handledelete(item._id) }; }}>
                                                            <i className=" fas fa-trash-alt"></i>
                                                        </button>
                                                        <button className="btn btn-edit"
                                                            onClick={() => { }}>
                                                            <i className="fa fa-edit"></i>
                                                        </button>

                                                    </td>
                                                </tr>
                                            )
                                        })}
                                </tbody>



                            </table>

                            <ListStaffMui />

                        </div>
                    </Col>

                </Row>


            </Container >

        </div>

    )

}
export default ListStaff;