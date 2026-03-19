import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-200 flex items-center justify-center p-5">
      <div className="bg-white rounded-[20px] p-12 w-full max-w-[440px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] text-center">
        <Link to="/" className="text-4xl font-black tracking-tight no-underline inline-block mb-6">
          <span className="text-orange-500">알</span>
          <span className="text-orange-400">바</span>
          <span className="text-orange-300">몬</span>
        </Link>

        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">로그인</h2>
        <p className="text-sm text-gray-500 mb-8">알바몬과 함께 더 나은 알바생활을 시작하세요</p>

        <form onSubmit={handleSubmit} className="text-left">
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="text-[13px] font-semibold text-gray-700">이메일</label>
            <input
              type="email"
              name="email"
              placeholder="이메일을 입력하세요"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-gray-200 rounded-[10px] text-[15px] outline-none transition-colors focus:border-orange-500"
            />
          </div>
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="text-[13px] font-semibold text-gray-700">비밀번호</label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={form.password}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-gray-200 rounded-[10px] text-[15px] outline-none transition-colors focus:border-orange-500"
            />
          </div>

          <div className="flex justify-between items-center mb-5 text-[13px] text-gray-500">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" /> 로그인 유지
            </label>
            <a href="#" className="text-orange-500 no-underline">비밀번호 찾기</a>
          </div>

          <button type="submit" className="w-full py-3.5 bg-orange-500 text-white border-none rounded-[10px] text-base font-bold cursor-pointer transition-colors hover:bg-orange-600">
            로그인
          </button>
        </form>

        <div className="mt-6">
          <div className="relative mb-5">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200" />
            <span className="relative bg-white px-3 text-[13px] text-gray-400">또는</span>
          </div>
          <div className="flex flex-col gap-2.5">
            <button className="w-full py-3 border border-[#FEE500] bg-[#FEE500] rounded-[10px] text-sm font-semibold cursor-pointer transition-colors">🟡 카카오로 로그인</button>
            <button className="w-full py-3 border border-[#03C75A] bg-[#03C75A] text-white rounded-[10px] text-sm font-semibold cursor-pointer transition-colors">🟢 네이버로 로그인</button>
            <button className="w-full py-3 border border-gray-200 bg-white rounded-[10px] text-sm font-semibold cursor-pointer transition-colors hover:bg-gray-50">🔵 구글로 로그인</button>
          </div>
        </div>

        <div className="mt-7 text-sm text-gray-500">
          아직 회원이 아니신가요?{" "}
          <Link to="/signup" className="text-orange-500 font-bold no-underline">회원가입</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
