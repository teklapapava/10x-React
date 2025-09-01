import { useState, useEffect } from "react";

export default function UserProfileFetcher() {
  const [userData, setUserData] = useState(null); 
  const [isLoading, setIsLoading] = useState(false); 
  const [isError, setIsError] = useState(false); 
  const [refreshTrigger, setRefreshTrigger] = useState(false); 

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch("https://randomuser.me/api/");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setUserData(data.results[0]); 
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [refreshTrigger]); 

  return (
    <div style={{ padding: "20px" }}>
      <h1>Random User Profile</h1>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Failed to fetch user data. Please try again.</p>}

      {userData && !isLoading && !isError && (
        <div>
          <img src={userData.picture.large} alt="User" />
          <p>
            Name: {userData.name.title} {userData.name.first} {userData.name.last}
          </p>
          <p>Email: {userData.email}</p>
        </div>
      )}

      <button onClick={() => setRefreshTrigger(!refreshTrigger)}>
        Fetch New User
      </button>
    </div>
  );
}
