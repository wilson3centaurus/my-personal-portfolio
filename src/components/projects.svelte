<style>
  .container {
    background-color: lightblue;
    max-width: 100%;
  }
/* Card container */
  .card {
    display: flex;
    border-radius: 0.75rem;
    max-width: 90%;
    border-radius: 8px;
    padding: 10px;
    margin: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: rgb(131, 193, 255);
  }

  /* Left side (API interface) */
  .left-side {
    flex: 1;
    padding-right: 16px;
    width: 192px;
    height: 396px;
    position: relative;
  }

  .api-header {
    color: #3182ce;
    font-weight: bold;
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 40px;
  }
  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px #cfc1c1 solid;
    border-radius: 6px;
  }
  /* Right side (project card) */
  .right-side {
    flex: 1;
    padding-left: 16px;
  }
  .project-info,
  .areas-info {
    display: flex;
    margin-bottom: 6px;
  }
  .project-info .icon i {
    font-size: 40px;
    cursor: pointer;
  }
  .project-info-heading {
    color: #3182ce;
    font-size: 18px;
    margin-right: 20px;
  }
  .icon {
    margin-right: 8px;
    color: #333;
  }

  .project-description p {
    font-size: 16px;
    color: #666;
    text-align: left;
  }

  .project-buttons {
    margin-top: 16px;
    display: flex;
    align-items: center;
  }
  .project-btn-icon {
    margin-right: 3px;
  }
  .view-button {
    background-color: #3182ce;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: large;
    margin-right: 5px;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    width: 100px;
    display: flex;
  }
  .view-button:hover {
    opacity: 0.8;
  }
</style>

<div class="container py-8">
  <!-- ====== Project 1 ===== -->
  <div class="card">
      <div class="left-side">
          <img class="project-image project-image1" src="../public/images/projects/background (3).jpg" alt="" width="192" height="256">
      </div>

      <div class="right-side">
          <div class="api-header">Automated Toll Gate System</div>
          <div class="project-info">
              
              <div class="project-info-heading">Made with: </div>
              <div class="icon">
                  <i class="devicon-javascript-plain colored"></i>
              </div>
              <div class="icon">
                  <i class="devicon-nodejs-plain-wordmark colored"></i>
              </div>
              <div class="icon">
                  <i class="devicon-express-original-wordmark"></i>
              </div>
              <div class="icon">
                  <i class="devicon-mysql-plain-wordmark colored"></i>
              </div>
          </div>
          <div class="project-description">
              <p class="project-description">
                  An automated toll gate system designed to streamline the process of toll collection on highways and roads. It utilizes JavaScript, Node.js, Express, MySQL, and Arduino for seamless functionality.
              </p>
          </div>
          <div class="project-buttons">
              <a href="google.com" class="view-button" target="_blank">
                  <img class=" bi bi-youtube project-btn-icon" src="images/live.png" alt="" width="20" height="20">
                  Live
              </a>
              <a href="github.com" class="view-button" target="_blank">
                  <img class="bi bi-github project-btn-icon" src="images/github.png" alt="" width="20px" height="auto">
                  Code
              </a>
          </div>
      </div>
  </div>

  <!-- ====== Project 2 ===== -->
  <div class="card">
      <div class="left-side">
          <img class="project-image project-image1" src="../public/images/projects/background (3).jpg" alt="" width="192" height="256">
      </div>

      <div class="right-side">
          <div class="api-header">Substance Sentry</div>
          <div class="project-info">
              
              <div class="project-info-heading">Made with: </div>
              <div class="icon">
                  <i class="devicon-javascript-plain colored"></i>
              </div>
              <div class="icon">
                  <i class="devicon-nodejs-plain-wordmark colored"></i>
              </div>
              <div class="icon">
                  <i class="devicon-express-original-wordmark"></i>
              </div>
              <div class="icon">
                  <i class="devicon-mysql-plain-wordmark colored"></i>
              </div>
          </div>
          <div class="project-description">
              <p class="project-description">
                  An automated toll gate system designed to streamline the process of toll collection on highways and roads. It utilizes JavaScript, Node.js, Express, MySQL, and Arduino for seamless functionality.
              </p>
          </div>
          <div class="project-buttons">
              <a href="google.com" class="view-button" target="_blank">
                  <img class=" bi bi-youtube project-btn-icon" src="images/live.png" alt="" width="20" height="20">
                  Live
              </a>
              <a href="github.com" class="view-button" target="_blank">
                  <img class="bi bi-github project-btn-icon" src="images/github.png" alt="" width="20px" height="auto">
                  Code
              </a>
          </div>
      </div>
  </div>

  <!-- ====== Project 3 ===== -->
  <div class="card">
      <div class="left-side">
          <img class="project-image project-image1" src="../public/images/projects/background (3).jpg" alt="" width="192" height="256">
      </div>

      <div class="right-side">
          <div class="api-header">Classic Rock Paper Scissors</div>
          <div class="project-info">
              
              <div class="project-info-heading">Made with: </div>
              <div class="icon">
                  <i class="devicon-javascript-plain colored"></i>
              </div>
              <div class="icon">
                  <i class="devicon-nodejs-plain-wordmark colored"></i>
              </div>
              <div class="icon">
                  <i class="devicon-express-original-wordmark"></i>
              </div>
              <div class="icon">
                  <i class="devicon-mysql-plain-wordmark colored"></i>
              </div>
          </div>
          <div class="project-description">
              <p class="project-description">
                  An automated toll gate system designed to streamline the process of toll collection on highways and roads. It utilizes JavaScript, Node.js, Express, MySQL, and Arduino for seamless functionality.
              </p>
          </div>
          <div class="project-buttons">
              <a href="google.com" class="view-button" target="_blank">
                  <img class=" bi bi-youtube project-btn-icon" src="images/live.png" alt="" width="20" height="20">
                  Live
              </a>
              <a href="github.com" class="view-button" target="_blank">
                  <img class="bi bi-github project-btn-icon" src="images/github.png" alt="" width="20px" height="auto">
                  Code
              </a>
          </div>
      </div>
  </div>

  <!-- ====== Project 4 ===== -->
  <div class="card">
      <div class="left-side">
          <img class="project-image project-image1" src="../public/images/projects/background (3).jpg" alt="" width="192" height="256">
      </div>

      <div class="right-side">
          <div class="api-header">Smart Todo List </div>
          <div class="project-info">
              
              <div class="project-info-heading">Made with: </div>
              <div class="icon">
                  <i class="devicon-javascript-plain colored"></i>
              </div>
              <div class="icon">
                  <i class="devicon-nodejs-plain-wordmark colored"></i>
              </div>
              <div class="icon">
                  <i class="devicon-express-original-wordmark"></i>
              </div>
              <div class="icon">
                  <i class="devicon-mysql-plain-wordmark colored"></i>
              </div>
          </div>
          <div class="project-description">
              <p class="project-description">
                  An automated toll gate system designed to streamline the process of toll collection on highways and roads. It utilizes JavaScript, Node.js, Express, MySQL, and Arduino for seamless functionality.
              </p>
          </div>
          <div class="project-buttons">
              <a href="google.com" class="view-button" target="_blank">
                  <img class=" bi bi-youtube project-btn-icon" src="images/live.png" alt="" width="20" height="20">
                  Live
              </a>
              <a href="github.com" class="view-button" target="_blank">
                  <img class="bi bi-github project-btn-icon" src="images/github.png" alt="" width="20px" height="auto">
                  Code
              </a>
          </div>
      </div>
  </div>
</div>