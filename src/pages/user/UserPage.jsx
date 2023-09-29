import React, { useContext, useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Grid, IconButton, Paper } from '@mui/material';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Swal from 'sweetalert2'

import { UserContext } from '../../contexts/UserContext';

const rows = [
  { id: 1, name: 'Nicolas Larrosa', email: 'nicolas@gmail.com', is_active: true, created_at: '09-11-2023' },
];



export const UserPage = () => {

  const [pageSize, setPageSize] = useState(3);
  const [page, setPage] = useState(0);
  const { state, getUsers, isLoading } = useContext(UserContext);

  useEffect( () => {
    getUsers(page);
  }, []);

  const onAlterDelete = (id) => {

    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })

  }

  const columns = [
  
    {
      flex: 0.2,
      field: 'name',
      headerName: 'Usuario',
      minWidth: 150,
    },
    {
      flex: 0.25,
      field: 'email',
      headerName: 'Email',
      minWidth: 150,
    }, 
    {
      flex: 0.1,
      field: 'is_active',
      headerName: 'Estado',
      minWidth: 100,
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              aria-label='Estado'
              color='info'
              disabled={true}
            >
              <DoneAllIcon
                fontSize='medium'
                sx={{ mr: 2 }}
                color={(true) ? 'success' : 'disabled'}
              />
            </IconButton>
          </Box>
        )
      }
    }, 
    {
      flex: 0.12,
      field: 'created_at',
      headerName: 'Creado',
      width: 120,
      // valueFormatter: params =>
      //   moment(params?.value).format("DD/MM/YYYY hh:mm:ss"),
    },
    {
      flex: 0,
      field: 'acciones',
      headerName: 'Acciones',
      minWidth: 150,
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              aria-label='Ver Comunicacion'
              color='info'
              // onClick={() => handleGeneratePreview(row.comunicacionId)}
            >
              <DriveFileRenameOutlineIcon
                fontSize='medium'
                color={'info'}
              />
            </IconButton>
            <IconButton
              aria-label='Elimiinar Usuario'
              color='info'
              onClick={() => onAlterDelete(row.id)}
            >
              <DeleteOutlineIcon
                fontSize='medium'
                color={'info'}
              />
            </IconButton>
          </Box>
        )
      }
    },
  ];

    
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Paper>
          <div style={{ width: '100%' }}>
            <DataGrid 
              loading={isLoading}
              autoHeight
              checkboxSelection
              rows={state.users} 
              columns={columns} 
              paginationMode='server'
              pageSize={pageSize}
              page={page}
              rowsPerPageOptions={[10, 25, 50]}
              sx={{ 
                boxShadow: 1,
                border: 1,
                borderColor: '#ccc',
                '& .MuiDataGrid-columnHeaders': { 
                  borderRadius: 0, 
                  backgroundColor: "rgba(0,141,255,0.2)" 
                } 
              }}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              onPageChange={(newPage) => setPage(newPage)}
              // localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            />
          </div>
        </Paper>
      </Grid>
    </Grid>
  )
}
