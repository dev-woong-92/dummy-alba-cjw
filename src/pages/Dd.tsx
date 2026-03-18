export default function Dd() {
  const articles = [
    {
      id: 1,
      title: "AI가 바꾸는 미래의 직업 환경",
      summary: "인공지능 기술의 발전으로 많은 직업이 변화하고 있습니다. 새로운 기회와 도전에 대해 알아보고, 미래 직업 시장에서 살아남는 방법을 탐구해보세요.",
      thumbnailUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop&crop=center",
      category: "기술",
      author: "김민수",
      createdAt: "2024.03.15",
      link: "/articles/ai-future-jobs"
    },
    {
      id: 2,
      title: "지속가능한 라이프스타일을 위한 10가지 습관",
      summary: "환경을 생각하는 작은 실천들이 모여 큰 변화를 만듭니다. 일상 속에서 쉽게 시작할 수 있는 친환경 습관들을 소개합니다.",
      thumbnailUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=240&fit=crop&crop=center",
      category: "라이프스타일",
      author: "이은정",
      createdAt: "2024.03.14",
      link: "/articles/sustainable-lifestyle"
    },
    {
      id: 3,
      title: "코딩 초보자를 위한 프로그래밍 학습법",
      summary: "프로그래밍을 처음 시작하는 사람들을 위한 효과적인 학습 방법과 유용한 리소스들을 정리했습니다. 체계적인 학습으로 개발자의 첫걸음을 내딛어보세요.",
      thumbnailUrl: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=240&fit=crop&crop=center",
      category: "개발",
      author: "박준혁",
      createdAt: "2024.03.13",
      link: "/articles/programming-for-beginners"
    },
    {
      id: 4,
      title: "맛있는 홈카페 레시피 모음집",
      summary: "집에서도 카페 못지않은 맛있는 커피와 디저트를 만들어보세요. 간단하면서도 특별한 레시피들을 단계별로 소개합니다.",
      thumbnailUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=240&fit=crop&crop=center",
      category: "요리",
      author: "최수영",
      createdAt: "2024.03.12",
      link: "/articles/home-cafe-recipes"
    },
    {
      id: 5,
      title: "건강한 수면을 위한 침실 환경 조성법",
      summary: "질 좋은 수면은 건강의 기본입니다. 편안하고 숙면을 도와주는 침실 환경을 만드는 방법과 수면 습관 개선 팁을 알아보세요.",
      thumbnailUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=240&fit=crop&crop=center",
      category: "건강",
      author: "정현우",
      createdAt: "2024.03.11",
      link: "/articles/healthy-sleep-environment"
    },
    {
      id: 6,
      title: "여행 사진 촬영 완벽 가이드",
      summary: "여행의 아름다운 순간들을 더욱 멋지게 담아보세요. 구도, 조명, 편집까지 여행 사진의 모든 것을 담은 실용적인 가이드입니다.",
      thumbnailUrl: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&h=240&fit=crop&crop=center",
      category: "여행",
      author: "윤서영",
      createdAt: "2024.03.10",
      link: "/articles/travel-photography-guide"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "기술": "bg-primary-100 text-primary-800",
      "라이프스타일": "bg-green-100 text-green-800",
      "개발": "bg-purple-100 text-purple-800",
      "요리": "bg-orange-100 text-orange-800",
      "건강": "bg-pink-100 text-pink-800",
      "여행": "bg-cyan-100 text-cyan-800"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">최신 아티클</h1>
          <p className="text-muted-foreground">다양한 주제의 흥미로운 콘텐츠를 만나보세요</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(articles || []).map((article) => (
            <article 
              key={article?.id || Math.random()}
              className="bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden border border-border"
              onClick={() => {
                console.log(`Navigate to ${article?.link || '#'}`);
              }}
            >
              {/* 썸네일 */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article?.thumbnailUrl || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=240&fit=crop'}
                  alt={article?.title || '콘텐츠 이미지'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article?.category || '')}`}>
                    {article?.category || '일반'}
                  </span>
                </div>
              </div>

              {/* 콘텐츠 영역 */}
              <div className="p-5 flex flex-col h-40">
                {/* 제목 + 요약 */}
                <div className="flex-1 mb-4">
                  <h2 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-muted-foreground transition-colors">
                    {article?.title || '제목 없음'}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {article?.summary || '요약 정보가 없습니다.'}
                  </p>
                </div>

                {/* 메타 정보 */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{article?.author || '익명'}</span>
                  <span>{article?.createdAt || '날짜 없음'}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}