import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";

export default function Logout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <>
      {!isModalOpen && <Button onClick={handleLogoutClick}>Log out </Button>}
      {/* <BiPowerOff /> */}

      {isModalOpen && (
        <div className="logout-dialog" style={{ marginTop: "-5px" }}>
          <div className="dialog-content">
            <p style={{ color: "white" }}>Are you sure you want to log out?</p>
            <div style={{ marginTop: "5px", marginLeft: "20%" }}>
              <button onClick={handleClick}>Log Out</button>
              <button
                onClick={() => handleCloseModal(false)}
                style={{ marginLeft: "20%" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
