import React, { useContext, useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Grid, IconButton, Paper, Skeleton, Typography } from '@mui/material';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';





export const UserPage = () => {

  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(0);
  const { state, getUsers, deleteUser,  activeUser } = useContext(UserContext);
  const navigate = useNavigate();


  useEffect( () => {
    getUsers(page);
  }, []);

  
  const getButtonsActions = (row) => {

    return (
      <>
        {  row.is_active && (
          <IconButton
            disabled={ !row.is_active }
            color='info'
            title='Editar'
            onClick={() => navigate(`/usuarios/editar/${row.id}`)}
          >
            <DriveFileRenameOutlineIcon
              fontSize='medium'
              color={row.is_active ? 'info' : 'disabled'}
            />
          </IconButton>
        )}

        {  row.is_active && (
          <IconButton
            disabled={ !row.is_active }
            color={row.is_active ? 'info' : 'disabled'}
            onClick={() => deleteUser(row.id)}
            title='Deshabilitar Usuario'
          >
            <DeleteOutlineIcon
              fontSize='medium'
              color={row.is_active ? 'info' : 'disabled'}
            />
          </IconButton>
        )}

        {  !row.is_active && (
          <Button 
            variant="outlined" 
            size='small'
            color='info'
            onClick={() => activeUser(row.id)}
            sx={{ fontSize: 12}}
          >
            Activar
          </Button>
        )}
      </>
    )
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
      headerName: 'Activo',
      minWidth: 100,
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              aria-label='Usuario Activo'
              color='info'
              disabled={true}
            >
              <DoneAllIcon
                fontSize='medium'
                sx={{ mr: 2 }}
                color={(row.is_active) ? 'success' : 'disabled'}
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
            {getButtonsActions(row)}
          </Box>
        )
      }
    },
  ];





    
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{  
              marginLeft: 3, 
          }}
      >
          <Typography 
            variant='h5' 
            fontFamily={'fantasy'}
          >
            Lista Usuarios
          </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper>
          <div style={{ width: '100%' }}>
            <DataGrid 
              // className='animate__animated animate__fadeIn'
              loading={state.isLoading}
              autoHeight
              // checkboxSelection
              rows={state.users} 
              columns={columns} 
              paginationMode='client'
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
