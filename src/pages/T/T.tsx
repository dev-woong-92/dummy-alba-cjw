export default function CenterTextContainer() {
  const text = '테스트';

  return (
    <div 
      className="min-h-screen w-full bg-white flex items-center justify-center"
      role="main"
      aria-label="중앙 텍스트 표시 영역"
    >
      <div className="text-center">
        <h1 
          className="text-3xl font-normal text-black"
          tabIndex={0}
          aria-live="polite"
        >
          {text}
        </h1>
      </div>
    </div>
  );
}