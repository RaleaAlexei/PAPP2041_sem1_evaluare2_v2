import React from 'react';
import { Link } from 'react-router-dom';
const ListaTari = ({ tari }) => {
  return (
    <div>
      <h2>Țări</h2>
      <table className="table px-5">
        <thead>
          <tr>
            <th>Nume</th>
            <th>Populatia</th>
            <th>Suprafata</th>
          </tr>
        </thead>
        <tbody>
          {tari.map(tara => (
            <tr key={tara.alpha3Code}>
				<td><Link to={`/tara/${tara.name}`}>{tara.name}</Link></td>
				<td>{tara.population}</td>
				<td>{tara.area}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaTari;