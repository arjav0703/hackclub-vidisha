import { Card, Container, Flex, Heading, Link , Text} from "theme-ui";


export default function Faq() {
    return(
            <Flex
      as="main"
      sx={{
        bg: 'background',
        color: 'accent',
        py: 60,
        h1: { mt: 5 },
        flexWrap: 'wrap'
      }}
    >
      <Container>
        <Heading variant="headline">What is Hackclub?</Heading>
        <Card
          as="main"
          sx={{ p: 4, mt: 1, borderRadius: 'extra', bg: 'sheet' }}
        >
          <Text variant="subtitle">
            Hack Club is a global network of programming clubs where members
            learn to code through tinkering and building projects. We have a
            strong community of students who help each other learn and grow.
          </Text>
        </Card>
      </Container>

      <Container>
        <Heading variant="headline">How can I join Hackclub?</Heading>
        <Card
          as="main"
          sx={{ p: 4, mt: 1, borderRadius: 'extra', bg: 'sheet' }}
        >
          <Text variant="subtitle">
            If you are a teenager below 18 years of age, you can sign up{' '}
            <Link href="https://hack.club/join/UPVJZG">
              here
            </Link>
            .
          </Text>
        </Card>
      </Container>

      <Container>
        <Heading variant="headline">What if I do not know coding?</Heading>
        <Card
          as="main"
          sx={{ p: 4, mt: 1, borderRadius: 'extra', bg: 'sheet' }}
        >
          <Text variant="subtitle">
            It is completely fine if you are new to code. We have a lot of
            resources and a community that will help you learn to code. We have
            a lot of members who are new to coding and are learning to code.
          </Text>
        </Card>
      </Container>
    </Flex>
    )
}