import s from "./Header.module.css";
const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.headerContainer}>
        <div className={s.headerNav}>
          <a href="./index.html" className={s.logo}>
            Web<span className={s.logoWeb}>Studio</span>
          </a>
          <ul className={s.headerList}>
            <li className={s.navLink}>Studio</li>
            <li className={s.navLink}>Portfolio</li>
            <li className={s.navLink}>Contacts</li>
          </ul>
        </div>
        <address className={s.contacts}>
          <ul className={s.headerContacts}>
            <li>
              <a href="mailto:info@devstudio.com" className={s.navLinkContact}>
                info@devstudio.com
              </a>
            </li>
            <li>
              <a href="tel:+110001111111" className={s.navLinkContact}>
                +11 (000) 111-11-11
              </a>
            </li>
          </ul>
        </address>
      </div>
    </div>
  );
};

export default Header;
