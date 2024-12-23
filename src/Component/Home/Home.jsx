import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Header/Footer";

 
const Home = () => {
  return (
    <div>
      <Header></Header>
      <h2>This is the home component.</h2>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;