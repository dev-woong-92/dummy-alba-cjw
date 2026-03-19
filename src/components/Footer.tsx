import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 pt-12 pb-6 mt-auto">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 pb-10 border-b border-gray-700">
          <div>
            <h4 className="text-gray-100 text-sm font-bold mb-4">알바찾기</h4>
            <Link to="/jobs" className="block text-gray-400 no-underline text-[13px] mb-2 transition-colors hover:text-orange-500">알바공고</Link>
            <Link to="/jobs?type=urgent" className="block text-gray-400 no-underline text-[13px] mb-2 transition-colors hover:text-orange-500">급구 알바</Link>
            <Link to="/jobs?type=weekly" className="block text-gray-400 no-underline text-[13px] mb-2 transition-colors hover:text-orange-500">주휴수당 알바</Link>
            <Link to="/jobs?type=parttime" className="block text-gray-400 no-underline text-[13px] mb-2 transition-colors hover:text-orange-500">단기 알바</Link>
          </div>
          <div>
            <h4 className="text-gray-100 text-sm font-bold mb-4">인재찾기</h4>
            <Link to="/resume" className="block text-gray-400 no-underline text-[13px] mb-2 transition-colors hover:text-orange-500">이력서 등록</Link>
            <Link to="/companies" className="block text-gray-400 no-underline text-[13px] mb-2 transition-colors hover:text-orange-500">기업 정보</Link>
          </div>
          <div>
            <h4 className="text-gray-100 text-sm font-bold mb-4">커뮤니티</h4>
            <Link to="/community?category=review" className="block text-gray-400 no-underline text-[13px] mb-2 transition-colors hover:text-orange-500">알바후기</Link>
            <Link to="/community?category=tip" className="block text-gray-400 no-underline text-[13px] mb-2 transition-colors hover:text-orange-500">알바팁</Link>
            <Link to="/community?category=notice" className="block text-gray-400 no-underline text-[13px] mb-2 transition-colors hover:text-orange-500">공지사항</Link>
          </div>
          <div>
            <h4 className="text-gray-100 text-sm font-bold mb-4">고객센터</h4>
            <a href="#" className="block text-gray-400 no-underline text-[13px] mb-2 transition-colors hover:text-orange-500">공지사항</a>
            <a href="#" className="block text-gray-400 no-underline text-[13px] mb-2 transition-colors hover:text-orange-500">이용약관</a>
            <a href="#" className="block text-gray-400 no-underline text-[13px] mb-2 transition-colors hover:text-orange-500">개인정보처리방침</a>
            <a href="#" className="block text-gray-400 no-underline text-[13px] mb-2 transition-colors hover:text-orange-500">고객지원</a>
          </div>
        </div>

        <div className="pt-8">
          <div className="text-2xl font-black tracking-tight mb-2">
            <span className="text-orange-500">알</span>
            <span className="text-orange-400">바</span>
            <span className="text-orange-300">몬</span>
          </div>
          <p className="text-[13px] mb-3 text-gray-500">
            알바몬은 대한민국 대표 아르바이트 구인구직 플랫폼입니다.
          </p>
          <div className="flex gap-5 flex-wrap text-xs mb-4 text-gray-500 md:flex-col md:gap-1">
            <span>대표이사: 홍길동</span>
            <span>사업자등록번호: 123-45-67890</span>
            <span>서울특별시 강남구 테헤란로 123</span>
          </div>
          <p className="text-xs text-gray-600">
            © 2026 알바몬 Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
