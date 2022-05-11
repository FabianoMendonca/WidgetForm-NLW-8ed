import { prisma } from "../../prisma";
import {
  FeedbackRepository,
  FeedbackRepositoryData,
} from "../feedback-repository";

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create(data: FeedbackRepositoryData) {
    await prisma.feedback.create({
      data: {
        type: data.type,
        comment: data.comment,
        screenshot: data.screenshot,
      },
    });
  }
}
