interface IconEditProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function IconEdit({ color = '#000', width = 20, height = 20 }: IconEditProps) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <g
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M20 16v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" />
          <path d="M12.5 15.8 22 6.2 17.8 2l-9.5 9.5L8 16l4.5-.2z" />
        </g>
      </svg>
    </>
  );
}
