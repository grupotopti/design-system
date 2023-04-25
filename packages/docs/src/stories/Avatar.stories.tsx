import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@grupotop-ui/react'

const meta: Meta<typeof Avatar> = {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/patrickpecegueiro.png',
    alt: 'Patrick Pecegueiro',
  },
  argTypes: {
    borderImage: {
      options: ['default', 'px', 'xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    src: {
      control: {
        type: 'text',
      },
    },
  },
}
export default meta
export const Primary: StoryObj<typeof Avatar> = {}

export const WithFallback: StoryObj<typeof Avatar> = {
  args: {
    src: undefined,
  },
}
