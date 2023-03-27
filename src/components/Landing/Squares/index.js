import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Squares = () => {
  const [clickedSquares, setClickedSquares] = useState([false, false, false]);
  const navigate = useNavigate();

  useEffect(() => {
    const allBlack = clickedSquares.every((square) => square);
    if (allBlack) {
      setTimeout(() => {
      navigate('home');
      }, 1000);
    }
  }, [clickedSquares, navigate]);

  const handleSquareClick = (index) => {
    setClickedSquares((prevClickedSquares) => {
      const newClickedSquares = [...prevClickedSquares];
      newClickedSquares[index] = !newClickedSquares[index];
      return newClickedSquares;
    });
  };

  return (
    <div className="square-container">
      <div
        className={`square left ${clickedSquares[0] ? 'clicked' : ''}`}
        onClick={() => handleSquareClick(0)}
      />
      <div
        className={`square middle ${clickedSquares[1] ? 'clicked' : ''}`}
        onClick={() => handleSquareClick(1)}
      />
      <div
        className={`square right ${clickedSquares[2] ? 'clicked' : ''}`}
        onClick={() => handleSquareClick(2)}
      />
    </div>
  );
};

export default Squares;
