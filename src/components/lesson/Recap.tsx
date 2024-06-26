"use client";

import { useCallback } from "react";
import Card from "../Card";
import Title from "../Title";
import useFocusParam from "../hooks/useFocusParam";
import useUrlParam from "../hooks/useUrlParam";
import MarkdownEditor from "../MarkdownEditor";
import MDEditor from '@uiw/react-md-editor';
import EmptyLessonBlock from "./EmptyLessonBlock";
import clsx from "clsx";
import { Lesson } from "@/requests/lesson";

export default function LessonRecap(props: { lesson?: Lesson }) {
  const { isFocused, enableFocus } = useFocusParam("recap");
  const { value, setValue } = useUrlParam("recapDescription", props.lesson?.recap ?? "");
  const onChange = useCallback((value?: string) => setValue(value), [setValue]);

  return (
    <Card className="flex flex-col mt-[12px] mb-8" focused={isFocused} onClick={enableFocus} disableDrag>
      <Title title="Lesson Recap" />
      <h6 className="text-textBody text-[20px] mb-[16px]">A quick review of what was learned</h6>
      
      <div className={clsx(!isFocused && "hidden")}>
        <MarkdownEditor value={value} onChange={onChange} name="recap" />
      </div>

      {!isFocused && value && <MDEditor.Markdown source={value} />}
      {!isFocused && !value && <EmptyLessonBlock />}
    </Card>
  );
}
