import { YMaps, Map, Placemark, Polygon } from '@pbe/react-yandex-maps';
import { useRef } from 'react';
import IconPlus from '@/icons/IconPlus';
import IconMinus from '@/icons/IconMinus';
import { centerPolygon } from '@/data/centerPolygon';

export default function DeliveryMap() {
  const mapRef = useRef<any>(null);

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

  return (
    <>
      <div className="map">
        <YMaps query={{ apikey: import.meta.env.VITE_YANDEX_MAPS_API_KEY }}>
          <Map
            defaultState={{ center: [43.240344, 76.917752], zoom: 12 }}
            width="600px"
            height="400px"
            instanceRef={mapRef}
          >
            <Placemark geometry={[43.254714, 76.936913]} />
            <Polygon
              geometry={centerPolygon}
              options={{
                fillColor: '#0077FF55', // синий, прозрачны
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
