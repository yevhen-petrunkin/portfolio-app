function Counterbox({ counter }) {
  const currentIndex = getCurrentNumber(counter.index);
  const currentLength = getCurrentNumber(counter.length - 1);

  function getCurrentNumber(number) {
    return number < 9 ? `0${number + 1}` : `${number + 1}`;
  }

  return (
    <div className="counterbox">
      <p className="counterbox__counter--animated">
        <span>{currentIndex}</span> / {currentLength}
      </p>

      <p className="counterbox__counter--simple">
        <span>{currentIndex}</span>.
      </p>
    </div>
  );
}

export default Counterbox;
