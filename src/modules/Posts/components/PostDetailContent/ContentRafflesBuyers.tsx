import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch } from 'common/hooks';
import {
  actionsUser,
  useSelectUsersData,
  useSelectUsersLoading
} from 'modules/Users';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'id',
    headerName: '#',
    headerAlign: 'center',
    align: 'center',
    width: 56
  },
  {
    field: 'name',
    headerName: 'Name',
    headerAlign: 'center',
    align: 'center',
    minWidth: 200,
    flex: 1
  },
  {
    field: 'ticket',
    headerName: 'Ticket N',
    headerAlign: 'center',
    align: 'center',
    minWidth: 120
  },
  {
    field: 'date',
    headerName: 'Date',
    headerAlign: 'center',
    align: 'center',

    minWidth: 150
  },
  {
    field: 'email',
    headerName: 'Email',
    headerAlign: 'center',
    align: 'center',

    minWidth: 200
  }
];

const rows = [
  {
    id: 1,
    name: 'Name of the buyer',
    ticket: '#01',
    date: '00/00/0000',
    email: 'name@email.com'
  },
  {
    id: 2,
    name: 'Name of the buyer',
    ticket: '#02',
    date: '00/00/0000',
    email: 'name@email.com'
  },
  {
    id: 3,
    name: 'Name of the buyer',
    ticket: '#03',
    date: '00/00/0000',
    email: 'name@email.com'
  },
  {
    id: 4,
    name: 'Name of the buyer',
    ticket: '#04',
    date: '00/00/0000',
    email: 'name@email.com'
  },
  {
    id: 5,
    name: 'Name of the buyer',
    ticket: '#05',
    date: '00/00/0000',
    email: 'name@email.com'
  },
  {
    id: 6,
    name: 'Name of the buyer',
    ticket: '#06',
    date: '00/00/0000',
    email: 'name@email.com'
  },
  {
    id: 7,
    name: 'Name of the buyer',
    ticket: '#07',
    date: '00/00/0000',
    email: 'name@email.com'
  },
  {
    id: 8,
    name: 'Name of the buyer',
    ticket: '#08',
    date: '00/00/0000',
    email: 'name@email.com'
  },
  {
    id: 9,
    name: 'Name of the buyer',
    ticket: '#09',
    date: '00/00/0000',
    email: 'name@email.com'
  },
  {
    id: 10,
    name: 'Name of the buyer',
    ticket: '#010',
    date: '00/00/0000',
    email: 'name@email.com'
  },
  {
    id: 11,
    name: 'Name of the buyer',
    ticket: '#011',
    date: '00/00/0000',
    email: 'name@email.com'
  },
  {
    id: 12,
    name: 'Name of the buyer',
    ticket: '#012',
    date: '00/00/0000',
    email: 'name@email.com'
  },
  {
    id: 13,
    name: 'Name of the buyer',
    ticket: '#013',
    date: '00/00/0000',
    email: 'name@email.com'
  },
  {
    id: 14,
    name: 'Name of the buyer',
    ticket: '#014',
    date: '00/00/0000',
    email: 'name@email.com'
  },
  {
    id: 15,
    name: 'Name of the buyer',
    ticket: '#015',
    date: '00/00/0000',
    email: 'name@email.com'
  }
];
export const ContentRafflesBuyers: React.FC = () => {
  const dispatch = useAppDispatch();
  const entities = useSelectUsersData();
  const loading = useSelectUsersLoading();

  useEffect(() => {
    dispatch(actionsUser.fetchUsers());
  }, [dispatch]);

  return (
    <Box height={370} sx={{ width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={rows}
            columns={columns as any}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableColumnMenu={true}
            disableColumnSelector={true}
            sx={{
              border: 1,
              borderColor: 'grey.200'
            }}
          />
        </div>
      </div>
    </Box>
  );
};
