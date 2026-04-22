import { SiGoogledrive } from "react-icons/si";
import { FaPlus } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { CiHardDrive } from "react-icons/ci";
import { FaComputer } from "react-icons/fa6";
import { MdFolderShared } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { RiSpam2Line } from "react-icons/ri";
import { IoTrashBin } from "react-icons/io5";
import { TiCloudStorageOutline } from "react-icons/ti";
import { MdOutlineOfflinePin } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";
import { CgMenuGridO, CgProfile } from "react-icons/cg";
import './App.css'

function App() {
  return (
    <div className='parent'>

      {/* HEADER */}
      
      <div className='header'>
        <div className="logo">
            <SiGoogledrive />
            Drive
          </div>
        <input className="search-box" type="text" placeholder="Search in Drive" />

        <div className="icons">
          <button><MdOutlineOfflinePin /></button>
          <button><BiSupport /></button>
          <button><IoSettingsOutline /></button>
          <button><RiGeminiFill /></button>
          <button><CgMenuGridO /></button>
          <button><CgProfile /></button>
        </div>
      </div>

      {/* BODY */}
      <div className="container">

        {/* SIDEBAR */}
        <div className="sidebar">
          

          <button className="new-btn">
            <FaPlus /> New
          </button>

          <ul className="list">
            <li><button className="list-items"><IoHomeOutline /> Home</button></li>
            <li><button className="list-items"><CiHardDrive /> My Drive</button></li>
            <li><button className="list-items"><FaComputer /> Computers</button></li>
            <li><button className="list-items"><MdFolderShared /> Shared with me</button></li>
            <li><button className="list-items"><FaRegClock /> Recent</button></li>
            <li><button className="list-items"><CiStar /> Starred</button></li>
            <li><button className="list-items"><RiSpam2Line /> Spam</button></li>
            <li><button className="list-items"><IoTrashBin /> Bin</button></li>
            <li><button className="list-items"><TiCloudStorageOutline /> Storage</button></li>
            <li><button className="list-items">14.1 GB of 5 TB used</button></li>
          </ul>

          <div className="storage-bar">
         <div className="storage-fill"></div>
           </div> 

          {/* Bottom Button */}
          <button className="bottom-btn">Get more storage</button>
        </div>

        {/* MAIN CONTENT */}
        <div className="main">

  <h2>Welcome to Drive</h2>

  <div className="cards">

    <div className="card">
      <div className="thumb"></div>
      <p>BEGINNER CPP</p>
      <span>You opened • 16 Apr</span>
    </div>

    <div className="card">
      <div className="thumb"></div>
      <p>video.mp4</p>
      <span>You opened • 20 Mar</span>
    </div>

    <div className="card">
      <div className="thumb"></div>
      <p>Notes.pdf</p>
      <span>You opened • 10 Apr</span>
    </div>

    <div className="card">
      <div className="thumb"></div>
      <p>Project.zip</p>
      <span>You opened • 5 Apr</span>
    </div>

    <div className="card">
      <div className="thumb"></div>
      <p>DSA Lecture</p>
      <span>You opened • 1 Apr</span>
    </div>

    <div className="card">
      <div className="thumb"></div>
      <p>Image.png</p>
      <span>You opened • 28 Mar</span>
    </div>

    <div className="card">
      <div className="thumb"></div>
      <p>Image.png</p>
      <span>You opened • 28 Mar</span>
    </div>

    <div className="card">
      <div className="thumb"></div>
      <p>Image.png</p>
      <span>You opened • 28 Mar</span>
    </div>

    <div className="card">
      <div className="thumb"></div>
      <p>Image.png</p>
      <span>You opened • 28 Mar</span>
    </div>

    <div className="card">
      <div className="thumb"></div>
      <p>Image.png</p>
      <span>You opened • 28 Mar</span>
    </div>

    <div className="card">
      <div className="thumb"></div>
      <p>Image.png</p>
      <span>You opened • 28 Mar</span>
    </div>
    <div className="card">
      <div className="thumb"></div>
      <p>Image.png</p>
      <span>You opened • 28 Mar</span>
    </div>

  </div>

</div>
      </div>
    </div>
  )
}

export default App;