import React, { useEffect, useState } from 'react';
import './Clocks.scss';


let clocks = [
  {
    location: 'Los Angeles, CA',
    offset: -7
  },
  {
    location: 'Washington D.C.',
    offset: -4
  },
  {
    location: 'Ho Chi Minh City',
    offset: +7
  }
];

function printOffset(offset) {
  let direction = '';
  if (offset >= 0) direction = '+';

  return direction + offset.toString();
}

function convertTime(date, offset) {
  let hour = date.getUTCHours() + offset;
  let period = 'AM';

  if (hour < 0) {
    hour = hour + 24;
  }

  if (hour >= 24) {
    hour = hour - 24;
  }

  if (hour > 12) {
    period = 'PM';
    hour = hour - 12;
  }

  hour = hour.toString().padStart(2, '0');
  const minute = date.getUTCMinutes().toString().padStart(2, '0');
  const second = date.getUTCSeconds().toString().padStart(2, '0');

  return `${hour}:${minute}:${second} ${period}`;
}

function Clocks() {
  const [date, setDate] = useState(new Date());
  const [showAddModal, setShowAddModal] = useState(false);
  const [locationInput, setLocationInput] = useState('');
  const [offsetInput, setOffsetInput] = useState('');

  useEffect(() => {
    const intervalID = setInterval(
      () => setDate(new Date()),
      1000
    );

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  let currentTimeOffset = -(date.getTimezoneOffset() / 60);

  return <>
    <div id='clocks' className={showAddModal ? 'dimmed' : 'normal'}>
      <div className='clock'>
        <p><strong>Your timezone (GMT{printOffset(currentTimeOffset)}):</strong></p>
        <p>{convertTime(date, currentTimeOffset)}</p>
      </div>

      {clocks.map(clock =>
        <div className='clock'>
          <p><strong>{clock.location} (GMT{printOffset(clock.offset)}):</strong></p>
          <p>{convertTime(date, clock.offset)}</p>
        </div>
      )}

      { /* add clock button*/}
      <button
        className='clock'
        id='add-button'
        onClick={() => setShowAddModal(true)}
      >+</button>
    </div>

    {/* add clock modal */}
    {showAddModal && <div id='add-modal'>
      <form onSubmit={(e) => e.preventDefault()}>
        <label className='add-input' htmlFor="">Location name:</label>
        <input
          type="text"
          onChange={(e) => setLocationInput(e.target.value)}
        />
        <label className='add-input' htmlFor="">GMT offset:</label>
        <input
          type="number"
          min='-12' max='12'
          onChange={(e) => setOffsetInput(e.target.value)}
        />

        <button
          type="submit"
          onClick={() => {
            locationInput && offsetInput && clocks.push(
              {
                location: locationInput,
                offset: Number(offsetInput)
              }
            );
            setShowAddModal(false);
          }}
        >
          Submit
        </button>
        <button
          type="reset"
          onClick={() => setShowAddModal(false)}
        >
          Cancel
        </button>
      </form>
    </div>}


  </>;
}

export default Clocks;
