interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => {
  return <h1>Привет, {name}!</h1>;
};

export default Greeting;
