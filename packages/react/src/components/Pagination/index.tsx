import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from 'phosphor-react'
import { PaginationContainer, PaginationContent } from './styles'

export interface PaginationProps {
  onPageChange: (page: Number) => void
  activePage: number
  totalPages: number
}

export function Pagination({
  onPageChange,
  activePage = 1,
  totalPages,
}: PaginationProps) {
  return (
    <PaginationContainer>
      <PaginationContent>
        {activePage > 2 && (
          <a onClick={() => onPageChange(1)}>
            <CaretDoubleLeft />
          </a>
        )}
        {activePage > 1 && (
          <a onClick={() => onPageChange(activePage - 1)}>
            <CaretLeft />
          </a>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((step) => {
          return (
            <a
              onClick={() => onPageChange(step)}
              key={step}
              className={step === activePage ? 'active' : 'not-active'}
            >
              {step}
            </a>
          )
        })}
        {activePage <= totalPages - 1 && (
          <a onClick={() => onPageChange(activePage + 1)}>
            <CaretRight />
          </a>
        )}
        {activePage <= totalPages - 2 && (
          <a onClick={() => onPageChange(totalPages)}>
            <CaretDoubleRight />
          </a>
        )}
      </PaginationContent>
    </PaginationContainer>
  )
}

Pagination.displayName = 'Pagination'
