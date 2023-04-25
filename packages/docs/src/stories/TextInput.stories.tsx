import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput } from '@grupotop-ui/react'

const meta: Meta<typeof TextInput> = {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story: any) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
}
export default meta
export const Primary: StoryObj<typeof TextInput> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<typeof TextInput> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<typeof TextInput> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}
