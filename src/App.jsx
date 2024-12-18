import { useState, useEffect } from "react";
import UserForm from "./components/UserForm/UserForm";
import UserDetails from "./components/UserDetails/UserDetails";

const App = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      if (!username) return;

      try {
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`
        );
        const userData = await userResponse.json();
        setUser(userData);

        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, [username]);

  const handleFormSubmit = (name) => {
    setUsername(name);
  };

  const handleReset = () => {
    setUsername("");
    setUser(null);
    setRepos([]);
  };

  return (
    <div className="container">
      <p>GitHub username:</p>
      {!user && (
        <>
          <UserForm onSubmit={handleFormSubmit} />
        </>
      )}
      {user && <UserDetails user={user} repos={repos} onReset={handleReset} />}
    </div>
  );
};

export default App;
