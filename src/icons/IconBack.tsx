interface IconBackProps {
  color?: string;
}

export default function IconBack({ color = '#000' }: IconBackProps) {
  return (
    <>
      <svg
        width="7.502930"
        height="13.506165"
        viewBox="0 0 7.50293 13.5062"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs />
        <path
          d="M6.74 12.75L0.74 6.68L6.61 0.75"
          stroke={color}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}
