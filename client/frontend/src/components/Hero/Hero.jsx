import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { animate, easeIn, motion, spring } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "easeIn" }}
            >
              Discover <br />
              Most Suitable <br /> Property
            </motion.h1>
          </div>

          <div className="flexColStart hero-desc">
            <span className="secondaryText">
              Find a variety of properties that suit you the most easily.
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for yourself.
            </span>
          </div>
          <SearchBar />

          <dix className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={800} end={900} duration={3} />
                <span>+</span>{" "}
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={200000} end={205000} duration={2.5} />
                <span>+</span>{" "}
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>{" "}
              </span>
              <span className="secondaryText">Award Winings</span>
            </div>
          </dix>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            className="image-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.5, type: "spring" }}
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
