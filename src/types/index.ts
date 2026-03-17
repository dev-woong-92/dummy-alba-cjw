// ===== 알바 공고 =====
export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  period: string;
  workDays: string;
  workTime: string;
  deadline: string;
  tags: string[];
  isUrgent: boolean;
  isNew: boolean;
  thumbnail: string | null;
  description: string;
  requirements: string[];
  welfare: string[];
}

// ===== 기업 =====
export interface Company {
  id: number;
  name: string;
  industry: string;
  location: string;
  employeeCount: string;
  rating: number;
  openJobs: number;
  logo: string | null;
  description: string;
  welfare: string[];
}

// ===== 커뮤니티 =====
export interface CommunityPost {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  views: number;
  comments: number;
  likes: number;
  content: string;
  tags: string[];
}

// ===== 카테고리 =====
export interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
}

// ===== 지역 =====
export interface Region {
  id: number;
  name: string;
  count: number;
}

// ===== 이력서 =====
export interface Resume {
  id: number;
  title: string;
  name: string;
  updatedAt: string;
  isDefault: boolean;
  views: number;
}

// ===== 지원 현황 =====
export interface AppliedJob {
  id: number;
  jobTitle: string;
  company: string;
  appliedDate: string;
  status: string;
  statusColor: string;
}

// ===== 댓글 =====
export interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
}

// ===== 찜한 알바 =====
export interface SavedJob {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  deadline: string;
}
