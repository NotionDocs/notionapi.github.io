import Background from "components/organisms/Background";
import Hero from "components/organisms/pages/Home/Hero";
import Features from "components/organisms/pages/Home/Features";
import Capabilities from "components/organisms/pages/Home/Capabilities";
import Pricing from "components/organisms/pages/Home/Pricing";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <div className={"w-full relative overflow-hidden"}>
        <div
          className="w-full"
          style={{
            height: "75rem",
            position: "absolute",
            zIndex: 2,
          }}
        >
          <Background left right />
        </div>
        <Capabilities />
        <Pricing />
      </div>
    </>
  );
};

export default Home;
