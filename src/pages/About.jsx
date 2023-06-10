import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign: 'center',
        p: 2,
        "& h4": {
          fontWeight: 'bold',
          my: 2,
          fontSize: '2rem',
        },
        "& p": {
          textAlign: 'justify',
        },
        "& @media (max-width: 600px)": {
          mt:0,
          "& h4": {
            fontSize: '1.5rem',
          },
        },
      }}>
        <Typography variant='h4'>
          Welcome to my restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima sint, impedit corrupti non totam
          provident vel ad asperiores libero dolor molestiae eaque neque quam quas rem labore maxime quos ullam.
          Consequuntur pariatur saepe doloribus et porro tempora. Accusantium et quia maxime qui, in, pariatur
          beatae quo provident sit repudiandae, officia repellendus deleniti illo dignissimos nobis rerum sunt
          consequuntur nostrum voluptates tenetur voluptatibus voluptatem dolores repellat? Ipsa id quos, sed
          suscipit distinctio minus soluta sequi neque delectus dolores earum tempore accusantium hic vero natus
          quis odit aspernatur. Deleniti minus quidem in, aperiam officiis reprehenderit labore, excepturi
          veniam a fugiat iste.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minima sint, impedit corrupti non totam
          provident vel ad asperiores libero dolor molestiae eaque neque quam quas rem labore maxime quos ullam.
          Consequuntur pariatur saepe doloribus et porro tempora. Accusantium et quia maxime qui, in, pariatur
          beatae quo provident sit repudiandae, officia repellendus deleniti illo dignissimos nobis rerum sunt
          consequuntur nostrum voluptates tenetur voluptatibus voluptatem dolores repellat? Ipsa id quos, sed
          suscipit distinctio minus soluta sequi neque delectus dolores earum tempore accusantium hic vero natus
          quis odit aspernatur. Deleniti minus quidem in, aperiam officiis reprehenderit labore, excepturi
          veniam a fugiat iste.
        </p>
      </Box>
    </Layout>
  )
}

export default About