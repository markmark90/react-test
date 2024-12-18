import { useState } from "react";
import "./UserForm.css";

const UserForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g. facebook"
      />
      <button type="submit">GO!</button>
    </form>
  );
};

export default UserForm;
