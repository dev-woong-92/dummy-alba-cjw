import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <div className="footer-link-group">
            <h4>알바찾기</h4>
            <Link to="/jobs">알바공고</Link>
            <Link to="/jobs?type=urgent">급구 알바</Link>
            <Link to="/jobs?type=weekly">주휴수당 알바</Link>
            <Link to="/jobs?type=parttime">단기 알바</Link>
          </div>
          <div className="footer-link-group">
            <h4>인재찾기</h4>
            <Link to="/resume">이력서 등록</Link>
            <Link to="/companies">기업 정보</Link>
          </div>
          <div className="footer-link-group">
            <h4>커뮤니티</h4>
            <Link to="/community?category=review">알바후기</Link>
            <Link to="/community?category=tip">알바팁</Link>
            <Link to="/community?category=notice">공지사항</Link>
          </div>
          <div className="footer-link-group">
            <h4>고객센터</h4>
            <a href="#">공지사항</a>
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">고객지원</a>
          </div>
        </div>

        <div className="footer-company">
          <div className="footer-logo">
            <span style={{ color: "#f97316" }}>알</span>
            <span style={{ color: "#fb923c" }}>바</span>
            <span style={{ color: "#fdba74" }}>몬</span>
          </div>
          <p className="footer-desc">
            알바몬은 대한민국 대표 아르바이트 구인구직 플랫폼입니다.
          </p>
          <div className="footer-info">
            <span>대표이사: 홍길동</span>
            <span>사업자등록번호: 123-45-67890</span>
            <span>서울특별시 강남구 테헤란로 123</span>
          </div>
          <p className="footer-copyright">
            © 2026 알바몬 Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
