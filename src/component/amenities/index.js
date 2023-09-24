import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

import imgAirportShuttle from "./svg/airport-shuttle.svg";
import imgBreakfast from "./svg/breakfast.svg";
import imgChild from "./svg/child.svg";
import imgGym from "./svg/gym.svg";
import imgMeetingRoom from "./svg/meeting-room.svg";
import imgParking from "./svg/parking.svg";
import imgPets from "./svg/pets.svg";
import imgPool from "./svg/pool.svg";
import imgSecurity from "./svg/security.svg";
import imgWifi from "./svg/wifi.svg";

export default function Amenities({
  pool,
  gym,
  breakfast,
  wifi,
  parking,
  pets,
  airportShuttle,
  conciergeService,
  roomService,
  childFriendly,
}) {
  return (
    <Box className="amenities__block" shadow>
      <Heading border>Зручності</Heading>
      {pool && (
        <ListItem imageSrc={imgPool}>
          <span>Басейн</span>
        </ListItem>
      )}
      {gym && (
        <ListItem imageSrc={imgGym}>
          <span>Спортивний зал</span>
        </ListItem>
      )}
      {breakfast && (
        <ListItem imageSrc={imgBreakfast}>
          <span>Безкоштовний сніданок</span>
        </ListItem>
      )}
      {wifi && (
        <ListItem imageSrc={imgWifi}>
          <span>Безкоштовний Wi-Fi</span>
        </ListItem>
      )}
      {parking && (
        <ListItem imageSrc={imgParking}>
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>
      )}
      {pets && (
        <ListItem imageSrc={imgPets}>
          <span>Дозволено розміщення з домашніми тваринами</span>
        </ListItem>
      )}
      {airportShuttle && (
        <ListItem imageSrc={imgAirportShuttle}>
          <span>Трансфер до/з аеропорту</span>
        </ListItem>
      )}
      {conciergeService && (
        <ListItem imageSrc={imgSecurity}>
          <span>Консьєрж-сервіс</span>
        </ListItem>
      )}
      {roomService && (
        <ListItem imageSrc={imgMeetingRoom}>
          <span>Обслуговування номерів</span>
        </ListItem>
      )}
      {childFriendly && (
        <ListItem imageSrc={imgChild}>
          <span>Підходить для дітей</span>
        </ListItem>
      )}
    </Box>
  );
}
