import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$regular',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',
  color: '$white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    color: '$gray200',
    borderColor: '$red900',
    backgroundColor: '$gray700',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    styleButton: {
      confirm: {
        background: '$green500',
        border: '$green500 1px solid',
        '&:hover': {
          background: '$green700',
          border: '$green700 1px solid',
          transition: 'background-color 0.2s, border-color 0.2s',
        },
      },
      default: {
        background: '$gold700',
        border: '$gold700 1px solid',
        '&:hover': {
          background: '$gold800',
          border: '$gold800 1px solid',
          transition: 'background-color 0.2s, border-color 0.2s',
        },
      },
      cancel: {
        background: '$red700',
        borderColor: '$red700 1px solid',
        '&:hover': {
          background: '$red900',
          border: '1px solid $red900',
          transition: 'background-color 0.2s',
        },
      },
    },

    size: {
      sm: {
        height: '$10',
      },

      md: {
        height: '$12',
      },
    },
  },

  defaultVariants: {
    styleButton: 'default',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
