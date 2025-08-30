import { useParams, useNavigate } from "react-router-dom";

export default function User() {
  const { username } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>User Page</h2>
      <p>Username: {username}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
    