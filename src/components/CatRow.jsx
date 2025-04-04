function CatRow({setSelectedCatId, cat}){
   
    return (
        <tr
          onClick={() => {
            setSelectedCatId(cat);
          }}
        >
          <td>{cat.breed}</td>
        </tr>
      );
}

export default CatRow