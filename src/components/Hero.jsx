import { useRef } from "react";
import CardStack from "./CardStack";

export default function Hero({ data }) {
  const cardRef = useRef(null);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center max-w-[1900px] mx-auto px-16 pt-32 pb-32"
    >
      <h1 className="font-sans text-[clamp(2rem,7vw,6.5rem)] leading-[1.1] tracking-tight">
        <span className="block opacity-0 animate-fade-up [animation-delay:200ms]">
          디자인과
        </span>
        <span className="block opacity-0 animate-fade-up [animation-delay:600ms]">
          목적이 만나는
        </span>
        <span className="block opacity-0 animate-fade-up [animation-delay:1000ms]">
          <em className="text-accent not-italic">공간</em>을 만듭니다.
        </span>
      </h1>

      <p className="mt-8 max-w-[480px] text-muted text-[16px] leading-[1.7] opacity-0 animate-fade-up [animation-delay:1000ms]">
        사용자의 경험을 바탕으로 목적을 세우고, 디자인과 결합합니다.<br/>언제나 새로운 도전을 즐기며 끝없는 고민 끝에 결과를 만들어냅니다.
      </p>

      {/* 카드 스택 */}
      <div className="hidden xl2:block absolute right-48 top-[50%] -translate-y-1/2">
        <CardStack ref={cardRef} />
        <div
          className="w-24 cursor-pointer"
          onClick={() => cardRef.current?.paginate(1)}
        />
      </div>
    </section>
  );
}
