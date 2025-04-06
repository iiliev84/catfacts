import { useEffect } from "react";

function SelectedCat({ selectedCatId, setSelectedCatId}){

      useEffect(()=>{
      }, [selectedCatId])

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