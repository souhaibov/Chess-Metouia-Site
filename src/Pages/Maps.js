
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'



var icon = L.icon({
  iconUrl: 'https://img.icons8.com/plasticine/2x/marker.png',
  iconSize: [38, 45],
  iconAnchor: [19, 40],
  popupAnchor: [0, -30]

})


function App() {
  const position =[33.961072, 9.998322]

  return (
    <div className="App">

      <MapContainer style={{width:"40vw",height:"65vh"}} center={[33.948515, 10.036051]} zoom={13} >
        <TileLayer
          attribution=' '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
            <Popup >
              <h2 style={{color:'green',textAlign:'center'}}>Local du Club d'Echecs de Métouia</h2>
              <div >
            <img style={{width:'265px',height:'200px'}} src='club.jpg' alt="Club d'Echecs de Métouia"/>
              </div>
            </Popup>
        </Marker>
        <Marker position={[33.956993, 10.014154]} icon={icon}>
            <Popup >
              <h2 style={{color:'green',textAlign:'center'}}>Local Jeunes sans frantiéres</h2>
              <div >
            <img style={{width:'265px',height:'200px'}} src='club.jpg' alt="Club d'Echecs de Métouia"/>
              </div>
            </Popup>
        </Marker>
        <Marker position={[33.942190, 10.075415]} icon={icon}>
            <Popup >
              <h2 style={{color:'green',textAlign:'center'}}>Local Ecole des Elite à Ghannouch</h2>
              <div >
            <img style={{width:'265px',height:'200px'}} src='club.jpg' alt="Club d'Echecs de Métouia"/>
              </div>
            </Popup>
        </Marker>
        
      </MapContainer>


    </div>
  );
}

export default App;