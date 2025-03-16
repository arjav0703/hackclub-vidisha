import {
  BaseStyles,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Label,
  Link,
  NavLink,
  Radio,
  Select,
  Slider,
  Text,
  Textarea
} from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'


import React from 'react'

const BobaProjects = [
  {
    name: 'Arjav',
    code: 'https://github.com/arjav0703/boba',
    demo: 'https://arjav0703.github.io/boba/'
  },
  {
    name: 'Anay',
    code: 'https://github.com/Anayjain1129/BOBA',
    demo: 'https://anayjain1129.github.io/BOBA/'
  }

]

const ProjectPage = () => (
  <>
    <Head>
      <Meta
        as={Head} // component to wrap tags in, defaults to React.Fragment
        name="Hack Club" // site name
        title="Home" // page title
        description="Projects made by our members" // page description
        image="https://hackathons.hackclub.com/card.png" // large summary image URL
        color="#ec3750" // theme color
        manifest="/site.webmanifest"
      />
    </Head>
    
    <Box sx={{ bg: 'sheet', color: 'primary', py: 4 }}>
      <Container variant="copy" sx={{ p:2 }}>
        <Heading as="h1" variant="title">Projects</Heading>
        <Text as="p" variant="lead">
          Here are some of the Projects made by our members
        </Text>
      </Container>
    </Box>

    <Box sx={{color: 'snow', py:4}}>
      <Container variant="copy" sx={{ p:20}}>
        {BobaProjects.map(project => (
          
          <pre key={project.name} sx={{ p: 3, my: 3 }}>
            
            <code>
            name :  
              "{project.name}"
              <br/>
              <a href={project.demo}>
                <code>'Demo'</code>
              :
              </a>
              <a href={project.code}>
                <code>'Source'</code>
              </a>

            </code>
          </pre>
        ))}
      </Container>
    </Box>
  </>
)

export default ProjectPage