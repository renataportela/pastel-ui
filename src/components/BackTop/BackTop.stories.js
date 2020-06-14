import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import { BackTop, Paragraph } from '~/components'

export default {
  title: 'BackTop',
  decorators: [withKnobs],
}

const VARIANTS = ['success', 'warning', 'danger', 'info', 'neutral'];
const KINDS = ['default', 'outline'];
const SIZES = ['sm', 'md', 'lg', 'xl'];

export const backTop = () => {
  return (
    <>
      <Paragraph>
        Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta
        cumpadi, sou preto inteiris, inteiris. Quem num gosta di mé, boa
        gentis num é. Delegadis gente finis, bibendum egestas augue arcu ut
        est. Quem num gosta di mim que vai caçá sua turmis!
      </Paragraph>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <Paragraph>
        Cevadis im ampola pa arma uma pindureta. Nec orci ornare consequat.
        Praesent lacinia ultrices consectetur. Sed non ipsum felis. Atirei o
        pau no gatis, per gatis num morreus. Si num tem leite então bota uma
        pinga aí cumpadi!
      </Paragraph>

      <BackTop 
        color={select('Color', VARIANTS) } 
        kind={select('Kind', KINDS, 'default') } 
        size={select('Size', SIZES, 'md') } 
      />
    </>
  );
}

