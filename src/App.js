import About from './components/About/About';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
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
      <Counter/>
      <Projects/>
    </main>
    </>
  );
}

export default App;
