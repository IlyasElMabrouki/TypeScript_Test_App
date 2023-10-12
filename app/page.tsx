export default function Home() {
  interface person {
    name: string;
    age: number;
    getAge: () => number;
    getCountry(country: string): string;
  }

  interface student extends person {
    gpa: number;
    level: string;
    getLevel(): string;
  }

  let ilyas: student = {
    name: 'ilyas',
    age: 21,
    gpa: 15.56,
    level: 'GLSID2',
    getAge() {
      return this.age;
    },
    getCountry(country: string) {
      return country;
    },
    getLevel() {
      return this.level + ' ' + this.gpa;
    },
  };
  return (
    <div>
      {ilyas.getAge() +
        ' ' +
        ilyas.getCountry('Maroc') +
        ' ' +
        ilyas.getLevel()}
    </div>
  );
}
