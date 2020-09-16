import React, { useEffect, useState } from 'react';


function Clock() {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(
      () => setClock(new Date()),
      1000
    );

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return <p>
    {clock.toLocaleTimeString()}
  </p>;
}

export default Clock;
