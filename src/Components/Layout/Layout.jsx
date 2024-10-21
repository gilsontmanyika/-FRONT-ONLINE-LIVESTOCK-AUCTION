
import '../Layout/Layout.css';

import Search from "../Search/Search";
import Highlights from "../Highlights/Highlights";
import Reviews from "../Review/Review";
import Footer from '../Footer/Footer';
import Home from '../../pages/Home';
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="layout">
        <div className="content">
          <Home />
          <Search />
          <Highlights />
          <Reviews />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
