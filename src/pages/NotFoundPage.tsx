import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-10 text-center">
      <div>
        <div className="text-[80px] mb-4">😵</div>
        <h1 className="text-[72px] font-black text-orange-500 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">페이지를 찾을 수 없어요</h2>
        <p className="text-[15px] text-gray-500 mb-8">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
        <div className="flex gap-3 justify-center">
          <Link to="/" className="px-7 py-3 bg-orange-500 text-white rounded-[10px] no-underline text-[15px] font-bold">홈으로 이동</Link>
          <Link to="/jobs" className="px-7 py-3 bg-white text-orange-500 border-2 border-orange-500 rounded-[10px] no-underline text-[15px] font-bold">알바 찾기</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
