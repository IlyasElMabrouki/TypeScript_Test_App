export default function Home() {
  interface person {
    name: string;
    age: number;
  }
  function getData(ilyas: person) {
    return `${ilyas.name} --> ${ilyas.age}`;
  }
  return <div>{getData({ name: 'ilyas', age: 20 })}</div>;
}
