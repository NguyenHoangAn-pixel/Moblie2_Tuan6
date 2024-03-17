import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './Cat.css';

const Mouse = ({ style }) => {
  return <div className="mouse" style={style} />;
};

const Cat = ({ style }) => {
  return <div className="cat" style={style} />;
};

const App = () => {
  const [mouseProps, setMouseProps] = useSpring(() => ({
    from: { left: '0%' },
    to: { left: '100%' },
    config: { duration: 2000 },
    reset: true,
    loop: { reverse: true }
  }));

  const [catProps, setCatProps] = useSpring(() => ({
    from: { bottom: '0%' },
    to: { bottom: '100%' },
    config: { duration: 1500 },
    reset: true,
    loop: { reverse: true }
  }));

  const [collision, setCollision] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      const mousePosition = mouseProps.left.getValue();
      const catPosition = catProps.bottom.getValue();
      if (Math.abs(parseInt(mousePosition) - parseInt(catPosition)) < 10) {
        setCollision(true);
      } else {
        setCollision(false);
      }
    };

    checkCollision();
  }, [mouseProps, catProps]);

  return (
    <div className="container">
      <Mouse style={mouseProps} />
      <Cat style={catProps} />
      {collision && <div className="collision">Collision!</div>}
    </div>
  );
};

export default App;
