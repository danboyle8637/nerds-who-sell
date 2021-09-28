import { GetStaticPaths, GetStaticProps } from "next";
import styled from "styled-components";

import { HomeView } from "../src/views/Home";

const Home = () => {
  return <HomeView />;
};

export default Home;
