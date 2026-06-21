// Shared "JC" pixel-grid logo (5x7 retro font), used by the preloader and the header
export const PIXEL_LETTER_J = [
  [0, 0, 1, 1, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
]

export const PIXEL_LETTER_C = [
  [0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
]

export function PixelLogo({
  size = 3,
  gap = 1,
  className = "",
}: {
  size?: number
  gap?: number
  className?: string
}) {
  const letters = [PIXEL_LETTER_J, PIXEL_LETTER_C]

  return (
    <div className={`flex items-end ${className}`} style={{ gap }}>
      {letters.map((grid, li) => (
        <div
          key={li}
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${grid[0].length}, ${size}px)`,
            gridTemplateRows: `repeat(${grid.length}, ${size}px)`,
            gap,
          }}
        >
          {grid.map((row, r) =>
            row.map((cell, c) =>
              cell ? (
                <div
                  key={`${r}-${c}`}
                  className="bg-accent-teal"
                  style={{ width: size, height: size, borderRadius: 1 }}
                />
              ) : (
                <div key={`${r}-${c}`} />
              ),
            ),
          )}
        </div>
      ))}
    </div>
  )
}
