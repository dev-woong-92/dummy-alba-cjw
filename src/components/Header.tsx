import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/jobs?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="header">
      {/* 상단 바 */}
      <div className="header-top">
        <div className="header-top-inner">
          <span className="header-top-text">2026 최저임금 10,030원 적용 중</span>
          <div className="header-top-links">
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
            <Link to="/mypage">마이페이지</Link>
          </div>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className="header-main">
        <div className="header-main-inner">
          <Link to="/" className="header-logo">
            <span className="logo-al">알</span>
            <span className="logo-ba">바</span>
            <span className="logo-mon">몬</span>
          </Link>

          <form className="header-search" onSubmit={handleSearch}>
            <select className="search-region">
              <option>지역 선택</option>
              <option>서울</option>
              <option>경기</option>
              <option>인천</option>
              <option>부산</option>
              <option>대구</option>
            </select>
            <input
              type="text"
              placeholder="직종, 지역, 업체명 검색"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              className="search-input"
            />
            <button type="submit" className="search-btn">
              🔍
            </button>
          </form>

          <div className="header-quick">
            <Link to="/resume/create" className="quick-resume-btn">
              이력서 등록
            </Link>
          </div>
        </div>
      </div>

      {/* 네비게이션 */}
      <nav className="header-nav">
        <div className="header-nav-inner">
          <Link to="/jobs" className="nav-link">알바공고</Link>
          <Link to="/companies" className="nav-link">기업정보</Link>
          <Link to="/resume" className="nav-link">이력서</Link>
          <Link to="/community" className="nav-link">커뮤니티</Link>
          <Link to="/mypage" className="nav-link">마이페이지</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
