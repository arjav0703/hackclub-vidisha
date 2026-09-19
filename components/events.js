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
import styled from '@emotion/styled'
import Icon from '@hackclub/icons'

export default function UpcomingEvents() {
  return (
    <Container sx={{ my: 5, color: 'smoke' }} variant="copy">
      <Text variant="title">
        <Icon glyph="event-code" size={50} /> Upcoming Event(s)
      </Text>
      <a href="https://www.instagram.com/haven.vidisha.hackclub/" target='_blank'>
      <Card
        variant="interactive"
        sx={{
          mt: 3,
          padding: 0,
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          maxWidth: '1054px',
          aspectRatio: '1054 / 622',
          backgroundImage: "url('/haven.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            p: [3, 4],
            background:
              'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))',
            color: 'white'
          }}
        >

          <Badge variant="pill" sx={{ bg: 'red', color: 'white', mb: 2 }}>
            24-hour hackathon
          </Badge>
          <Heading variant="headline" as="h3" my={0} sx={{ color: 'white' }}>
            Haven Vidisha
          </Heading>
          <Text variant="subtitle" sx={{ color: 'white', display: 'block' }}>
            <Icon glyph="clock" size={24} /> Nov 14–15
          </Text>
        </Box>
        </Card>
      </a>
    </Container>
  )
}

export function PastEvents() {
  return (
    <Container sx={{ my: 5, color: 'smoke' }} variant="copy">
      <Text variant="title">
        <Icon glyph="event-code" size={50} /> Past Events
      </Text>
      <Card
        variant="interactive"
        sx={{
          mt: 3,
          bgcolor: 'elevated',
          color: 'secondary'
        }}
      >
        <Heading variant="headline" as="h3" my={0}>
          Boba Workshop
        </Heading>
        <Text variant="subtitle">
          <Icon glyph="clock" size={24} sx={{ pt: 100 }} />
          4-6 PM, March 7 <br />
          Learn how to build HTML and CSS website. <br />
          <Icon glyph="food" /> Get free Cold Coffee and Pizza <br />
        </Text>
      </Card>
      <Card
        variant="interactive"
        sx={{
          mt: 3,
          bgcolor: 'elevated',
          color: 'secondary'
        }}
      >
        <Heading variant="headline" as="h3" my={0}>
          Blurprint Workshop
        </Heading>
        <Text variant="subtitle">
          <Icon glyph="clock" size={24} sx={{ pt: 100 }} />
          November 2025 <br />
          Make your own macropad with PCB design and 3D modelling <br />
          <Icon glyph="food" /> Free food :P <br />
        </Text>
      </Card>

      <a href="/camp">
        <Card
          variant="interactive"
          sx={{
            mt: 3,
            bgcolor: 'elevated',
            color: 'secondary'
          }}
        >
          <Heading variant="headline" as="h3" my={0}>
            Trinity Summer Camp ☀️
          </Heading>
          <Text variant="subtitle">
            <Icon glyph="clock" size={24} sx={{ pt: 100 }} />
            June 1-15, 2026
            <br />
            <Text>
              Learn to build websites, 3D Models, and Electric Circuits. <br />
              Hosted at Trinity Convent Sr. Sec. School, Vidisha. Contact your
              teachers/office staff for registration.
            </Text>
          </Text>
        </Card>
      </a>

      </Container>
  )
}
