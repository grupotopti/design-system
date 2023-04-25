import { styled } from '../../styles'

export const PaginationContainer = styled('div', {
  width: '100%',
  fontFamily: '$default',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
})

export const PaginationContent = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: '$md',
  fontWeight: '$regular',
  display: 'inline-block',
  [`a`]: {
    color: '$white',
    float: 'left',
    padding: '$2 $4',
    textDecoration: 'none',

    cursor: 'pointer',
  },
  [`a.active`]: {
    color: '$white',
    backgroundColor: '$orange700',
    cursor: 'inherit',
  },
  [`a:hover:not(.active)`]: {
    color: '$white',
    backgroundColor: '$gray900',
  },
  [`a:first-child`]: {
    borderTopLeftRadius: '$md',
    borderBottomLeftRadius: '$md',
  },
  [`a:last-child`]: {
    borderTopRightRadius: '$md',
    borderBottomRightRadius: '$md',
  },
})
