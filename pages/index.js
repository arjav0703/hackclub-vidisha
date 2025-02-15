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
      <Box as="header" sx={{ bg: 'sheet', color: 'text' }}>
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
            <NavLink href="https://github.com/hackclub/theme-starter">
              Starter
            </NavLink>
          </Grid>
        </Container>
        </Box>
        
    </>
  )
  
  export default HomePage