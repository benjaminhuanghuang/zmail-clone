import React from "react";

interface GreetingProps {
  name?: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>{name ? `Hello, ${name}!` : "Hello!"}</div>;
};

export default Greeting;
