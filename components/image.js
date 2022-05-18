import React from "react";
import { usePalette } from "react-palette";

const Image = (props) => {

  const { data, loading, error } = usePalette(props.src);

  return (
    <>
      <div className="img-wrapper">
        <div className="meta">
          <div className="colors">
            <span className="box" style={{ background: data.darkMuted }}></span>
            <span
              className="box"
              style={{ background: data.darkVibrant }}
            ></span>
            <span
              className="box"
              style={{ background: data.lightMuted }}
            ></span>
            <span
              className="box"
              style={{ background: data.lightVibrant }}
            ></span>
            <span className="box" style={{ background: data.vibrant }}></span>
          </div>
          <div className="name">{props.name}</div>
        </div>
        <div className="image">{props.children}</div>
      </div>
      <style jsx>{`
        .img-wrapper {
          display: flex;
        }
        .meta {
          flex: 0 30px;
        }
        .name {
          padding-bottom: 12px;
          writing-mode: tb-rl;
          transform: rotate(180deg);
          margin-left: 6px;
          padding-top: 6px;
        }
        .image {
          flex: 0 CALC(100% - 30px);
        }
        .box {
          height: 30px;
          width: 30px;
          background: red;
          display: block;
          margin: 3px;
          border-radius: 3px;
          background: #dedede;
        }
      `}</style>
    </>
  );
};
export default Image;
