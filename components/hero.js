import styled from '@emotion/styled'
import { Card, Container, Flex, Text } from 'theme-ui'

export default function Hero() {
  return (
    <>
      {/* <Container sx={{ my: 5 }} variant="wide">
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
    </Container> */}

      <Container sx={{ my: 5 }} variant="wide">
        <Flex sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
          <Text variant="title" color="green">
            Start Building. <Super>Now</Super>{' '}
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
                Most coding classes teach you programming concepts instead of
                how to write real code—it’s like trying to learn carpentry
                without any wood. So at Hack Club, you learn to code entirely
                through building things. You start with no experience and build
                and ship a project every meeting.
              </Text>
            </Card>
          </Container>
        </Flex>
      </Container>
    </>
  )
}

const Super = styled(Text)`
  background-color: rgb(33, 165, 40);
  clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
  color: rgb(255, 255, 255);
  display: inline-block;
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
`
