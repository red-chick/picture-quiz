import { useEffect, useState } from "react";
import people, { PersonType } from "../assets/data/people";
import { random } from "../utils";

let copyPeople: PersonType[];
let firstPerson: PersonType;

const popRandomPerson = (): PersonType => {
  const index = random(0, copyPeople.length);
  const person = { ...copyPeople[index] };
  copyPeople.splice(index, 1);
  return person;
};

const init = () => {
  copyPeople = JSON.parse(JSON.stringify(people));
  firstPerson = popRandomPerson();
};

init();

const usePerson = (): [PersonType, () => void] => {
  const [person, setPerson] = useState(firstPerson);
  console.log("person", person);
  const nextPerson = () => {
    setPerson(popRandomPerson());
  };

  useEffect(() => {
    return init;
  }, []);

  return [person, nextPerson];
};

export default usePerson;
