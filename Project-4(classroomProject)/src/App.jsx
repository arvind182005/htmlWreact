import {
  FaAddressBook,
  FaArchive,
  FaAssistiveListeningSystems,
  FaBeer,
  FaBook,
  FaCalendar,
  FaCheck,
  FaFileArchive,
  FaGraduationCap,
  FaGripLines,
  FaInstagram,
  FaLinkedin,
  FaRegFileArchive,
  FaStickyNote,
  FaUser,
  FaUserMinus,
} from "react-icons/fa";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { FiAlignJustify } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { TbGridDots } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { SlArrowRight } from "react-icons/sl";
import { FaHome } from "react-icons/fa";
import { TbCircleLetterN } from "react-icons/tb";
import { TbCircleLetterC } from "react-icons/tb";
import { TbCircleLetterB } from "react-icons/tb";
import { TbCircleLetterL } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="nav-bar">
        <div className="s1">
          <div className="class-icon">
            <FiAlignJustify />
          </div>
          <div className="s2">
            <div className="class-icon">
              <SiGoogleclassroom />
            </div>

            <div className="logo">Classroom</div>

            <div className="class-icon">
              <SlArrowRight />
            </div>

            <div>To do</div>
          </div>
        </div>

        <div>
          <ul>
            <li>
              <TbGridDots />
            </li>
            <li>
              <BiLogoGmail />
            </li>
          </ul>
        </div>
      </div>

      <div className="s3">
        <div className="s4">
          <div className="s6">
            <ul>
              <div className="A1">
                <div className="s7">
                  <FaHome />
                  <li>Home</li>
                </div>
              </div>
              <div className="A2">
                <div className="s8">
                  <FaCalendar />
                  <li>Calendar</li>
                </div>
              </div>
              <div className="A3">
                <div className="s9">
                  <FaGraduationCap />
                  <li>Enrolled</li>
                </div>
              </div>
              <div className="A4">
                <div className="s10">
                  <FaBook />
                  <li>To do</li>
                </div>
              </div>
              <div className="A5">
                <div className="s11">
                  <TbCircleLetterN />
                  <li>Frontend Batch - N</li>
                </div>
              </div>
              <div className="A6">
                <div className="s12">
                  <TbCircleLetterB />
                  <li>BEGGINNER CPP - 15</li>
                </div>
              </div>
              <div className="A7">
                <div className="s13">
                  <TbCircleLetterL />
                  <li>LINUX BATCH - A1</li>
                </div>
              </div>
              <div className="A8">
                <div className="s14">
                  <TbCircleLetterC />
                  <li>C LOGICAL BATCH A59</li>
                </div>
              </div>
              <div className="A9">
                <div className="s15">
                  <FaArchive />
                  <li>Archived classes</li>
                </div>
              </div>
              <div className="A10">
                <div className="s16">
                  <IoSettingsOutline />
                  <li>Settings</li>
                </div>
              </div>
            </ul>
          </div>
        </div>

        <div className="card-container">

        <div className="class-card">
         {/* TOP */}
  <div className="card-top">
    <h2>Frontend BATCH - N</h2>
    <p>REGex Software</p>

    {/* Avatar */}
    <div className="avatar">R</div>
  </div>

  {/* MIDDLE (empty space like classroom) */}
  <div className="card-body"></div>

  {/* BOTTOM */}
  <div className="card-bottom">
    <span>📷</span>
    <span>📁</span>
    <span>⋮</span>
  </div>
        </div>

        <div className="class-card">
         {/* TOP */}
  <div className="card-top">
    <h2>Frontend BATCH - N</h2>
    <p>REGex Software</p>

    {/* Avatar */}
    <div className="avatar">R</div>
  </div>

  {/* MIDDLE (empty space like classroom) */}
  <div className="card-body"></div>

  {/* BOTTOM */}
  <div className="card-bottom">
    <span>📷</span>
    <span>📁</span>
    <span>⋮</span>
  </div>
        </div>

        <div className="class-card">
         {/* TOP */}
  <div className="card-top">
    <h2>Frontend BATCH - N</h2>
    <p>REGex Software</p>

    {/* Avatar */}
    <div className="avatar">R</div>
  </div>

  {/* MIDDLE (empty space like classroom) */}
  <div className="card-body"></div>

  {/* BOTTOM */}
  <div className="card-bottom">
    <span>📷</span>
    <span>📁</span>
    <span>⋮</span>
  </div>
        </div>

        <div className="class-card">
         {/* TOP */}
  <div className="card-top">
    <h2>Frontend BATCH - N</h2>
    <p>REGex Software</p>

    {/* Avatar */}
    <div className="avatar">R</div>
  </div>

  {/* MIDDLE (empty space like classroom) */}
  <div className="card-body"></div>

  {/* BOTTOM */}
  <div className="card-bottom">
    <span>📷</span>
    <span>📁</span>
    <span>⋮</span>
  </div>
        </div>

        <div className="class-card">
         {/* TOP */}
  <div className="card-top">
    <h2>Frontend BATCH - N</h2>
    <p>REGex Software</p>

    {/* Avatar */}
    <div className="avatar">R</div>
  </div>

  {/* MIDDLE (empty space like classroom) */}
  <div className="card-body"></div>

  {/* BOTTOM */}
  <div className="card-bottom">
    <span>📷</span>
    <span>📁</span>
    <span>⋮</span>
  </div>
        </div>

        <div className="class-card">
         {/* TOP */}
  <div className="card-top">
    <h2>Frontend BATCH - N</h2>
    <p>REGex Software</p>

    {/* Avatar */}
    <div className="avatar">R</div>
  </div>

  {/* MIDDLE (empty space like classroom) */}
  <div className="card-body"></div>

  {/* BOTTOM */}
  <div className="card-bottom">
    <span>📷</span>
    <span>📁</span>
    <span>⋮</span>
  </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
