import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const color_mapping = {
  primary: {
    background: 'green',
  },
  secondary: {
    background: 'blue',
  },
  danger: {
    background: 'red',
  }
}

let background
const StyleButton = styled.button`
  
  ${( {variant} ) => {
    const { background } = color_mapping[variant] 
    
    return `
      background-color: ${background};
    `
  }}

  border: none;
  border-radius: 5px;
  padding: 5px;
  color: white;
`

export const Button = ({ label, variant }) => {
  return (
      <StyleButton variant={variant}>{label}</StyleButton>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger'])
}

Button.propTypes = {
  label: 'Place holder',
}