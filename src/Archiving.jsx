import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WorkItem from './components/WorkItem';
import Masonry from 'react-masonry-css';
import { useSelector } from 'react-redux';
import { calcColumn } from './utils/common';

const StyledArchiving = styled.main`
  .my-masonry-grid {
    display: flex;
    margin-left: -5px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 5px; /* gutter size */
    background-clip: padding-box;
    > div {
      /* change div to reference your elements you put in <Masonry> */
      background: none;
      margin-bottom: 5px;
    }
  }
`;

function Archiving() {
  const works = useSelector((state) => state.works);
  const [columnNum, setColumnNum] = useState(calcColumn);
  function resizeHandler() {
    setColumnNum(calcColumn());
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <StyledArchiving>
      {/* <h2 className='title'>Archiving</h2> */}
      {/* <h3> works.</h3> */}
      <Masonry breakpointCols={columnNum} className='my-masonry-grid' columnClassName='my-masonry-grid_column'>
        {Object.keys(works)
          .reverse()
          .map((key) => {
            return <WorkItem key={key} {...works[key]} />;
          })}
      </Masonry>
      {/* <!-- LightWidget WIDGET --> */}
      {/* <iframe
        src='//lightwidget.com/widgets/7d92b37338b55d3d991a019060e02e7b.html'
        scrolling='no'
        allowtransparency='true'
        className='lightwidget-widget'
        style='width:100%;border:0;overflow:hidden;'
      ></iframe> */}
    </StyledArchiving>
  );
}

export default Archiving;
