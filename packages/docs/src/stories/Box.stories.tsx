import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text } from '@grupotop-ui/react'

const meta: Meta<typeof Box> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}
export default meta
export const Primary: StoryObj<typeof Box> = {}
