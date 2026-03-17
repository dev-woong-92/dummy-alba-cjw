export default function Gogo() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@400;700&display=swap');
          
          :root {
            --bg-primary: #fafafa;
            --bg-secondary: #f1f5f9;
            --text-primary: #1e293b;
            --accent: #6366f1;
            --accent-light: #a5b4fc;
          }
        `}
      </style>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
        {/* 배경 장식 요소들 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-blue-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* 메인 컨테이너 */}
        <div className="relative z-10 text-center">
          {/* 메인 텍스트 */}
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-800 mb-8 leading-none tracking-tight transform hover:scale-105 transition-all duration-500 ease-out cursor-default select-none"
            style={{fontFamily: 'Black Han Sans, sans-serif'}}
            role="heading"
            aria-level={1}
            tabIndex={0}
          >
            바보
          </h1>
          
          {/* 서브 텍스트 */}
          <p 
            className="text-lg md:text-xl text-slate-600 opacity-60 font-medium"
            style={{fontFamily: 'Noto Sans KR, sans-serif'}}
            role="text"
          >
            간단명료한 메시지
          </p>
          
          {/* 하단 장식 */}
          <div className="mt-12 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
        
        {/* 그리드 패턴 오버레이 */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>
    </>
  );
}