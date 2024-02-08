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
            <p>All writing</p>
            <p className="unfocused">Infrequent thoughts on design and code.</p>
          </div>
        </div>
      </div>    
      
      
    );
  }
  
  export default Home;