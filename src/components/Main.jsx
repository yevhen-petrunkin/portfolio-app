import { useState } from 'react';
import Sidebar from './Sidebar';
import Slider from './Slider';
import Counterbox from './Counterbox';

function Main({ collection }) {
  const [counter, setCounter] = useState({ index: 0, length: 0 });

  const handleSlideCounter = (index, length) => {
    const newCounter = { index, length };
    setCounter(prev => ({ ...prev, ...newCounter }));
  };

  return (
    <main>
      <section className="main">
        <Sidebar />

        <Slider
          collection={collection}
          handleSlideCounter={handleSlideCounter}
        />

        <Counterbox counter={counter} />
      </section>
    </main>
  );
}

export default Main;
