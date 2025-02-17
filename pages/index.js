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

  
  const HomePage = () => (
    <>
      <Head>
        <title>Home</title>
        <Meta
          name="Home"
          description="Hack Club Vidisha's home page"
        />
      </Head>
      <Box as="header" sx={{ bg: 'sunken', color: 'text' }}>
        <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
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
            <NavLink href="https://github.com/HackClub-Vidisha/">GitHub</NavLink>
            <NavLink href="#members">
              Members
            </NavLink>
            <NavLink href="https://instagram.com/hackclubvidisha">
              Instagram
            </NavLink>
          </Grid>
        </Container>
      </Box>

      <Flex
        as="main"
        sx={{ bg: 'background', color: 'accent', py: 60, h1: { mt: 5 }, flexWrap: 'wrap' }}
      >
        <Container>
          <Heading variant="headline">What is Hackclub?</Heading>
          <Card as="main" sx={{ p: 4, mt: 1, borderRadius: 'extra', bg: 'sheet' }}>
            <Text variant='subtitle'>
              Hack Club is a global network of programming clubs where members learn to code through tinkering and building projects. We have a strong community of students who help each other learn and grow.
            </Text>
          </Card>
        </Container>

        <Container>
          <Heading variant="headline">How can I join Hackclub?</Heading>
          <Card as="main" sx={{ p: 4, mt: 1, borderRadius: 'extra', bg: 'sheet' }}>
            <Text variant='subtitle'>
              If you are a teenager below 18 years of age, you can fill the form at <Link href="https://hackclubvidisha.fillout.com/t/hvsp3Wgnqqus">here</Link>.
            </Text>
          </Card>
        </Container>

        <Container>
          <Heading variant="headline">What if I do not know coding?</Heading>
          <Card as="main" sx={{ p: 4, mt: 1, borderRadius: 'extra', bg: 'sheet' }}>
            <Text variant='subtitle'>
              It is completely fine if you are new to code. We have a lot of resources and a community that will help you learn to code. We have a lot of members who are new to coding and are learning to code.
            </Text>
          </Card>
        </Container>
      </Flex>



      <Container>
        <Heading variant="headline">Team</Heading>
        <Grid
          columns={[null, 2, 3]}
          gap={3}
          sx={{ code: { mt: 1, ml: -1, fontSize: 0 } }}
        >
          <Card
            sx={{
              backgroundImage: t => t.util.gx('#FF83EC', '#0043EC'),
              color: 'white',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            <Heading variant="headline" as="h3" my={0}>
              Arjav Jain
            </Heading>
            <Text variant="subtitle">
              Tech lead <Link href="https://jain.arjav.tech">Contact</Link>
            </Text>
          </Card>
          <Card
            sx={{
              backgroundImage: t => t.util.gx('red', 'yellow'),
              color: 'white',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            <Heading variant="headline" as="h3" my={0}>
              Anay Jain
            </Heading>
            <Text variant="subtitle">
              Event Coordinator <Link href="malito:anayjain1128@gmail.com">Contact</Link>
            </Text>
          </Card>
        </Grid>
      </Container>
    </>
  )
  
  export default HomePage