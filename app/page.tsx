export default function Home() {
  class Student {
    constructor(private name: string, private level: string) {
      console.log("New Instance is created")
    }
    toString(): string {
      return `Hi, My name is ${this.name}, and I'm a student in ${this.level}`;
    }
  }

  let ilyas = new Student('ilyas', 'GLSID2');
  return <div>{ilyas.toString()}</div>;
}
