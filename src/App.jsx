import { useState } from 'react'
import './App.css'
import CatsList from './components/CatsList'
import SelectedCat from './components/SelectedCat'

function App() {
  const [selectedCatId, setSelectedCatId] = useState(null);

  return (
    <>
      {selectedCatId ? (
        <SelectedCat selectedCatId={selectedCatId} setSelectedCatId={setSelectedCatId}/>
      ) : (
        <CatsList setSelectedCatId={setSelectedCatId} />
      )}
    </>
  )
}

export default App
