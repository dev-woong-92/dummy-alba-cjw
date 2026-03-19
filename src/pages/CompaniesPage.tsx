import { Link } from "react-router-dom";
import { companies } from "../data/dummyData";

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <span className="text-amber-500 text-sm">
      {"★".repeat(Math.floor(rating))}
      {"☆".repeat(5 - Math.floor(rating))}
      <span className="text-gray-700 text-[13px] ml-1.5 font-semibold">{rating}</span>
    </span>
  );
}

function CompaniesPage() {
  return (
    <div className="py-10 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8">
          <h1 className="text-[28px] font-extrabold text-gray-900 mb-2">기업 정보</h1>
          <p className="text-gray-500 text-[15px]">믿을 수 있는 기업들의 알바 공고를 확인해보세요</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {companies.map((company) => (
            <Link
              key={company.id}
              to={`/companies/${company.id}`}
              className="bg-white border border-gray-200 rounded-2xl p-7 no-underline text-gray-900 transition-all flex gap-5 items-start hover:border-orange-500 hover:shadow-[0_8px_24px_rgba(249,115,22,0.1)] hover:-translate-y-0.5"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-[14px] flex items-center justify-center text-white text-2xl font-black shrink-0">{company.name.charAt(0)}</div>
              <div className="flex-1">
                <div className="text-[11px] text-orange-500 font-semibold mb-1">{company.industry}</div>
                <div className="text-[17px] font-bold mb-2">{company.name}</div>
                <StarRating rating={company.rating} />
                <div className="flex flex-col gap-1 text-xs text-gray-500 my-2.5">
                  <span>📍 {company.location}</span>
                  <span>👥 {company.employeeCount}</span>
                </div>
                <div>
                  <span className="inline-block px-2.5 py-1 bg-orange-50 text-orange-500 rounded-full text-xs font-bold">
                    채용 중 {company.openJobs}건
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompaniesPage;
