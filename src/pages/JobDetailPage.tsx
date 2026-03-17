import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/dummyData";
import "./JobDetailPage.css";

function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="job-detail-notfound">
        <h2>공고를 찾을 수 없습니다.</h2>
        <Link to="/jobs">알바 목록으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div className="job-detail-page">
      <div className="job-detail-inner">
        <div className="breadcrumb">
          <Link to="/">홈</Link> &gt;
          <Link to="/jobs">알바공고</Link> &gt;
          <span>{job.title}</span>
        </div>

        <div className="job-detail-layout">
          {/* 메인 콘텐츠 */}
          <div className="job-detail-main">
            <div className="job-detail-header">
              <div className="job-detail-badges">
                {job.isUrgent && <span className="badge badge-urgent">급구</span>}
                {job.isNew && <span className="badge badge-new">NEW</span>}
              </div>
              <div className="job-detail-company-row">
                <div className="job-detail-company-logo">
                  {job.company.charAt(0)}
                </div>
                <div>
                  <div className="job-detail-company">{job.company}</div>
                  <h1 className="job-detail-title">{job.title}</h1>
                </div>
              </div>
            </div>

            <div className="job-detail-info-grid">
              {[
                { label: "💰 급여", value: job.salary, highlight: true },
                { label: "📍 근무지", value: job.location },
                { label: "📅 근무기간", value: job.period },
                { label: "🗓 근무요일", value: job.workDays },
                { label: "⏰ 근무시간", value: job.workTime },
                { label: "📌 마감일", value: job.deadline },
              ].map(({ label, value, highlight }) => (
                <div key={label} className="info-item">
                  <span className="info-label">{label}</span>
                  <span className={`info-value${highlight ? " highlight" : ""}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="job-detail-section">
              <h3>공고 내용</h3>
              <p>{job.description}</p>
            </div>

            <div className="job-detail-section">
              <h3>지원 자격</h3>
              <ul>
                {job.requirements.map((req, i) => (
                  <li key={i}>✅ {req}</li>
                ))}
              </ul>
            </div>

            <div className="job-detail-section">
              <h3>복리후생</h3>
              <div className="welfare-tags">
                {job.welfare.map((w, i) => (
                  <span key={i} className="welfare-tag">🎁 {w}</span>
                ))}
              </div>
            </div>

            <div className="job-detail-section">
              <h3>근무지 위치</h3>
              <div className="map-placeholder">
                <span>📍 {job.location}</span>
                <p>지도 영역 (실제 구현 시 카카오맵/네이버맵 연동)</p>
              </div>
            </div>
          </div>

          {/* 사이드 */}
          <div className="job-detail-side">
            <div className="apply-box">
              <div className="apply-deadline">
                <span>마감일</span>
                <strong>{job.deadline}</strong>
              </div>
              <button className="apply-btn">지원하기</button>
              <button className="scrap-btn">♡ 찜하기</button>
              <div className="apply-info">
                <p>📧 이력서를 첨부해 간편하게 지원하세요</p>
              </div>
            </div>

            <div className="related-jobs">
              <h4>유사 알바 추천</h4>
              {jobs
                .filter((j) => j.id !== job.id)
                .slice(0, 3)
                .map((j) => (
                  <Link key={j.id} to={`/jobs/${j.id}`} className="related-job-item">
                    <div className="related-job-title">{j.title}</div>
                    <div className="related-job-info">
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
