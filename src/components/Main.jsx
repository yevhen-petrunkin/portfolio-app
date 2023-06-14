import Sidebar from './Sidebar';
import Slider from './Slider';

function Main({ collection }) {
  return (
    <main>
      <section className="main">
        <Sidebar />

        <Slider collection={collection} />
        <div></div>
      </section>
    </main>
  );
}

export default Main;
