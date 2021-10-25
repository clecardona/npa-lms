//@ts-nocheck
//NPM PAckages
import { useState } from "react";

//Local imports
import { useAuth } from "state/AuthProvider";
import Identificator from "components/shared/Identificator";
import Sorter from "components/shared/Sorter";
import CoursesList from "components/CoursesList";
import StudentProfile from "components/StudentProfile";

export default function Student() {
  // Global state
  const { user } = useAuth();

  //Local state
  const [selection, setSelection] = useState("courses");

  return (
    <main className="page-teacher">
      <Identificator username={user.username} role={user.role} />
      <Sorter hook={[selection, setSelection]} typeOfUser={user.role} />
      {selection === "courses" && <CoursesList />}
      {selection === "profile" && <StudentProfile />}
    </main>
  );
}
