import {useState, useEffect} from 'react';
import CatRow from './CatRow';


function CatsList({ setSelectedCatId }) {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    async function fetchCats() {
      try {
        const response = await fetch(
          "https://catfact.ninja/breeds"
        );
        const result = await response.json();
        setCats(result.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCats();
  }, []);  

  return (
    <table>
      <tbody>
        <tr>
          <th><strong>Cat Breed List</strong></th>
        </tr>
        {cats.map((cat) => (
          <CatRow
            key={cat.id}
            cat={cat}
            setSelectedCatId={setSelectedCatId}
          />
        ))}
      </tbody>
    </table>
  );
}

export default CatsList