// This has an unncesary no check decorator (decorator = a comment that actually changes the behaviour of the IDE, usually start with @)
//@ts-nocheck
//Local Files
import CoursesList from "components/UserPage/CoursesList";

export default function Student() {
  return (
    <main className="page-teacher">
      <h2 className="head-title">Courses </h2>
      <CoursesList />
    </main>
  );
}
