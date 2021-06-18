import React, { FC } from "react";

interface Props {
  text: string;
}

export const PointsItem: FC<Props> = ({ text, children }) => {
  return (
    <div className="points__item">
      <p className="points__text">{text}</p>
      {children}
    </div>
  );
};
