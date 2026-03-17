import { useParams, Link } from "react-router-dom";
import { communityPosts } from "../data/dummyData";
import type { Comment } from "../types";
import "./CommunityDetailPage.css";

const dummyComments: Comment[] = [
  { id: 1, author: "알바경험자", date: "2026-03-16", content: "정말 도움이 됐어요! 감사합니다." },
  { id: 2, author: "궁금이", date: "2026-03-16", content: "저도 비슷한 경험이 있어요. 공감해요." },
  { id: 3, author: "알바초보", date: "2026-03-17", content: "이런 정보 너무 필요했어요 😊" },
];

function CommunityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const post = communityPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="not-found">
        <h2>게시글을 찾을 수 없습니다.</h2>
        <Link to="/community">목록으로</Link>
      </div>
    );
  }

  return (
    <div className="community-detail-page">
      <div className="community-detail-inner">
        <Link to="/community" className="back-link">
          ← 목록으로 돌아가기
        </Link>

        <article className="post-article">
          <div className="post-header">
            <span className={`post-category cat-${post.category}`}>
              {post.category}
            </span>
            <h1>{post.title}</h1>
            <div className="post-header-meta">
              <span>✍️ {post.author}</span>
              <span>📅 {post.date}</span>
              <span>👁 {post.views.toLocaleString()}</span>
            </div>
          </div>

          <div className="post-body">
            <p>{post.content}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 알바를
              시작하기 전에 꼭 알아야 할 사항들이 있습니다. 특히 근로계약서는
              반드시 작성해야 하며, 최저임금 이상을 받아야 합니다.
            </p>
            <p>
              경험을 토대로 말씀드리자면, 면접 시에는 근무 시간, 급여,
              복리후생 등을 꼼꼼히 확인하시는 것이 중요합니다. 특히 4대보험
              가입 여부도 꼭 확인해보세요.
            </p>
          </div>

          <div className="post-tags">
            {post.tags.map((tag, i) => (
              <span key={i} className="post-tag">#{tag}</span>
            ))}
          </div>

          <div className="post-actions">
            <button className="like-btn">❤️ 좋아요 {post.likes}</button>
            <button className="share-btn">📤 공유</button>
          </div>
        </article>

        <div className="comments-section">
          <h3>댓글 {dummyComments.length}개</h3>

          <div className="comment-write">
            <textarea placeholder="댓글을 입력해주세요" rows={3} />
            <button>등록</button>
          </div>

          <div className="comments-list">
            {dummyComments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <div className="comment-author">
                  <div className="comment-avatar">
                    {comment.author.charAt(0)}
                  </div>
                  <div>
                    <span className="comment-author-name">{comment.author}</span>
                    <span className="comment-date">{comment.date}</span>
                  </div>
                </div>
                <p className="comment-content">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityDetailPage;
