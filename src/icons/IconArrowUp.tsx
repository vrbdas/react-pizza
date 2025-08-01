interface IconArrowUpProps {
  rotate: boolean;
}

export default function IconArrowUp({ rotate }: IconArrowUpProps) {
  return (
    <>
      <svg
        width="10.000000"
        height="5.625000"
        viewBox="0 0 10 5.625"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs />
        <g transform={rotate ? 'rotate(180 5 2.8125)' : ''}>
          <path
            d="M10 5C10 5.16 9.93 5.31 9.81 5.43C9.69 5.56 9.54 5.62 9.37 5.62L0.62 5.62C0.45 5.62 0.3 5.56 0.18 5.43C0.06 5.31 0 5.16 0 5C0 4.83 0.06 4.68 0.18 4.56L4.56 0.18C4.68 0.06 4.83 0 5 0C5.16 0 5.31 0.06 5.43 0.18L9.81 4.56C9.93 4.68 10 4.83 10 5Z"
            fill="#2C2C2C"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </g>
      </svg>
    </>
  );
}
