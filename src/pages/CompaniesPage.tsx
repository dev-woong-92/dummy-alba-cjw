import { Link } from "react-router-dom";
import { companies } from "../data/dummyData";
import "./CompaniesPage.css";

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <span className="star-rating">
      {"★".repeat(Math.floor(rating))}
      {"☆".repeat(5 - Math.floor(rating))}
      <span className="rating-num">{rating}</span>
    </span>
  );
}

function CompaniesPage() {
  return (
    <div className="companies-page">
      <div className="companies-inner">
        <div className="page-header">
          <h1>기업 정보</h1>
          <p>믿을 수 있는 기업들의 알바 공고를 확인해보세요</p>
        </div>

        <div className="companies-grid">
          {companies.map((company) => (
            <Link
              key={company.id}
              to={`/companies/${company.id}`}
              className="company-card"
            >
              <div className="company-card-logo">{company.name.charAt(0)}</div>
              <div className="company-card-info">
                <div className="company-card-industry">{company.industry}</div>
                <div className="company-card-name">{company.name}</div>
                <StarRating rating={company.rating} />
                <div className="company-card-meta">
                  <span>📍 {company.location}</span>
                  <span>👥 {company.employeeCount}</span>
                </div>
                <div className="company-card-jobs">
                  <span className="open-jobs-badge">
                    채용 중 {company.openJobs}건
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompaniesPage;
