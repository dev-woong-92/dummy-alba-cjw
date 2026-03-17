import { Calendar, User, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GoPage() {
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
    <div className="min-h-screen bg-background p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            아티클 목록
          </h1>
          <p className="text-muted-foreground text-lg">
            최신 개발 관련 글들을 확인해보세요
          </p>
        </header>
        
        <div className="space-y-4">
          {(listItems || []).map((item, index) => (
            <article
              key={item?.id || index}
              className={cn(
                "bg-card border border-border rounded-lg p-6 group transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5",
                "animate-in fade-in slide-in-from-bottom-4"
              )}
              style={{
                animationDelay: `${index * 100}ms`
              }}
              role="article"
              aria-labelledby={`title-${item?.id}`}
            >
              <div className="flex items-start justify-between gap-6">
                {/* 텍스트 영역 */}
                <div className="flex-1 min-w-0">
                  <h2 
                    id={`title-${item?.id}`}
                    className="text-lg font-semibold text-foreground mb-3 leading-relaxed group-hover:text-primary transition-colors"
                  >
                    {item?.title ?? '제목 없음'}
                  </h2>
                  
                  {item?.meta && (
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      {item.meta.date && (
                        <time 
                          dateTime={item.meta.date}
                          className="flex items-center gap-1"
                        >
                          <Calendar className="w-4 h-4" />
                          {item.meta.date}
                        </time>
                      )}
                      
                      {item.meta.category && (
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {item.meta.category}
                        </span>
                      )}
                      
                      {item.meta.author && (
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {item.meta.author}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                {/* 액션 버튼 */}
                <div className="flex-shrink-0">
                  <button
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium",
                      "transition-all duration-150 hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    )}
                    aria-label={`${item?.actionLabel ?? '액션'} - ${item?.title ?? '제목 없음'}`}
                  >
                    {item?.actionLabel ?? '보기'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}