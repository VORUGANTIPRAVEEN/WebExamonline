import React, { useState } from "react";
import { Link } from "react-router-dom";
import './App.css'
export default function Header() {
  const [time, setTime] = useState("");
  var now = new Date();
  now.setMinutes(now.getMinutes() + 30);
  const enddate = new Date(now);
  console.log(enddate, "enddate");
  return (
    <div style={{ textAlign: "center", lineHeight: "30px" }}>
      <h1>Aptitude Test</h1>
      <div> Exam Start Time {Date()}</div>
      <div className="border_box">
        <ul>
          <li>You must use a functioning webcam and microphone</li>
          <li>
            No cell phones or other secondary devices in the room or test area
          </li>
          <li>
            Your desk/table must be clear or any materials except your
            test-taking device
          </li>
          <li>No one else can be in the room with you</li>
          <li>No talking </li>
          <li>
            The testing room must be well-lit and you must be clearly visible
          </li>
          <li>No dual screens/monitors</li>
          <li>Do not leave the camera </li>
          <li>No use of additional applications or internet</li>
        </ul>
      </div>
      <Link to="/user">
        <button>click me</button>
      </Link>
    </div>
  );
}
