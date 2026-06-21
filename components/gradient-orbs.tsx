"use client"

export function GradientOrbs() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Orb 1 — top-left teal */}
      <div
        className="gradient-orb"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(45,212,191,0.35) 0%, transparent 70%)",
          top: "-10%",
          left: "-10%",
          animation: "float-orb 20s ease-in-out infinite alternate",
        }}
      />
      {/* Orb 2 — bottom-right green */}
      <div
        className="gradient-orb"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(74,222,128,0.2) 0%, transparent 70%)",
          bottom: "-15%",
          right: "-15%",
          animation: "float-orb 25s ease-in-out infinite alternate-reverse",
        }}
      />
      {/* Orb 3 — center muted */}
      <div
        className="gradient-orb"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(45,212,191,0.12) 0%, transparent 70%)",
          top: "40%",
          left: "60%",
          animation: "float-orb 18s ease-in-out infinite alternate",
        }}
      />
      <style jsx>{`
        @keyframes float-orb {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
          100% { transform: translate(-20px, 20px) scale(0.95); }
        }
      `}</style>
    </div>
  )
}
