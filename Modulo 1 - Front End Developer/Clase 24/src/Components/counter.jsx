import React,{useState} from 'react'

function Carrito() {
  const [counter,setCounter] = useState(0)

  return (
    <>
    <button onClick={
      () => setCounter(counter + 1)
    }>+</button>
    <span>{counter}</span>
    <button onClick={
      () => setCounter(counter - 1)
      }>-</button>
    </>
  )
}

// function Carrito() {
//   const [counter, setCounter] = useState(0);

//   function incrementar() {
//     setCounter(counter + 1);
//   }

//   function decrementar() {
//     setCounter(counter - 1);
//   }

//   return (
//     <>
//       <button onClick={incrementar}>+</button>
//       <span>{counter}</span>
//       <button onClick={decrementar}>-</button>
//     </>
//   );
// }

export default Carrito

