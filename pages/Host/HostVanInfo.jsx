import { useOutletContext } from "react-router-dom"

const HostVanInfo = () => {

  const {currentVan} = useOutletContext();

  return (
    <div className="hostVanInfo">
      {
        currentVan ? (
          <ul>
            <li><strong>Name:</strong> {currentVan.name}</li>
            <li><strong>Category:</strong> {currentVan.type}</li>
            <li><strong>Description:</strong> {currentVan.description}</li>
            <li><strong>Visibility:</strong> Public</li>
          </ul>
        ) : (
          <h2>Loading...</h2>
        )
      }


    </div>
  )
}

export default HostVanInfo