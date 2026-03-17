import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobDetailPage from "./pages/JobDetailPage";
import CompaniesPage from "./pages/CompaniesPage";
import CompanyDetailPage from "./pages/CompanyDetailPage";
import ResumePage from "./pages/ResumePage";
import ResumeCreatePage from "./pages/ResumeCreatePage";
import CommunityPage from "./pages/CommunityPage";
import CommunityDetailPage from "./pages/CommunityDetailPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MyPage from "./pages/MyPage";
import NotFoundPage from "./pages/NotFoundPage";
import TestPage from "./pages/TestPage";
import Gogo from "./pages/Gogo";
import Gogogo from "./pages/Gogogo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 인증 페이지 (레이아웃 없음) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/gogo" element={<Gogo />} />
        <Route path="/gogo/hi" element={<Gogogo />} />
        <Route path="/go" element={<Gogo />} />

        {/* 공통 레이아웃 적용 */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          {/* 알바 공고 */}
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetailPage />} />

          {/* 기업 */}
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/companies/:id" element={<CompanyDetailPage />} />

          {/* 이력서 */}
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/resume/create" element={<ResumeCreatePage />} />

          {/* 커뮤니티 */}
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/:id" element={<CommunityDetailPage />} />

          {/* 마이페이지 */}
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/applied" element={<MyPage tab="applied" />} />
          <Route path="/mypage/saved" element={<MyPage tab="saved" />} />
          <Route path="/mypage/resume" element={<MyPage tab="resume" />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
