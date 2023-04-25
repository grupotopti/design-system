import { ReactElement } from 'react'
import { TableContainer } from './styles'

export interface TableProps {
  children: ReactElement
}

export function Table({ children }: TableProps) {
  return (
    <TableContainer>
      <>{children}</>
    </TableContainer>
  )
}

Table.displayName = 'Table'
