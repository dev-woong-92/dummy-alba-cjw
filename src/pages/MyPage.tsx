import { useState } from "react";
import { Link } from "react-router-dom";
import { appliedJobs, resumes } from "../data/dummyData";
import type { SavedJob } from "../types";

type TabId = "profile" | "applied" | "saved" | "resume";

interface Tab {
  id: TabId;
  label: string;
}

const TABS: Tab[] = [
  { id: "profile", label: "내 정보" },
  { id: "applied", label: "지원현황" },
  { id: "saved", label: "찜한 알바" },
  { id: "resume", label: "내 이력서" },
];

const dummySavedJobs: SavedJob[] = [
  {
    id: 1,
    title: "스타벅스 강남점 바리스타",
    company: "스타벅스코리아",
    location: "서울 강남구",
    salary: "시급 10,030원",
    deadline: "2026-03-31",
  },
  {
    id: 3,
    title: "배달의민족 라이더 모집",
    company: "우아한형제들",
    location: "서울 강남구",
    salary: "건당 5,000원~",
    deadline: "상시채용",
  },
];

interface ProfileField {
  label: string;
  value: string;
}

const profileFields: ProfileField[] = [
  { label: "이름", value: "홍길동" },
  { label: "이메일", value: "hong@example.com" },
  { label: "연락처", value: "010-1234-5678" },
  { label: "생년월일", value: "1998-05-15" },
  { label: "주소", value: "서울특별시 강남구" },
];

interface MyPageProps {
  tab?: TabId;
}

function MyPage({ tab }: MyPageProps) {
  const [activeTab, setActiveTab] = useState<TabId>(tab ?? "profile");

  return (
    <div className="py-10 px-5">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-2xl p-8 flex items-center gap-6 mb-7">
          <div className="w-[72px] h-[72px] bg-white/25 rounded-full flex items-center justify-center text-[28px] font-black text-white shrink-0">홍</div>
          <div>
            <h2 className="text-[22px] font-extrabold mb-1">홍길동 님</h2>
            <p className="text-sm opacity-85 mb-2.5">hong@example.com</p>
            <div className="flex gap-4 text-[13px] opacity-90">
              <span>지원 {appliedJobs.length}건</span>
              <span>찜 {dummySavedJobs.length}건</span>
              <span>이력서 {resumes.length}개</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
          <aside className="bg-white border border-gray-200 rounded-[14px] overflow-hidden flex md:flex-col flex-row overflow-x-auto">
            {TABS.map((t) => (
              <button
                key={t.id}
                className={`px-5 py-[15px] border-none bg-transparent text-sm font-semibold text-gray-700 cursor-pointer text-left border-b border-gray-100 last:border-b-0 transition-all whitespace-nowrap md:border-r-0 border-r md:border-b ${activeTab === t.id ? "bg-orange-50 text-orange-500" : "hover:bg-orange-50 hover:text-orange-500"}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
            <button className="px-5 py-[15px] border-none bg-transparent text-sm font-semibold text-gray-400 cursor-pointer text-left transition-all whitespace-nowrap hover:text-red-500 hover:bg-red-50">로그아웃</button>
          </aside>

          <div>
            {/* 내 정보 */}
            {activeTab === "profile" && (
              <div className="bg-white border border-gray-200 rounded-[14px] p-7">
                <h3 className="text-[17px] font-bold text-gray-900 mb-5 pb-3.5 border-b-2 border-gray-100">내 정보</h3>
                <div className="flex flex-col gap-3.5">
                  {profileFields.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <label className="text-[13px] font-semibold text-gray-500 min-w-[80px]">{item.label}</label>
                      <input type="text" defaultValue={item.value} readOnly className="flex-1 px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 bg-gray-50" />
                    </div>
                  ))}
                  <button className="px-7 py-3 bg-orange-500 text-white border-none rounded-[10px] text-sm font-bold cursor-pointer self-start">정보 수정</button>
                </div>
              </div>
            )}

            {/* 지원 현황 */}
            {activeTab === "applied" && (
              <div className="bg-white border border-gray-200 rounded-[14px] p-7">
                <h3 className="text-[17px] font-bold text-gray-900 mb-5 pb-3.5 border-b-2 border-gray-100">지원 현황 ({appliedJobs.length}건)</h3>
                <div className="flex flex-col gap-3">
                  {appliedJobs.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-[10px]">
                      <div>
                        <div className="text-[15px] font-bold text-gray-900 mb-1">{item.jobTitle}</div>
                        <div className="text-[13px] text-gray-500 mb-1">{item.company}</div>
                        <div className="text-xs text-gray-400">지원일 {item.appliedDate}</div>
                      </div>
                      <span className="text-sm font-bold" style={{ color: item.statusColor }}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 찜한 알바 */}
            {activeTab === "saved" && (
              <div className="bg-white border border-gray-200 rounded-[14px] p-7">
                <h3 className="text-[17px] font-bold text-gray-900 mb-5 pb-3.5 border-b-2 border-gray-100">찜한 알바 ({dummySavedJobs.length}건)</h3>
                <div className="flex flex-col gap-3">
                  {dummySavedJobs.map((job) => (
                    <Link
                      key={job.id}
                      to={`/jobs/${job.id}`}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-[10px] no-underline text-gray-900 transition-colors hover:bg-orange-50"
                    >
                      <div>
                        <div className="text-[15px] font-bold mb-1.5">{job.title}</div>
                        <div className="flex gap-3 text-xs text-gray-500">
                          <span>{job.location}</span>
                          <span>{job.salary}</span>
                          <span>마감 {job.deadline}</span>
                        </div>
                      </div>
                      <button
                        className="text-red-500 text-lg border-none bg-transparent cursor-pointer px-2 py-1"
                        onClick={(e: React.MouseEvent) => {
                          e.preventDefault();
                          alert("찜 해제");
                        }}
                      >
                        ♥
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 내 이력서 */}
            {activeTab === "resume" && (
              <div className="bg-white border border-gray-200 rounded-[14px] p-7">
                <div className="flex justify-between items-center mb-5 pb-3.5 border-b-2 border-gray-100">
                  <h3 className="text-[17px] font-bold text-gray-900">내 이력서 ({resumes.length}개)</h3>
                  <Link to="/resume/create" className="px-4 py-2 bg-orange-500 text-white rounded-lg no-underline text-[13px] font-semibold">
                    + 이력서 추가
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  {resumes.map((resume) => (
                    <div key={resume.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-[10px]">
                      <div>
                        {resume.isDefault && (
                          <span className="inline-block px-2 py-0.5 bg-orange-50 text-orange-500 rounded text-[11px] font-bold mb-1">기본</span>
                        )}
                        <div className="text-[15px] font-bold text-gray-900 mb-1">{resume.title}</div>
                        <div className="text-xs text-gray-400">
                          수정일 {resume.updatedAt} · 조회 {resume.views}회
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          to={`/resume/create?id=${resume.id}`}
                          className="px-4 py-[7px] border border-orange-500 text-orange-500 rounded-lg no-underline text-[13px] font-semibold hover:bg-orange-50"
                        >
                          수정
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
