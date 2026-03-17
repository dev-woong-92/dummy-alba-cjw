export default function TestPage() {
  const title = "테스트";

  return (
    <main
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white"
      aria-label="히어로 섹션"
    >
      {/* 배경 장식 요소 */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-gray-50 opacity-60 blur-3xl" />
      </div>

      {/* 세로 구분선 장식 */}
      <div
        className="pointer-events-none absolute left-12 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent md:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-12 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent md:block"
        aria-hidden="true"
      />

      {/* 메인 콘텐츠 */}
      <section className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {/* 상단 레이블 */}
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-400">
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" aria-hidden="true" />
          랜딩 페이지
        </span>

        {/* 메인 타이틀 */}
        <h1
          className="font-black text-gray-900"
          style={{
            fontSize: "clamp(5rem, 20vw, 14rem)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            wordBreak: "keep-all",
          }}
        >
          {title ?? "테스트"}
        </h1>

        {/* 하단 강조선 */}
        <div
          className="mt-2 flex items-center gap-3"
          aria-hidden="true"
        >
          <div className="h-px w-16 bg-gray-300" />
          <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
          <div className="h-px w-16 bg-gray-300" />
        </div>

        {/* 서브 텍스트 */}
        <p className="max-w-sm text-sm font-medium leading-relaxed tracking-wide text-gray-400">
          간결하고 임팩트 있는 메시지로
          <br />
          첫인상을 완성하세요
        </p>
      </section>

      {/* 하단 스크롤 힌트 */}
      <div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        aria-label="아래로 스크롤"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-gray-300">
          scroll
        </span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-gray-200 p-1">
          <div
            className="h-1.5 w-0.5 animate-bounce rounded-full bg-gray-300"
            aria-hidden="true"
          />
        </div>
      </div>
    </main>
  );
}