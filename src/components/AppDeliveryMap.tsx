import { YMaps, Map, Placemark, Polygon } from '@pbe/react-yandex-maps';
import { useRef } from 'react';
import IconPlus from '@/icons/IconPlus';
import IconMinus from '@/icons/IconMinus';
import { poligons } from '@/data/poligons';

export default function DeliveryMap() {
  const mapRef = useRef(null);

  const zoomIn = () => {
    const map = mapRef.current;
    if (map) {
      const currentZoom = map.getZoom();
      map.setZoom(currentZoom + 1);
    }
  };

  const zoomOut = () => {
    const map = mapRef.current;
    if (map) {
      const currentZoom = map.getZoom();
      map.setZoom(currentZoom - 1);
    }
  };

  const almatyPolygon = Object.values(poligons);

  return (
    <>
      <div className="map">
        <YMaps query={{ apikey: '' }}>
          <Map
            defaultState={{ center: [43.254714, 76.936913], zoom: 12 }}
            width="800px"
            height="800px"
            instanceRef={mapRef}
          >
            <Placemark
              geometry={[43.254714, 76.936913]}
            />
            <Polygon
              geometry={almatyPolygon}
              options={{
                fillColor: '#0077FF55', // синий с прозрачностью
                strokeColor: '#0044AA',
                strokeWidth: 3,
                opacity: 0.5,
              }}
            />
          </Map>
        </YMaps>
        <div className="zoom">
          <button className="zoom__btn" onClick={zoomIn}>
            <IconPlus />
          </button>
          <button className="zoom__btn" onClick={zoomOut}>
            <IconMinus />
          </button>
        </div>
      </div>
    </>
  );
}
