import React from 'react';
import Layout from '../components/Layout/Layout';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { MenuList } from '../data/data';

const Menu = () => {
  return (
    <Layout>
      
      <Carousel sx={{margin:'20px 0'}}>
        {MenuList.map((menu) => (
          <Card key={menu.id} sx={{ maxWidth: '400px',minHeight:'500px', margin: '10px auto' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component="div">
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Carousel>
    </Layout>
  );
};

export default Menu;
