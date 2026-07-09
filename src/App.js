
import './App.css';
import Eyeclic from './Eyeclic';
import Header from './Header';
import Footer from './Footer';
import HeroSlider from './HeroSlider';
import HeroSlider2 from './HeroSlider2';
import BrandCarousel from './BrandCarousel';
import AuthModal from './AuthModal';
import Perfectfit from './Perfectfit';

function App() {
  return (
    <>
    <Header />
      <HeroSlider />
      <HeroSlider2 />
      <Perfectfit />
      <Eyeclic />
      <BrandCarousel />
      <Footer />
      <AuthModal />
    </>
  );
}

export default App;
