import { useState, useEffect } from "react";

function SelectedCat({ selectedCatId, setSelectedCatId}){
    const [cat, setCat] = useState(null);

    useEffect(() => {
        async function fetchCat() {
          try {
            const response = await fetch(`https://catfact.ninja/breeds`);
            const result = await response.json();
            setCat(result.data);
          } catch (error) {
            console.error("Failed to fetch:", error);
          }
        }
    
        fetchCat();
      }, [selectedCatId]);

    return (
    <div className="cat">
    {selectedCatId ? (
      <div>
      <h2>{selectedCatId.breed}</h2>
      <p>Country: {selectedCatId.country}</p>
      <p>Origin: {selectedCatId.origin}</p>
      <p>Coat: {selectedCatId.coat}</p>
      <p>Pattern: {selectedCatId.pattern}</p>
    </div>
    ) : (
      ""
    )}
     <button onClick={() => setSelectedCatId(null)}>Back</button>
    </div>
    
  );
}

export default SelectedCat