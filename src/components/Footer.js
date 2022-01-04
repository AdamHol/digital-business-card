import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import github from "../images/github.svg";

function Footer() {
  return (
    <div className='footer'>
      <a href='https://twitter.com' target='_blank'>
        <img src={twitter} />
      </a>
      <a href='https://facebook.com' target='_blank'>
        <img src={facebook} />
      </a>
      <a href='https://instagram.com' target='_blank'>
        <img src={instagram} />
      </a>
      <a href='https://github.com' target='_blank'>
        <img src={github} />
      </a>
    </div>
  );
}

export default Footer;
