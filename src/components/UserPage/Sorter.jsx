import SortButton from "components/UserPage/SortButton";

export default function Sorter({ hook, typeOfUser }) {
  return (
    <section className="section-sorter">
      <SortButton target="courses" hook={hook}>
        Courses
      </SortButton>
      {typeOfUser === "teacher" && (
        <SortButton target="students" hook={hook}>
          Students
        </SortButton>
      )}
    </section>
  );
}
