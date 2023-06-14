import technologyImgArray from './technologyImgArray';
import info1 from '../images/personal-images/01-info.jpg';
import info2 from '../images/personal-images/02-info.jpg';
import info3 from '../images/personal-images/03-info.jpg';
import info4 from '../images/personal-images/04-info.jpg';
import info5 from '../images/personal-images/05-info.jpg';
import info6 from '../images/personal-images/06-info.jpg';
import info7 from '../images/personal-images/07-info.jpg';
import info8 from '../images/personal-images/08-info.jpg';
import info9 from '../images/personal-images/09-info.jpg';

const rawInformation = [
  {
    id: '01',
    title: 'Hello!',
    description:
      'My name is Yevhen Petrunkin. I am a frontend developer with a range of knowledge and skills in JavaScript, React, CSS and Microsoft Framework. I have worked on a number of projects, requiring these skills, which you could see in my portfolio. I also have management experience and profound knowledge of English. Registered entrepreneur.',
    list: [],
    icons: [],
    image: info1,
  },
  {
    id: '02',
    title: 'Technologies And Libraries I Have Worked With',
    description:
      'As a dedicated frontend developer I have acquired a set of skills, necessary to work with fundamental technologies essential for this job, such as JavaScript and React, CSS and HTML, as well as with more specific ones, which are necessary for narrower and more complex tasks. I am constantly learning new things and keep enlarging this list.',
    list: [
      'React',
      'Redux',
      'Redux Toolkit',
      'JavaScript',
      'CSS',
      'SASS/SCSS',
      'HTML5',
      'Material UI',
      'Chakra UI',
      'CSS-in-JS',
      'REST API',
      'Axios',
      'Firebase',
      'Cloud Firestore',
      'Webpack',
      'Microsoft Bot Framework',
      'Microsoft Azure',
      'Tanstack/React Query',
      'Styled System',
      'Bootstrap',
      'Gulp',
      'Parcel',
      'Git',
      'GitHub',
      'GitBash',
      'styled-components',
      '@emotion',
      'formik',
      'yup',
      'swiper',
      'chart.js',
      'nodemailer',
      'handlebars',
      'bcrypt',
      'notiflix',
      'toastify',
      'lodash',
      'etc.',
    ],
    icons: [],
    image: info2,
  },
  {
    id: '03',
    title: 'My Background',
    description:
      "I was born in Shostka, Sumy region, Ukraine, and I am currently living there. In 2006, I graduated from Kyiv National Linguistic University with a Bachelor's degree in English linguistics, and the following year I got my Specialist's degree in Psychology in the same university. For almost twenty years, I worked as a translator and an English teacher, having completed more than 150 big projects in various areas of translation - from IT documentation to gas and oil industry.",
    list: [],
    icons: [],
    image: info3,
  },
  {
    id: '04',
    title: 'My Previous Experience',
    description:
      "From 2011 to 2022, I co-founded and ran my own business - a translation and education centre, located in Shostka, Ukraine. As an owner and manager I was responsible for hiring, onboarding and training of our staff, setting and controlling tasks, coordinating our employees' work. There were about 20 people answering to me directly. At our centre we successfully completed over 50 large translation projects in cooperation with Ukrainian and international manufacturers. The business processes were interrupted due to the war in Ukraine that started in 2022.",
    list: [],
    icons: [],
    image: info4,
  },
  {
    id: '05',
    title: 'My IT Training',
    description:
      "In September 2022, I applied and was chosen among 50 thousand applicants to enter into 1 thousand of those who would take part in the governmental 'IT Generation' programme. I chose to study Frontend Development at one of the best Ukrainian schools 'GoIT', where I also had to win a competition among more than 2 thousand applicants. From September 2022 to February 2023, I sudied hard there according to a very intensive BootCamp programme, within which I reached the point of almost 700 hours of pure coding!",
    list: [],
    icons: [],
    image: info5,
  },
  {
    id: '06',
    title: 'GoIT Certificate',
    description:
      'While I was studying at GoIT, I acquired a set of skills in JavaScript, CSS, HTML as well as React framework and various tools and libraries, crucial for a frontend developer. Over all this time, I participated and completed one individual and three team projects. After finishing studies, I spent two more months working on my own "Cinemagot" project that you can see in my portfolio, which helped me to consolidate my skills, deepen my knowledge and broaden the range of technologies I could work with.',
    list: [],
    icons: [],
    image: info6,
  },
  {
    id: '07',
    title: 'Kharkiv IT-Cluster Bootcamp Certificate',
    description:
      'In April-May 2023, I won another competition and was chosen to participate in working on a social project within a programme organised by Kharkiv IT-Cluster. The project was MS Teams career bot, which helps employees to track their career path as well as build and stick to their career plan. It started from scratch and contained the complete development lifecycle - from first draft to final presentation of the finished product to the customer. The project was ordered by Viseven digital company and is meant to be used within their corporate MS Teams network. The text in the Ukrainian language in the Certificate says: "Participated in the development of socially important projects under the guidance of mentors from leading IT companies of Ukraine and gained practical experience in developing projects in the IT industry."',
    list: [],
    icons: [],
    image: info7,
  },
  {
    id: '08',
    title: 'Kharkiv IT-Cluster Bootcamp Commendation Letter',
    description:
      'While working on the aforementioned project during the Kharkiv IT-Cluster Bootcamp, not only I gained real experience in performing commercial tasks, but for high achivements I was also awarded with the Letter of Commendation by Kharkiv IT-Cluster represetatives. The text in the Ukrainian language in the Commendation Letter says: "Proved himself and was actively involved in the work of his team, and did everything possible and impossible for the team to create a working MVP within 5 weeks of fruitfull work and make a worthy final presentation."',
    list: [],
    icons: [],
    image: info8,
  },
  {
    id: '09',
    title: "Let's Get Acquiainted!",
    description:
      'Besides doing projects in IT industry, in my everyday life I enjoy travelling and going sightseeing. I also like long walking tours and bycicle rides in the nature - in the forest, mountains or countryside. Moreover, I am interested in history, linguistics, pychology and video games as well. I am open to new ideas and eager to learn something new every single day of my life. Will be happy to work in a team of interesting people and dedicated professionals on an outstanding project. You can contact me via the button menu on the left or the phone number above. Waiting for your message!',
    list: [],
    icons: [],
    image: info9,
  },
];

function getInformation() {
  return rawInformation
    .map(data => {
      data.list.forEach(technology => {
        const arr = technologyImgArray.filter(({ keywords }) =>
          keywords.some(
            keyword => keyword.toLowerCase() === technology.toLowerCase()
          )
        );
        arr.forEach(techData => data.icons.push(techData));
      });
      return data;
    })
    .sort((a, b) => a.id - b.id);
}

const information = getInformation();

export default information;
