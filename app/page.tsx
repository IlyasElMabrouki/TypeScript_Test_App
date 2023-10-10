export default function Home() {
  function getGpa(notes: number[]): number {
    let gpa : number = 0;
    notes.forEach(note => gpa += note)
    return gpa / notes.length;
  }
  enum ilyas {
    nom = 'Ilyas El Mabrouki',
    age = 21,
    gpa = getGpa([15, 14, 16]),
  }
  return (
    <div>{`Hi, my name is ${ilyas.nom} and I'm ${ilyas.age} and I got a gpa of ${ilyas.gpa}`}</div>
  );
}
