interface IconSaveProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function IconSave({ width = 20, height = 20, color = '#000' }: IconSaveProps) {
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
          fillRule="evenodd"
          d="M18.172 1a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 23 5.828V20a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h14.172ZM4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h1v-6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6h1a1 1 0 0 0 1-1V6.828a2 2 0 0 0-.586-1.414l-1.828-1.828A2 2 0 0 0 17.172 3H17v2a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V3H4Zm13 18v-6a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM9 3h6v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V3Z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}
