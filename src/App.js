import Footer from './Components/Nav/Footer';
import Header from './Components/Nav/Header';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import ContactUs from './Pages/ContactUs';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css'
import Classes from './Pages/Classes';
function App() {
  return (
    <>
      <div class="container-xxl bg-white p-0">
        <BrowserRouter>
          <Header />
          <section className='kanda'> </section>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/classes' element={<Classes />} />
            <Route path='/contact-us' element={<ContactUs />} />

          </Routes>
          <Footer /> {/*Footer */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
