import React from "react";

const About = ({ DataStudent }) => {
  return (
    <div>
      {DataStudent?.map((el) => (
        <div>
          <h1>{el.name}</h1>
          <h1>{el.age}</h1>
        </div>
      ))}
    </div>
  );
};

export default About;
