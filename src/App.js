import "./styles.css";

export default function App() {
  let count = 0;

  const getData = () => {
    console.log("Fetching data again and again", count++);
  };

  const debounceFunction = (fn, delay) => {
    let timer;
    return () => {
      let context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        getData.apply(context, args);
      }, delay);
    };
  };
  const getDataBetter = debounceFunction(getData, 3000);

  return (
    <div className="App">
      <h1>DEBOUNCEING</h1>
      <div style={{ marginTop: "100px" }}>
        <input type="text" onKeyUp={getDataBetter} />
      </div>
    </div>
  );
}
