import { Link } from "react-router-dom";
import { resumes } from "../data/dummyData";
import "./ResumePage.css";

function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-inner">
        <div className="page-header-row">
          <div>
            <h1>내 이력서</h1>
            <p>이력서를 등록하면 기업에서 먼저 연락이 옵니다</p>
          </div>
          <Link to="/resume/create" className="create-resume-btn">
            + 이력서 작성
          </Link>
        </div>

        <div className="resume-list">
          {resumes.map((resume) => (
            <div key={resume.id} className="resume-card">
              <div className="resume-card-info">
                {resume.isDefault && (
                  <span className="default-badge">기본 이력서</span>
                )}
                <h3>{resume.title}</h3>
                <p>{resume.name}</p>
                <div className="resume-meta">
                  <span>수정일 {resume.updatedAt}</span>
                  <span>조회수 {resume.views}회</span>
                </div>
              </div>
              <div className="resume-card-actions">
                <Link
                  to={`/resume/create?id=${resume.id}`}
                  className="action-btn btn-edit"
                >
                  수정
                </Link>
                <button className="action-btn btn-delete">삭제</button>
              </div>
            </div>
          ))}
        </div>

        <div className="resume-tips">
          <h3>📌 이력서 작성 팁</h3>
          <ul>
            <li>✅ 사진은 최신 증명사진을 사용하세요</li>
            <li>✅ 자기소개는 구체적으로 작성할수록 합격률이 높아져요</li>
            <li>✅ 자격증과 경력은 빠짐없이 작성해주세요</li>
            <li>✅ 희망 직종과 근무 조건을 명확히 기재하세요</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
