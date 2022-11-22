import Footer from '../Footer';
import background from '../SFONDO.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background}) no-repeat center center fixed;`,
      }}
    >
      <div style={{ textAlign: 'center', padding: 10 }}>
        <Link to="/files">
          <img alt="mosca" className="link" src="b/MOSCARESIZE.png"></img>
        </Link>
      </div>
      <div style={{ textAlign: 'center', padding: 10 }}>
        <Link to="/grid">
          <img alt="ing. cane" className="link" src="b/INGCANERESIZE.png"></img>
        </Link>
      </div>
      <div style={{ textAlign: 'center', padding: 10 }}>
        <a href="b/CARAMELLEOK.jpg" target="_blank">
          <img
            alt="caramelle"
            className="link"
            src="b/CARAMELLARESIZE.png"
          ></img>
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
