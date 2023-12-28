import './App.css';
import Herosection from './components/Herosection';
import Headersec from './components/Headersec';
import Secondsec from './components/Secondsec';
import Benefitsec from './components/Benefitsec';
import Whitepaper from './components/Whitepaper';
import Roadmaps2 from './components/Roadmaps2';
import Public from './components/Public';
import Tokensec from './components/Tokensec';
import Partnership from './components/Partnership';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';

function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  return (
    <div>
      {data ? (
        <div>
        <Preloader/>
        </div>
      ) : (
        <div>
          <div className=' lg:bg-[url(./assets/images/herobg.png)]  bg-size bg-no-repeat'>
            <Herosection />
            <Headersec />
          </div>
          <Secondsec />
          <Benefitsec />
          <div className='bg-[url(./assets/images/bg-2.png)] bg-size bg-no-repeat'><Whitepaper /></div>
          <Roadmaps2 />
          <div className='bg-[url(./assets/images/bg-3.png)] bg-size bg-no-repeat'><Public /></div>
          <Tokensec />
          <div className='bg-[url(./assets/images/bg-4.png)] bg-size bg-no-repeat'><Partnership /></div>
          <Footer />
        </div>)
      }
    </div>
  );
}

export default App;
