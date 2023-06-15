import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Modal from './Modal';
import Footer from './Footer';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collection, setCollection] = useState('portfolio');

  const handleModalClick = modalState => {
    setIsModalOpen(modalState);
  };

  const handleBurgerMenu = item => {
    setCollection(item);
  };

  return (
    <>
      <Header handleModalClick={handleModalClick} isModalOpen={isModalOpen} />
      <Main collection={collection} />
      <Footer />
      {isModalOpen && (
        <Modal
          handleBurgerMenu={handleBurgerMenu}
          handleModalClick={handleModalClick}
          isModalOpen={isModalOpen}
        />
      )}
    </>
  );
};

export default App;
