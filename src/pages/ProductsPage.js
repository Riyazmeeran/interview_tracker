import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container,Box, Button , TextField, Typography } from '@mui/material';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import { LoadingButton } from '@mui/lab';

// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';



// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: Products | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
        Job Application
        <Typography variant="body2" >
        Please complete the form below to apply for a position with us.
        </Typography>
      </Typography>

        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        >

        <TextField
          required
          id="outlined-required"
          label= "First Name"
        />

        <TextField
          required
          id="outlined-required"
          label= "Last Name"
        /> 
        </Box>
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField
          required
          id="outlined-required"
          label= "Phone Number"
        />

        <TextField
          required
          id="outlined-required"
          label= "Email Address"
        /> 
        </Box>

        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField
          required
          id="outlined-required"
          label= "Linked In"
        />

        <TextField
          required
          id="outlined-required"
          label= "GitHub Id"
        /> 
        </Box>

        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '100ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField
          required
          id="outlined-required"
          label= "Premantent Address"
          multiline
          rows={5}
        />
        </Box>

        <Box
        component="form"
        sx={{  mt: 1, }}
        noValidate
        autoComplete="off"
        >
        <Button  variant="contained" component="label" startIcon={<FolderSharedIcon />}>
        Upload Your Resume  <input hidden accept="image/*" multiple type="file" />
      </Button>
      </Box>
    </Container>
  </>
  );
}
