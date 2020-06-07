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

export const buttons = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginBottom: '30px',
        }}
      >
        <Button label="Primary" />
        <Button label="Secondary" kind="secondary" />
        <Button label="Success" kind="success" />
        <Button label="Warning" kind="warning" />
        <Button label="Danger" kind="danger" />
        <Button label="Info" kind="info" />
        <Button label="Neutral" kind="neutral" />
        <Button round icon="menu" />
        <Button label="Loading" loading />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginBottom: '30px',
        }}
      >
        <Button label="Primary" variant="outline" />
        <Button label="Secondary" kind="secondary" variant="outline" />
        <Button label="Success" kind="success" variant="outline" />
        <Button label="Warning" kind="warning" variant="outline" />
        <Button label="Danger" kind="danger" variant="outline" />
        <Button label="Info" kind="info" variant="outline" />
        <Button label="Neutral" kind="neutral" variant="outline" />
        <Button round icon="menu" variant="outline" />
        <Button label="Loading" loading variant="outline" />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginBottom: '30px',
        }}
      >
        <Button label="Primary" variant="ghost" />
        <Button label="Secondary" kind="secondary" variant="ghost" />
        <Button label="Success" kind="success" variant="ghost" />
        <Button label="Warning" kind="warning" variant="ghost" />
        <Button label="Danger" kind="danger" variant="ghost" />
        <Button label="Info" kind="info" variant="ghost" />
        <Button label="Neutral" kind="neutral" variant="ghost" />
        <Button round icon="menu" variant="ghost" />
        <Button label="Loading" loading variant="ghost" />
      </div>
    </>
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
