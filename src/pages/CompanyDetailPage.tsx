import { useParams, Link } from "react-router-dom";
import { companies, jobs } from "../data/dummyData";
import "./CompanyDetailPage.css";

function CompanyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const company = companies.find((c) => c.id === Number(id));
  const companyJobs = jobs.filter((j) => j.company === company?.name);

  if (!company) {
    return (
      <div className="not-found">
        <h2>기업을 찾을 수 없습니다.</h2>
        <Link to="/companies">목록으로</Link>
      </div>
    );
  }

  return (
    <div className="company-detail-page">
      <div className="company-detail-inner">
        <div className="company-detail-header">
          <div className="company-detail-logo">{company.name.charAt(0)}</div>
          <div className="company-detail-info">
            <span className="company-industry">{company.industry}</span>
            <h1>{company.name}</h1>
            <div className="company-meta">
              <span>📍 {company.location}</span>
              <span>👥 {company.employeeCount}</span>
              <span>⭐ {company.rating}</span>
            </div>
            <div className="company-welfare-tags">
              {company.welfare.map((w, i) => (
                <span key={i} className="welfare-tag">🎁 {w}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="company-detail-section">
          <h3>기업 소개</h3>
          <p>{company.description}</p>
        </div>

        <div className="company-detail-section">
          <h3>현재 채용 중인 알바 ({companyJobs.length}건)</h3>
          {companyJobs.length > 0 ? (
            <div className="company-jobs-list">
              {companyJobs.map((job) => (
                <Link key={job.id} to={`/jobs/${job.id}`} className="company-job-item">
                  <div className="company-job-title">{job.title}</div>
                  <div className="company-job-info">
                    <span>{job.location}</span>
                    <span>{job.salary}</span>
                    <span>마감 {job.deadline}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="no-jobs">현재 진행 중인 채용이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanyDetailPage;
