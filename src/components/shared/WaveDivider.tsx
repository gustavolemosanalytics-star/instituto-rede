interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({ flip = false, className = "" }: WaveDividerProps) {
  return (
    <div
      className={`w-full leading-none ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[60px] md:h-[80px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40C120 60 240 70 360 55C480 40 600 10 720 5C840 0 960 20 1080 35C1200 50 1320 60 1440 45V70H0V40Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
