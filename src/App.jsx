import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WhyUs from "./components/WhyUs";
import ExploreMenu from "./components/ExploreMenu";
import MoreInfo from "./components/MoreInfo";
import FollowUs from "./components/FollowUs";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Required for collapse toggle



function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhyUs />
      <ExploreMenu />
      <MoreInfo />
      <FollowUs />
    </>
  );
}

export default App;
