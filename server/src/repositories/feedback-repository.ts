export interface FeedbackRepositoryData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackRepository {
  create: (data: FeedbackRepositoryData) => Promise<void>;
}
