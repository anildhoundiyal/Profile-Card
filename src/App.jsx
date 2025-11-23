import React from "react";
import ProfileCard from "./component/ProfileCard";
import {people} from "./userdata/people";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      
      {people.map((person) => (
          <ProfileCard
            key={person.id}
            name={person.name}
            role={person.role}
            avatarUrl={person.avatarUrl}
          />
          ))}
    </div>
  );
}

export default App;


