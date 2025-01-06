import { useContext } from 'react';
// import { use } from 'react'; // v19
import ExampleContext from '../contexts/ExampleContext';

export default function Child() {
  const { example, setExample } = useContext(ExampleContext);
  // const { example, setExample } = use(exampleContext); // v19

  const handleClick = () => setExample('Clicked!');

  return <div>
    <p>Context: {example}</p>
    <button onClick={handleClick}>Click me</button>
  </div>;
}