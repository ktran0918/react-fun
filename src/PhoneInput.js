import React, { useState, } from 'react';
import './PhoneInput.scss';


function parseNumber(phone) {
  let pos0 = phone.charAt(0);
  let pos4 = phone.charAt(4);
  // let pos5 = phone.charAt(5);
  let pos9 = phone.charAt(9);

  if (pos0 && pos0 != '(') phone = '(' + phone;
  if (pos4 && pos4 != ')') phone = phone.slice(0, 4) + ') ' + phone.slice(4);
  if (pos9 && pos9 != '-') phone = phone.slice(0, 9) + '-' + phone.slice(9);

  return phone;
}

function validatePhone(phone) {
  if (!phone) return '';

  let matched = phone.match(/\([0-9]{3}\) [0-9]{3}-[0-9]{4}/);

  if (matched) {
    return 'Success';
  } else {
    return 'Error. Please make sure you only entered numbers';
  }
}

function PhoneInput() {
  const [phone, setPhone] = useState('');
  const [errMsg, setErrMsg] = useState('');

  return <>
    <form id='phone-form'>
      <label>Phone number:</label>
      <input
        id='phone-input'
        type='tel'
        value={phone}
        maxLength='14'
        // pattern='\([0-9]{3}\) [0-9]{3}-[0-9]{4}'
        onChange={(e) => setPhone(parseNumber(e.target.value))}
      />
      <input
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          setErrMsg(validatePhone(phone));
        }}
      />
    </form>

    <p
      id='error-msg'
      class={errMsg == 'Success' ? 'success-highlight' : 'err-highlight'}
    >
      {errMsg}
    </p>
  </>;
}


export default PhoneInput;
