import { HiArrowDown } from 'react-icons/Hi';
import { IoArrowRedoSharp } from 'react-icons/io5';
import { FaTelegram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Sidebar = function () {
  return (
    <aside className="sidebar">
      <div className="sidebar__decoration">
        <HiArrowDown className="sidebar___decoration--icon" />
      </div>

      <ul className="sidebar__media">
        <li className="sidebar__item">
          <a
            href="https://www.linkedin.com/in/yevhen-petrunkin-503617259/"
            className="sidebar__link"
            target="_blank"
            rel="noopener"
          >
            <FaLinkedin className="sidebar__icon" />
          </a>
        </li>
        <li className="sidebar__item">
          <a
            href="https://t.me/yevhen_petrunkin"
            className="sidebar__link"
            target="_blank"
            rel="noopener"
          >
            <FaTelegram className="sidebar__icon" />
          </a>
        </li>
        <li className="sidebar__item">
          <a
            href="https://github.com/yevhen-petrunkin"
            className="sidebar__link"
            target="_blank"
            rel="noopener"
          >
            <FaGithub className="sidebar__icon" />
          </a>
        </li>
        <li className="sidebar__item">
          <a
            href="https://www.facebook.com/profile.php?id=100011788286630"
            className="sidebar__link"
            target="_blank"
            rel="noopener"
          >
            <FaFacebook className="sidebar__icon" />
          </a>
        </li>
      </ul>

      <div className="sidebar__share">
        <IoArrowRedoSharp className="sidebar___share--icon" />
      </div>

      {/* <a
          href="https://www.linkedin.com/in/yevhen-petrunkin-503617259/"
          className="logo"
          target="_blank"
          rel="noopener"
        > */}
    </aside>
  );
};

export default Sidebar;
