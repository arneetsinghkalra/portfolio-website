import "./Quote.css";

/**
 * Takes in 3 parameters
 * (string) className: should be one of 2 options - "quote-black-background" or "quote-white-background"
 * (string) quote: actual quote
 * (string) author: person who said the quote
 * @param {*} props
 */
export default function Quote(props) {
  return (
    <div className={props.className}>
      <h4>"{props.quote}"</h4>
      <p>
        <i> - {props.author} </i>
      </p>
    </div>
  );
}
