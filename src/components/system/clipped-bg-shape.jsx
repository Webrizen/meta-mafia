export function ClippedBgShape({
    className,
    from = "#6366F1",
    to = "#A855F7",
  }) {
    return (
      <svg
        viewBox="0 0 100 100"
        className={`absolute inset-0 z-0 w-full h-full ${className}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="diagonalGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
          <clipPath id="diagonalClip" clipPathUnits="objectBoundingBox">
          <polygon points="0 0, 1 0, 1 1, 0 0.54" />
        </clipPath>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#diagonalGradient)"
          clipPath="url(#diagonalClip)"
          opacity="0.15"
        />
      </svg>
    );
  }