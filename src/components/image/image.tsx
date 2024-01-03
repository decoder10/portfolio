import React, { FC, useState } from 'react';

interface IProps {
  url: string;
  classes?: string;
  loadedClass: string;
}

const Image: FC<IProps> = props => {
  const { url, classes = '', loadedClass } = props;

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <span className={`skeletonLoader ${classes}  ${isLoaded ? `${loadedClass} loaded` : ''}`}>
      <img src={url} alt="" onLoad={() => setIsLoaded(true)} />
    </span>
  );
};

export const MemoImage = React.memo(Image);
