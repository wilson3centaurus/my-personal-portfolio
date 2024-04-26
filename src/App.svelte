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
    <div><a href="/"><span class=" font-bold text-lg text-slate-800 logo" style="">Wilson Centaurus</span></a></div>
    <div class="space-x-6">
     <Link to="/">Home</Link> 
     <Link to="/about">About Me</Link>
     <Link to="/projects">Projects</Link> 
     <Link to="/skills">Skills</Link> 
     <Link to="/education">Education</Link>
     <Link to="/contact">Contact</Link> 
    </div>
    <div></div>
    </nav>

    <style>
      footer {
        background-color: #111827;
        height: 150px;
      }
      .nav-bar {
        background-color: #111827;
        color: #336699;
      }
      .logo {
        color: white;
      }
      .text {
        color: #2c3e50;
      }
      .icons {
        margin-top: -10px;
        font-size: 20px;
      }
      .icon {
        background-color: #8392a5;
        color: #111827;
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
      <div class="border-t-2 border-white-100 mx-[20%] mb-5"></div>
      <h3 class="text-2xl mb-5 text">Connect with me</h3>
      <div class="p-3  icons">
        <a href="https://github.com/wilson3centaurus" class="bg-gray-100 text-gray-500 p-3 rounded-lg text-2xl hover:text-slate-800 icon"><span class=" bi bi-github"></span></a>
        <a href="https://www.linkedin.com/in/kundai-chifwafwa-091b75262" class="bg-gray-100 text-gray-500 p-3 rounded-lg text-2xl hover:text-slate-800 icon" ><span class="bi bi-linkedin"></span></a>
        <a href="" class="bg-gray-100 text-gray-500 p-3 rounded-lg text-2xl hover:text-slate-800 icon" ><span class="bi bi-twitter"></span></a>
        <a href="" class="bg-gray-100 text-gray-500 p-3 rounded-lg text-2xl hover:text-slate-800 icon" ><span class="bi bi-facebook"></span></a>
        <a href="" class="bg-gray-100 text-gray-500 p-3 rounded-lg text-2xl hover:text-slate-800 icon" ><span class="bi bi-whatsapp"></span></a>
      </div>
    </footer>
</Router>