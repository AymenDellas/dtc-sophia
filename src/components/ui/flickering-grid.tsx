import React, { useEffect, useRef } from "react";

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
  className?: string;
}

export const FlickeringGrid = ({
  squareSize = 4,
  gridGap = 6,
  color = "#6B7280",
  maxOpacity = 0.5,
  flickerChance = 0.1,
  className = "",
}: FlickeringGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let squares: Float32Array;

    const rgbColor = (() => {
      const match = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
      return match
        ? `${parseInt(match[1], 16)}, ${parseInt(match[2], 16)}, ${parseInt(match[3], 16)}`
        : "107, 114, 128"; 
    })();

    const init = () => {
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      cols = Math.floor(width / (squareSize + gridGap));
      rows = Math.floor(height / (squareSize + gridGap));

      squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const idx = i * rows + j;
          const currentOpacity = squares[idx];

          if (Math.random() < flickerChance) {
            squares[idx] = Math.random() * maxOpacity;
          } else {
            // smoothly decay or rise
            squares[idx] += (Math.random() - 0.5) * 0.1;
            if (squares[idx] < 0) squares[idx] = 0;
            if (squares[idx] > maxOpacity) squares[idx] = maxOpacity;
          }

          ctx.fillStyle = `rgba(${rgbColor}, ${squares[idx]})`;
          const x = i * (squareSize + gridGap);
          const y = j * (squareSize + gridGap);
          ctx.fillRect(x, y, squareSize, squareSize);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();

    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", init);
    };
  }, [squareSize, gridGap, color, maxOpacity, flickerChance]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};
