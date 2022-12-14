import React from "react";
import Script from "next/script";

const StickyBottom = () => (
  <>
    <div className="sticky-bottom">
      <ins id="responsive_overlay" className="adsbygoogle"
        style={{display: 'block'}}
        data-ad-client="ca-pub-1325330735397854"
        data-ad-slot="4809306726"></ins>
      <Script id="responsive_overlay" strategy="lazyOnload">
      {`
        (adsbygoogle = window.adsbygoogle || []).push({});
      `}
      </Script>
    </div>
    <style jsx>
    {`
      .sticky-bottom {
        background: transparent;
        bottom: 0;
        cursor: pointer;
        display: block;
        height: 90px;
        margin: 0 auto;
        padding: 0;
        position: sticky;
        width: 100%;
        z-index: 100;
      }
      #responsive_overlay {
        margin: 0 auto;
      }
      @media(max-width: 499px) {
        .sticky-bottom {
          padding-top: 30px;
        }
        #responsive_overlay {
          width: 320px;
          height: 60px;
        }
      }
      @media(min-width: 500px) {
        .sticky-bottom {
          padding-top: 30px;
        }
        #responsive_overlay {
          width: 468px;
          height: 60px;
        }
      }
      @media(min-width: 800px) {
        #responsive_overlay {
          width: 728px;
          height: 90px;
        }
      }
    `}
    </style>
  </>
);

export default StickyBottom;
