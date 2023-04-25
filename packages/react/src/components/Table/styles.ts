import { styled } from '../../styles'

export const TableContainer = styled('table', {
  width: '100%',
  fontFamily: '$default',
  color: '$white',

  borderCollapse: 'separate',
  [`thead th`]: {
    padding: '$3 $4',

    textAlign: 'left',
    fontSize: '$sm',
    fontWeight: '$regular',
  },
  [`tbody td`]: {
    padding: '$3 $4',
    color: '$gray100',
    backgroundColor: '$gray700',
  },
  [`tbody td:first-child`]: {
    borderTopLeftRadius: '$md',
    borderBottomLeftRadius: '$md',
  },
  [`tbody td:last-child`]: {
    borderTopRightRadius: '$md',
    borderBottomRightRadius: '$md',
  },
  [`tbody tr:nth-child(even) td`]: {
    backgroundColor: '$gray300',
  },
  [`tbody tr:hover`]: {
    [`td`]: {
      background: '$orange900',
      transition: 'background-color 0.2s',
    },
  },
})
