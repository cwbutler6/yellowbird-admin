import { useCallback, useMemo } from "react";
import useLessonBlocks from "../hooks/useLessonBlocks";
import ChoiceOption from "./ChoiceOption";
import { generateLessonBlockName } from "@/utils/common";
import { LessonBlock } from "@/requests/lesson";


export default function LessonBlockOptions(
  { block, multiple, readOnly=false, options=[] }:
  { block: LessonBlock, multiple?: boolean, options?: string[], readOnly?: boolean }
) {
  const answers = useMemo(() => block.answers as string[] ?? [], [block.answers]);
  const { updateBlock } = useLessonBlocks(block);
  const updateAnswer = updateBlock("answers");
  const updateAnswerOptions = updateBlock("answer_options");

  const onOptionChange = useCallback((index: number) => (option: string) => {
    options[index] = option;
    updateAnswerOptions(options);
  }, [options, updateAnswerOptions]);

  const removeOption = useCallback((index: number) => () => {
    updateAnswerOptions(options.filter((_, i) => i !== index));
  }, [options, updateAnswerOptions]);

  const onSelectedChange = useCallback((option: string) => (selected: boolean) => {
    if (multiple) {
      if (selected && answers.indexOf(option) === -1) updateAnswer([...answers, option]);
      else updateAnswer(answers.filter((answer) => answer !== option));
    }
    else {
      if (selected && answers[0] !== option) updateAnswer([option]);
      else updateAnswer([]);
    }
  }, [updateAnswer, answers, multiple]);

  const isChecked = useCallback((option: string) => {
    if (multiple) return answers.indexOf(option) !== -1;
    return answers[0] === option;
  }, [answers, multiple]);

  return (
    <div className="flex flex-col">
      {options?.map((option, index) => (
        <ChoiceOption
          key={index}
          id={`${block.id}-${index}`}
          option={option}
          type={(multiple) ? "checkbox" : "radio"}
          checked={isChecked(option as string)}
          onOptionChange={onOptionChange(index)}
          onSelectedChange={onSelectedChange(option as string)}
          onRemove={removeOption(index)}
          readOnly={readOnly}
        />
      ))}

      {!readOnly && (<>
        <input type="hidden" name={generateLessonBlockName(block, "answer_options")} value={JSON.stringify(options)} />
        <input type="hidden" name={generateLessonBlockName(block, "answers")} value={JSON.stringify(answers)} />
      </>)}
    </div>
  );
}
