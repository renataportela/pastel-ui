import React from 'react'
import { number , withKnobs } from '@storybook/addon-knobs'

import { CircularProgress, Heading, Progress } from '~/components'

export default {
  title: 'Progress',
  decorators: [withKnobs],
}

const KINDS = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'info',
  'neutral', 
  'primaryLight',
  'secondaryLight',
  'successLight',
  'warningLight',
  'dangerLight',
  'infoLight',
  'dark',
  'darker',
]

export const progress = () => {
  return (
    <>
      {KINDS.map((kind, index) => {
        return (
          <Progress
            key={kind}
            color={kind}
            percent={(index + 1) * 5}
          />
        )
      })}
    </>
  )
}

export const circular = () => {
  return (
    <CircularProgress 
      color="primary" 
      diameter={number('Diameter', 100)} 
      percent={number('Percent', 25)} 
      strokeWidth={number('StrokeWidth', 4)} 
      content={<Heading noMargin>56%</Heading>}
    />
  )
}
