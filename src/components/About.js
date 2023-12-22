import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';

function About() {
  const a = useContext(noteContext);
  return <div>This is about page.</div>;
}

export default About;