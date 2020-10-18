import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import mapMarkerImg from '../images/map-marker.svg';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

const OrphanagesMap: React.FC = () => {
    const  [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
       api.get('orphanages').then(res => {
           setOrphanages(res.data)
       })
    }, []);

    return (
      <div id="page-map">
          <aside>
              <header>
                 <img src={mapMarkerImg} alt="Happy"/>

                 <h2>Escolha um orfanato no mapa</h2>
                 <p>Muitas crianças estão esperando a sua visita :)</p>
              </header>

              <footer>
                  <strong>Florianópolis</strong>
                  <span>Santa Catarina</span>
              </footer>
          </aside>

          <Map 
             center={[-27.5999631,-48.5383054]}
             zoom={11}
             style={{ width: '100%', height: '100%' }}
          >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {orphanages.map(orphanage => {
                return (
                    <Marker
                    key={orphanage.id}
                    icon={mapIcon}
                    position={[orphanage.latitude, orphanage.longitude]}
                    >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das crianças
                        <Link to={`/orphanages/${orphanage.id}`}>
                            <FiArrowRight size={20} color="#FFF" />
                        </Link>
                        </Popup>
                    </Marker>
                )
            })}
          </Map>

          <Link to="/orphanages/create" className="create-orphanage">
              <FiPlus size={32} color="#FFF" />
          </Link>
      </div>
    );
}

export default OrphanagesMap;