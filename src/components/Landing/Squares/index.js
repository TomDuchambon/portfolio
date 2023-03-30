import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Squares = () => {
  const [clickedSquares, setClickedSquares] = useState([false, false, false]);
  const navigate = useNavigate();
  const [squareClass, setSquareClass] = useState('square');

  useEffect(() => {
    const allBlack = clickedSquares.every((square) => square);
    if (allBlack) {
      setTimeout(() => {
      setSquareClass('zoom-out');
      console.log('zoom-out');
      }, 1000);
      setTimeout(() => {
      navigate('home');
      }, 2000);
    }
  }, [squareClass, clickedSquares, navigate]);

  const handleSquareClick = (index) => {
    setClickedSquares((prevClickedSquares) => {
      const newClickedSquares = [...prevClickedSquares];
      newClickedSquares[index] = !newClickedSquares[index];
      return newClickedSquares;
    });
  };

  return (
    <div className="square-container">
      <div squareClass={squareClass}
        className={`square left ${clickedSquares[0] ? 'clicked' : ''}`}
        onClick={() => handleSquareClick(0)}
      />
      <div squareClass={squareClass}
        className={`square middle ${clickedSquares[1] ? 'clicked' : ''}`}
        onClick={() => handleSquareClick(1)}
      />
      <div squareClass={squareClass}
        className={`square right ${clickedSquares[2] ? 'clicked' : ''}`}
        onClick={() => handleSquareClick(2)}
      />
    </div>
  );
};

export default Squares;
