import { useParams } from "react-router-dom";

export default function CourseInner() {
  const { id } = useParams();
  return <h1>CourseInner ID : {id}</h1>;
}
