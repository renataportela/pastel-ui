import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from '~/components'

function Pagination({
  className,
  totalResults,
  perPage,
  currentPage,
  currentColor,
  buttonsColor,
  nPages,
  onChange,
  style,
  currentKind,
  buttonsKind,
  ...props
}) {
  const totalPages = Math.ceil(totalResults / perPage)
  const pageNumbers = getPageNumbers(nPages, currentPage, totalPages)

  const handleClick = page => () => onChange(page)

  if (totalResults <= perPage) return null

  const navProps = { 
    color: buttonsColor, 
    kind: buttonsKind, 
    ...props 
  }

  return (
    <CenteredNav className={className} style={style}>
      <SpaceButtons>
        {currentPage > 2 && (
          <Button icon="chevrons-left" onClick={handleClick(1)} {...navProps} />
        )}
        {currentPage > 1 && (
          <Button icon="chevron-left" onClick={handleClick(currentPage - 1)} {...navProps} />
        )}
        
        {pageNumbers.map(page => (
          currentPage === page 
          ? <Button
              key={page}
              label={page}
              onClick={handleClick(page)}
              color={currentColor}
              kind={currentKind}
              {...props}
            />
          : <Button key={page} label={page} onClick={handleClick(page)} {...navProps} />
        ))}
        {currentPage < totalPages && (
          <Button icon="chevron-right" onClick={handleClick(currentPage + 1)} {...navProps} />
        )}
        {currentPage < totalPages - 2 && (
          <Button icon="chevrons-right" onClick={handleClick(totalPages)} {...navProps} />
        )}
      </SpaceButtons>
    </CenteredNav>
  )
}

const getPageNumbers = (nPages, currentPage, totalPages) => {
  const range = Math.floor(currentPage / nPages)

  return [...Array(nPages)]
    .map((x, index) => {
      if (currentPage < nPages) return index + 1
      return range * nPages + index
    })
    .filter(page => page <= totalPages)
}

const CenteredNav = styled.div`
  margin: 20px auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpaceButtons = styled.div`
  margin: 0 auto;
  display: inline-flex;

  button {
    margin-left: 2px;
    margin-right: 2px;
  }
`;

Pagination.defaultProps = {
  currentColor: 'primary',
  buttonsColor: 'primary',
  perPage: 20,
  nPages: 5,
  round: true,
  currentKind: 'default',
  buttonsKind: 'ghost',
}

Pagination.propTypes = {
  currentColor: PropTypes.string,
  buttonsColor: PropTypes.string,
  totalResults: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number,
  nPages: PropTypes.number,
  round: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  currentKind: PropTypes.string,
  buttonsKind: PropTypes.string,
}

export default Pagination
