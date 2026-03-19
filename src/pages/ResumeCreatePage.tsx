import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const inputClass = "px-3.5 py-[11px] border border-gray-200 rounded-lg text-sm outline-none transition-colors text-gray-900 bg-white focus:border-orange-500";
  const textareaClass = "w-full px-3.5 py-3 border border-gray-200 rounded-lg text-sm outline-none resize-y font-[inherit] transition-colors text-gray-900 box-border focus:border-orange-500";

  return (
    <div className="py-10 px-5">
      <div className="max-w-[760px] mx-auto">
        <div className="mb-8">
          <h1 className="text-[26px] font-extrabold text-gray-900 mb-2">이력서 작성</h1>
          <p className="text-sm text-gray-500">정확한 정보를 입력할수록 채용 기회가 높아져요</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-7">
            <h3 className="text-base font-bold text-gray-900 mb-5 pb-3 border-b-2 border-gray-100">이력서 제목</h3>
            <input
              type="text"
              name="title"
              placeholder="예) 외식업 지원용 이력서"
              value={form.title}
              onChange={handleChange}
              className={inputClass + " w-full"}
            />
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-7">
            <h3 className="text-base font-bold text-gray-900 mb-5 pb-3 border-b-2 border-gray-100">기본 정보</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-700">이름 *</label>
                <input type="text" name="name" placeholder="홍길동" value={form.name} onChange={handleChange} className={inputClass} required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-700">생년월일 *</label>
                <input type="date" name="birth" value={form.birth} onChange={handleChange} className={inputClass} required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-700">연락처 *</label>
                <input type="tel" name="phone" placeholder="010-0000-0000" value={form.phone} onChange={handleChange} className={inputClass} required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-700">이메일</label>
                <input type="email" name="email" placeholder="example@email.com" value={form.email} onChange={handleChange} className={inputClass} />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[13px] font-semibold text-gray-700">주소</label>
                <input type="text" name="address" placeholder="서울특별시 강남구" value={form.address} onChange={handleChange} className={inputClass} />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-7">
            <h3 className="text-base font-bold text-gray-900 mb-5 pb-3 border-b-2 border-gray-100">학력</h3>
            <select name="education" value={form.education} onChange={handleChange} className={inputClass + " w-full"}>
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

          <div className="bg-white border border-gray-200 rounded-2xl p-7">
            <h3 className="text-base font-bold text-gray-900 mb-5 pb-3 border-b-2 border-gray-100">경력 사항</h3>
            <textarea name="career" placeholder="근무한 회사명, 기간, 담당 업무 등을 적어주세요" value={form.career} onChange={handleChange} className={textareaClass} rows={4} />
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-7">
            <h3 className="text-base font-bold text-gray-900 mb-5 pb-3 border-b-2 border-gray-100">자기소개</h3>
            <textarea name="intro" placeholder="나를 표현할 수 있는 내용을 자유롭게 작성해주세요 (최소 100자 이상 권장)" value={form.intro} onChange={handleChange} className={textareaClass} rows={6} />
            <div className="text-right text-xs text-gray-400 mt-1.5">{form.intro.length}자</div>
          </div>

          <div className="flex gap-3 justify-end">
            <button type="button" onClick={() => navigate("/resume")} className="px-7 py-3 bg-white border border-gray-200 rounded-[10px] text-[15px] font-semibold text-gray-700 cursor-pointer hover:border-gray-400">
              취소
            </button>
            <button type="submit" className="px-8 py-3 bg-orange-500 text-white border-none rounded-[10px] text-[15px] font-bold cursor-pointer hover:bg-orange-600">
              이력서 저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResumeCreatePage;
