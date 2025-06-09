interface IconDeliveryProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function IconDelivery({
  color = '#000',
  width = 20,
  height = 20,
}: IconDeliveryProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48">
      <path fill="none" d="M0 0h48v48H0z" />
      <path fill={color} d="M42 6H18c-2.2 0-4 1.8-4 4v4C7.4 14 2 19.4 2 26v12h4a6 6 0 1 0 12 0h8a6 6 0 1 0 12 0h4c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zM12 40c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm2-7.651A5.97 5.97 0 0 0 12 32a5.976 5.976 0 0 0-4.463 2H6v-6h8v4.349zM14 24H6.263c.892-3.445 4.017-6 7.737-6v6zm18 16c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm10-6h-5.537a5.978 5.978 0 0 0-8.926 0H18V10h24v24z" />
    </svg>
  );
}
