import SectionLabel from "./SectionLabel";

export default function Contact({ data }) {
  const year = new Date().getFullYear();
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 text-center"
    >
      <div className="flex justify-center">
        <SectionLabel>Contact</SectionLabel>
      </div>

      <h2 className="font-sans text-[clamp(1.5rem,5vw,4.5rem)] leading-[1.4] tracking-tight mt-0 mb-6">
        함께 일할 동료를 찾고 계신가요?
        <br />
        <em className="text-muted not-italic">제게 연락주세요!</em>
      </h2>

      <p className="text-muted text-[12px] sm:text-[16px] mb-10 max-w-[600px] mx-auto">
        또는 편하게 이야기 나누고 싶으신가요? <br/>포트폴리오, 개발, 디자인 뭐든지 좋아요. 언제든지 연락주세요.
      </p>

      <div className="flex justify-center gap-4 mb-10">
        <a
          href={`mailto:${data.email}`}
          className="inline-block px-7 py-3 bg-fg text-bg text-[11px] sm:text-[13px] font-medium tracking-[0.05em] hover:bg-accent transition-opacity"
        >
          {data.email}
        </a>
        <a
          href="src/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-7 py-3 border border-fg text-fg text-[11px] sm:text-[13px] font-medium tracking-[0.05em] hover:bg-fg hover:text-bg transition-colors duration-200"
        >
          Resume ↗
        </a>
      </div>

      <div className="flex justify-center gap-8 flex-wrap">
        {data.social
          .filter((l) => l.label !== "Resume ↓")
          .map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="text-[13px] text-muted tracking-[0.05em] border-b border-border pb-px hover:text-fg hover:border-fg transition-colors"
            >
              {link.label}
            </a>
          ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 py-4 border-t border-border flex flex-col sm:flex-row justify-between px-6 md:px-16 text-[12px] text-muted tracking-[0.04em] backdrop-blur-md">
        <span>
          © {year} {data.name}
        </span>
        <span>Jeong Hee Won UXUI &amp; Product Portfolio — 2026</span>
      </div>
    </section>
  );
}
