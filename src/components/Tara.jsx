import React from 'react';
import { useParams } from 'react-router-dom';
const Tara = ({ tari }) => {
  let params = useParams();
  const tara = tari.find(t => t.name === params.nume);
  if (!tara) {
    return <div>Țară nu găsită</div>;
  }

  return (
    <div>
      <h2>{tara.name}</h2>
      <p>Populație: {tara.population}</p>
      <p>Suprafață: {tara.area}</p>
    </div>
  );
};

export default Tara;