import { useState } from "react";
import { Link } from "react-router-dom";
import { appliedJobs, resumes } from "../data/dummyData";
import type { SavedJob } from "../types";
import "./MyPage.css";

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
    <div className="mypage">
      <div className="mypage-inner">
        <div className="mypage-header">
          <div className="mypage-avatar">홍</div>
          <div>
            <h2>홍길동 님</h2>
            <p>hong@example.com</p>
            <div className="mypage-stats">
              <span>지원 {appliedJobs.length}건</span>
              <span>찜 {dummySavedJobs.length}건</span>
              <span>이력서 {resumes.length}개</span>
            </div>
          </div>
        </div>

        <div className="mypage-layout">
          <aside className="mypage-sidebar">
            {TABS.map((t) => (
              <button
                key={t.id}
                className={`mypage-menu-item ${activeTab === t.id ? "active" : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
            <button className="mypage-menu-item logout">로그아웃</button>
          </aside>

          <div className="mypage-content">
            {/* 내 정보 */}
            {activeTab === "profile" && (
              <div className="mypage-section">
                <h3>내 정보</h3>
                <div className="profile-form">
                  {profileFields.map((item) => (
                    <div key={item.label} className="profile-field">
                      <label>{item.label}</label>
                      <input type="text" defaultValue={item.value} readOnly />
                    </div>
                  ))}
                  <button className="save-btn">정보 수정</button>
                </div>
              </div>
            )}

            {/* 지원 현황 */}
            {activeTab === "applied" && (
              <div className="mypage-section">
                <h3>지원 현황 ({appliedJobs.length}건)</h3>
                <div className="applied-list">
                  {appliedJobs.map((item) => (
                    <div key={item.id} className="applied-item">
                      <div>
                        <div className="applied-title">{item.jobTitle}</div>
                        <div className="applied-company">{item.company}</div>
                        <div className="applied-date">지원일 {item.appliedDate}</div>
                      </div>
                      <span
                        className="applied-status"
                        style={{ color: item.statusColor }}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 찜한 알바 */}
            {activeTab === "saved" && (
              <div className="mypage-section">
                <h3>찜한 알바 ({dummySavedJobs.length}건)</h3>
                <div className="saved-list">
                  {dummySavedJobs.map((job) => (
                    <Link
                      key={job.id}
                      to={`/jobs/${job.id}`}
                      className="saved-item"
                    >
                      <div>
                        <div className="saved-title">{job.title}</div>
                        <div className="saved-info">
                          <span>{job.location}</span>
                          <span>{job.salary}</span>
                          <span>마감 {job.deadline}</span>
                        </div>
                      </div>
                      <button
                        className="unsave-btn"
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
              <div className="mypage-section">
                <div className="section-header-row">
                  <h3>내 이력서 ({resumes.length}개)</h3>
                  <Link to="/resume/create" className="add-resume-btn">
                    + 이력서 추가
                  </Link>
                </div>
                <div className="resume-list">
                  {resumes.map((resume) => (
                    <div key={resume.id} className="resume-item">
                      <div>
                        {resume.isDefault && (
                          <span className="default-tag">기본</span>
                        )}
                        <div className="resume-title">{resume.title}</div>
                        <div className="resume-meta-info">
                          수정일 {resume.updatedAt} · 조회 {resume.views}회
                        </div>
                      </div>
                      <div className="resume-actions">
                        <Link
                          to={`/resume/create?id=${resume.id}`}
                          className="edit-btn"
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
