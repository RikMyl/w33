import React from 'react';
import './Bird.css';

const Bird = ({ birdData }) => {
  const finnishBirds = birdData.filter(bird => bird.finnish);

  const sortedFinnishBirds = finnishBirds.sort((a, b) =>
    a.finnish.localeCompare(b.finnish)
  );

  return (
    <div>
      {sortedFinnishBirds && sortedFinnishBirds.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Finnish</th>
              <th>Swedish</th>
              <th>English</th>
              <th>Short</th>
              <th>Latin</th>
            </tr>
          </thead>
          <tbody>
            {sortedFinnishBirds.map((bird, index) => (
              <tr key={index}>
                <td>{bird.finnish}</td>
                <td>{bird.swedish}</td>
                <td>{bird.english}</td>
                <td>{bird.short}</td>
                <td>{bird.latin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Finnish bird data available</p>
      )}
    </div>
  );
};

export default Bird;