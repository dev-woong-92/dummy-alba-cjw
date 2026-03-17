function TestCanvas() {
  // 컴포넌트 내부에 더미 데이터 정의
  const displayText = "테스트";

  return (
    <div 
      className="w-screen h-screen bg-white flex items-center justify-center"
      role="main"
      aria-label="테스트 캔버스"
    >
      <h1 
        className="text-3xl text-black font-normal select-none"
        aria-label={`화면 중앙 텍스트: ${displayText}`}
      >
        {displayText}
      </h1>
    </div>
  );
}

export default TestCanvas;