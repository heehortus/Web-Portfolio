import stoov from '../assets/stoov.png'
import clack from '../assets/clack.png'
import wecare from '../assets/wecare.png'

export const siteData = {
  name: "Jeong Hee Won",
  role: "UIUX Designer",
  location: "Seoul",
  email: "hee.hortus@gmail.com",
  projects: [
    {
      slug: 'stoov',
      name: "STOOV — Busking Map Service",
      desc: "버스킹 공연 장소와 후기를 한눈에 볼 수 있도록 제공하여 공연 사전 단계를 단축하는 서비스 구축 프로젝트",
      image: stoov,
      tags: ["UX Design", "Mobile", "Research", "Design System","Branding"],
      bg: "#f2f2f2",
      url: "#",
    },
    {
      slug: 'clack',
      name: "CLACK — GOODS Resell Service Redesign",
      desc: "굿즈 중고 거래 서비스 CLACK 거래 경험 재설계 및 디자인 리뉴얼 프로젝트",
      tags: ["Branding", "UX Improvement", "UI Design", "E-commerce", "Prototyping"],
      image: clack,
      bg: "#005EC6",
      url: "#",
    },
    {
      slug: 'wecare',
      name: "Wecare — Senior Daily Management Service",
      desc: "시니어의 앱 접근성을 고려하여 간단한 조작을 통해 생활 습관을 관리하는 서비스 디자인 프로젝트",
      tags: ["UX Design", "Research", "Care Service", "Design System", "Prototyping"],
      image: wecare,
      bg: "#222222",
      url: "#",
    },
  ],
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/hee-won-jeong-a4703b3b9" },
    { label: "Github", url: "https://github.com/heehortus" },
    { label: "Blog", url: "https://hortus-log.vercel.app/" },
    { label: "Instagram", url: "https://www.instagram.com/xeehortus" },
    { label: "Resume ↓", url: "#" },
  ],
};
