import { Fragment } from "react";
import Box from "../box";

import Heading from "../heading";

import "./index.css";

export default function GuestReviews({ list }) {
  return (
    <div className="guest__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="guest__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="guest">
      <div className="guest__info">
        <span className="guest__title">{guestName}</span>
        <span>Рейтинг: {rating}</span>
      </div>
      <span>{review}</span>
    </Box>
  );
}
