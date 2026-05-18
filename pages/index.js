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
import UpcomingEvents, { PastEvents } from '../components/events'
import Flag from '../components/flag'

import React from 'react'
import Team from '../components/team'
import Faq from '../components/faq'
import Hero from '../components/hero'
// Next.js allows fast development of static sites with server-side rendering

// Fast development my ass!
const Row = styled(Container)`
  px: 3;
  py: [4, 5];
  color: 'black';
  display: grid;
  text-align: left;
  h2 {
    line-height: 1;
    margin-bottom: 18px;
  }
  @media screen and (min-width: 48em) {
    grid-gap: 24px;
    grid-template-columns: 2fr 3fr;
  }
`

Row.defaultProps = { sx: { px: 3, py: [3, 4], color: 'black' } }


const HomePage = () => (
  <>
    <Head>
      <title>Home</title>
      <Meta
        as={Head} // component to wrap tags in, defaults to React.Fragment
        name="Hack Club" // site name
        title="Home" // page title
        description="Hackclub Vidisha is a high school coding club in vidisha" // page description
        image="https://hackathons.hackclub.com/card.png" // large summary image URL
        color="#ec3750" // theme color
        manifest="/site.webmanifest"
      />
      <link rel="icon" href="/icon.jpg" />
      <meta
        name="google-site-verification"
        content="hThcfgfWeBT7H0Qp2yp934ergwCeAWIq8y9y9gIXqE8"
      />
    </Head>

    <Box as="header" sx={{ bg: 'sunken', color: 'text' }}>
      <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
        <Link href="https://hackclub.com">
          <img
            src="https://assets.hackclub.com/flag-orpheus-left.svg"
            alt="Hack Club Flag"
            style={{ position: 'fixed', top: 0, left: 0, width: '256px' }}
          />
        </Link>
        <ColorSwitcher />
        <Heading as="h1" variant="ultratitle" color="red">
          Hack Club Vidisha
        </Heading>
        <Grid
          gap={3}
          columns="auto auto auto"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 2,
            mt: 3,
            mb: 4,
            a: { color: 'muted', transition: 'color .125s ease-in-out' }
          }}
        >
          <Button
            as="a"
            href="https://github.com/orgs/HackClub-Vidisha/repositories"
            variant="outline"
          >
            GitHub
          </Button>
          <Button as="a" href="https://hack.club/0z65uj" variant="outline">
            Discord
          </Button>
          <Button
            as="a"
            href="https://instagram.com/hackclubvidisha"
            variant="outline"
          >
            Instagram
          </Button>
        </Grid>
        <Button
        as="a"
        href="https://hack.club/0z65uj"
        variant="lg"
        >
          Join Us
        </Button>
      </Container>
    </Box>
    
    <UpcomingEvents/>
     
    <Hero/>

    <Faq/>

    <PastEvents />

    <Team/>

    <Footer/>
  </>
)

export default HomePage
