export default function Gogogo() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&display=swap');
      `}</style>
      
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-zinc-50 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-50 rounded-full blur-3xl"></div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10 text-center">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-800 tracking-wide transition-all duration-700 hover:scale-105 hover:text-slate-600"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            role="banner"
            aria-label="인사말"
          >
            안녕
          </h1>
          
          {/* Subtle underline decoration */}
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent animate-pulse"></div>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-blue-200 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-purple-200 rounded-full animate-bounce" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-slate-200 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }}></div>
      </div>
    </>
  );
}