import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGreetings } from '../redux/slices/greetingsSlice';

function Greeting() {
  const { greetings } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return <h1>{greetings.greeting}</h1>;
}

export default Greeting;
