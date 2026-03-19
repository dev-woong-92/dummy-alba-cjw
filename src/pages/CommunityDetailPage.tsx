import { useParams, Link } from "react-router-dom";
import { communityPosts } from "../data/dummyData";
import type { Comment } from "../types";

const dummyComments: Comment[] = [
  { id: 1, author: "알바경험자", date: "2026-03-16", content: "정말 도움이 됐어요! 감사합니다." },
  { id: 2, author: "궁금이", date: "2026-03-16", content: "저도 비슷한 경험이 있어요. 공감해요." },
  { id: 3, author: "알바초보", date: "2026-03-17", content: "이런 정보 너무 필요했어요 😊" },
];

const categoryColorMap: Record<string, string> = {
  "알바후기": "bg-blue-50 text-blue-500",
  "알바팁": "bg-green-50 text-green-500",
  "질문": "bg-yellow-50 text-yellow-600",
  "공지": "bg-red-50 text-red-500",
};

function CommunityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const post = communityPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="mb-4 text-gray-700">게시글을 찾을 수 없습니다.</h2>
        <Link to="/community" className="text-orange-500 no-underline">목록으로</Link>
      </div>
    );
  }

  return (
    <div className="py-10 px-5">
      <div className="max-w-[800px] mx-auto">
        <Link to="/community" className="inline-block text-gray-500 no-underline text-sm mb-5 hover:text-orange-500">
          ← 목록으로 돌아가기
        </Link>

        <article className="bg-white border border-gray-200 rounded-2xl p-8 mb-6">
          <div className="mb-6">
            <span className={`inline-block px-2.5 py-[3px] rounded text-xs font-bold mb-3 ${categoryColorMap[post.category] || ""}`}>
              {post.category}
            </span>
            <h1 className="text-[22px] font-extrabold text-gray-900 mb-3">{post.title}</h1>
            <div className="flex gap-4 text-[13px] text-gray-400">
              <span>✍️ {post.author}</span>
              <span>📅 {post.date}</span>
              <span>👁 {post.views.toLocaleString()}</span>
            </div>
          </div>

          <div className="py-6 border-t border-b border-gray-100">
            <p className="text-[15px] text-gray-700 leading-[1.9] mb-4">{post.content}</p>
            <p className="text-[15px] text-gray-700 leading-[1.9] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 알바를
              시작하기 전에 꼭 알아야 할 사항들이 있습니다. 특히 근로계약서는
              반드시 작성해야 하며, 최저임금 이상을 받아야 합니다.
            </p>
            <p className="text-[15px] text-gray-700 leading-[1.9]">
              경험을 토대로 말씀드리자면, 면접 시에는 근무 시간, 급여,
              복리후생 등을 꼼꼼히 확인하시는 것이 중요합니다. 특히 4대보험
              가입 여부도 꼭 확인해보세요.
            </p>
          </div>

          <div className="flex gap-2 flex-wrap py-4">
            {post.tags.map((tag, i) => (
              <span key={i} className="text-orange-500 text-[13px] font-semibold">#{tag}</span>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer border border-gray-200 bg-white text-gray-700 transition-all hover:border-red-500 hover:text-red-500 hover:bg-red-50">❤️ 좋아요 {post.likes}</button>
            <button className="px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer border border-gray-200 bg-white text-gray-700 transition-all hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50">📤 공유</button>
          </div>
        </article>

        <div className="bg-white border border-gray-200 rounded-2xl p-7">
          <h3 className="text-base font-bold mb-5">댓글 {dummyComments.length}개</h3>

          <div className="flex gap-3 mb-6 pb-6 border-b border-gray-100">
            <textarea placeholder="댓글을 입력해주세요" rows={3} className="flex-1 p-3 border border-gray-200 rounded-lg text-sm resize-none outline-none font-[inherit] focus:border-orange-500" />
            <button className="px-5 bg-orange-500 text-white border-none rounded-lg text-sm font-semibold cursor-pointer self-end h-[42px]">등록</button>
          </div>

          <div className="flex flex-col gap-4">
            {dummyComments.map((comment) => (
              <div key={comment.id} className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {comment.author.charAt(0)}
                  </div>
                  <div>
                    <span className="text-[13px] font-bold text-gray-700 mr-2">{comment.author}</span>
                    <span className="text-xs text-gray-400">{comment.date}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityDetailPage;
