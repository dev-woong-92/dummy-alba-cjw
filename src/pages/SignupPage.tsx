import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

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
  const [agreements, setAgreements] = useState({
    all: false,
    terms: false,
    privacy: false,
    marketing: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAgreementChange = (type: keyof typeof agreements) => {
    if (type === 'all') {
      const newValue = !agreements.all;
      setAgreements({
        all: newValue,
        terms: newValue,
        privacy: newValue,
        marketing: newValue,
      });
    } else {
      const newAgreements = { ...agreements, [type]: !agreements[type] };
      newAgreements.all = newAgreements.terms && newAgreements.privacy && newAgreements.marketing;
      setAgreements(newAgreements);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.password !== form.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!agreements.terms || !agreements.privacy) {
      alert("필수 약관에 동의해주세요.");
      return;
    }
    alert("회원가입 완료! 로그인 페이지로 이동합니다.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-5">
      <div className="bg-card rounded-[20px] p-12 w-full max-w-[480px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] text-center border border-border">
        <Link to="/" className="text-4xl font-black tracking-tight no-underline inline-block mb-6">
          <span className="text-primary-600">Work</span>
          <span className="text-primary-500">sph</span>
          <span className="text-primary-400">ere</span>
        </Link>

        <h2 className="text-2xl font-extrabold text-foreground mb-2">회원가입</h2>
        <p className="text-sm text-muted-foreground mb-8">Worksphere 회원이 되어 더 많은 혜택을 누리세요</p>

        <div className="flex mb-7 border border-border rounded-[10px] overflow-hidden">
          <button
            type="button"
            className={cn(
              "flex-1 py-3 border-none text-[15px] font-semibold cursor-pointer transition-all",
              userType === "worker" 
                ? "bg-primary text-primary-foreground" 
                : "bg-background text-muted-foreground"
            )}
            onClick={() => setUserType("worker")}
          >
            👤 구직자
          </button>
          <button
            type="button"
            className={cn(
              "flex-1 py-3 border-none text-[15px] font-semibold cursor-pointer transition-all",
              userType === "employer" 
                ? "bg-primary text-primary-foreground" 
                : "bg-background text-muted-foreground"
            )}
            onClick={() => setUserType("employer")}
          >
            🏢 사업주
          </button>
        </div>

        <form onSubmit={handleSubmit} className="text-left">
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="text-[13px] font-semibold text-foreground">이름 *</label>
            <input 
              type="text" 
              name="name" 
              placeholder="홍길동" 
              value={form.name} 
              onChange={handleChange} 
              required 
              className="px-4 py-3 border border-border rounded-[10px] text-[15px] outline-none transition-colors focus:border-primary bg-background text-foreground"
            />
          </div>
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="text-[13px] font-semibold text-foreground">이메일 *</label>
            <input 
              type="email" 
              name="email" 
              placeholder="example@email.com" 
              value={form.email} 
              onChange={handleChange} 
              required 
              className="px-4 py-3 border border-border rounded-[10px] text-[15px] outline-none transition-colors focus:border-primary bg-background text-foreground"
            />
          </div>
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="text-[13px] font-semibold text-foreground">비밀번호 *</label>
            <input 
              type="password" 
              name="password" 
              placeholder="8자 이상 입력" 
              value={form.password} 
              onChange={handleChange} 
              required 
              className="px-4 py-3 border border-border rounded-[10px] text-[15px] outline-none transition-colors focus:border-primary bg-background text-foreground"
            />
          </div>
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="text-[13px] font-semibold text-foreground">비밀번호 확인 *</label>
            <input 
              type="password" 
              name="passwordConfirm" 
              placeholder="비밀번호 재입력" 
              value={form.passwordConfirm} 
              onChange={handleChange} 
              required 
              className="px-4 py-3 border border-border rounded-[10px] text-[15px] outline-none transition-colors focus:border-primary bg-background text-foreground"
            />
          </div>
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="text-[13px] font-semibold text-foreground">휴대폰 번호</label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="010-0000-0000" 
              value={form.phone} 
              onChange={handleChange} 
              className="px-4 py-3 border border-border rounded-[10px] text-[15px] outline-none transition-colors focus:border-primary bg-background text-foreground"
            />
          </div>

          <div className="bg-muted border border-border rounded-[10px] p-4 mb-5">
            <label className="flex items-center gap-2 text-sm font-bold text-foreground mb-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={agreements.all}
                onChange={() => handleAgreementChange('all')}
                className="accent-primary"
              /> 
              전체 동의
            </label>
            <div className="flex flex-col gap-2 pl-6">
              <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={agreements.terms}
                  onChange={() => handleAgreementChange('terms')}
                  className="accent-primary"
                /> 
                이용약관 동의 (필수)
              </label>
              <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={agreements.privacy}
                  onChange={() => handleAgreementChange('privacy')}
                  className="accent-primary"
                /> 
                개인정보처리방침 동의 (필수)
              </label>
              <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={agreements.marketing}
                  onChange={() => handleAgreementChange('marketing')}
                  className="accent-primary"
                /> 
                마케팅 정보 수신 동의 (선택)
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-4 bg-primary text-primary-foreground border-none rounded-[10px] text-[16px] font-bold cursor-pointer transition-colors hover:bg-primary/90"
          >
            회원가입
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            이미 계정이 있으신가요?{" "}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
import { Link, useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-200 flex items-center justify-center p-5">
      <div className="bg-white rounded-[20px] p-12 w-full max-w-[480px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] text-center">
        <Link to="/" className="text-4xl font-black tracking-tight no-underline inline-block mb-6">
          <span className="text-orange-500">알</span>
          <span className="text-orange-400">바</span>
          <span className="text-orange-300">몬</span>
        </Link>

        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">회원가입</h2>
        <p className="text-sm text-gray-500 mb-8">알바몬 회원이 되어 더 많은 혜택을 누리세요</p>

        <div className="flex mb-7 border border-gray-200 rounded-[10px] overflow-hidden">
          <button
            type="button"
            className={`flex-1 py-3 border-none text-[15px] font-semibold cursor-pointer transition-all ${userType === "worker" ? "bg-orange-500 text-white" : "bg-white text-gray-500"}`}
            onClick={() => setUserType("worker")}
          >
            👤 구직자
          </button>
          <button
            type="button"
            className={`flex-1 py-3 border-none text-[15px] font-semibold cursor-pointer transition-all ${userType === "employer" ? "bg-orange-500 text-white" : "bg-white text-gray-500"}`}
            onClick={() => setUserType("employer")}
          >
            🏢 사업주
          </button>
        </div>

        <form onSubmit={handleSubmit} className="text-left">
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="text-[13px] font-semibold text-gray-700">이름 *</label>
            <input type="text" name="name" placeholder="홍길동" value={form.name} onChange={handleChange} required className="px-4 py-3 border border-gray-200 rounded-[10px] text-[15px] outline-none transition-colors focus:border-orange-500" />
          </div>
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="text-[13px] font-semibold text-gray-700">이메일 *</label>
            <input type="email" name="email" placeholder="example@email.com" value={form.email} onChange={handleChange} required className="px-4 py-3 border border-gray-200 rounded-[10px] text-[15px] outline-none transition-colors focus:border-orange-500" />
          </div>
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="text-[13px] font-semibold text-gray-700">비밀번호 *</label>
            <input type="password" name="password" placeholder="8자 이상 입력" value={form.password} onChange={handleChange} required className="px-4 py-3 border border-gray-200 rounded-[10px] text-[15px] outline-none transition-colors focus:border-orange-500" />
          </div>
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="text-[13px] font-semibold text-gray-700">비밀번호 확인 *</label>
            <input type="password" name="passwordConfirm" placeholder="비밀번호 재입력" value={form.passwordConfirm} onChange={handleChange} required className="px-4 py-3 border border-gray-200 rounded-[10px] text-[15px] outline-none transition-colors focus:border-orange-500" />
          </div>
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="text-[13px] font-semibold text-gray-700">휴대폰 번호</label>
            <input type="tel" name="phone" placeholder="010-0000-0000" value={form.phone} onChange={handleChange} className="px-4 py-3 border border-gray-200 rounded-[10px] text-[15px] outline-none transition-colors focus:border-orange-500" />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-[10px] p-4 mb-5">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3 cursor-pointer">
              <input type="checkbox" /> 전체 동의
            </label>
            <div className="flex flex-col gap-2 pl-1">
              <label className="flex items-center gap-2 text-[13px] text-gray-700 cursor-pointer"><input type="checkbox" required /> [필수] 이용약관 동의</label>
              <label className="flex items-center gap-2 text-[13px] text-gray-700 cursor-pointer"><input type="checkbox" required /> [필수] 개인정보 수집 및 이용 동의</label>
              <label className="flex items-center gap-2 text-[13px] text-gray-700 cursor-pointer"><input type="checkbox" /> [선택] 마케팅 정보 수신 동의</label>
            </div>
          </div>

          <button type="submit" className="w-full py-3.5 bg-orange-500 text-white border-none rounded-[10px] text-base font-bold cursor-pointer transition-colors hover:bg-orange-600">
            가입하기
          </button>
        </form>

        <div className="mt-7 text-sm text-gray-500">
          이미 회원이신가요?{" "}
          <Link to="/login" className="text-orange-500 font-bold no-underline">로그인</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
