import type { Meta, StoryObj } from '@storybook/react'
import { Pagination, Box } from '@grupotop-ui/react'

const meta: Meta<typeof Pagination> = {
  title: 'Surfaces/Pagination',
  component: Pagination,
  args: {
    totalPages: 10,
    activePage: 1,
    onPageChange: (page: Number) => alert(page),
  },
  decorators: [
    (Story: any) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
}

export default meta

export const Primary: StoryObj<typeof Pagination> = {
  args: {},
}

export const Full: StoryObj<typeof Pagination> = {
  args: {
    totalPages: 30,
    activePage: 4,
  },
}
