import React from 'react'
import Layout from '../components/Layout/Layout'

import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my: 5,
        ml: 10,
        "& h4": {
          fontWeight: 'bold',
          mb: 2,
        },
      }}>
        <Typography variant='h4'>Contact My Restaurant</Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum vitae est accusamus accusantium!
          Id ad eveniet possimus error expedita, ipsum natus, quos deleniti omnis repudiandae eligendi, dolor
          mollitia autem?
          Quo incidunt ducimus, alias, obcaecati doloribus fugiat assumenda ab officiis veritatis optio, sint
          adipisci voluptates ullam tempora. Quo eos magnam quam voluptatibus, iusto atque impedit! Aspernatur
          earum tempora voluptas ut.</p>
      </Box>

      <Box 
        sx={{
          m:3, 
          width:"600px",
          ml:10,
          "@media (max-width: 600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table" >
            <TableHead>
              <TableRow>
                <TableCell 
                  sx={{
                    bgcolor:'black',
                    color:'white',
                  }}
                  align='center'
                >Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell >
                  <SupportAgentIcon sx={{ color: 'blue', pt: 1 }} /> 1800-123-123 (Toll Free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  <EmailIcon sx={{ color: 'skyblue', pt: 1 }} /> help123@email.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  <CallIcon sx={{ color: 'green', pt: 1 }} /> 987-654-3210 (Toll Free)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact