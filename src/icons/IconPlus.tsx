interface IconPlusProps {
  color?: string;
}

export default function IconPlus({ color = '#000' }: IconPlusProps) {
  return (
    <>
      <svg
        width="12.000000"
        height="12.000000"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="Vector"
          d="M10.8 4.79L7.2 4.79L7.2 1.2C7.2 0.53 6.66 0 6 0C5.33 0 4.79 0.53 4.79 1.2L4.79 4.79L1.2 4.79C0.53 4.79 0 5.33 0 6C0 6.66 0.53 7.2 1.2 7.2L4.79 7.2L4.79 10.8C4.79 11.46 5.33 12 6 12C6.66 12 7.2 11.46 7.2 10.8L7.2 7.2L10.8 7.2C11.46 7.2 12 6.66 12 6C12 5.33 11.46 4.79 10.8 4.79Z"
          fill={color}
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </svg>
    </>
  );
}
