import React, { useContext } from "react";
import { ExampleContext } from "./context";

const MyComponentUseContext = () => {
  const value = useContext(ExampleContext);

  return <div>{value}</div>;
};

const MyComponentConsumer = () => {
  return (
    <ExampleContext.Consumer>
      {(value) => <span>{value}</span>}
    </ExampleContext.Consumer>
  );
};

// const Example2 = () => {
//   const value = useContext(ExampleContext);

//   return <div>{value}</div>;
// };

export const Main = () => {
  return (
    <>
      <ExampleContext.Provider value="Hello World2">
        {/* <MyComponentUseContext /> */}
        <MyComponentConsumer />
      </ExampleContext.Provider>

      {/* <Example2 /> */}
    </>
  );
};
