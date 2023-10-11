export default function Home() {
  interface person {
    name: string;
    age: number;
    getAge: () => number;
    getCountry(country: string): string;
  }
  let ilyas: person = {
    name: 'ilyas',
    age: 21,
    getAge() {
      return this.age;
    },
    getCountry(country: string) {
      return country;
    },
  };
  return <div>{ilyas.getAge() + ' ' + ilyas.getCountry('Maroc')}</div>;
}
