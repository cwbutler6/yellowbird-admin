import { fetchCourse } from "@/requests/course";
import Button from "@/components/Button";
import Image from "next/image";
import BackSvg from "@/svgs/arrow-left.svg";
import EmptyBox from "@/images/EmptyBox.png";
import Plus from "@/svgs/plus.svg";
import CourseLessonList from "@/components/CourseLessonList";

interface CourseDetailProps {
  params: { id: string };
}

export default async function CourseDetail(props: CourseDetailProps) {
  return (
    <div className="max-w-[1032px] mx-auto w-full mb-7 flex flex-col grow relative">
      <div className="mt-12 flex flex-row items-center justify-between mb-7">
        <Button
          buttonClassName="!w-[160px] bg-white border-[1px] py-2 px-3 flex flex-row items-center justify-between rounded-[6px]"
          isLink
          href="/"
          textClassName="text-textBody"
          label={(
            <div className="flex flex-row py-1 items-center justify-between">
              <Image src={BackSvg} alt="Go Back" className="mr-2" />
              <span>
                Back to Courses
              </span>
            </div>
          )}
        />

        <Button
          label="New Lesson"
          isLink
          buttonClassName="!w-[116px]"
          href={`/lesson/addLesson/${props.params.id}`}
        />
      </div>
      
      <CourseContent courseId={props.params.id} />
    </div>
  );
}

async function CourseContent(props: { courseId: string; }) {
  const course = await fetchCourse(props.courseId);
  const hasLessons = course?.lessons && course?.lessons.length > 0;

  return (
    <div className="flex flex-row grow">
      <div className="flex flex-col bg-white w-[296px] rounded-[8px] mr-[55px] border-borderBg p-5 items-center">
        <div className="flex flex-col items-center bg-brand rounded-[6px] w-[180px] h-[180px] mb-4">
          {course?.cover_photo_url && (
            <Image
              src={course.cover_photo_url}
              alt="Course Cover"
              width={180}
              height={180}
              className="rounded-[6px] w-[180px] h-[180px]"
              priority
            />
          )}
        </div>

        <div className="flex flex-col mb-9 w-full">
          <div className="flex flex-row items-center justify-between">
            <span className="text-[24px] font-bold text-headlineText">
              {course?.title}
            </span>

            <Button
              isLink 
              label="Edit" 
              buttonClassName="!w-[55px] h-[28px] rounded-[24px] bg-white border border-grey" 
              textClassName="text-[12px] text-textBody" 
            />
          </div>

          <span className="font-[14px] mb-7">
            {course?.description}
          </span>

          <div className="flex flex-row items-center justify-between mb-4">
            <span>Active Lessons</span>
            <span>{course?.active_lessons ?? 0}</span>
          </div>

          <div className="flex flex-row items-center justify-between mb-4">
            <span>Draft Lessons</span>
            <span>{course?.draft_lessons ?? 0}</span>
          </div>

          <div className="flex flex-row items-center justify-between mb-4">
            <span>Archived Lessons</span>
            <span>{course?.archived_lessons ?? 0}</span>
          </div>

          <Button
            buttonClassName="!bg-actionLink !bg-opacity-[0.08]"
            textClassName="w-full"
            label={(
              <div className="flex flex-row items-center">
                <Image src={Plus} alt="Add course recap" className="mr-2" />
                <span className="text-actionLink">Add course recap</span>
              </div>
            )}
          />
        </div>
      </div>

      <div className="flex flex-col grow items-center mt-4">
        {(hasLessons) ? <CourseLessonList lessons={course.lessons as any} /> : (
          <div className="flex flex-col items-center">
            <Image src={EmptyBox} alt="No lessons" />
            <span className="text-textBody font-bold text-[30px]">
              Nothing to see here!
            </span>
            <span className="mb-8">
              There aren&apos;t any lessons that have been added to this course. You can be the first!
            </span>
            <Button
              isLink
              label="Create New Lesson"
              buttonClassName="!w-[160px]"
              href={`/lesson/addLesson/${props.courseId}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
