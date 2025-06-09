interface IconLoginProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function IconLogin({ color = '#000', width = 20, height = 20 }: IconLoginProps) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48">
        <path fill="none" d="M0 0h48v48H0z" />
        <path fill={color} d="M31.278 25.525C34.144 23.332 36 19.887 36 16c0-6.627-5.373-12-12-12S12 9.373 12 16c0 3.887 1.856 7.332 4.722 9.525C9.84 28.531 5 35.665 5 44h38c0-8.335-4.84-15.469-11.722-18.475zM16 16c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8-8-3.589-8-8zm8 12c6.977 0 12.856 5.107 14.525 12H9.475C11.144 33.107 17.023 28 24 28z" />
      </svg>
    </>
  );
}
