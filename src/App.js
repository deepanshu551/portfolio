
import './App.scss';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Experience from './component/experience/Experience';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import Portfolio from './component/portfolio/Portfolio';

function App() {
  return (
 <div>
<Header/>
<Nav/>
<About/>
<Experience/>
<Portfolio/>
<Contact/>
<Footer/>
 </div>
     
  );
}

export default App;
