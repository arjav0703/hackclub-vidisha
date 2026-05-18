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
import Bio from '../components/bio'

export default function CampPage() {
  return (
    <>
      <Head>
        <title>Summer Camp</title>
        <link rel="icon" href="/icon.jpg" />
      </Head>

      <Box as="header" sx={{ bg: 'sunken', color: 'text' }}>
        <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
          <Link href="/">
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
        <Heading variant="title" sx={{ mt: 5 }}>
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
      <Container my={100}>
        <Heading variant="title">FAQ</Heading>
        {faq.map(item => (
          <Box key={item.question} sx={{ mb: 4 }}>
            <Heading variant="headline" color="accent">
              {item.question}
            </Heading>
            <Text sx={{ fontSize: 3 }}>{item.answer}</Text>
          </Box>
        ))}
      </Container>

      <Container>
        <Heading variant="title">Meet the Team</Heading>
        <Grid columns={[1, 2]} gap={4} my={4}>
          {team.map(member => (
            <Bio
              key={member.name}
              name={member.name}
              teamRole={member.role}
              bgcolor={member.bgcolor}
              img={member.image}
            />
          ))}
        </Grid>
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

const faq = [
  {
    question: 'Who can attend the camp?',
    answer:
      'The camp is open to all students of Trinity Convent Sr. Sec. School.'
  },
  {
    question: 'How do I register for the camp?',
    answer:
      'Contact your teachers or office staff to register for the camp. Registration is required to attend.'
  },
  {
    question: 'Do I need a laptop to attend the camp?',
    answer:
      'No, all students will be provided a computer to use during the camp. However, if you have a laptop and would like to bring it, you are welcome to do so.'
  }
]

const team = [
  {
    name: 'Arjav Jain',
    role: 'Mentor - Web Developement',
    bgcolor: '#a9f',
    image:
      'https://user-cdn.hackclub-assets.com/019d8088-e1b7-7f91-8f7e-fff20bca0b50/IMG_4885.jpeg'
  },
  {
    name: 'Anay Jain',
    role: 'Mentor - 3D Modeling and Electric Circuits',
    bgcolor: '#a9f749',
    image:
      'https://cdn.hackclub.com/019e3bef-daf4-7375-b571-32e8ce0ddee9/image.png'
  },
  {
    name: 'Aviral Sen',
    role: 'Volunteer - Workshop Assistant',
    bgcolor: '#138dff',
    image:
      'https://images-ext-1.discordapp.net/external/fnPwNFnVFvB32Qp7_UuepOOEvXzaZwnjeN9Cqj9a4wQ/https/cdn.hackclub.com/019e3bf6-15fd-7bc5-a5fe-091cd757a967/image.png?format=webp&quality=lossless&width=1880&height=1880'
  }
]
