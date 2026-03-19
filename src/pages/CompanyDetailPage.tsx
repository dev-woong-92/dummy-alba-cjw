import { useParams, Link } from "react-router-dom";
import { companies, jobs } from "../data/dummyData";

function CompanyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const company = companies.find((c) => c.id === Number(id));
  const companyJobs = jobs.filter((j) => j.company === company?.name);

  if (!company) {
    return (
      <div className="text-center py-20">
        <h2 className="mb-4">기업을 찾을 수 없습니다.</h2>
        <Link to="/companies" className="text-orange-500">목록으로</Link>
      </div>
    );
  }

  return (
    <div className="py-10 px-5">
      <div className="max-w-[900px] mx-auto flex flex-col gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 flex gap-6 items-start">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center text-white text-[32px] font-black shrink-0">{company.name.charAt(0)}</div>
          <div>
            <span className="text-xs text-orange-500 font-semibold mb-1.5 block">{company.industry}</span>
            <h1 className="text-2xl font-extrabold mb-3">{company.name}</h1>
            <div className="flex gap-4 text-sm text-gray-500 mb-3">
              <span>📍 {company.location}</span>
              <span>👥 {company.employeeCount}</span>
              <span>⭐ {company.rating}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {company.welfare.map((w, i) => (
                <span key={i} className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-semibold">🎁 {w}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-7">
          <h3 className="text-[17px] font-bold mb-4 pb-3 border-b-2 border-gray-100">기업 소개</h3>
          <p className="text-sm text-gray-700 leading-[1.8]">{company.description}</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-7">
          <h3 className="text-[17px] font-bold mb-4 pb-3 border-b-2 border-gray-100">현재 채용 중인 알바 ({companyJobs.length}건)</h3>
          {companyJobs.length > 0 ? (
            <div className="flex flex-col gap-2">
              {companyJobs.map((job) => (
                <Link key={job.id} to={`/jobs/${job.id}`} className="flex justify-between items-center px-4 py-3.5 bg-gray-50 rounded-lg no-underline text-gray-900 transition-colors hover:bg-orange-50">
                  <div className="text-sm font-semibold">{job.title}</div>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>{job.location}</span>
                    <span>{job.salary}</span>
                    <span>마감 {job.deadline}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">현재 진행 중인 채용이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanyDetailPage;
