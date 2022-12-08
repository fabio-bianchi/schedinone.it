import { Link } from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets';
function Home() {
  return (
    <div className="App">
      
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
          <img alt="caramelle" className="link" src="b/caramellenew.png"></img>
        </a>
      </div>
      
      <div style={{ textAlign: 'center', padding: 10 }}>
        <Link to="/stats">
          <img alt="stats" className="link" src="b/STATISTICHE.png"></img>
        </Link>
      </div>
      <div style={{ textAlign: 'center', padding: 10 }}>
        <Link to="/results">
          <img alt="risultati" className="link" src="b/RISULTATI.png"></img>
        </Link>
      </div>
      <div className='iframeContainer'>
      <Timeline
        dataSource={{ sourceType: 'profile', screenName: 'bhkustv' }}
        options={{
          theme: "dark",
          chrome: "noheader, nofooter",
          width: "400",
          height: "300"
        }}
      />
      </div>
      <div>
        <img
          className="regolamento"
          alt="regolamento"
          src="b/REGOLAMENTO_OMBRA.png"
        ></img>
      </div>
      
    </div>
  );
}

export default Home;
