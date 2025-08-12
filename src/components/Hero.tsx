export default function Hero() {
  return (
    <section className="brutalist-bg section-padding pt-28 pb-12 border-b-2 border-black min-h-[60vh]">
      <div className="container-max px-0">
        <div className="max-w-screen-md mx-auto px-4 text-center">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-black mt-8 sm:mt-16 mb-8 sm:mb-10 leading-tight uppercase tracking-tight font-mono"
          >
            Deploy Analytics in 30 Seconds
          </h1>
          <p className="text-lg sm:text-2xl text-black mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-semibold whitespace-pre-line">
            {`Zero Docker, Zero Database, Zero Headaches.\nJust copy, paste, done.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-16 w-full">
            <a
              href="#early-access"
              className="btn btn-accent btn-lg w-full sm:w-auto"
            >
              Get Early Access →
            </a>
            <a
              href="#features"
              className="btn btn-ghost btn-lg w-full sm:w-auto"
            >
              See How It Works
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-center items-center text-black text-center max-w-4xl mx-auto mt-6 sm:mt-8 w-full">
            <div className="card p-4 sm:p-6 bg-gray-100 min-w-[120px] sm:min-w-[180px] w-full md:w-auto">
              <div className="text-3xl sm:text-5xl font-extrabold text-black">
                30s
              </div>
              <div className="text-base sm:text-lg font-semibold">
                Zero config
              </div>
            </div>
            <div className="card p-4 sm:p-6 bg-gray-100 min-w-[120px] sm:min-w-[180px] w-full md:w-auto">
              <div className="text-3xl sm:text-5xl font-extrabold text-black">
                Live
              </div>
              <div className="text-base sm:text-lg font-semibold">
                Real‑time
              </div>
            </div>
            <div className="card p-4 sm:p-6 bg-gray-100 min-w-[120px] sm:min-w-[180px] w-full md:w-auto">
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
