import CardStack from './CardStack'

export default function Hero({ data }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center max-w-[1900px] mx-auto px-16 pt-32 pb-32"
    >
      <h1 className="font-sans text-[clamp(3rem,7vw,6.5rem)] leading-[1.1] tracking-tight">
        <span className='block opacity-0 animate-fade-up [animation-delay:200ms]'>디자인과</span>
        <span className="block opacity-0 animate-fade-up [animation-delay:600ms]">
          목적이 만나는
        </span>
        <span className="block opacity-0 animate-fade-up [animation-delay:1000ms]"><em className='text-accent not-italic'>공간</em>을 만듭니다.</span>
      </h1>

      <p className="mt-8 max-w-[480px] text-muted text-[16px] leading-[1.7] opacity-0 animate-fade-up [animation-delay:1000ms]">
        I craft thoughtful, human-centered digital experiences — from brand systems to interactive interfaces.
      </p>

      <div className="mt-10 flex gap-4 items-center opacity-0 animate-fade-up [animation-delay:1000ms]">
        <a
          href="#projects"
          className="px-7 py-3 bg-fg text-bg rounded-[8px] text-[13px] font-medium tracking-[0.05em] hover:bg-bg hover:text-fg transition-opacity"
        >
          View Projects
        </a>
      </div>

      {/* 카드 스택 */}
      <div className="hidden lg:block absolute right-48 top-[45%] -translate-y-1/2">
        <CardStack />
      </div>

      <span className="absolute right-16 bottom-4 font-serif text-[12rem] leading-none text-fg/[0.04] select-none pointer-events-none">
        Hee Won
      </span>
    </section>
  )
}