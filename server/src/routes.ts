import nodemailer from "nodemailer";
import express from "express";
import { prisma } from "./prisma";
import { PrismaFeedbackRepository } from "./repositories/prisma/prismaFeedbackRepository";
import { SubmitFeedback } from "./services/submit-feedback";
import { nodeMailerAdapter } from "./adapter/nodemailer/nodeMailerAdapter";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const nodemailerAdapter = new nodeMailerAdapter();

  const submitFeedback = new SubmitFeedback(
    prismaFeedbackRepository,
    nodemailerAdapter
  );

  await submitFeedback.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
