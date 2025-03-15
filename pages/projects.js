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
  import theme from '@hackclub/theme'
  import ColorSwitcher from '../components/color-switcher'
  import Bio from '../components/bio'
  import Footer from '../components/footer'
  import styled from '@emotion/styled'
  import Icon from '@hackclub/icons'
  import Flag from '../components/flag'
  
  import React from 'react'


  const ProjectPage = () => (
    <>
        <Head><Meta
          as={Head} // component to wrap tags in, defaults to React.Fragment
          name="Hack Club" // site name
          title="Home" // page title
          description="Projects made by our members" // page description
          image="https://hackathons.hackclub.com/card.png" // large summary image URL
          color="#ec3750" // theme color
          manifest="/site.webmanifest" />
      </Head>
      
        <Box sx={{bg: 'sheet', color: 'primary', py:4}}>
            <Container variant='copy' sx={{ p:2 }}>
                <Heading as='h1' variant='title'>Projects</Heading>
                <Text as='p' variant='lead'>Here are some of the projects made by our members</Text>
            </Container>
        </Box>

        <Container variant='copy' sx={{ p:5 }}>
            <pre>
              <code>'name': Arjav<br/>'project': 'jwick' <Link href='https://github.com/arjav0703/boba'>Demo</Link></code>
            </pre>
        </Container>
    </>
  )

  export default ProjectPage