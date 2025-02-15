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
        sx={{ bg: 'background', color: 'accent', py: 4, h1: { mt: 4 } , flexWrap: 'wrap'}}
      >
        <Container variant='wide'>
          <Heading variant="headline">What is Hackclub?</Heading>
          <Card as="main" sx={{ p: 1, mt: 1, borderRadius: 'extra', bg: 'sheet' }}>
            <Text variant='subtitle' >
              Hack Club is a global network of programming clubs where members learn to code through tinkering and building projects. We have a strong community of students who help each other learn and grow.
            </Text>
          </Card>
        </Container>
          <Flex sx={{justifyContent: 'center', alignItems: 'center',py: 4 }}>
            <Container variant='wide'>
              <Heading variant="headline">What if I do not know coding?</Heading>
              <Card as="main" sx={{ p: 1, mt: 1, borderRadius: 'extra', bg: 'sheet' }}>
                <Text variant='subtitle' >
                  It is completely fine if you are new to code. We have a lot of resources and a community that will help you learn to code. We have a lot of members who are new to coding and are learning to code.
                </Text>
              </Card>
            </Container>

            <Container variant='wide'>
              <Heading variant="headline">How can I join Hackclub?</Heading>
              <Card as="main" sx={{ p: 1, mt: 1, borderRadius: 'extra', bg: 'sheet' }}>
                <Text variant='subtitle' >
                  If you are a teenager below 18 years of age, you can email us at <Link href="malito:arjavjain06">arjavjain0701@gmail.com</Link>.
                </Text>
              </Card>
            </Container>
          </Flex>
        </Flex>
    </>
  )
  
  export default HomePage