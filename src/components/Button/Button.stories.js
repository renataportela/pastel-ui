import React from 'react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import { Button, Close } from '~/components'

export default {
  title: 'Button',
  decorators: [withKnobs],
}

const VARIANTS = ['primary', 'success', 'warning', 'danger', 'info', 'neutral'];
const KINDS = ['default', 'outline'];
const SIZES = ['sm', 'md', 'lg', 'xl'];

export const button = () => {
  return (
    <Button 
      label={text('Label', 'Label')} 
      color={select('Color', VARIANTS, 'primary') } 
      loading={boolean('Loading', false)}
      round={boolean('Round', false)}
      icon={text('Icon', '')}
      kind={select('Kind', KINDS, 'default') } 
      size={select('Size', SIZES, 'md') } 
    />
  );
}

export const defaultButtons = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom: '30px',
      }}
    >
      <Button label="Primary" />
      <Button label="Success" color="success" />
      <Button label="Warning" color="warning" />
      <Button label="Danger" color="danger" />
      <Button label="Info" color="info" />
      <Button label="Neutral" color="neutral" />
      <Button round icon="menu" />
      <Button label="Loading" loading />
    </div>
  )
}

export const outline = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom: '30px',
      }}
    >
      <Button label="Primary" kind="outline" />
      <Button label="Success" color="success" kind="outline" />
      <Button label="Warning" color="warning" kind="outline" />
      <Button label="Danger" color="danger" kind="outline" />
      <Button label="Info" color="info" kind="outline" />
      <Button label="Neutral" color="neutral" kind="outline" />
      <Button round icon="menu" kind="outline" />
      <Button label="Loading" kind="outline" loading />
    </div>
  )
}

export const sizes = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginBottom: '30px',
      }}
    >
      <Button label="Small" size="sm" />
      <Button label="Medium" size="md" />
      <Button label="Large" size="lg" />
      <Button label="Extra Large" size="xl" />

      <Button round icon="menu" size="sm" />
      <Button round icon="menu" size="md" />
      <Button round icon="menu" size="lg" />
      <Button round icon="menu" size="xl" />
    </div>
  )
}

export const closeButton = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginBottom: '30px',
      }}
    >
      <Close size="sm" />
      <Close size="md" />
      <Close size="lg" />
      <Close size="xl" />
    </div>
  );
}
