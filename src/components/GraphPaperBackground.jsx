const GraphPaperBackground = ({
  gridSize = 24,
  lineColor = "var(--foreground)",
  backgroundColor = "var(--background)",
}) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ backgroundColor }}
    >
      {/* Horizontal lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent ${gridSize - 1}px,
              ${lineColor} ${gridSize - 1}px,
              ${lineColor} ${gridSize}px
            )
          `,
          maskImage: `
            linear-gradient(
              to top,
              rgba(0,0,0,0) 0%,       
              rgba(0,0,0,0.1) 50%,
              rgba(0,0,0,0) 100%
            )
          `,
          WebkitMaskImage: `
            linear-gradient(
              to top,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0.1) 50%,
              rgba(0,0,0,0) 100%
            )
          `,
        }}
      />
      {/* Vertical lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent ${gridSize - 1}px,
              ${lineColor} ${gridSize - 1}px,
              ${lineColor} ${gridSize}px
            )
          `,
          maskImage: `
            linear-gradient(
              to right,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0.1) 50%,           
              rgba(0,0,0,0) 100%
            )
          `,
          WebkitMaskImage: `
            linear-gradient(
              to right,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0.1) 50%,
              rgba(0,0,0,0) 100%
            )
          `,
        }}
      />
    </div>
  );
};

export default GraphPaperBackground;
