import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from './store/greetingsSlice';

function Greetings() {
  const dispatch = useDispatch();
  const greetingsCont = useSelector((state) => state.greetings.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  const getRandomGreeting = () => {
    if (greetingsCont.length > 0) {
      const randomIndex = Math.floor(Math.random() * greetingsCont.length);
      return greetingsCont[randomIndex].greeting;
    }
    return '';
  };

  return (
    <div>
      <h2>{getRandomGreeting()}</h2>
    </div>
  );
}

export default Greetings;
