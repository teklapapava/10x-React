import { useSearchParams } from "react-router-dom";

export default function About() {
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  return (
    <div>
      <h2>About Page</h2>
      <p>This project is a React Router homework example.</p>
      {topic && <p>Topic: {topic}</p>}
    </div>
  );
}
