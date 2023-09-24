import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

import roundPeople from "./svg/round-people.svg";
import bedroom from "./svg/bedroom.svg";
import bed from "./svg/bed.svg";
import bathroom from "./svg/bathroom.svg";

export default function PropertyDetails({ guests, bedrooms, beds, baths }) {
  return (
    <Box className="property__block" shadow>
      <Heading border>Деталі властивості:</Heading>

      <ListItem imageSrc={roundPeople}>
        <span>{guests} гості</span>
      </ListItem>
      <ListItem imageSrc={bedroom}>
        <span>{bedrooms} спальня</span>
      </ListItem>
      <ListItem imageSrc={bed}>
        <span>{beds} ліжко</span>
      </ListItem>
      <ListItem imageSrc={bathroom}>
        <span>{baths} ванна кімната</span>
      </ListItem>
    </Box>
  );
}
