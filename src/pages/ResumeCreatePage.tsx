import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResumeCreatePage.css";

interface ResumeForm {
  title: string;
  name: string;
  birth: string;
  phone: string;
  email: string;
  address: string;
  education: string;
  career: string;
  intro: string;
}

function ResumeCreatePage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<ResumeForm>({
    title: "",
    name: "",
    birth: "",
    phone: "",
    email: "",
    address: "",
    education: "",
    career: "",
    intro: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("이력서가 저장되었습니다!");
    navigate("/resume");
  };

  return (
    <div className="resume-create-page">
      <div className="resume-create-inner">
        <div className="page-header">
          <h1>이력서 작성</h1>
          <p>정확한 정보를 입력할수록 채용 기회가 높아져요</p>
        </div>

        <form onSubmit={handleSubmit} className="resume-form">
          <div className="form-section">
            <h3>이력서 제목</h3>
            <input
              type="text"
              name="title"
              placeholder="예) 외식업 지원용 이력서"
              value={form.title}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-section">
            <h3>기본 정보</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>이름 *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="홍길동"
                  value={form.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label>생년월일 *</label>
                <input
                  type="date"
                  name="birth"
                  value={form.birth}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label>연락처 *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="010-0000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label>이메일</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              <div className="form-group form-group-full">
                <label>주소</label>
                <input
                  type="text"
                  name="address"
                  placeholder="서울특별시 강남구"
                  value={form.address}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>학력</h3>
            <select
              name="education"
              value={form.education}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">최종학력 선택</option>
              <option>중학교 졸업</option>
              <option>고등학교 재학</option>
              <option>고등학교 졸업</option>
              <option>대학교(2년제) 재학</option>
              <option>대학교(2년제) 졸업</option>
              <option>대학교(4년제) 재학</option>
              <option>대학교(4년제) 졸업</option>
              <option>대학원 이상</option>
            </select>
          </div>

          <div className="form-section">
            <h3>경력 사항</h3>
            <textarea
              name="career"
              placeholder="근무한 회사명, 기간, 담당 업무 등을 적어주세요"
              value={form.career}
              onChange={handleChange}
              className="form-textarea"
              rows={4}
            />
          </div>

          <div className="form-section">
            <h3>자기소개</h3>
            <textarea
              name="intro"
              placeholder="나를 표현할 수 있는 내용을 자유롭게 작성해주세요 (최소 100자 이상 권장)"
              value={form.intro}
              onChange={handleChange}
              className="form-textarea"
              rows={6}
            />
            <div className="char-count">{form.intro.length}자</div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate("/resume")}
              className="btn-cancel"
            >
              취소
            </button>
            <button type="submit" className="btn-save">
              이력서 저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResumeCreatePage;
