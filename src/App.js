import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const arr = [
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    },
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    },
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    },
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
    },
    {
      backgroundImage:
        'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    },
  ];
  const [slide, setSlide] = useState(0);

  console.log(arr.length, slide);
  return slide < arr.length&&slide>-1 ? (
    <section
      style={{
        backgroundImage: `url(${arr[slide].backgroundImage})`,
      }}
    >
      <div className="slider-container">
        <div
          className="sliders"
          style={{
            backgroundImage: `url(${arr[slide].backgroundImage})`,
          }}
        ></div>
        <button
          className="arrow left-arrow"
          onClick={() => setSlide(slide - 1)}
          id="left"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <button
          className="arrow right-arrow"
          onClick={() => setSlide(slide + 1)}
          id="right"
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  ) :slide<0?(
    setSlide(arr.length-1)    
  ):(setSlide(0));
}

export default App;
