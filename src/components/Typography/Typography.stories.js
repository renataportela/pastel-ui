import React from 'react'

import { Heading, Paragraph, Text } from '~/components'

export default {
  title: 'Typography',
}

export const heading = () => {
  return (
    <>
      <Heading>Heading 1</Heading>
      <Heading size="2">Heading 2</Heading>
      <Heading size="3">Heading 3</Heading>
      <Heading size="4">Heading 4</Heading>
      <Heading size="5">Heading 5</Heading>
      <Heading size="6">Heading 6</Heading>
    </>
  )
}

export const text = () => {
  return (
    <>
      <Text forwardedAs="p">normal</Text>
      <Text forwardedAs="p" bold>
        bold
      </Text>
      <Text forwardedAs="p" weight="300">
        weight 300
      </Text>
      <Text forwardedAs="p" textColor="lightgreen">
        color
      </Text>
      <Text forwardedAs="p" family="Courier New">
        font family
      </Text>
      <Text forwardedAs="p" size="2rem">
        font size
      </Text>
      <Text forwardedAs="p" italic>
        italic
      </Text>
      <Text forwardedAs="p" upper>
        uppercase
      </Text>
      <Text forwardedAs="p" lower>
        Lowercase
      </Text>
      <Text forwardedAs="p" capitalize>
        capitalize
      </Text>
      <Text forwardedAs="p" underline>
        underline
      </Text>
      <Text forwardedAs="p" line>
        line through
      </Text>
    </>
  )
}

export const paragraph = () => {
  return (
    <>
      <Paragraph>
        Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta
        cumpadi, sou preto inteiris, inteiris. Quem num gosta di mé, boa
        gentis num é. Delegadis gente finis, bibendum egestas augue arcu ut
        est. Quem num gosta di mim que vai caçá sua turmis!
      </Paragraph>
      <Paragraph>
        Cevadis im ampola pa arma uma pindureta. Nec orci ornare consequat.
        Praesent lacinia ultrices consectetur. Sed non ipsum felis. Atirei o
        pau no gatis, per gatis num morreus. Si num tem leite então bota uma
        pinga aí cumpadi!
      </Paragraph>
    </>
  )
}