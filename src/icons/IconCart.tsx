interface IconCartProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function IconCart({
  color = '#000',
  width = 20,
  height = 20,
}: IconCartProps) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48">
        <path fill="none" d="M0 0h48v48H0z" />
        <path
          fill={color}
          d="M8 44h32c2.2 0 4-1.8 4-4V14h-8.18C34.863 8.334 29.934 4 24 4S13.137 8.334 12.181 14H4v26c0 2.2 1.8 4 4 4zM24 8c3.719 0 6.845 2.555 7.737 6H16.263c.892-3.445 4.018-6 7.737-6zM12 18v4h4v-4h16v4h4v-4h4v22H8V18h4z"
        />
      </svg>
    </>
  );
}
