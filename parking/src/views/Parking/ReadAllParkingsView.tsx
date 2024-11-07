import { Layout } from "../shared/Layout";
import { html } from 'hono/html';
import { Parking } from "../../models/Parking";
import { toSlug } from "../../utils/toSlug";
import { City } from "../../models/City";

// Définition du type de paramètre
type ReadAllParkingsViewProps = {
  parkings: Array<Parking>;
  cities: Array<City>;
}

// Utilisation du composant Layout en tant que base
// et définition du composant fonctionnel ReadAllParkingsView
const ReadAllParkingsView = ({ parkings, cities }: ReadAllParkingsViewProps) => {
    const parkingsList = parkings.map(parking => html`
    <li>
      <h2>${parking.name}</h2>
      <p>Location: ${parking.location}</p>
      <p>Spots: ${parking.numberOfPlaces}</p>
      <p>Hourly Rate: $${parking.hourlyRate}</p>
      <a href="/parkings/${toSlug(parking.name)}">Parking Details</a>
    </li>
    `);
  
    return Layout({
        pageHeading: 'All Parkings',
        pageTitle: 'All Parkings',
        children: html`
          <h1>List of Parkings</h1>
          <ul>
            ${parkingsList}
          </ul>
        `,
    });
}

export default ReadAllParkingsView;
