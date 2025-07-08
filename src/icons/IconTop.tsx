interface IconTopProps {
  color?: string;
}

export default function IconTop({ color = '#000' }: IconTopProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke={color}
          strokeLinecap="round"
          strokeWidth="2"
          d="m18 15-5.772-6.734a.3.3 0 0 0-.456 0L6 15"
        />
      </svg>
    </>
  );
}
