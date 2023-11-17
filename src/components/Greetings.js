import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from './store/greetingsSlice';

function Greetings() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greetings.greetings);
  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);
  return (
    <div>
      <h2>{greeting}</h2>
    </div>
  );
}
export default Greetings;
