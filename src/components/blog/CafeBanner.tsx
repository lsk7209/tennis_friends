import Image from "next/image";

const CAFE_BANNER = {
  href: "https://cafe.naver.com/homecookie",
  image: "/images/naver-cafe-tennisfriends-banner.png",
  alt: "테니스 친구찾기 네이버 카페 바로가기",
};

export default function CafeBanner() {
  return (
    <div className="not-prose mt-12">
      <a
        href={CAFE_BANNER.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="테니스 친구찾기 네이버 카페로 이동"
        className="group block overflow-hidden rounded-lg bg-black shadow-lg ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 dark:ring-gray-800"
      >
        <Image
          src={CAFE_BANNER.image}
          alt={CAFE_BANNER.alt}
          width={2000}
          height={360}
          sizes="(max-width: 768px) 100vw, 1380px"
          className="h-auto w-full transition duration-300 group-hover:brightness-110"
        />
      </a>
    </div>
  );
}
