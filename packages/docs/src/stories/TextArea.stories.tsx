import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea } from '@grupotop-ui/react'

const meta: Meta<typeof TextArea> = {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story: any) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
}
export default meta
export const Primary: StoryObj<typeof TextArea> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<typeof TextArea> = {
  args: {
    disabled: true,
  },
}
