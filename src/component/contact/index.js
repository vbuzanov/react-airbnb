import Heading from "../heading";
import "./index.css";

export default function Contact({
  name,
  image,
  responseRate,
  responseTime,
  info,
  phone,
}) {
  return (
    <div className="contact__block">
      <div className="contact__info">
        <div className="contact__img">
          <img src={image} alt={name} />
        </div>
        <div className="contact__content">
          <Heading>Господар – {name}</Heading>

          <div className="contact__sub-block">
            <span className="contact__sub-value">{phone}</span>

            <span className="contact__sub-value">{responseTime}</span>

            <span className="contact__sub-value">
              {responseRate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>

      <div>{info}</div>
    </div>
  );
}
