import { useParams } from "react-router-dom";

export default function CategoryInner() {
  const { name } = useParams();
  return <h1>Category name is : {name}</h1>;
}
