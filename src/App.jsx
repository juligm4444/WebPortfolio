import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/HomePage';
import { About } from './pages/AboutPage';
import { CV } from './pages/CVPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { ArtsDesignPage } from './pages/ArtsDesignPage';
import { PortfolioProjectPage } from './pages/PortfolioProjectPage';
import { CandelariaProjectPage } from './pages/CandelariaProjectPage';
import { LicorimetroProjectPage } from './pages/LicorimetroProjectPage';
import { SketchesPage } from './pages/SketchesPage';
import { DrawingsPage } from './pages/DrawingsPage';
import { CreativeWorkPage } from './pages/CreativeWorkPage';
import { NotFound } from './pages/NotFound';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/arts-design" element={<ArtsDesignPage />} />
          <Route path="/projects/portfolio" element={<PortfolioProjectPage />} />
          <Route path="/projects/candelaria" element={<CandelariaProjectPage />} />
          <Route path="/projects/licorimetro" element={<LicorimetroProjectPage />} />
          <Route path="/projects/sketches" element={<SketchesPage />} />
          <Route path="/projects/drawings" element={<DrawingsPage />} />
          <Route path="/projects/creative" element={<CreativeWorkPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
