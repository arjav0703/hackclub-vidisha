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

import BobaProjects from '../lib/projects'

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

    
      <Container variant="copy" sx={{ my:20, p:10, backgroundImage: t => t.util.gx('cyan', 'blue'), borderRadius:20}}>
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
    
  </>
)

export default ProjectPage