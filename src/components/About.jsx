import SectionLabel from "./SectionLabel";

export default function About({ data }) {
  return (
    <section id="about" className="max-w-[1100px] mx-auto px-16 py-24">
      <SectionLabel>About me</SectionLabel>

      <div className="grid grid-cols-2 gap-20 items-start">
        {/* Left — Profile */}
        <img
          src="public\profile.jpg"
          alt="Profile"
          className="w-full aspect-[3/4] object-cover rounded-full grayscale"
        />

        {/* Right — headline + bio */}
        <div>
          <h2 className="font-sans text-[clamp(2rem,3.5vw,3rem)] leading-[1.2] tracking-tight">
            Designing with <em className="text-muted not-italic">intention</em>,
            <br />
            building with care.
          </h2>

          <div className="mt-10 space-y-4 text-muted text-[15px] leading-[1.8]">
            {data.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
