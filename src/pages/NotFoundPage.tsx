import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="notfound-page">
      <div className="notfound-inner">
        <div className="notfound-emoji">😵</div>
        <h1>404</h1>
        <h2>페이지를 찾을 수 없어요</h2>
        <p>요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
        <div className="notfound-actions">
          <Link to="/" className="btn-home">홈으로 이동</Link>
          <Link to="/jobs" className="btn-jobs">알바 찾기</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
