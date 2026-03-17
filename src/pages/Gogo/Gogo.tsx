export default function ListItemCard() {
  // 더미 데이터
  const listItems = [
    {
      id: "1",
      title: "React 18의 새로운 기능과 성능 개선사항",
      meta: {
        date: "2024.03.15",
        category: "개발",
        author: "김개발"
      },
      actionLabel: "자세히 보기"
    },
    {
      id: "2", 
      title: "TypeScript 5.0 마이그레이션 가이드",
      meta: {
        date: "2024.03.12",
        category: "기술",
        author: "이타입"
      },
      actionLabel: "편집"
    },
    {
      id: "3",
      title: "Next.js App Router와 서버 컴포넌트 완벽 정리",
      meta: {
        date: "2024.03.10", 
        category: "튜토리얼",
        author: "박넥스트"
      },
      actionLabel: "공유"
    },
    {
      id: "4",
      title: "모던 CSS Grid와 Flexbox 레이아웃 패턴",
      meta: {
        date: "2024.03.08",
        category: "디자인"
      },
      actionLabel: "삭제"
    },
    {
      id: "5",
      title: "웹 접근성 가이드라인 WCAG 2.1 준수 방법",
      meta: {
        date: "2024.03.05"
      },
      actionLabel: "보기"
    }
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Pretendard:wght@400;500;600;700&display=swap');
          
          .font-pretendard {
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          }
          
          .animate-card-hover {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .animate-card-hover:hover {
            transform: translateY(-1px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          }
          
          .animate-button {
            transition: all 0.15s ease-in-out;
          }
          
          .animate-button:hover {
            transform: translateY(-1px);
          }
          
          .animate-button:active {
            transform: translateY(0);
          }
        `}
      </style>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 p-6 font-pretendard">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              아티클 목록
            </h1>
            <p className="text-slate-600 text-lg">
              최신 개발 관련 글들을 확인해보세요
            </p>
          </header>
          
          <div className="space-y-4">
            {(listItems || []).map((item, index) => (
              <article
                key={item?.id || index}
                className="animate-card-hover bg-white border border-gray-200 rounded-2xl p-6 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeIn 0.6s ease-out forwards',
                  opacity: 0
                }}
                role="article"
                aria-labelledby={`title-${item?.id}`}
              >
                <div className="flex items-start justify-between gap-6">
                  {/* 텍스트 영역 - 75% */}
                  <div className="flex-1 min-w-0">
                    <h2 
                      id={`title-${item?.id}`}
                      className="text-lg font-semibold text-slate-900 mb-3 leading-relaxed group-hover:text-blue-700 transition-colors"
                    >
                      {item?.title ?? '제목 없음'}
                    </h2>
                    
                    {item?.meta && (
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        {item.meta.date && (
                          <time 
                            dateTime={item.meta.date}
                            className="flex items-center gap-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {item.meta.date}
                          </time>
                        )}
                        
                        {item.meta.category && (
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                            {item.meta.category}
                          </span>
                        )}
                        
                        {item.meta.author && (
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {item.meta.author}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* 액션 버튼 영역 - 25% */}
                  <div className="flex-shrink-0">
                    <button
                      className="animate-button px-6 py-2.5 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label={`${item?.title ?? '항목'}에 대해 ${item?.actionLabel ?? '동작 수행'}`}
                      onClick={() => console.log(`${item?.actionLabel} 클릭:`, item?.title)}
                    >
                      {item?.actionLabel ?? '동작'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* 추가 컨텐츠 영역 */}
          <div className="mt-12 text-center">
            <button className="animate-button px-8 py-3 text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
              더 많은 글 보기
            </button>
          </div>
        </div>
        
        <style>
          {`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </div>
    </>
  );
}