export default function Hero() {
  return (
    <section
      className="section-padding pt-28 pb-12 border-b-2 border-black min-h-[60vh]"
      style={{ backgroundColor: 'var(--color-yellow)' }}
    >
      <div className="container-max px-0">
        <div className="max-w-screen-md mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-black mt-8 sm:mt-16 mb-8 sm:mb-10 leading-tight uppercase tracking-tight font-sans">
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
              className="btn btn-lg w-full sm:w-auto text-black border-black"
              style={{ backgroundColor: 'var(--color-button)' }}
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
