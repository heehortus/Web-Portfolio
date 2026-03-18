export default function Footer({ name }) {
  const year = new Date().getFullYear()
  return (
    <footer className="max-w-[1100px] mx-auto px-16 py-8 flex justify-between items-center border-t border-border text-[12px] text-muted tracking-[0.04em]">
      <span>© {year} {name}</span>
      <span>Designed &amp; built with care — Seoul, KR</span>
    </footer>
  )
}
