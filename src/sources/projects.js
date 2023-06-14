import technologyImgArray from './technologyImgArray';
import v7pro from '../images/project-images/v7pro.jpg';
import cinemagot from '../images/project-images/cinemagot.jpg';
import wallet from '../images/project-images/wallet.jpg';
import filmoteka from '../images/project-images/filmoteka.jpg';
import phonebooth from '../images/project-images/phonebooth.jpg';
import icecream from '../images/project-images/icecream.jpg';

const rawProjects = [
  {
    id: '01',
    title: 'Icecream with Passion',
    dates: 'October, 2022',
    description: 'Homemade icecream online shop. Team project.',
    technologies: ['CSS', 'SASS/SCSS', 'JavaScript', 'HTML5', 'Parcel'],
    techImg: [],
    image: icecream,
    pageUrl: 'https://arinagar.github.io/power-rangers-project/',
    repoUrl: 'https://github.com/Arinagar/power-rangers-project',
  },
  {
    id: '02',
    title: 'Filmoteka',
    dates: 'November, 2022',
    description: 'Movie search website. Team project.',
    technologies: [
      'JavaScript',
      'REST API',
      'Ajax',
      'HTML5',
      'SASS/SCSS',
      'CSS',
      'Firebase',
      'Parcel',
    ],
    techImg: [],
    image: filmoteka,
    pageUrl: 'https://kaka8548.github.io/filmoteka-/',
    repoUrl: 'https://github.com/Kaka8548/filmoteka-',
  },
  {
    id: '03',
    title: 'Phonebooth',
    dates: 'February-March, 2023',
    description: 'A convenient application for keeping phone contacts.',
    technologies: [
      'React',
      'Redux',
      'Redux Toolkit',
      'JavaScript',
      'REST API',
      'Styled Components',
      'MUI',
      'Formik',
      'Webpack',
      'HTML5',
    ],
    techImg: [],
    image: phonebooth,
    pageUrl: 'https://yevhen-petrunkin.github.io/phonebook-06-react/',
    repoUrl: 'https://github.com/yevhen-petrunkin/phonebook-06-react',
  },
  {
    id: '04',
    title: 'Wallet',
    dates: 'February, 2023',
    description:
      'A finance application for keeping track of personal incomes and expenses. Team project.',
    technologies: [
      'React',
      'Redux Toolkit',
      'JavaScript',
      'REST API',
      'Webpack',
      'HTML5',
      'Emotion',
      'Formik',
      'Chakra',
      'yup',
    ],
    techImg: [],
    image: wallet,
    pageUrl: 'https://semenovihor.github.io/wallet-team-project/',
    repoUrl: 'https://github.com/SemenovIhor/wallet-team-project',
  },
  {
    id: '05',
    title: 'CINEMAGOT',
    dates: 'March-April, 2023',
    description: 'An original application for fans of film industry.',
    technologies: [
      'React',
      'Redux Toolkit',
      'Tanstack/React Query',
      'JavaScript',
      'REST API',
      'Firebase',
      'CSS',
      'Styled Components',
      'Styled System',
      'Webpack',
      'HTML5',
    ],
    techImg: [],
    image: cinemagot,
    pageUrl: 'https://yevhen-petrunkin.github.io/cinemagot-react-app/',
    repoUrl: 'https://github.com/yevhen-petrunkin/cinemagot-react-app',
  },
  {
    id: '06',
    title: 'V7Pro Bot',
    dates: 'April-May, 2023',
    description:
      'A career bot, which helps employees to build and track their career plan. A social project, organized within Kharkiv IT-Cluster BootCamp. The bot is designed to be used within MS Teams as a corporate bot for Viseven digital company.',
    technologies: [
      'JavaScript',
      'Microsoft Bot Framework',
      'Microsoft Azure',
      'Firebase',
      'Cloud Firestore',
      'Node.js',
      'CSS',
    ],
    techImg: [],
    image: v7pro,
    pageUrl:
      'https://www.figma.com/proto/0UKqUPkv4VWlf8WdGCaPhw/UI%2FUX-D?page-id=445%3A150302&type=design&node-id=630-171537&viewport=5200%2C1965%2C0.21&scaling=scale-down-width&starting-point-node-id=630%3A171537',
    repoUrl: 'https://github.com/yevhen-petrunkin/vibot',
  },
];

function getProjects() {
  return rawProjects
    .map(project => {
      project.technologies.forEach(technology => {
        const arr = technologyImgArray.filter(({ keywords }) =>
          keywords.some(
            keyword => keyword.toLowerCase() === technology.toLowerCase()
          )
        );
        arr.forEach(techData => project.techImg.push(techData));
      });
      return project;
    })
    .sort((a, b) => b.id - a.id);
}

const projects = getProjects();

export default projects;
