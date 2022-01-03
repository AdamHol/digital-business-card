import EmailLogo from "../images/email-icon.svg";
import LinkedinLogo from "../images/linkedin-icon.svg";

function Info() {
  return (
    <div className='info'>
      <img
        src='https://this-person-does-not-exist.com/img/avatar-a5bdb2025cd107eaa0625221a7e74256.jpg'
        alt='fake person image'
        className='info__pic'
      />
      <h1 className='info__name'>Adam H</h1>
      <h3 className='info__job-title'>Future Frontend Developer</h3>
      <h4 className='info__link'>Adamh.website</h4>

      <a
        href='mailto:adam.holowieniec@gmail.com'
        className='info__buttons--email btn'
      >
        <img src={EmailLogo} alt='' className='info__mail-logo' />
        Email
      </a>
      <a
        href='https://www.linkedin.com/in/adam-holowieniec'
        target='_blank'
        className='info__buttons--linkedin btn'
      >
        <img src={LinkedinLogo} alt='' className='info__linkedin-logo' />{" "}
        Linkedin
      </a>
    </div>
  );
}

export default Info;
