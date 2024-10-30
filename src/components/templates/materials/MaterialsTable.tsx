import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
  { field: 'id', headerName: '#', width: 60 },
  { field: 'materialsCode', headerName: 'Materials Code', width: 130 },
  { field: 'description', headerName: 'Description', width: 180 },
  {
    field: 'status',
    headerName: 'Status',
    // type: 'number',
    width: 80,
  },
  { field: 'unit', headerName: 'Unit', width: 70 },
  { field: 'unitCost', headerName: 'Unit Cost', width: 70 },
  { field: 'quantity', headerName: 'Quantity', width: 80 },


];

const rows = [
  { id: 1, materialsCode: '5684236526', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...', status: 'Open' , unit: "CAD", unitCost: '100$', quantity: '$550'},
  { id: 2, materialsCode: '5684236526', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...', status: 'Open' , unit: "CAD", unitCost: '100$', quantity: '$550'},
  { id: 3, materialsCode: '5684236526', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...', status: 'Open' , unit: "CAD", unitCost: '100$', quantity: '$550'},
  { id: 4, materialsCode: '5684236526', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...', status: 'Open' , unit: "CAD", unitCost: '100$', quantity: '$550'},
  { id: 5, materialsCode: '5684236526', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...', status: 'Open' , unit: "CAD", unitCost: '100$', quantity: '$550'},
  { id: 6, materialsCode: '5684236526', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...', status: 'Open' , unit: "CAD", unitCost: '100$', quantity: '$550'},
  { id: 7, materialsCode: '5684236526', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...', status: 'Open' , unit: "CAD", unitCost: '100$', quantity: '$550'},
  { id: 8, materialsCode: '5684236526', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...', status: 'Open' , unit: "CAD", unitCost: '100$', quantity: '$550'},
  { id: 9, materialsCode: '5684236526', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...', status: 'Open' , unit: "CAD", unitCost: '100$', quantity: '$550'},
  { id: 10, materialsCode: '5684236526', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...', status: 'Open' , unit: "CAD", unitCost: '100$', quantity: '$550'},
  { id: 11, materialsCode: '5684236526', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...', status: 'Open' , unit: "CAD", unitCost: '100$', quantity: '$550'},
  { id: 12, materialsCode: '5684236526', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...', status: 'Open' , unit: "CAD", unitCost: '100$', quantity: '$550'},
  { id: 13, materialsCode: '5684236526', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...', status: 'Open' , unit: "CAD", unitCost: '100$', quantity: '$550'},

];

const paginationModel = { page: 0, pageSize: 10 };

export default function MaterialsTable() {
    return (
        <Paper sx={{ width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    );
}
