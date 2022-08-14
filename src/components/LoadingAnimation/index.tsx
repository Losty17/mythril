const LoadingAnimation = () => (
  <div className="w-full h-full flex justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75px"
      height="75px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M9 50A41 41 0 0 0 91 50A41 44.2 0 0 1 9 50"
        fill="#3e6d8d"
        stroke="none"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1.282051282051282s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 51.6;360 50 51.6"
        />
      </path>
    </svg>
  </div>
);

export default LoadingAnimation;
