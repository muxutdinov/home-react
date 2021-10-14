// import React, { useState, useEffect } from "react";

// const Hooks = (props) => {
//   const [counter, setCounter] = useState(props.count);
//   const [data, setData] = useState(props.text);

//   useEffect(()=>{
//       setCounter(props.count)
//       console.log("Hooks clicked");
//   },[props.count])
  
//   useEffect(()=>{
//     setData(props.text)
// })
//   return (
//     <div>
//       Hooks <br />
//       <input
//         placeholder="status"
//         value={data}
//         onChange={(e) => setData(props.text)}
//       />
//       <button onClick={() => setCounter(counter + 1)}>+</button>
//       {counter}
//       <button onClick={() => setCounter(counter - 1)}>-</button>
//       <hr />
//     </div>
//   );
// };
// export default Hooks;