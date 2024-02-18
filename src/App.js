import React from 'react';
import Bird from './Bird';
import birdData from './bird.json';

const sortedBirdData = [...birdData].sort((a, b) => {
  const aFinnish = a.Finnish || '';
  const bFinnish = b.Finnish || '';
  return aFinnish.localeCompare(bFinnish);
});

console.log(sortedBirdData); // Log the sorted data

const App = () => {
  return (
    <div style={{ backgroundColor: 'lightgray' }}>
      <h1>Bird Table</h1>
      <Bird birdData={sortedBirdData} />
    </div>
  );
};

export default App;