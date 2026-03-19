import { useState } from "react";
import { Link } from "react-router-dom";
import { communityPosts } from "../data/dummyData";

const CATEGORIES = ["전체", "알바후기", "알바팁", "질문", "공지"] as const;
type Category = (typeof CATEGORIES)[number];

const categoryColorMap: Record<string, string> = {
  "알바후기": "bg-blue-50 text-blue-500",
  "알바팁": "bg-green-50 text-green-500",
  "질문": "bg-yellow-50 text-yellow-600",
  "공지": "bg-red-50 text-red-500",
};

function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("전체");

  const filtered =
    activeCategory === "전체"
      ? communityPosts
      : communityPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="py-10 px-5">
      <div className="max-w-[900px] mx-auto">
        <div className="mb-8">
          <h1 className="text-[26px] font-extrabold text-gray-900 mb-2">커뮤니티</h1>
          <p className="text-gray-500 text-sm">알바 경험을 나누고 유용한 정보를 얻어가세요</p>
        </div>

        <div className="flex flex-col">
          <div className="flex border-b-2 border-gray-200 mb-5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-3 border-none bg-transparent text-sm font-semibold cursor-pointer border-b-[3px] -mb-[2px] transition-colors ${activeCategory === cat ? "text-orange-500 border-orange-500" : "text-gray-500 border-transparent hover:text-orange-500"}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex justify-end mb-4">
            <button className="px-5 py-2.5 bg-orange-500 text-white border-none rounded-lg text-sm font-semibold cursor-pointer hover:bg-orange-600">✏️ 글쓰기</button>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
            {filtered.map((post) => (
              <Link
                key={post.id}
                to={`/community/${post.id}`}
                className="flex items-center gap-3.5 px-5 py-4 border-b border-gray-100 last:border-b-0 no-underline text-gray-900 transition-colors hover:bg-orange-50"
              >
                <span className={`px-2.5 py-[3px] rounded text-[11px] font-bold whitespace-nowrap shrink-0 ${categoryColorMap[post.category] || ""}`}>
                  {post.category}
                </span>
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1">{post.title}</div>
                  <div className="flex gap-2.5 text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="flex gap-3 text-xs text-gray-400 shrink-0">
                  <span>👁 {post.views.toLocaleString()}</span>
                  <span>💬 {post.comments}</span>
                  <span>❤️ {post.likes}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-2">
            <button className="w-9 h-9 border border-gray-200 bg-white rounded-lg text-sm cursor-pointer hover:border-orange-500 hover:text-orange-500">‹</button>
            {[1, 2, 3, 4, 5].map((p) => (
              <button
                key={p}
                className={`w-9 h-9 border rounded-lg text-sm cursor-pointer ${p === 1 ? "bg-orange-500 text-white border-orange-500" : "bg-white border-gray-200 hover:border-orange-500 hover:text-orange-500"}`}
              >
                {p}
              </button>
            ))}
            <button className="w-9 h-9 border border-gray-200 bg-white rounded-lg text-sm cursor-pointer hover:border-orange-500 hover:text-orange-500">›</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
