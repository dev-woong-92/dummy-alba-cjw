export default function Jk() {
  const content = {
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250',
    title: '리액트 개발 완전정복',
    description: '모던 웹 개발의 핵심 기술인 리액트를 기초부터 고급 패턴까지 체계적으로 학습할 수 있는 완벽한 가이드입니다. 실무에서 바로 활용할 수 있는 노하우와 베스트 프랙티스를 포함합니다.'
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <article
        className="bg-card w-full max-w-sm h-96 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 border border-border"
        style={{
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }}
        onClick={() => console.log(`Navigate to: ${content?.title || '콘텐츠'}`)}
      >
        {/* 썸네일 이미지 - 50% */}
        <div className="h-48 bg-muted overflow-hidden">
          <img
            src={content?.thumbnail || ''}
            alt={content?.title ? `${content.title} 썸네일` : '콘텐츠 썸네일'}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* 텍스트 영역 - 50% */}
        <div className="h-48 p-6 flex flex-col">
          {/* 제목 - 20% */}
          <div className="h-1/5 flex items-center mb-2">
            <h2 className="text-lg font-bold text-foreground line-clamp-2">
              {content?.title ?? '제목 없음'}
            </h2>
          </div>
          
          {/* 설명 텍스트 - 30% */}
          <div className="flex-1">
            <p className="text-muted-foreground text-sm line-clamp-4 leading-relaxed">
              {content?.description ?? '설명 없음'}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}