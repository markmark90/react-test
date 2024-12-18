import "./UserDetails.css";

const UserDetails = ({ user, repos, onReset }) => {
  if (!user) return null;

  return (
    <div className="details-container">
      <img src={user.avatar_url} alt={`${user.login} avatar`} />
      <h2>{user.name || user.login}</h2>
      <p>
        <strong>Location:</strong> {user.location || "N/A"}
      </p>
      <p>
        <strong>Bio:</strong> {user.bio || "N/A"}
      </p>
      <h3>Repositories:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default UserDetails;
