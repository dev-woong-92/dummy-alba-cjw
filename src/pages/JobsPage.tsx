import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { jobs, categories, regions } from "../data/dummyData";

type SortType = "latest" | "deadline" | "salary";

function JobsPage() {
  const [searchParams] = useSearchParams();
  const [selectedRegion, setSelectedRegion] = useState<string>(
    searchParams.get("region") ?? ""
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get("category") ?? ""
  );
  const [sortBy, setSortBy] = useState<SortType>("latest");

  const filteredJobs = jobs.filter((job) => {
    if (selectedRegion && !job.location.includes(selectedRegion)) return false;
    if (selectedCategory && !job.tags.includes(selectedCategory)) return false;
    return true;
  });

  const sortLabels: Record<SortType, string> = {
    latest: "최신순",
    deadline: "마감임박순",
    salary: "급여높은순",
  };

  return (
    <div className="py-8 px-5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
        {/* 사이드 필터 */}
        <aside className="hidden md:flex flex-col gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-gray-700 mb-3 pb-3 border-b border-gray-100">지역 선택</h3>
            <div className="flex flex-col gap-0.5">
              <button
                className={`flex justify-between items-center px-3 py-2 border-none bg-transparent rounded-md text-[13px] text-gray-700 cursor-pointer text-left transition-colors hover:bg-orange-50 hover:text-orange-500 ${selectedRegion === "" ? "bg-orange-50 text-orange-500 font-bold" : ""}`}
                onClick={() => setSelectedRegion("")}
              >
                전체
              </button>
              {regions.map((r) => (
                <button
                  key={r.id}
                  className={`flex justify-between items-center px-3 py-2 border-none bg-transparent rounded-md text-[13px] text-gray-700 cursor-pointer text-left transition-colors hover:bg-orange-50 hover:text-orange-500 ${selectedRegion === r.name ? "bg-orange-50 text-orange-500 font-bold" : ""}`}
                  onClick={() => setSelectedRegion(r.name)}
                >
                  {r.name}{" "}
                  <span className="text-gray-400 text-[11px]">{r.count.toLocaleString()}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-gray-700 mb-3 pb-3 border-b border-gray-100">직종 선택</h3>
            <div className="flex flex-col gap-0.5">
              <button
                className={`flex justify-between items-center px-3 py-2 border-none bg-transparent rounded-md text-[13px] text-gray-700 cursor-pointer text-left transition-colors hover:bg-orange-50 hover:text-orange-500 ${selectedCategory === "" ? "bg-orange-50 text-orange-500 font-bold" : ""}`}
                onClick={() => setSelectedCategory("")}
              >
                전체
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  className={`flex justify-between items-center px-3 py-2 border-none bg-transparent rounded-md text-[13px] text-gray-700 cursor-pointer text-left transition-colors hover:bg-orange-50 hover:text-orange-500 ${selectedCategory === c.name ? "bg-orange-50 text-orange-500 font-bold" : ""}`}
                  onClick={() => setSelectedCategory(c.name)}
                >
                  {c.icon} {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-gray-700 mb-3 pb-3 border-b border-gray-100">근무 형태</h3>
            <div className="flex flex-col gap-0.5">
              {["전체", "단기", "장기", "주말", "야간", "재택"].map((type) => (
                <button key={type} className="flex justify-between items-center px-3 py-2 border-none bg-transparent rounded-md text-[13px] text-gray-700 cursor-pointer text-left transition-colors hover:bg-orange-50 hover:text-orange-500">{type}</button>
              ))}
            </div>
          </div>
        </aside>

        {/* 메인 콘텐츠 */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-700">
              총 <strong className="text-orange-500">{filteredJobs.length}</strong>개의 알바
            </span>
            <div className="flex gap-1">
              {(["latest", "deadline", "salary"] as SortType[]).map((s) => (
                <button
                  key={s}
                  className={`px-3.5 py-1.5 border rounded-full text-[13px] cursor-pointer transition-all ${sortBy === s ? "bg-orange-500 text-white border-orange-500" : "bg-white text-gray-700 border-gray-200 hover:border-orange-500 hover:text-orange-500"}`}
                  onClick={() => setSortBy(s)}
                >
                  {sortLabels[s]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2.5 px-5 py-3.5 bg-red-50 border border-red-200 rounded-[10px] mb-4 text-sm text-gray-700">
            <span>🚨</span>
            <span>
              지금 바로 일할 수 있는 <strong>급구 알바</strong>만 모아봤어요!
            </span>
            <Link to="/jobs?type=urgent" className="text-red-500 font-semibold no-underline ml-auto">보러가기 →</Link>
          </div>

          <div className="flex flex-col gap-3">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-[60px] bg-white rounded-xl border border-gray-200">
                <p className="text-lg text-gray-500 mb-4">😅 조건에 맞는 알바가 없어요</p>
                <button
                  className="px-6 py-2.5 bg-orange-500 text-white border-none rounded-lg text-sm cursor-pointer"
                  onClick={() => {
                    setSelectedRegion("");
                    setSelectedCategory("");
                  }}
                >
                  필터 초기화
                </button>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <Link key={job.id} to={`/jobs/${job.id}`} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5 no-underline text-gray-900 transition-all items-start hover:border-orange-500 hover:shadow-[0_4px_16px_rgba(249,115,22,0.08)]">
                  <div className="shrink-0">
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center text-white text-[22px] font-black">
                      {job.company.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-1">
                      {job.isUrgent && <span className="inline-block px-2 py-0.5 rounded bg-red-50 text-red-500 text-[11px] font-bold mr-1">급구</span>}
                      {job.isNew && <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-500 text-[11px] font-bold mr-1">NEW</span>}
                    </div>
                    <div className="text-xs text-gray-500 mb-0.5">{job.company}</div>
                    <div className="text-base font-bold mb-2">{job.title}</div>
                    <div className="flex flex-wrap gap-3 text-[13px] text-gray-700 mb-2">
                      <span>📍 {job.location}</span>
                      <span>💰 {job.salary}</span>
                      <span>📅 {job.workDays}</span>
                      <span>⏰ {job.workTime}</span>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      {job.tags.map((tag, i) => (
                        <span key={i} className="inline-block px-2 py-0.5 bg-orange-50 text-orange-500 rounded-full text-[11px] font-semibold">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-col items-end gap-1 text-xs text-gray-400">
                    <span>마감</span>
                    <strong className="text-gray-700 text-[13px]">{job.deadline}</strong>
                  </div>
                </Link>
              ))
            )}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <button className="w-9 h-9 border border-gray-200 bg-white rounded-lg text-sm cursor-pointer transition-all hover:border-orange-500 hover:text-orange-500">‹</button>
            {[1, 2, 3, 4, 5].map((p) => (
              <button key={p} className={`w-9 h-9 border rounded-lg text-sm cursor-pointer transition-all ${p === 1 ? "bg-orange-500 text-white border-orange-500" : "bg-white border-gray-200 hover:border-orange-500 hover:text-orange-500"}`}>
                {p}
              </button>
            ))}
            <button className="w-9 h-9 border border-gray-200 bg-white rounded-lg text-sm cursor-pointer transition-all hover:border-orange-500 hover:text-orange-500">›</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsPage;
