import { Link } from "react-router-dom";
import { resumes } from "../data/dummyData";

function ResumePage() {
  return (
    <div className="py-10 px-5">
      <div className="max-w-[800px] mx-auto flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-[26px] font-extrabold text-gray-900 mb-1.5">내 이력서</h1>
            <p className="text-gray-500 text-sm">이력서를 등록하면 기업에서 먼저 연락이 옵니다</p>
          </div>
          <Link to="/resume/create" className="px-6 py-3 bg-orange-500 text-white rounded-[10px] no-underline text-sm font-bold whitespace-nowrap hover:bg-orange-600">
            + 이력서 작성
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          {resumes.map((resume) => (
            <div key={resume.id} className="bg-white border border-gray-200 rounded-[14px] p-6 flex justify-between items-center">
              <div>
                {resume.isDefault && (
                  <span className="inline-block px-2.5 py-0.5 bg-orange-50 text-orange-500 rounded-full text-[11px] font-bold mb-2">기본 이력서</span>
                )}
                <h3 className="text-[17px] font-bold text-gray-900 mb-1">{resume.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{resume.name}</p>
                <div className="flex gap-4 text-xs text-gray-400">
                  <span>수정일 {resume.updatedAt}</span>
                  <span>조회수 {resume.views}회</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  to={`/resume/create?id=${resume.id}`}
                  className="inline-block px-4 py-2 rounded-lg text-[13px] font-semibold border border-orange-500 text-orange-500 no-underline hover:bg-orange-50"
                >
                  수정
                </Link>
                <button className="px-4 py-2 rounded-lg text-[13px] font-semibold cursor-pointer border border-gray-200 text-gray-500 bg-white hover:border-red-500 hover:text-red-500">삭제</button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-[14px] p-6">
          <h3 className="text-base font-bold text-gray-700 mb-3.5">📌 이력서 작성 팁</h3>
          <ul className="list-none p-0 flex flex-col gap-2">
            <li className="text-sm text-gray-700">✅ 사진은 최신 증명사진을 사용하세요</li>
            <li className="text-sm text-gray-700">✅ 자기소개는 구체적으로 작성할수록 합격률이 높아져요</li>
            <li className="text-sm text-gray-700">✅ 자격증과 경력은 빠짐없이 작성해주세요</li>
            <li className="text-sm text-gray-700">✅ 희망 직종과 근무 조건을 명확히 기재하세요</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
