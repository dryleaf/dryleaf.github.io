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
import { Fade } from "react-awesome-reveal";
import Layout from '../components/default-theme';

const Photography = ({ scrollPosition }, props) => {
  console.log(props);
  const [mounted, setMounted] = useState(false);
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
    if (!mounted) {
      window.addEventListener("scroll", checkScrollTop);
    }
    showlistOfPhotos(shuffle(photos));
    setMounted(true);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Photography by Josimar Lopes</title>
        <meta name="description" content="Photography | Josimar Lopes is an aspiring photographer, in his free time he likes to take pictures." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="photography">
        <div className="row">
          <div className="col">
            <h1>Photography</h1>
            <blockquote style={{margin: '16px 40px', padding: '5px'}}>
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
                  name={item.name}
                  title={item.name}
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
    </Layout>
  );
};
export default trackWindowScroll(Photography);
