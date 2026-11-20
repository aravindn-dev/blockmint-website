import { motion, useReducedMotion } from 'framer-motion'

/**
 * Isometric block composition — an architectural cyber stack with the signature
 * BlockMint cube floating above it. Pure SVG, no images.
 */
const S = 34 // cube size
const C = Math.cos(Math.PI / 6)
const project = (x, y, z) => [(x - y) * C * S, (x + y) * 0.5 * S - z * S]

const heights = [
  [5, 4, 3, 2, 1],
  [4, 4, 2, 2, 1],
  [3, 2, 2, 1, 0],
  [2, 2, 1, 1, 0],
  [1, 1, 0, 0, 0],
]
// tops to outline in neon cyan
const accentTops = new Set(['0-2', '2-0', '4-0'])

function faces(x, y, z) {
  const p = (a, b, c) => project(a, b, c).join(',')
  return {
    top: `${p(x, y, z + 1)} ${p(x + 1, y, z + 1)} ${p(x + 1, y + 1, z + 1)} ${p(x, y + 1, z + 1)}`,
    left: `${p(x, y + 1, z + 1)} ${p(x + 1, y + 1, z + 1)} ${p(x + 1, y + 1, z)} ${p(x, y + 1, z)}`,
    right: `${p(x + 1, y, z + 1)} ${p(x + 1, y + 1, z + 1)} ${p(x + 1, y + 1, z)} ${p(x + 1, y, z)}`,
  }
}

function Cube({ x, y, z, accent, minted, delay, reduce }) {
  const f = faces(x, y, z)
  return (
    <motion.g
      initial={reduce ? false : { opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <polygon
        points={f.left}
        fill={minted ? 'url(#cubeLeft)' : '#0C1322'}
        stroke={minted ? '#00E7FB' : 'rgba(36,52,73,0.7)'}
        strokeWidth={minted ? 1.2 : 0.8}
      />
      <polygon
        points={f.right}
        fill={minted ? 'url(#cubeRight)' : '#070C16'}
        stroke={minted ? '#A1F309' : 'rgba(36,52,73,0.5)'}
        strokeWidth={minted ? 1.2 : 0.8}
      />
      <polygon
        points={f.top}
        fill={minted ? 'url(#cubeTop)' : '#121C2F'}
        stroke={minted ? '#00E7FB' : accent ? '#00E7FB' : 'rgba(36,52,73,0.9)'}
        strokeWidth={minted ? 1.5 : accent ? 1.2 : 0.8}
      />
    </motion.g>
  )
}

export default function HeroVisual({ className = '' }) {
  const reduce = useReducedMotion()
  const cubes = []
  heights.forEach((row, y) =>
    row.forEach((h, x) => {
      for (let z = 0; z < h; z++) {
        cubes.push({ x, y, z, accent: z === h - 1 && accentTops.has(`${x}-${y}`) })
      }
    }),
  )
  cubes.sort((a, b) => a.x + a.y - (b.x + b.y) || a.z - b.z)

  // floating "minted" block, about to settle on top of the stack
  const fx = 0, fy = 0, fz = 6.3
  const anchor = project(fx + 0.5, fy + 0.5, heights[0][0])
  const fBottom = project(fx + 0.5, fy + 0.5, fz)

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="-200 -285 400 470"
        className="h-full w-full overflow-visible"
        role="img"
        aria-label="Abstract isometric composition of BlockMint cyber architecture"
      >
        <defs>
          <linearGradient id="cubeTop" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#00E7FB" />
            <stop offset="100%" stopColor="#A1F309" />
          </linearGradient>
          <linearGradient id="cubeLeft" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0374F8" />
            <stop offset="100%" stopColor="#0058FA" />
          </linearGradient>
          <linearGradient id="cubeRight" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#00C853" />
            <stop offset="100%" stopColor="#A1F309" />
          </linearGradient>
          <radialGradient id="floorGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#00E7FB" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#0374F8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#080D16" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="0" cy="150" rx="220" ry="75" fill="url(#floorGlow)" />

        {/* cyber floor grid */}
        <g stroke="rgba(36,52,73,0.45)" strokeWidth="0.8">
          {Array.from({ length: 8 }).map((_, i) => {
            const a = project(i - 1, -1, 0), b = project(i - 1, 6, 0)
            const c = project(-1, i - 1, 0), d = project(6, i - 1, 0)
            return (
              <g key={i}>
                <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />
                <line x1={c[0]} y1={c[1]} x2={d[0]} y2={d[1]} />
              </g>
            )
          })}
        </g>

        <g transform="translate(0 -6)">
          {cubes.map((c, i) => (
            <Cube key={`${c.x}-${c.y}-${c.z}`} {...c} delay={0.2 + i * 0.025} reduce={reduce} />
          ))}

          {/* connection line from floating block to its slot */}
          <line
            x1={anchor[0]} y1={anchor[1]} x2={fBottom[0]} y2={fBottom[1]}
            stroke="#00E7FB" strokeWidth="1.2" strokeDasharray="3 5" className="animate-dash" opacity="0.85"
          />

          <g className="animate-float">
            <Cube x={fx} y={fy} z={fz} minted delay={1.2} reduce={reduce} />
          </g>
        </g>
      </svg>
    </div>
  )
}
