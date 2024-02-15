import React from "react";
import { Link } from 'react-router-dom';
function Home() {
    return (
      <div>
        <p>Aseem Chopra</p>
        <br/>
        <p><em>Making systems work in creative ways.</em> Securing infrastructures.</p> <p>Identifying vulnerabilities, exploiting them and suggesting patches. Experimenting and creating frictionless user experiences in Research and Development.<br/><br/> Security Engineer at <a href="https://vouch.io" target="_blank" rel="noopener noreferrer">Vouch.</a> </p>
        <div class="grid-container">
          <div class="grid-item">
            <p className="unfocused-column-name">Projects</p>
            <a href="https://github.com/aseemchopra25/go-tls13" target="_blank" rel="noopener noreferrer">TLS 1.3<span className="arrow">↑</span></a>
            <p className="unfocused">Simple implementation of TLS 1.3 from scratch in Golang</p>
            <a href="https://github.com/aseemchopra25/react-earth" target="_blank" rel="noopener noreferrer">React-Earth <span className="arrow">↑</span></a>
            <p className="unfocused">3D earth using ReactJS, ThreeJS and React-Three-Fiber</p>
          </div>
          <div class="grid-item">
            <p className="unfocused-column-name">Writing</p>
            {/* <p>React Hook Getter Pattern</p>
            <p className="unfocused">Simple, efficient React state hook in 50 lines.</p>
            <p>Redesign 2021</p>
            <p className="unfocused">Return to simplicity.</p> */}
            <Link to="/blog">All Writing</Link>
            <p className="unfocused">Infrequent thoughts on security and code.</p>
          </div>
        </div>
        <br/>
        <p>Now</p>
        <br/>
        <p>All I want to do is to build secure architecture and break it down. I want to focus on simplicity and minimalism in design. Frictionless user experience is the name of the game. </p>
        <p>Doing boulder problems and beatboxing in my free time.</p>
        <br/>
        <br/>
        <p>Connect</p>
        <p>Reach me at <a href="mailto:aseemchopra@protonmail.com">aseemchopra@protonmail</a></p>
      </div>    
    );
  }
  
  export default Home;