import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import MovingIcon from '@mui/icons-material/Moving';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import CompareArrowsSharpIcon from '@mui/icons-material/CompareArrowsSharp';
import LocationOn from '@mui/icons-material/LocationOn';
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------


function createData(TripEstimations, Kilometers, Durations, FareAmounts) {
    return {TripEstimations, Kilometers, Durations, FareAmounts};
  }
  
  const rows = [
    createData('Chief Group Planner ', "Full Stack", "Chennai", "Immediate"),
    createData('Amazon', "Sales Manager", "Chennai", "Immediate"),
    createData('Cognizant Technology Solutions', "Full Stack Eng", "Chennai", "With in a Month"),
    createData('Tech Mahindra', "Operator", "Chennai", "Immediate"),
    createData('Tata Consultancy Services', "Hr Role", "Chennai", "Jan10-20"),
    createData('Zoho', "Full Stack", "CEO", "Immediate"),
    createData('Plintron Global Technologies',"Interviwer", "Chennai", "With in a Week"),
    createData('Hexaware Technologies', "SEO", "Chennai", "Immediate"),
    createData('Infosys', "Full Stack Developer", "Chennai", "Immediate"),
   
  ];
  

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Interviews Upto Date</title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
          Interviews Upto Date
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button>
        </Stack>

            <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" ><Typography fontWeight={900}>Opening Interview Companys</Typography></TableCell>
              <TableCell align="right" ><Typography fontWeight={900}>Role For</Typography></TableCell>
              <TableCell align="right" ><Typography fontWeight={900}>Location</Typography></TableCell>
              <TableCell align="right" ><Typography fontWeight={900}>Joining</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (    
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.TripEstimations}</TableCell>
                <TableCell align="right">{row.Kilometers}</TableCell>
                <TableCell align="right">{row.Durations}</TableCell>
                <TableCell align="right">{row.FareAmounts} </TableCell>
              </TableRow>
              
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
