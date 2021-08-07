import { useState } from 'react';
import useEventCallback from '@react-hookbox/event-callback';

const AppExample = () => {
  const [num, setNum] = useState(1);

  const adder = useEventCallback((prev: number) => prev + 1);

  const logNum = useEventCallback((text: string, increase = true) => {
    console.log(text, num);
    if (increase) {
      setNum(adder);
    }
  });

  logNum(`RENDERING: expected ${num - 1} received`, false);

  return (
    <div>
      <h1>@react-hookbox/event-callback example</h1>

      <button
        type="button"
        onClick={() => logNum(`CLICK: expected ${num} received`)}
      >
        call callback
      </button>
    </div>
  );
};

export default AppExample;
