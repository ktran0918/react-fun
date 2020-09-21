import React, { useEffect, useState } from 'react';
import './Clocks.scss';


const clocks = [
  {
    location: 'Los Angeles, CA',
    offset: -7
  },
  {
    location: 'Washington D.C.',
    offset: -4
  },
  {
    location: 'Ho Chi Minh City, Vietnam',
    offset: +7
  }
];

function printOffset(offset) {
  let direction = '';
  if (offset > 0) direction = '+';

  return direction + offset.toString();
}

function convertTime(date, offset) {
  let hour = date.getUTCHours() + offset;
  let period = 'AM';

  if (hour > 24) {
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

function Clock() {
  const [date, setDate] = useState(new Date());

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

  return <div id='clocks'>
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
  </div>;
}

export default Clock;
