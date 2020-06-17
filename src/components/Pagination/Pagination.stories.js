import React from 'react'
import { select, number } from '@storybook/addon-knobs'

import { Pagination } from '~/components'

export default {
  component: Pagination,
  title: 'Pagination',
}

export const Paginations = () => {
  return (
    <Pagination
      nPages={number('nPages', 5)}
      currentPage={select('Current Page', [1, 10, 20, 50, 100, 500], 1)}
      totalResults={select('Total', [10, 20, 50, 100, 500], 500)}
      perPage={select('Per page', [10, 20, 50, 100], 20)}
    />
  )
}
