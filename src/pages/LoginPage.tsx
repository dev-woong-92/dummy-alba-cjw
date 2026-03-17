import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

interface LoginForm {
  email: string;
  password: string;
}

function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("로그인 성공!");
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <Link to="/" className="auth-logo">
          <span style={{ color: "#f97316" }}>알</span>
          <span style={{ color: "#fb923c" }}>바</span>
          <span style={{ color: "#fdba74" }}>몬</span>
        </Link>

        <h2>로그인</h2>
        <p className="auth-sub">알바몬과 함께 더 나은 알바생활을 시작하세요</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label>이메일</label>
            <input
              type="email"
              name="email"
              placeholder="이메일을 입력하세요"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-field">
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" /> 로그인 유지
            </label>
            <a href="#">비밀번호 찾기</a>
          </div>

          <button type="submit" className="auth-submit">
            로그인
          </button>
        </form>

        <div className="social-login">
          <div className="social-divider">
            <span>또는</span>
          </div>
          <div className="social-btns">
            <button className="social-btn kakao">🟡 카카오로 로그인</button>
            <button className="social-btn naver">🟢 네이버로 로그인</button>
            <button className="social-btn google">🔵 구글로 로그인</button>
          </div>
        </div>

        <div className="auth-footer">
          아직 회원이 아니신가요?{" "}
          <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
