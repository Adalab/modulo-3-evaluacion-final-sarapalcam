import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer__small">&copy; Sara Palomo Campesino</small>
      <div className="footer__contact">
        <a
          href="https://github.com/sarapalcam"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github-alt footer__contact--github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sara-palomo-campesino/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin footer__contact--linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/saradibujicos/?hl=es"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram footer__contact--instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
