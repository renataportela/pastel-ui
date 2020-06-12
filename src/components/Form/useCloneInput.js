import React from 'react'

function useCloneInput({ values, errors, onChangeField, ...newProps }) {
  return function (child, name) {
    return React.cloneElement(child, {
      error: errors[name] || '',
      value: values[name] || '',
      onChange: onChangeField(name),
      ...newProps
    })
  }
}

export default useCloneInput