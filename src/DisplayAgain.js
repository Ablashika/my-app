// import React, { Component } from "react";

// export default class DisplayAgain extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { count: 0 };
//     // this.handleIncreaseCount = this.handleIncreaseCount.bind(this);
//   }

//   handleIncreaseCount = (e) => {
//     e.preventDefault();
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     return (
//       <>
//         <p>Counter: {this.state.count} </p>
//         <hr></hr>
//         <button onClick={this.handleIncreaseCount}>increase</button>
//         <button>decrease</button>
//       </>
//     );
//   }
// }

import React from "react";
import { useState } from "react";

export default function DisplayAgain() {
  const [count, handleUpdate] = useState({ counter: 0 });
  return (
    <>
      <p>Counter: {count.counter}</p>
      <hr></hr>
      <button onClick={() => handleUpdate({ counter: count.counter + 1 })}>
        increase
      </button>
      <button onClick={() => handleUpdate({ counter: count.counter - 1 })}>
        decrease
      </button>
    </>
  );
}
