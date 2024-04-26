<script>
  import {Router, Route, Link} from 'svelte-routing'
  import Contact from './components/Contact.svelte';
  import Home from './components/Home.svelte';
  import About from './components/About.svelte';
  import Projects from './components/projects.svelte';
  import Education from './components/education.svelte';
  import Skills from './components/skills.svelte';
 
</script>
<Router>
  <nav class="flex justify-between shadow p-4 nav-bar">
    <div><a href="/"><span class="flex font-bold text-lg text-slate-800 logo" style="">
      <img src="../public/images/astronaut (1).png" alt="" width=35>
      Wilson Centaurus
    </span></a></div>
    <div class="space-x-6">
     <Link to="/" class="active:text-blue-500">Home</Link> 
   <Link to="/about" class="active:text-blue-500">About Me</Link>
   <Link to="/projects" class="active:text-blue-500">Projects</Link> 
   <Link to="/skills" class="active:text-blue-500">Skills</Link> 
   <Link to="/education" class="active:text-blue-500">Education</Link>
   <Link to="/contact" class="active:text-blue-500">Contact</Link>
    </div>
    <div></div>
    </nav>

    <style>
      footer {
        background-color: #111827;
        height: 130px;
      }
      .line {
      }
      .nav-bar {
        background-color: #111827;
        color: #336699;
      }
      .logo {
        color: white;
        font-size: 21px;
        margin-bottom: -8px
      }
      .logo img {
        margin-right: 5px;
      }
      .text {
        color: #2c3e50;
        margin-top: -10px;
      }
      .icons {
        margin-top: -16px;
        font-size: 20px;
      }
      .icon {
        background-color: #8392a5;
        color: #111827;
        font-size: 20px;
        padding: 10px;
        border-radius: 5px;
      }
      .icon:hover {
        color: whitesmoke;
      }
    </style>

  <Route path="/"><Home/></Route>
  <Route path="/about"><About/></Route>
  <Route path="/contact"><Contact/></Route>
  <Route path="/projects"><Projects/></Route>
  <Route path="/skills"><Skills/></Route>
  <Route path="/education"><Education/></Route>

<footer class="text-center p-3">
  <div class="line border-t-2 border-white-100 mx-[20%] mb-5"></div>
  <h3 class="text-2xl mb-5 text">Connect with me</h3>
  <div class="p-3  icons">
    <a href="https://github.com/wilson3centaurus"><span class="bi bi-github icon"></span></a>
    <a href=""><span class="bi bi-linkedin icon"></span></a>
    <a href=""><span class="bi bi-twitter icon"></span></a>
    <a href=""><span class="bi bi-facebook icon"></span></a>
    <a href=""><span class="bi bi-whatsapp icon"></span></a>
  </div>
</footer>

</Router>