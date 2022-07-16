import React,{useState,useEffect} from 'react';
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai";
import {BiBook,BiMessageSquareDots} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import ToolTip from "@mui/material/Tooltip"
import "./nav.css"
const Nav = () => {

    const [activeNav,setActiveNav]=useState("#");
    useEffect(()=>{
        const callback1 = entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                
                setActiveNav("#")
              }
            });
          };
          const callback2 = entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                
                setActiveNav("#about")
              }
            });
          };
          const callback3 = entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                
                setActiveNav("#contact")
              }
            });
          };
          // const callback4 = entries => {
          //   entries.forEach(entry => {
          //     if (entry.isIntersecting) {
                
          //       setActiveNav("#services")
          //     }
          //   });
          // };
          const callback5 = entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                
                setActiveNav("#experience")
              }
            });
          };
          const callback6 = entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                
                setActiveNav("")
              }
            });
          };
 
          const options = { threshold: 0.6 };
          const observer1 = new IntersectionObserver(callback1, options);
          const observer2 = new IntersectionObserver(callback2, options);
          const observer3 = new IntersectionObserver(callback3, options);
          //const observer4 = new IntersectionObserver(callback4, options);
          const observer5 = new IntersectionObserver(callback5, options);
          const observer6 = new IntersectionObserver(callback6, options);
         
          const target1 = document.querySelector("#home");
          const target2 = document.querySelector("#about");
          const target3 = document.querySelector("#contact");
          //const target4 = document.querySelector("#services");
          const target5 = document.querySelector("#experience");
          const target6 = document.querySelector("#portfolio");
          observer1.observe(target1)
          observer2.observe(target2)
          observer3.observe(target3)
          //observer4.observe(target4)
          observer5.observe(target5)
          observer6.observe(target6)
         
    })
    
    return (
        <nav>
           <a onClick={()=>setActiveNav("#")} href="#" className={activeNav==="#"?"active":""}><ToolTip title="home"><AiOutlineHome/></ToolTip></a> 
           <a onClick={()=>setActiveNav("#about")} href="#about" className={activeNav==="#about"?"active":""}><ToolTip title="about"><AiOutlineUser/></ToolTip></a> 
           <a onClick={()=>setActiveNav("#experience")}  href="#experience" className={activeNav==="#experience"?"active":""}><ToolTip title="experience"><BiBook/></ToolTip></a> 
           <a onClick={()=>setActiveNav("#services")} href="#services" className={activeNav==="#services"?"active":""}><ToolTip title="services"><RiServiceLine/></ToolTip></a> 
           <a onClick={()=>setActiveNav("#contact")} href="#contact" className={activeNav==="#contact"?"active":""}><ToolTip title="contact"><BiMessageSquareDots/></ToolTip></a> 
        </nav>
    );
}

export default Nav;
