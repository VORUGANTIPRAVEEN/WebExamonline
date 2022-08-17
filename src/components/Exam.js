import React, { useState } from "react";
import "./Exam.css";
import Webcam from "react-webcam";
import data from "./test.json";
export default function Exam() {
  const [num, setnum] = useState(1);
  const [count, setcount] = useState(0);
  const [selected ,setselected]=useState("");
  console.log(count);
  console.log(selected)
  return (
    <div className="fill_window" >
      <div className="left_list">
        <div>
          {data.map((Q, id) => {
            if (num === parseInt(Q.id)) {
              return (
                <div className="q_div" key={id}>
                  {Q.id} .{Q.qus}
                  {Q.options.map((val, index) => {
                    return (
                      <div key={index}>
                        <input
                          type="checkbox"
                          value={val}
                          onClick={(e) => setselected(e.target.value)}
                        />
                        {val}
                      </div>
                    );
                  })}
                </div>
              );
            }
          })}
        </div>
        <div className="btn_div">
          <button className="next_btn" onClick={(e) => setnum(num + 1)}>
            Next question
          </button>
        </div>
      </div>
      <div className="right_list">
        <div>
          <Webcam className="webcam" />
        </div>
        <div className="q_numbers">
          {data.map((val, index) => {
            return (
              <button key={index} onClick={(e) => setnum(val.id)}>
                {val.id}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
