import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@grupotop-ui/react'
import { ArrowRight } from 'phosphor-react'

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    styleButton: 'default',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    styleButton: {
      options: ['confirm', 'default', 'cancel'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },

    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
}
export default meta
export const Default: StoryObj<typeof Button> = {
  args: {
    styleButton: 'default',
    children: 'Create new',
  },
}

export const Primary: StoryObj<typeof Button> = {
  args: {
    styleButton: 'confirm',
    children: 'Create new',
  },
}

export const Cancel: StoryObj<typeof Button> = {
  args: {
    styleButton: 'cancel',
    children: 'Cancel',
  },
}

export const Small: StoryObj<typeof Button> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<typeof Button> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<typeof Button> = {
  args: {
    disabled: true,
  },
}
