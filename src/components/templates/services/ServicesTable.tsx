import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ServiceRow } from '../../../Types';
import axios from 'axios';

const columns: GridColDef[] = [
  { field: 'id', headerName: '#', width: 50 },
  { field: 'serviceCode', headerName: 'Service Code', width: 150 },
  { field: 'description', headerName: 'Description', width: 440 },
  { field: 'progress', headerName: 'Progress', width: 150 },
  { field: 'quantity', headerName: 'Quantity', width: 120 },
  { field: 'unit', headerName: 'Unit', width: 110 },
  { field: 'unitCost', headerName: 'Unit Cost', width: 100 },
];

const paginationModel = { page: 0, pageSize: 10 };


export default function ServicesTable({ setRowsSelected }: {setRowsSelected: (count: number) => void}) {
  const { id } = useParams();
  const [data, setData] = useState<ServiceRow[]>([]);
  // const [next, setNext] = useState<string | null>(null);
  // const [prev, setPrev] = useState<string | null>(null);
  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getWorksiteServices(Number(id));
      // setNext(response.data.next);
      // setPrev(response.data.previous);

      const newRows: ServiceRow[] = response.data.results.map((row:
        { service: { id: number; code: string; description: string; unit: string; }; cost: number; progress: string; quantity: number; }) => ({
        id: row.service.id,
        unitCost: row.cost,
        serviceCode: row.service.code,
        description: row.service.description,
        progress: row.progress,
        quantity: row.quantity,
        unit: row.service.unit,
      }));

      setData(newRows);
    };
    fetchData();
  }, [id]);

  const handleSelectionChange = (newSelection: GridRowSelectionModel) => {
    setSelectedRows(newSelection);
    setRowsSelected(newSelection.length);
    console.log("Selected Rows:", newSelection);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={handleSelectionChange}
        rowSelectionModel={selectedRows}
        sx={{ border: 0, width: '100%' }}
      />
    </Paper>
  );
}

async function getWorksiteServices(id: number) {
  const response = await axios.get(`https://game.telast.tech/api/v1/worksites/worksite_service/?worksite=${id}`);
  return response;
}
