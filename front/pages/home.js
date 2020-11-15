import Layout from '../components/Layout';
import TextLogo from '../components/TextLogo';
import NavBar from '../components/NavBar';
import Landing1 from '../components/Landing1';
import Landing2 from '../components/Landing2';
import Head from 'next/head';
import Footer from '../components/Footer';
import TopButton from '../components/TopButton';

const Home = () => {

  return (
    <>
      <TextLogo/>
      <NavBar />
      <Landing1/>
      <Landing2/>
      <Footer />
      <TopButton />
    </>
  );
}

export default Home;