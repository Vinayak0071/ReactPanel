import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userCols, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Datatable = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionCol = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton" style={{ cursor: "pointer" }}>
                View
              </div>
            </Link>
            <div
              className="deleteButton"
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link
          className="link"
          to="/users/new"
          style={{ textDecoration: "none" }}
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userCols.concat(actionCol)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};
