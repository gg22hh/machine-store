import { FC } from "react";

export const MainTopContent: FC = () => {
  return (
    <div className="top-content">
      <div className="container">
        <div className="top-content__inner">
          <img
            className="top-content__image"
            src="/images/main-text.png"
            alt=""
          />
          <h3 className="top-content__subtitle">In node and path we trace</h3>
          <h2 className="top-content__title">In vector we trust</h2>
        </div>
      </div>
    </div>
  );
};
