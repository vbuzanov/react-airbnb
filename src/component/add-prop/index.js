import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import "./index.css";

export default function AddProp({
  rules,
  policy,
  transportation,
  languages,
  offers,
  instructions,
}) {
  return (
    <Box className="addprop__block" shadow>
      <Heading border>Додаткові властивості</Heading>

      <ListItem title="Правила дому">
        <span>{rules}</span>
      </ListItem>
      <ListItem title="Політика скасування">
        <span>{policy}</span>
      </ListItem>
      <ListItem title="Місцевий транспорт">
        <span>{transportation}</span>
      </ListItem>
      <ListItem title="Мови хоста">
        <span>{languages.join(", ")}</span>
      </ListItem>
      <ListItem title="Спеціальні пропозиції:">
        <span>{offers}</span>
      </ListItem>
      <ListItem title="Інструкції щодо реєстрації">
        <span>{instructions}</span>
      </ListItem>
    </Box>
  );
}
