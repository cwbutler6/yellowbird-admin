import InputField from "../InputField";
import { ChangeEvent, useCallback } from "react";
import useLessonBlocks from "../hooks/useLessonBlocks";
import { LessonBlock } from "@/requests/lesson";

export default function QuestionInput({ block, name }: { block: LessonBlock, name?: string }) {
  const { updateBlock } = useLessonBlocks(block);
  const updateQuestion = updateBlock("question");

  const onQuestionChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    updateQuestion(e.target.value);
  }, [updateQuestion]);

  return (
    <InputField
      id={name}
      label="Question"
      placeholder="Ask your question here..."
      containerClass="mb-4"
      defaultValue={block.question as string}
      onChange={onQuestionChange}
    />
  );
}
