import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <header className="w-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] sticky top-0 z-[1000]">
      {/* 상단 바 */}
      <div className="bg-orange-500 text-white text-xs py-1.5 hidden md:block">
        <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">
          <span>2026 최저임금 10,030원 적용 중</span>
          <div className="flex gap-4">
            <Link to="/login" className="text-white no-underline text-xs hover:underline">로그인</Link>
            <Link to="/signup" className="text-white no-underline text-xs hover:underline">회원가입</Link>
            <Link to="/mypage" className="text-white no-underline text-xs hover:underline">마이페이지</Link>
          </div>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className="py-3 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-5 flex items-center gap-5 flex-wrap md:flex-nowrap">
          <Link to="/" className="no-underline text-[28px] font-black tracking-tight">
            <span className="text-orange-500">알</span>
            <span className="text-orange-400">바</span>
            <span className="text-orange-300">몬</span>
          </Link>

          <form className="flex-1 flex border-2 border-orange-500 rounded-lg overflow-hidden max-w-[600px]" onSubmit={handleSearch}>
            <select className="px-3 border-none border-r border-gray-200 bg-gray-50 text-sm text-gray-700 cursor-pointer outline-none min-w-[100px] hidden md:block">
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
              className="flex-1 px-4 py-2.5 border-none text-sm outline-none text-gray-900 placeholder:text-gray-400"
            />
            <button type="submit" className="px-[18px] py-2.5 bg-orange-500 border-none cursor-pointer text-base transition-colors hover:bg-orange-600">
              🔍
            </button>
          </form>

          <div className="shrink-0 hidden md:block">
            <Link to="/resume/create" className="inline-block px-5 py-2.5 bg-orange-500 text-white no-underline rounded-lg text-sm font-semibold transition-colors whitespace-nowrap hover:bg-orange-600">
              이력서 등록
            </Link>
          </div>
        </div>
      </div>

      {/* 네비게이션 */}
      <nav className="bg-white border-b-2 border-gray-100">
        <div className="max-w-[1200px] mx-auto px-5 flex">
          <Link to="/jobs" className="px-5 py-3.5 no-underline text-gray-700 text-[15px] font-semibold transition-colors border-b-[3px] border-transparent hover:text-orange-500 hover:border-orange-500 md:px-3 md:py-2.5 md:text-[13px]">알바공고</Link>
          <Link to="/companies" className="px-5 py-3.5 no-underline text-gray-700 text-[15px] font-semibold transition-colors border-b-[3px] border-transparent hover:text-orange-500 hover:border-orange-500 md:px-3 md:py-2.5 md:text-[13px]">기업정보</Link>
          <Link to="/resume" className="px-5 py-3.5 no-underline text-gray-700 text-[15px] font-semibold transition-colors border-b-[3px] border-transparent hover:text-orange-500 hover:border-orange-500 md:px-3 md:py-2.5 md:text-[13px]">이력서</Link>
          <Link to="/community" className="px-5 py-3.5 no-underline text-gray-700 text-[15px] font-semibold transition-colors border-b-[3px] border-transparent hover:text-orange-500 hover:border-orange-500 md:px-3 md:py-2.5 md:text-[13px]">커뮤니티</Link>
          <Link to="/mypage" className="px-5 py-3.5 no-underline text-gray-700 text-[15px] font-semibold transition-colors border-b-[3px] border-transparent hover:text-orange-500 hover:border-orange-500 md:px-3 md:py-2.5 md:text-[13px]">마이페이지</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
