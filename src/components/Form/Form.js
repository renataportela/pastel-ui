import React from 'react';

import FormField from './FormField';
import FormButton from './FormButton';

function Form(props) {
  const { errors, onChangeField, values } = props;

  const formFields = React.Children.map(props.children, child => {
    if (!child) return null;
    if (child.type.displayName !== 'Form.Field') return child;

    const fieldName = child.props.field.props.name;

    // Clona Form.Field e injeta props extras vindas do Form
    return React.cloneElement(child, {
      error: errors[fieldName] || '',
      value: values[fieldName] || '',
      onChange: onChangeField,
    });
  });

  return (
    <form onSubmit={props.onSubmit} style={props.style}>
      {formFields}
    </form>
  );
}

Form.defaultProps = {
  errors: {},
  values: {},
};

Form.Button = FormButton;
Form.Field = FormField;

export default Form;
