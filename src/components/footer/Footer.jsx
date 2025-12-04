import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__socials">
      <a 
          href="https://www.youtube.com/user/Valve" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer__icon">YT</a> 
        <a href="#" 
        className="footer__icon">IN</a>
        <a href="#" 
        className="footer__icon">FB</a>
          <a 
          href="https://twitter.com/CounterStrike" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer__icon">
          X</a>
      </div>
      <div className="footer__copy">
        &copy; 2035 Aman Corp. Site created with React, a bit of GPT for styles and Aman's hard work.
      </div>
    </footer>
  );
}

export default Footer;