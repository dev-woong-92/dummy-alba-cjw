import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./SignupPage.css";

type UserType = "worker" | "employer";

interface SignupForm {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
}

function SignupPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>("worker");
  const [form, setForm] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.password !== form.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    alert("회원가입 완료! 로그인 페이지로 이동합니다.");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-box signup-box">
        <Link to="/" className="auth-logo">
          <span style={{ color: "#f97316" }}>알</span>
          <span style={{ color: "#fb923c" }}>바</span>
          <span style={{ color: "#fdba74" }}>몬</span>
        </Link>

        <h2>회원가입</h2>
        <p className="auth-sub">알바몬 회원이 되어 더 많은 혜택을 누리세요</p>

        <div className="user-type-tabs">
          <button
            type="button"
            className={`type-tab ${userType === "worker" ? "active" : ""}`}
            onClick={() => setUserType("worker")}
          >
            👤 구직자
          </button>
          <button
            type="button"
            className={`type-tab ${userType === "employer" ? "active" : ""}`}
            onClick={() => setUserType("employer")}
          >
            🏢 사업주
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label>이름 *</label>
            <input
              type="text"
              name="name"
              placeholder="홍길동"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-field">
            <label>이메일 *</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-field">
            <label>비밀번호 *</label>
            <input
              type="password"
              name="password"
              placeholder="8자 이상 입력"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-field">
            <label>비밀번호 확인 *</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호 재입력"
              value={form.passwordConfirm}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-field">
            <label>휴대폰 번호</label>
            <input
              type="tel"
              name="phone"
              placeholder="010-0000-0000"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="agree-section">
            <label className="agree-all">
              <input type="checkbox" /> 전체 동의
            </label>
            <div className="agree-items">
              <label><input type="checkbox" required /> [필수] 이용약관 동의</label>
              <label><input type="checkbox" required /> [필수] 개인정보 수집 및 이용 동의</label>
              <label><input type="checkbox" /> [선택] 마케팅 정보 수신 동의</label>
            </div>
          </div>

          <button type="submit" className="auth-submit">
            가입하기
          </button>
        </form>

        <div className="auth-footer">
          이미 회원이신가요?{" "}
          <Link to="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
