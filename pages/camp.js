import Head from 'next/head'
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Heading,
  Link,
  Text
} from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'

export default function CampPage() {
  return (
    <>
      <Head>
        <title>Summer Camp</title>
        <link rel="icon" href="/icon.jpg" />
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
          <Heading as="h1" variant="ultratitle" color="orange">
            ☀️Tech Summer Camp🏕️
          </Heading>
          <Button variant="ctaLg" sx={{ mt: 30 }}>
            June 1st - June 15th, 2026
          </Button>
        </Container>
      </Box>

      <Container variant="copy">
        <Heading as="h2" variant="title" sx={{ mt: 5 }}>
          Workshops
        </Heading>
        {workshops.map(workshop => (
          <WorkShopCard
            key={workshop.title}
            title={workshop.title}
            description={workshop.description}
            color={workshop.color}
          />
        ))}
      </Container>
    </>
  )
}

function WorkShopCard({ title, description, color, url }) {
  return (
    <Card
      sx={{
        bg: color,
        color: 'white',
        p: 2,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
        my: 4
      }}
      variant="interactive"
    >
      <Heading variant="headline">{title}</Heading>
      <Text sx={{ fontSize: 3 }}>{description}</Text>
    </Card>
  )
}

const workshops = [
  {
    title: 'Vibes 😎',
    description:
      'Build your first website with assistance from AI. Learn how to use AI tools to create and customize your own website.',
    color: '#3370ff'
  },
  {
    title: 'Boba Workshop',
    description:
      'Build a basic website using just HTML and very basic CSS (get familiar with development process).',
    color: '#ec9737'
  },
  {
    title: 'Swirl',
    description:
      'Build on top of the previous website and add more CSS to make it prettier and cooler ✨',
    color: '#ee33ff'
  },
  {
    title: 'Toppings 🍓',
    description:
      'Add the final touches to your website with custom CSS and animations.',
    color: '#ff3366'
  },
  {
    title: 'Waffle',
    description: 'Make your website interactive with JavaScript.',
    color: '#e0c617'
  },
  {
    title: 'Blinky ⚡️',
    description:
      'Learn how electric circuits work and build your own blinking LED circuit using a breadboard.',
    color: '#5eda1c'
  },
  {
    title: 'Fusering',
    description:
      '3D Model your own custom keychain and get it 3D printed to take home.',
    color: '#6b89ff'
  }
]
