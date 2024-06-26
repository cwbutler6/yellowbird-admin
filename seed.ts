/**
 * ! Executing this script will delete all data in database and seed it with intro lesson.
 * Use any TypeScripts runner to run this script, for example: `npx tsx seed.ts` 
 * Learn more about the Seed Client by following guide: https://docs.snaplet.dev/seed/getting-started
 */
/*import "./envConfig";
import { createSeedClient } from "@snaplet/seed";
import { v4 as uuid } from "uuid";

const introUserId = uuid();
const introCourseId = uuid();
const introLessonId = uuid();

const main = async () => {
  const seed = await createSeedClient({ dryRun: true });

  // Truncate all tables in the database
  await seed.$resetDatabase();

  // Create intro user
  await seed.users([{
    id: introUserId,
    email: "samantha@yellowbird.com",
    encrypted_password: "passwordEncrypted",
    raw_user_meta_data: {
      full_name: "Samantha Taylor",
      organization: "Yellowbird",
      avatar_url: "https://s3-alpha-sig.figma.com/img/a122/e47f/b96ab35580fed3a624bcb755939a3c62?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EIUIc~dbpR4tIFVwqgN9ulbJ1-7lVD-MsAT0U-8GS7m6ciSZfSiniq77WOqMeehB~Sfawgo9~5czRW3bzCdPplpbenWE8hAQMx0s-i18JKUEbRihdJjJJBA1HOwNonPCSgcf1QSx0xVv460P8sxMICU7073lAkM8hcecYJeC8Zf02ZKeg064PkxJtg8dVjOHeXYi8CJVpYu4uHMAqtlz9iHqeFJU7OCNW7V6SWa62cr1f1cZS80bYH84JQ6~H79srNAcFCG7JX1kboZ7N5FlcAeC2QyybQ31t8TR3cErUdqK5D5vWJoNRObJoHhtRTIDZCxpz3bZSSYkfZasYvwcZA__"
    }
  }]);

  // Create intro course with intro lesson
  await seed.courses([{
    id: introCourseId,
    title: "Intro to Yellowbird",
    description: "You will learn the difference between a credit card and a debit card. They look the same, but have different purposes.",
    cover_photo_url: "https://loremflickr.com/640/480/creditcard",
    created_by: introUserId,
    status: "PUBLISHED",
    active_lessons: 1,
    archived_lessons: 0,
    draft_lessons: 0,
    is_intro: true,
    lessons: [{
      id: introLessonId,
      title: "Intro to Yellowbird",
      description: "You will learn the difference between a credit card and a debit card. They look the same, but have different purposes.",
      author: introUserId,
      order: 0,
      status: "PUBLISHED",
      tags: ["intro"],
      lesson_blocks: [{
        question: null,
        order: 0,
        type: "TEXT",
        screen_content: "Underwriting is an evaluation done by the insurance company to see if it’s worth the risk of providing insurance coverage. In other words, can the insurance company make money from the policy?"
      }, {
        question: null,
        type: "MEDIA",
        order: 1,
        media_url: "https://loremflickr.com/640/480/creditcard",
        screen_content: "Some screens will have new words. User can tap the highlighted word to reveal a card overlay."
      }, {
        type: "CHOICE",
        order: 2,
        question: "A bear market is when the market is showing a steady decline over a period of 30-days?",
        answer_options: ["True", "False"],
        answers: ["True"],
        points: 10
      }],
    }]
  }]);

  process.exit();
};

main();*/