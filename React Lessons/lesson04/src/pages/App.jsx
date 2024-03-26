import { useEffect, useState } from "react";
import Lodaing from "../components/Lodaing";

function App() {
  // const [count, setCount] = useState(1);
  // const [inputVal, setInputVal] = useState("");
  const [arr, setArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetcDatas() {
      setIsLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      console.log(data);
      setArr(data);

      setIsLoading(false);
    }

    fetcDatas();
  }, []);

  // function handleCount() {
  //   setCount(count + 1);
  // }

  // ! Duz deyil
  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));

  // function getData() {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // }

  // getData()

  // ! [] => dependency array
  // * bos olduqda komponentin sadece mount halinda isleyir
  // * hec olmazsa arrayimiz her defe re-render halinda useEffect isleyir
  // * array daxilinde yazilan datanin deyismesine gore isleyir

  return (
    <>
      <h1>Lesson 04</h1>
      {/* <input
        type="text"
        placeholder="write..."
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <p>{count}</p>
      <p>{arr.length}</p>
      <button onClick={() => handleCount()}>add</button> */}
      {/* <button onClick={() => getData()}>get</button> */}

      <p>Datas count are: {isLoading ? "Datalar yuklenir..." : arr.length}</p>
      <div className="container">
        {!isLoading ? (
          arr.map((product) => (
            <div key={product.id} className="card">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <Lodaing />
        )}
      </div>
    </>
  );
}

export default App;
