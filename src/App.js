import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import './styles/App.css';

function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Service/>
    </main>
    </>
  );
}

export default App;
