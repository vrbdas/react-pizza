interface IconLogoutProps {
  color?: string;
  width?: number;
  height?: number;
}


export default function IconLogout({ color = '#000', width = 20, height = 20 }: IconLogoutProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill={color}
          d="M13 2a5 5 0 0 0-5 5 1 1 0 1 0 2 0 3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3 1 1 0 1 0-2 0 5 5 0 0 0 5 5h4a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5h-4Z"
        />
        <path
          fill={color}
          d="M14 11a1 1 0 1 1 0 2v-2ZM5.718 11a38.459 38.459 0 0 0 1.027-1.325l.047-.063.012-.017.004-.007L6 9l.808.588a1 1 0 0 0-1.617-1.176l-.003.004-.01.014-.042.057-.16.216c-.14.184-.337.442-.57.736-.472.595-1.068 1.31-1.613 1.854L2.086 12l.707.707c.545.545 1.141 1.26 1.613 1.854a37.88 37.88 0 0 1 .73.952l.042.057.01.014.002.003a1 1 0 0 0 1.619-1.175l-.81.588.81-.588-.005-.007-.012-.017-.047-.063-.172-.23A39.987 39.987 0 0 0 5.718 13H14v-2H5.718Z"
        />
      </svg>
    </>
  );
}
