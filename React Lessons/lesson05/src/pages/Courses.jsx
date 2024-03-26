import { Link } from "react-router-dom";

export default function Courses() {
  const courses = [
    {
      id: "1",
      name: "Javascript",
    },
    {
      id: "2",
      name: "React",
    },
    {
      id: "3",
      name: "C#",
    },
    {
      id: "4",
      name: "C++",
    },
    {
      id: "5",
      name: "Java",
    },
  ];
  return (
    <ul>
      {courses.map((course) => {
        return (
          <li key={course.id}>
            <Link to={`/courses/category/${course.name}`}>{course.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
