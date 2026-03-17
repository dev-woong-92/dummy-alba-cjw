import { Link } from "react-router-dom";
import { jobs, categories, regions, communityPosts } from "../data/dummyData";
import type { Job } from "../types";
import "./HomePage.css";

interface JobCardProps {
  job: Job;
}

function JobCard({ job }: JobCardProps) {
  return (
    <Link to={`/jobs/${job.id}`} className="job-card">
      {job.isUrgent && <span className="badge badge-urgent">급구</span>}
      {job.isNew && <span className="badge badge-new">NEW</span>}
      <div className="job-card-company">{job.company}</div>
      <div className="job-card-title">{job.title}</div>
      <div className="job-card-info">
        <span>📍 {job.location}</span>
        <span>💰 {job.salary}</span>
      </div>
      <div className="job-card-tags">
        {job.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
      <div className="job-card-deadline">마감 {job.deadline}</div>
    </Link>
  );
}

function HomePage() {
  return (
    <div className="home">
      {/* 히어로 배너 */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">
            대한민국 <span className="hero-highlight">No.1</span><br />
            아르바이트 플랫폼
          </h1>
          <p className="hero-subtitle">
            지금 바로 내 조건에 맞는 알바를 찾아보세요
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <strong>82,341</strong>
              <span>진행 중인 공고</span>
            </div>
            <div className="stat-item">
              <strong>3,241,000</strong>
              <span>등록 회원</span>
            </div>
            <div className="stat-item">
              <strong>98%</strong>
              <span>만족도</span>
            </div>
          </div>
          <div className="hero-cta">
            <Link to="/jobs" className="cta-primary">알바 찾기</Link>
            <Link to="/resume/create" className="cta-secondary">이력서 등록</Link>
          </div>
        </div>
      </section>

      {/* 직종 카테고리 */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">직종별 알바</h2>
            <Link to="/jobs" className="section-more">전체보기 →</Link>
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/jobs?category=${cat.name}`} className="category-card">
                <span className="category-icon">{cat.icon}</span>
                <span className="category-name">{cat.name}</span>
                <span className="category-count">{cat.count.toLocaleString()}건</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 추천 알바 */}
      <section className="section section-gray">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">🔥 인기 알바</h2>
            <Link to="/jobs" className="section-more">전체보기 →</Link>
          </div>
          <div className="jobs-grid">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* 지역별 알바 */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">📍 지역별 알바</h2>
          </div>
          <div className="region-grid">
            {regions.map((region) => (
              <Link key={region.id} to={`/jobs?region=${region.name}`} className="region-card">
                <span className="region-name">{region.name}</span>
                <span className="region-count">{region.count.toLocaleString()}건</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 커뮤니티 미리보기 */}
      <section className="section section-gray">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">💬 커뮤니티</h2>
            <Link to="/community" className="section-more">전체보기 →</Link>
          </div>
          <div className="community-list">
            {communityPosts.slice(0, 4).map((post) => (
              <Link key={post.id} to={`/community/${post.id}`} className="community-item">
                <span className={`community-category cat-${post.category}`}>{post.category}</span>
                <span className="community-title">{post.title}</span>
                <span className="community-meta">
                  <span>👁 {post.views.toLocaleString()}</span>
                  <span>💬 {post.comments}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 앱 다운로드 배너 */}
      <section className="app-banner">
        <div className="section-inner">
          <div className="app-banner-inner">
            <div>
              <h3>📱 알바몬 앱으로 더 편하게!</h3>
              <p>언제 어디서나 알바 찾기, 앱으로 더 빠르게</p>
            </div>
            <div className="app-btns">
              <button className="app-btn">App Store</button>
              <button className="app-btn">Google Play</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
