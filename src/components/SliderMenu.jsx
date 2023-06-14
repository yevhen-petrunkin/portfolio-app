import projects from '../sources/projects';
import { FiMoreHorizontal } from 'react-icons/fi';
import { RiComputerLine } from 'react-icons/Ri';
import { FaGithub } from 'react-icons/fa';

function SliderMenu({ index }) {
  const { pageUrl, repoUrl } = projects[index] ? projects[index] : projects[0];

  return (
    <ul className="slider__menu">
      <li className="slider__item">
        <a
          href={pageUrl}
          className="slider__link"
          target="_blank"
          rel="noopener"
          title="See the project"
        >
          <RiComputerLine className="slider__icon" />
        </a>
      </li>
      <li className="slider__item">
        <a
          href={repoUrl}
          className="slider__link"
          target="_blank"
          rel="noopener"
          title="See project repository"
        >
          <FaGithub className="slider__icon" />
        </a>
      </li>
      <li className="slider__item">
        <button className="slider__button" type="button" title="See more">
          <FiMoreHorizontal className="slider__icon" />
        </button>
      </li>
    </ul>
  );
}

export default SliderMenu;
