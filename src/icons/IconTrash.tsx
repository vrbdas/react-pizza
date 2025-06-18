interface IconTrashProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function IconTrash({ color = '#000', width = 20, height = 20 }: IconTrashProps) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip8_426">
            <rect
              rx="0"
              width="19"
              height="19"
              transform="translate(0.5 0.5)"
              fill="white"
              fillOpacity="0"
            />
          </clipPath>
        </defs>
        <rect
          rx="0"
          width="19"
          height="19"
          transform="translate(0.5 0.5)"
          fill="#FFFFFF"
          fillOpacity="0"
        />
        <g clipPath="url(#clip8_426)">
          <path
            d="M2.5 5L4.16 5L17.5 5"
            stroke={color}
            strokeOpacity="1"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M15.83 16.66C15.83 17.1 15.65 17.53 15.34 17.84C15.03 18.15 14.6 18.33 14.16 18.33L5.83 18.33C5.39 18.33 4.96 18.15 4.65 17.84C4.34 17.53 4.16 17.1 4.16 16.66L4.16 4.99L15.83 4.99L15.83 16.66ZM6.66 4.99L6.66 3.33C6.66 2.89 6.84 2.46 7.15 2.15C7.46 1.84 7.89 1.66 8.33 1.66L11.66 1.66C12.1 1.66 12.53 1.84 12.84 2.15C13.15 2.46 13.33 2.89 13.33 3.33L13.33 4.99"
            stroke={color}
            strokeOpacity="1"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M8.33 9.16L8.33 14.16"
            stroke={color}
            strokeOpacity="1"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M11.66 9.16L11.66 14.16"
            stroke={color}
            strokeOpacity="1"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </>
  );
}
