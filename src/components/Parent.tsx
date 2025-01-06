import Child from './Child';

export default function Parent() {
  console.log('Parent rendered!');
  return <Child />;
}