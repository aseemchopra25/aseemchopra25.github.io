import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import GitHub from './pages/GitHub';
import Blog from './pages/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
function App() {
  return (

    // Add layout for universal CSS using index.css 
    <Layout>
    <Router>
      {/* Header Component */}
      <Header />
      {/* Navigation Bar  */}
      {/* <Navbar />  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/github" element={<GitHub />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* Footer Component  */}
      {/* <Footer /> */}
    </Router>
    </Layout>
  );
}

export default App;