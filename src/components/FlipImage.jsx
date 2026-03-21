import { useState } from 'react'

export default function FlipImage() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="w-full h-full"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* 앞면 — 프로필 사진 */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[16px 0px]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src="/graphic.jpg"
            alt="graphic"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 뒷면 — 그래픽 이미지 (나중에 교체) */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[16px 0px] bg-[#f0ede8]"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <img
            src="/profile.jpg"
            alt="Graphic"
            className="w-full h-full object-cover object-top filter grayscale"
          />
        </div>
      </div>
    </div>
  )
}