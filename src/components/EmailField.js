import React from 'react';
import PropTypes from 'prop-types';
import { validate } from 'isemail';

import FormField from './FormField';

const EmailField = props => {

  // prevent passing type and validator props from this component to the rendered form field component
  const { type, validator, ...restProps } = props;

  // validateEmail function using the validate() method of the isemail package
  const validateEmail = value => {

    var emails = ["Inna66@gmail.com", "Sanni@gmail.com", "Doglove@gmail.com", "Kello@gmail.com", "Rimpula@gmail.com"]
    if (!validate(value)) throw new Error('Säkhköposti on virheellinen. Tarkista puuttuuko @ tai . -merkki');

    for(let x = 0; x < emails.length; x++) {
            if(value === emails[x]) throw new Error('Sähköposti on jo käytössä')

          }
  };

  // pass the validateEmail to the validator prop
  return <FormField type="text" validator={validateEmail} {...restProps} />
};

EmailField.propTypes = {
  label: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  children: PropTypes.node,
  onStateChanged: PropTypes.func
};

export default EmailField;