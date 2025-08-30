import { useSearchParams, useNavigate } from "react-router-dom";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const ref = searchParams.get("ref");

  return (
    <div>
      <h2>Contact Page</h2>
      {ref && <p>Referred from: {ref}</p>}
      <form>
        <input type="text" placeholder="Name" /><br/>
        <textarea placeholder="Message"></textarea><br/>
        <button type="submit">Send</button>
      </form>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}
