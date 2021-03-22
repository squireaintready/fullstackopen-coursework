import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      {/* HEADER */}
      <Header course={course} />

      {/* CONTENT */}
      <Content
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
        part1={part1}
        part2={part2}
        part3={part3}
      />

      {/* TOTAL */}
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
