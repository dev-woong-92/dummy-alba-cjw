import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/dummyData";

function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="max-w-[600px] mx-auto mt-[100px] text-center">
        <h2 className="text-2xl text-gray-700 mb-4">공고를 찾을 수 없습니다.</h2>
        <Link to="/jobs" className="text-orange-500 no-underline text-[15px]">알바 목록으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div className="py-8 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-[13px] text-gray-400 mb-6">
          <Link to="/" className="text-gray-500 no-underline mx-1.5 first:ml-0 hover:text-orange-500">홈</Link> &gt;
          <Link to="/jobs" className="text-gray-500 no-underline mx-1.5 hover:text-orange-500">알바공고</Link> &gt;
          <span className="ml-1.5 text-gray-700">{job.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
          {/* 메인 콘텐츠 */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-7">
              <div className="mb-3">
                {job.isUrgent && <span className="inline-block px-2 py-0.5 rounded bg-red-50 text-red-500 text-[11px] font-bold mr-1">급구</span>}
                {job.isNew && <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-500 text-[11px] font-bold mr-1">NEW</span>}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[72px] h-[72px] bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center text-white text-[28px] font-black shrink-0">
                  {job.company.charAt(0)}
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">{job.company}</div>
                  <h1 className="text-[22px] font-extrabold text-gray-900">{job.title}</h1>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
              {[
                { label: "💰 급여", value: job.salary, highlight: true },
                { label: "📍 근무지", value: job.location },
                { label: "📅 근무기간", value: job.period },
                { label: "🗓 근무요일", value: job.workDays },
                { label: "⏰ 근무시간", value: job.workTime },
                { label: "📌 마감일", value: job.deadline },
              ].map(({ label, value, highlight }) => (
                <div key={label} className="bg-white px-5 py-4 flex flex-col gap-1.5">
                  <span className="text-xs text-gray-500">{label}</span>
                  <span className={highlight ? "text-orange-500 text-[17px] font-extrabold" : "text-[15px] font-semibold text-gray-900"}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-7">
              <h3 className="text-[17px] font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-100">공고 내용</h3>
              <p className="text-sm text-gray-700 leading-[1.8]">{job.description}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-7">
              <h3 className="text-[17px] font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-100">지원 자격</h3>
              <ul className="list-none p-0 flex flex-col gap-2">
                {job.requirements.map((req, i) => (
                  <li key={i} className="text-sm text-gray-700">✅ {req}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-7">
              <h3 className="text-[17px] font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-100">복리후생</h3>
              <div className="flex flex-wrap gap-2">
                {job.welfare.map((w, i) => (
                  <span key={i} className="px-3.5 py-1.5 bg-green-50 text-green-600 rounded-full text-[13px] font-semibold">🎁 {w}</span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-7">
              <h3 className="text-[17px] font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-100">근무지 위치</h3>
              <div className="h-[200px] bg-gray-100 rounded-lg flex flex-col items-center justify-center gap-2 text-gray-500">
                <span className="text-base font-semibold text-gray-700">📍 {job.location}</span>
                <p className="text-[13px]">지도 영역 (실제 구현 시 카카오맵/네이버맵 연동)</p>
              </div>
            </div>
          </div>

          {/* 사이드 */}
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-[120px] lg:static">
              <div className="flex justify-between text-[13px] text-gray-500 mb-4">
                <span>마감일</span>
                <strong className="text-red-500">{job.deadline}</strong>
              </div>
              <button className="w-full py-3.5 bg-orange-500 text-white border-none rounded-[10px] text-base font-bold cursor-pointer mb-2.5 transition-colors hover:bg-orange-600">지원하기</button>
              <button className="w-full py-3 bg-white text-gray-700 border border-gray-200 rounded-[10px] text-[15px] cursor-pointer transition-all hover:border-orange-500 hover:text-orange-500">♡ 찜하기</button>
              <div className="mt-4 text-xs text-gray-400 text-center">
                <p>📧 이력서를 첨부해 간편하게 지원하세요</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-gray-900 mb-3">유사 알바 추천</h4>
              {jobs
                .filter((j) => j.id !== job.id)
                .slice(0, 3)
                .map((j) => (
                  <Link key={j.id} to={`/jobs/${j.id}`} className="block py-2.5 border-b border-gray-100 last:border-b-0 no-underline text-gray-900 group">
                    <div className="text-[13px] font-semibold mb-1 group-hover:text-orange-500">{j.title}</div>
                    <div className="text-xs text-gray-500">
                      {j.location} · {j.salary}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetailPage;
