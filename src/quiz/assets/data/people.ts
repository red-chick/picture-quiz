import irin from "../images/people/irin.jpg";
import iu from "../images/people/iu.jpg";
import kanghodong from "../images/people/kanghodong.jpg";
import kimdonghyun from "../images/people/kimdonghyun.jpeg";

export type PersonType = {
  name: string;
  image: string;
};

const people: PersonType[] = [
  { name: "아이린", image: irin },
  { name: "아이유", image: iu },
  { name: "강호동", image: kanghodong },
  { name: "김동현", image: kimdonghyun },
];

export default people;
