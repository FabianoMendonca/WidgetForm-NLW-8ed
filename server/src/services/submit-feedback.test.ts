import { SubmitFeedback } from "./submit-feedback";

describe("submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    const submitFeedback = new SubmitFeedback(
      { create: async () => {} },
      { sendMail: async () => {} }
    );

    await expect(
      submitFeedback.execute({
        type: "",
        comment: "",
        screenshot: "",
      })
    ).resolves.not.toThrow();
  });
});
