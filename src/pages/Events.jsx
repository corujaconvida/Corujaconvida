import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import '../App.css';

const eventosExemplo = [
  {
    id: 1,
    titulo: 'Caminhada na Serra',
    categoria: 'Físico',
    coordenadas: [39.8166, -8.3833],
  },
  {
    id: 2,
    titulo: 'Tarde de Poesia',
    categoria: 'Cultural',
    coordenadas: [39.8266, -8.3933],
  },
  {
    id: 3,
    titulo: 'Almoço Convívio',
    categoria: 'Social',
    coordenadas: [39.8366, -8.4033],
  },
];

const coresCategoria = {
  'Físico': '#F9B248',
  'Cultural': '#26C3A5',
  'Social': '#3A7CA5',
};

function Events() {
  const [raio] = useState(50);
  const posicaoInicial = [39.8200, -8.3900];

  return (
    <div className="events-page">
      <div className="eventos-lista">
        <h2>Eventos</h2>
        {eventosExemplo.map((evento) => (
          <div
            key={evento.id}
            className="evento-card"
            style={{ borderLeft: `8px solid ${coresCategoria[evento.categoria]}`, padding: '10px', marginBottom: '10px', background: 'white' }}
          >
            <h3>{evento.titulo}</h3>
            <p>Categoria: {evento.categoria}</p>
          </div>
        ))}
      </div>

      <div className="eventos-mapa">
        <MapContainer center={posicaoInicial} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {eventosExemplo.map((evento) => (
            <Marker
              key={evento.id}
              position={evento.coordenadas}
              icon={L.icon({
                iconUrl: `https://via.placeholder.com/30/${coresCategoria[evento.categoria].replace('#','')}/ffffff?text=+`,
                iconSize: [30, 30],
              })}
            >
              <Popup>
                <strong>{evento.titulo}</strong><br />
                Categoria: {evento.categoria}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Events;