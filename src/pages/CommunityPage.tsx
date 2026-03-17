import { useState } from "react";
import { Link } from "react-router-dom";
import { communityPosts } from "../data/dummyData";
import "./CommunityPage.css";

const CATEGORIES = ["전체", "알바후기", "알바팁", "질문", "공지"] as const;
type Category = (typeof CATEGORIES)[number];

function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("전체");

  const filtered =
    activeCategory === "전체"
      ? communityPosts
      : communityPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="community-page">
      <div className="community-inner">
        <div className="page-header">
          <h1>커뮤니티</h1>
          <p>알바 경험을 나누고 유용한 정보를 얻어가세요</p>
        </div>

        <div className="community-layout">
          <div className="community-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`community-tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="community-write-btn-row">
            <button className="write-btn">✏️ 글쓰기</button>
          </div>

          <div className="community-posts">
            {filtered.map((post) => (
              <Link
                key={post.id}
                to={`/community/${post.id}`}
                className="post-item"
              >
                <span className={`post-category cat-${post.category}`}>
                  {post.category}
                </span>
                <div className="post-content">
                  <div className="post-title">{post.title}</div>
                  <div className="post-meta">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="post-stats">
                  <span>👁 {post.views.toLocaleString()}</span>
                  <span>💬 {post.comments}</span>
                  <span>❤️ {post.likes}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="pagination">
            <button className="page-btn">‹</button>
            {[1, 2, 3, 4, 5].map((p) => (
              <button
                key={p}
                className={`page-btn ${p === 1 ? "active" : ""}`}
              >
                {p}
              </button>
            ))}
            <button className="page-btn">›</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
