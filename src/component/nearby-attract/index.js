import { Fragment } from "react";
import Box from "../box";

import Heading from "../heading";

import ListItem from "../list-item";

import "./index.css";

export default function NearbyAttract({ list }) {
  return (
    <Box className="nearby__block" shadow>
      <Heading border>Пам'ятки поблизу</Heading>

      <div className="nearby__list">
        {list.map(({ id, link, name }) => (
          <Fragment key={id}>
            <ListItem>
              <a href={link}>{name}</a>
            </ListItem>
          </Fragment>
        ))}
      </div>
    </Box>
  );
}
