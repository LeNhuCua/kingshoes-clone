import classNames from "classnames";
import React from "react";
import styled from 'styled-components'
const TextHeading = ({children, after}) => {


  const TextHeading1 = styled.div`
  &:after {
    content: "${after}";

  }
`;
  

  return (
    // <div  className={`cs-container  after:top-1/2 after:-translate-y-1/2 after:text-gray-200 relative after:absolute after:left-4  after:text-7xl after:xl:text-8xl after:-z-50 after:uppercase after:tracking-widest ${after ? `after:content-['${after}']` : ""} `}>
    <TextHeading1  className={classNames(` after:top-1/2 after:-translate-y-1/2 after:text-gray-200 relative after:absolute after:left-4  after:text-7xl after:xl:text-8xl after:-z-50 after:uppercase after:tracking-widest ` )}>
      <h1 className="inline-block cs-heading-primary relative z-30">
        {
            children
        }

      </h1>
    </TextHeading1>
  );
};

export default TextHeading;
