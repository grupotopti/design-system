import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep } from '@grupotop-ui/react'

const meta: Meta<typeof MultiStep> = {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
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
export const Primary: StoryObj<typeof MultiStep> = {
  args: {},
}

export const Full: StoryObj<typeof MultiStep> = {
  args: {
    currentStep: 4,
  },
}
