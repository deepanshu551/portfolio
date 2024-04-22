import React,{useState,useEffect} from 'react';
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai";
import {BiBook,BiMessageSquareDots} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import ToolTip from "@mui/material/Tooltip"
import "./nav.css"
const Nav = () => {

    const [activeNav,setActiveNav]=useState("#home");
    useEffect(()=>{
        const callback = entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                console.log("entry",entry.target.id)
                setActiveNav(`#${entry.target.id}`)
              }
            });
          };

 
          const options = { threshold: 0.5 };
          const observer1 = new IntersectionObserver(callback, options);
         
          const target1 = document.querySelector("#home");
          const target2 = document.querySelector("#about");
          const target3 = document.querySelector("#contact");
          const target4 = document.querySelector("#portfolio");
          const target5 = document.querySelector("#experience");
          observer1.observe(target1)
          observer1.observe(target2)
          observer1.observe(target3)
          observer1.observe(target4)
          observer1.observe(target5)
         
    })
    
    return (
        <nav>
           <a onClick={()=>setActiveNav("#home")} href="#home" className={activeNav==="#home"?"active":""}><ToolTip title="home"><AiOutlineHome/></ToolTip></a> 
           <a onClick={()=>setActiveNav("#about")} href="#about" className={activeNav==="#about"?"active":""}><ToolTip title="about"><AiOutlineUser/></ToolTip></a> 
           <a onClick={()=>setActiveNav("#experience")}  href="#experience" className={activeNav==="#experience"?"active":""}><ToolTip title="experience"><BiBook/></ToolTip></a> 
           <a onClick={()=>setActiveNav("#services")} href="#portfolio" className={activeNav==="#portfolio"?"active":""}><ToolTip title="portfolio"><RiServiceLine/></ToolTip></a> 
           <a onClick={()=>setActiveNav("#contact")} href="#contact" className={activeNav==="#contact"?"active":""}><ToolTip title="contact"><BiMessageSquareDots/></ToolTip></a> 
        </nav>
    );
}

export default Nav;
