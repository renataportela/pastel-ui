import React from 'react'
import { addDecorator } from '@storybook/react'

import { Container, Theme } from '../src/components'

addDecorator(story => (
  <Theme>
    <Container>
      {story()}
    </Container>
  </Theme>
))
