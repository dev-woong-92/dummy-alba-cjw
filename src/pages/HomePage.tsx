import { Link } from "react-router-dom";
import { jobs, categories, regions, communityPosts } from "../data/dummyData";
import type { Job } from "../types";

interface JobCardProps {
  job: Job;
}

function JobCard({ job }: JobCardProps) {
  return (
    <Link to={`/jobs/${job.id}`} className="block bg-white border border-gray-200 rounded-xl p-5 no-underline text-gray-900 transition-all relative hover:border-orange-500 hover:shadow-[0_6px_20px_rgba(249,115,22,0.1)]">
      {job.isUrgent && <span className="inline-block px-2 py-0.5 rounded bg-red-50 text-red-500 text-[11px] font-bold mr-1 mb-2">급구</span>}
      {job.isNew && <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-500 text-[11px] font-bold mr-1 mb-2">NEW</span>}
      <div className="text-xs text-gray-500 mb-1">{job.company}</div>
      <div className="text-[15px] font-bold mb-2.5 leading-tight">{job.title}</div>
      <div className="flex flex-col gap-1 text-[13px] text-gray-700 mb-2.5">
        <span>📍 {job.location}</span>
        <span>💰 {job.salary}</span>
      </div>
      <div className="flex flex-wrap gap-1 mb-2.5">
        {job.tags.map((tag, i) => (
          <span key={i} className="inline-block px-2 py-0.5 bg-orange-50 text-orange-500 rounded-full text-[11px] font-semibold">{tag}</span>
        ))}
      </div>
      <div className="text-xs text-gray-400">마감 {job.deadline}</div>
    </Link>
  );
}

const categoryColorMap: Record<string, string> = {
  "알바후기": "bg-blue-50 text-blue-500",
  "알바팁": "bg-green-50 text-green-500",
  "질문": "bg-yellow-50 text-yellow-600",
  "공지": "bg-red-50 text-red-500",
};

function HomePage() {
  return (
    <div>
      {/* 히어로 배너 */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-400 to-orange-200 py-20 px-5 text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-5xl font-black mb-4 leading-tight md:text-[32px]">
            대한민국 <span className="bg-white text-orange-500 px-3 py-0.5 rounded-lg">No.1</span><br />
            아르바이트 플랫폼
          </h1>
          <p className="text-lg mb-10 opacity-90">
            지금 바로 내 조건에 맞는 알바를 찾아보세요
          </p>
          <div className="flex justify-center gap-[60px] mb-10 md:gap-[30px]">
            <div className="flex flex-col items-center">
              <strong className="text-[28px] font-black">82,341</strong>
              <span className="text-[13px] opacity-85 mt-1">진행 중인 공고</span>
            </div>
            <div className="flex flex-col items-center">
              <strong className="text-[28px] font-black">3,241,000</strong>
              <span className="text-[13px] opacity-85 mt-1">등록 회원</span>
            </div>
            <div className="flex flex-col items-center">
              <strong className="text-[28px] font-black">98%</strong>
              <span className="text-[13px] opacity-85 mt-1">만족도</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Link to="/jobs" className="px-10 py-3.5 bg-white text-orange-500 no-underline rounded-full text-base font-bold transition-all shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]">알바 찾기</Link>
            <Link to="/resume/create" className="px-10 py-3.5 bg-transparent text-white no-underline rounded-full text-base font-bold border-2 border-white/80 transition-colors hover:bg-white/15">이력서 등록</Link>
          </div>
        </div>
      </section>

      {/* 직종 카테고리 */}
      <section className="py-[60px] px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[22px] font-extrabold text-gray-900">직종별 알바</h2>
            <Link to="/jobs" className="text-orange-500 no-underline text-sm font-semibold hover:underline">전체보기 →</Link>
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-3">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/jobs?category=${cat.name}`} className="flex flex-col items-center gap-1.5 py-5 px-2.5 bg-white border border-gray-200 rounded-xl no-underline transition-all hover:border-orange-500 hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(249,115,22,0.12)]">
                <span className="text-[28px]">{cat.icon}</span>
                <span className="text-[13px] font-semibold text-gray-700">{cat.name}</span>
                <span className="text-[11px] text-orange-500 font-semibold">{cat.count.toLocaleString()}건</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 추천 알바 */}
      <section className="py-[60px] px-5 bg-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[22px] font-extrabold text-gray-900">🔥 인기 알바</h2>
            <Link to="/jobs" className="text-orange-500 no-underline text-sm font-semibold hover:underline">전체보기 →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* 지역별 알바 */}
      <section className="py-[60px] px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[22px] font-extrabold text-gray-900">📍 지역별 알바</h2>
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-3">
            {regions.map((region) => (
              <Link key={region.id} to={`/jobs?region=${region.name}`} className="flex flex-col items-center gap-1.5 py-5 px-2.5 bg-white border border-gray-200 rounded-xl no-underline transition-all hover:border-orange-500 hover:bg-orange-50">
                <span className="text-[15px] font-bold text-gray-700">{region.name}</span>
                <span className="text-xs text-orange-500 font-semibold">{region.count.toLocaleString()}건</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 커뮤니티 미리보기 */}
      <section className="py-[60px] px-5 bg-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[22px] font-extrabold text-gray-900">💬 커뮤니티</h2>
            <Link to="/community" className="text-orange-500 no-underline text-sm font-semibold hover:underline">전체보기 →</Link>
          </div>
          <div className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200">
            {communityPosts.slice(0, 4).map((post) => (
              <Link key={post.id} to={`/community/${post.id}`} className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 last:border-b-0 no-underline text-gray-900 transition-colors hover:bg-orange-50">
                <span className={`px-2 py-0.5 rounded text-[11px] font-bold whitespace-nowrap shrink-0 ${categoryColorMap[post.category] || ""}`}>{post.category}</span>
                <span className="flex-1 text-sm font-medium">{post.title}</span>
                <span className="flex gap-3 text-xs text-gray-400 shrink-0">
                  <span>👁 {post.views.toLocaleString()}</span>
                  <span>💬 {post.comments}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 앱 다운로드 배너 */}
      <section className="bg-gray-800 py-10 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center md:flex-col md:gap-5 md:text-center">
            <div>
              <h3 className="text-white text-xl font-bold mb-2">📱 알바몬 앱으로 더 편하게!</h3>
              <p className="text-gray-400 text-sm">언제 어디서나 알바 찾기, 앱으로 더 빠르게</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg text-sm font-semibold cursor-pointer transition-colors hover:bg-gray-600">App Store</button>
              <button className="px-6 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg text-sm font-semibold cursor-pointer transition-colors hover:bg-gray-600">Google Play</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
