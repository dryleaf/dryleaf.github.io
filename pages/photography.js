import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import { photos } from "../data/photos";
import "react-lazy-load-image-component/src/effects/blur.css";
import { cdnImage, shuffle } from "../components/utils";
import ImageCard from "../components/image";
import Fade from "react-reveal/Fade";

const Photography = ({ scrollPosition }) => {
  const [showScroll, setShowScroll] = useState(false);
  const [listOfPhotos, showlistOfPhotos] = useState([]);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  useEffect(() => {
    if (process.browser) {
      window.addEventListener("scroll", checkScrollTop);
    }
    showlistOfPhotos(shuffle(photos));
  }, []);

  return (
    <>
      <Head>
        <title>Photography by Josimar Lopes</title>
        <meta name="description" content="Photography | Josimar Lopes is an aspiring photographer, in his free time he likes to take pictures." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="photography">
        <div className="row">
          <div className="col">
            <h1>Photography</h1>
            <blockquote>
              <p>A glimpse of time, a memory, and a moment, forever captured and preserved.</p>
            </blockquote>
          </div>
          <div className="col">
            <p className="info">
              I have always been fascinated about pictures, 
              but I have not been able to take pictures myself 
              for quite some time. Until I decided to buy myself, 
              a camera as a birthday gift.
            </p>
            <p className="info">
              
            </p>
          </div>
        </div>
        <div className="photos">
          {listOfPhotos.map((item) => (
            <Fade bottom key={item.url}>
              <ImageCard src={item.url} name={item.name}>
                <LazyLoadImage
                  src={cdnImage(item.url)}
                  alt={item.name}
                  scrollPosition={scrollPosition}
                  effect="black-and-white"
                  placeholderSrc={cdnImage(item.url, true)}
                />
              </ImageCard>
            </Fade>
          ))}
        </div>
        <div
          className="scrollTop"
          onClick={scrollTop}
          style={{ height: 40, display: showScroll ? "flex" : "none" }}
        >
          <i className="fa fa-arrow-up"></i>
        </div>
      </div>
    </>
  );
};
export default trackWindowScroll(Photography);
