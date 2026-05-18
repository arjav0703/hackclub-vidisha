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
    return(
         <Container sx={{ mt: 20, color: 'yellow' }} variant="copy">
              <Text variant="title">
                <Icon glyph="event-code" size={50} /> Upcoming Event
              </Text>
              <Card
              variant="interactive"
                sx={{
                  mt: 3,
                  bgcolor: 'cyan',
                  color: 'yellow'
                }}
              >
                <Heading variant="headline" as="h3" my={0}>
                  Trinity Summer Camp ☀️
                </Heading>
                <Text variant="subtitle">
                  <Icon glyph="clock" size={24} sx={{ pt: 100 }} />
                  June 1-15, 2026<br />
                  <Text>
                    Join us for a two-week coding camp where you'll learn to build websites, 3D Models, and Electric Circuits. <br />
                    Hosted at Trinity Convent Sr. Sec. School, Vidisha. Contact your teachers/office staff for registration.
                  </Text>
                </Text>
              </Card>
            </Container>
    )
}

export function PastEvents() {
    return(
        <Container sx={{ my: 5, color: 'smoke' }} variant="copy">
              <Text variant="title">
                <Icon glyph="event-code" size={50} /> Past Events
              </Text>
              <Card
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
            </Container>
    )
}