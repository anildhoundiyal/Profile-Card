import React from "react";

function ProfileCard({ name, role, avatarUrl }) {
  const handleClick = () => {
    alert("Hello from " + name);
  };

  const cardStyle = {
    width: "260px",
    height: "260px",

    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(5, 4, 4, 0.1)",
    textAlign: "center",
    fontFamily: "Arial",
  };

  const avatarStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "12px",
  };

  const nameStyle = {
    fontSize: "20px",
    fontWeight: "600",
    margin: "8px 0",
  };

  const roleStyle = {
    fontSize: "14px",
    color: "gray",
  };

  const buttonStyle = {
    marginTop: "12px",
    padding: "8px 16px",
    border: "none",
    borderRadius: "8px",
    background: "#4f46e5",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <img src={avatarUrl} alt={name} style={avatarStyle} />
      <h2 style={nameStyle}>{name}</h2>
      <h4 style={roleStyle}>{role}</h4>

      <button style={buttonStyle} onClick={handleClick}>
        Say Hello
      </button>
    </div>
  );
}

export default ProfileCard;
