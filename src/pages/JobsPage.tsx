import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { jobs, categories, regions } from "../data/dummyData";
import "./JobsPage.css";

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
    <div className="jobs-page">
      <div className="jobs-page-inner">
        {/* 사이드 필터 */}
        <aside className="jobs-sidebar">
          <div className="filter-box">
            <h3 className="filter-title">지역 선택</h3>
            <div className="filter-list">
              <button
                className={`filter-item ${selectedRegion === "" ? "active" : ""}`}
                onClick={() => setSelectedRegion("")}
              >
                전체
              </button>
              {regions.map((r) => (
                <button
                  key={r.id}
                  className={`filter-item ${selectedRegion === r.name ? "active" : ""}`}
                  onClick={() => setSelectedRegion(r.name)}
                >
                  {r.name}{" "}
                  <span className="filter-count">{r.count.toLocaleString()}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="filter-box">
            <h3 className="filter-title">직종 선택</h3>
            <div className="filter-list">
              <button
                className={`filter-item ${selectedCategory === "" ? "active" : ""}`}
                onClick={() => setSelectedCategory("")}
              >
                전체
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  className={`filter-item ${selectedCategory === c.name ? "active" : ""}`}
                  onClick={() => setSelectedCategory(c.name)}
                >
                  {c.icon} {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-box">
            <h3 className="filter-title">근무 형태</h3>
            <div className="filter-list">
              {["전체", "단기", "장기", "주말", "야간", "재택"].map((type) => (
                <button key={type} className="filter-item">{type}</button>
              ))}
            </div>
          </div>
        </aside>

        {/* 메인 콘텐츠 */}
        <div className="jobs-content">
          <div className="jobs-toolbar">
            <span className="jobs-count">
              총 <strong>{filteredJobs.length}</strong>개의 알바
            </span>
            <div className="sort-options">
              {(["latest", "deadline", "salary"] as SortType[]).map((s) => (
                <button
                  key={s}
                  className={`sort-btn ${sortBy === s ? "active" : ""}`}
                  onClick={() => setSortBy(s)}
                >
                  {sortLabels[s]}
                </button>
              ))}
            </div>
          </div>

          <div className="urgent-banner">
            <span>🚨</span>
            <span>
              지금 바로 일할 수 있는 <strong>급구 알바</strong>만 모아봤어요!
            </span>
            <Link to="/jobs?type=urgent">보러가기 →</Link>
          </div>

          <div className="jobs-list">
            {filteredJobs.length === 0 ? (
              <div className="jobs-empty">
                <p>😅 조건에 맞는 알바가 없어요</p>
                <button
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
                <Link key={job.id} to={`/jobs/${job.id}`} className="job-list-item">
                  <div className="job-list-thumbnail">
                    <div className="job-thumbnail-placeholder">
                      {job.company.charAt(0)}
                    </div>
                  </div>
                  <div className="job-list-info">
                    <div className="job-list-badges">
                      {job.isUrgent && <span className="badge badge-urgent">급구</span>}
                      {job.isNew && <span className="badge badge-new">NEW</span>}
                    </div>
                    <div className="job-list-company">{job.company}</div>
                    <div className="job-list-title">{job.title}</div>
                    <div className="job-list-details">
                      <span>📍 {job.location}</span>
                      <span>💰 {job.salary}</span>
                      <span>📅 {job.workDays}</span>
                      <span>⏰ {job.workTime}</span>
                    </div>
                    <div className="job-list-tags">
                      {job.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="job-list-deadline">
                    <span>마감</span>
                    <strong>{job.deadline}</strong>
                  </div>
                </Link>
              ))
            )}
          </div>

          <div className="pagination">
            <button className="page-btn">‹</button>
            {[1, 2, 3, 4, 5].map((p) => (
              <button key={p} className={`page-btn ${p === 1 ? "active" : ""}`}>
                {p}
              </button>
            ))}
            <button className="page-btn">›</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobsPage;
