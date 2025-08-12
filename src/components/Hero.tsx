export default function Hero() {
  return (
    <section className="brutalist-bg section-padding pt-28 pb-12 border-b-4 border-black min-h-[60vh]">
      <div className="container-max px-0">
        <div className="max-w-screen-md mx-auto px-4 text-center animate-fade-in">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-black mt-8 sm:mt-16 mb-8 sm:mb-12 leading-tight uppercase tracking-widest relative"
            style={{
              textShadow: '1px 1px 0 #fff, 3px 3px 0 #d1d5db, 6px 6px 0 #111',
              letterSpacing: '0.08em',
              lineHeight: '1.1',
            }}
          >
            Deploy Analytics in 30 Seconds
          </h1>
          <p className="text-lg sm:text-2xl text-black mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-semibold whitespace-pre-line">
            {`Zero Docker, Zero Database, Zero Headaches.\nJust copy, paste, done.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-16 w-full">
            <a
              href="#early-access"
              className="btn-primary text-lg sm:text-2xl w-full sm:w-auto"
            >
              Get Early Access →
            </a>
            <a
              href="#features"
              className="btn-secondary text-lg sm:text-2xl w-full sm:w-auto"
            >
              See How It Works
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-8 justify-center items-center text-black text-center max-w-4xl mx-auto mt-6 sm:mt-8 w-full">
            <div className="brutalist-border p-4 sm:p-6 bg-gray-100 min-w-[120px] sm:min-w-[180px] w-full md:w-auto">
              <div className="text-3xl sm:text-5xl font-extrabold text-black">
                30s
              </div>
              <div className="text-base sm:text-lg font-semibold">
                Zero config
              </div>
            </div>
            <div className="brutalist-border p-4 sm:p-6 bg-gray-100 min-w-[120px] sm:min-w-[180px] w-full md:w-auto">
              <div className="text-3xl sm:text-5xl font-extrabold text-black">
                Live
              </div>
              <div className="text-base sm:text-lg font-semibold">
                Real‑time
              </div>
            </div>
            <div className="brutalist-border p-4 sm:p-6 bg-gray-100 min-w-[120px] sm:min-w-[180px] w-full md:w-auto">
              <div className="text-3xl sm:text-5xl font-extrabold text-black">
                ∞
              </div>
              <div className="text-base sm:text-lg font-semibold">
                Grows with you
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
