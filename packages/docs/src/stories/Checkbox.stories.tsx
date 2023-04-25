import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox } from '@grupotop-ui/react'

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story: any) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
}
export default meta
export const Primary: StoryObj<typeof Checkbox> = {}
