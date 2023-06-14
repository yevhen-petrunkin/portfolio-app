import { HiArrowDown } from 'react-icons/Hi';
import trident from '../images/trident.svg';
import { IoArrowRedoSharp } from 'react-icons/io5';
import { FaTelegram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Sidebar = function () {
  return (
    <aside className="sidebar">
      <div
        className="sidebar__decoration"
        style={{ backgroundImage: `url(${trident})` }}
      ></div>

      <ul className="sidebar__media">
        <li className="sidebar__item">
          <a
            href="https://www.linkedin.com/in/yevhen-petrunkin-503617259/"
            className="sidebar__link"
            target="_blank"
            rel="noopener"
            title="Contact me on LinkedIn"
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
            title="Contact me on Telegram"
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
            title="See my GitHub"
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
            title="Contact me on Facebook"
          >
            <FaFacebook className="sidebar__icon" />
          </a>
        </li>
      </ul>

      <div className="sidebar__share">
        <IoArrowRedoSharp className="sidebar___share--icon" />
      </div>
    </aside>
  );
};

export default Sidebar;
