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

const Super = styled(Text)`
  background-color: rgb(228, 115, 45);
  clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
  color: rgb(255, 255, 255);
  display: inline-block;
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
`

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
        <Heading as="h1" variant="title" color="red">
          Hack Club Vidisha
        </Heading>
        <Grid
          gap={4}
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
      </Container>
    </Box>
    
    <UpcomingEvents/>
     
    <Container sx={{ my: 5 }} variant="wide">
      <Flex sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
        <Text variant="title" color="orange">
          Coding is a <Super>superpower</Super>
        </Text>
        <Container variant="copy">
          <Card
            variant="interactive"
            sx={{
              my: 3,
              backgroundImage: t => t.util.gx('#f89b29', '#ff0f7b'),
              color: 'white'
            }}
          >
            <Text variant="subtitle" color="darker">
              Learning to code is uniquely like gaining a superpower: it
              converts you from a consumer to a creator. Suddenly, computers
              become a tool for creating.
            </Text>
          </Card>
        </Container>
      </Flex>
    </Container>

    <Container sx={{ my: 5 }} variant="wide">
      <Flex sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
        <Text variant="title" color="green">
          Start Building. Now.{' '}
        </Text>
        <Container variant="copy">
          <Card
            variant="interactive"
            sx={{
              my: 3,
              backgroundImage: t => t.util.gx('#57ebde', '#aefb2a'),
              color: 'white'
            }}
          >
            <Text variant="subtitle" color="black">
              Most coding classes teach you programming concepts instead of how
              to write real code—it’s like trying to learn carpentry without any
              wood. So at Hack Club, you learn to code entirely through building
              things. You start with no experience and build and ship a project
              every meeting.
            </Text>
          </Card>
        </Container>
      </Flex>
    </Container>

    <Faq/>

    <PastEvents />

    <Team/>

    <Footer/>
  </>
)

export default HomePage
