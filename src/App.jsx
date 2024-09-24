import Navbar from './Components/navBar/Navbar'
import './App.css'
import { FaReact, FaVuejs, FaCss3Alt, FaHtml5, FaLinkedin, FaGithub, } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { GoLink } from "react-icons/go";
import Contact from './Components/Contact/contact';
import About from './Components/About me/about';


function App() {


  return (
    <>
      <section className='gen-margin'>
        {/* NAVBAR */}
        <Navbar />
        {/* HERO SECTION */}
        <section className='home-section'>
          <div className='slide-in-1'>
            <h1 className='name-intro'>Hi, I'm ANATAKU AMEERAH</h1>
            <p className='frontend'>A Frontend Developer.</p>
            <p className='what-i-do'>I build interactive and functional websites helping clients and designers bring their dream websites to life. A website is more than just lines of code, its a means of telling a story. Let me help you tell that story.</p>
            <div className='logo-cont'>
              <div>
                <p className='logo-cont-text'>FIND ME IN</p>
                <div className='icon-cont'>
                  <div > <a className='icon' href="https://www.linkedin.com/in/ameerah-anataku/" target="_blank" rel="noopener noreferrer"> <FaLinkedin color="#0F0529" /> </a> </div>
                  <div ><a className='icon' href="https://x.com/AAnataku85696" target="_blank" rel="noopener noreferrer"> <FaXTwitter color="#0F0529" /> </a></div>
                  <div><a className='icon' href="https://www.linkedin.com/in/ameerah-anataku/" target="_blank" rel="noopener noreferrer"> <FaGithub color="#0F0529" /> </a></div>

                </div>
              </div>
              <div>
                <p className='logo-cont-text'>BEST SKILL ON</p>
                <div className='icon-cont'>
                  <div className='icon' >< FaReact color="#0F0529" /></div>
                  <div className='icon'><FaVuejs color="#0F0529" /></div>
                  <div className='icon'><FaCss3Alt color="#0F0529" /></div>
                  <div className='icon'>  <FaHtml5 color="#0F0529" /></div>
                  <div className='icon'> <BiLogoTypescript color="#0F0529" /> </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className='pfp' width={400} height={500} src="./IMG_4681-Edit.jpg" alt="" />
          </div>
        </section>
        {/* ABOUT */}
        {/* <About /> */}
        {/* MY PROJECTS */}
        <section id='project'>
          <h2 className='project-head'>MY PROJECTS</h2>
          <div className='grid'>
            <div className='project-card'>
              <img className='test' src="./campusdash.png" alt="" />
              <div className='card-head'>
                <h6>CAMPUSDASH</h6>
                <div className='project-icon'>
                  <a href="https://github.com/CampusDash/CampusDash-website" target="_blank" rel="noopener noreferrer"> <FaGithub color="black" /> </a>
                  <a href="https://campus-dash-website.vercel.app/" target="_blank" rel="noopener noreferrer"> <GoLink color="black" /> </a>
                </div>
              </div>
              <p className='card-p'> A Landing page built with React for a startup showcasing their services with well written Vanilla Css code.From school items to sweetsnacks; everything you need on campus can be found here.</p>
            </div>
            <div className='project-card'>
              <img className='test' src="./chatter-pic.png" alt="" />
              <div className='card-head'>
                <h6>CHATTER</h6>
                <div className='project-icon'>
                <a href="https://github.com/AnatakuAmeerah/CHATTERPROJECT" target="_blank" rel="noopener noreferrer"> <FaGithub color="black" /> </a>
                <a href="https://chatter-capstome.netlify.app/landing" target="_blank" rel="noopener noreferrer"> <GoLink color="black" /> </a>
                  </div>
              </div>
              <p className='card-p'>A Chat app built with React and Typescript that allows you to tell a story through posts with the help of Chakra UI, and track the analytics of each post.</p>
            </div>
            <div className='project-card'>
              <img className='test' src="./hng.png" alt="" />
              <div className='card-head'>
                <h6>LABELLUXE</h6>
                <div className='project-icon'>
                <a href="https://github.com/AnatakuAmeerah/HNG-INTERNSHIP-TASK-2" target="_blank" rel="noopener noreferrer"> <FaGithub color="black" /> </a>
                <a href="https://hng-internship-task-2.vercel.app/" target="_blank" rel="noopener noreferrer"> <GoLink color="black" /> </a>
                   </div>
              </div>
              <p className='card-p'>An E-commerse website built with react showcasing everything and anything fashion from clothes to shoes.</p>
            </div>
            <div className='project-card'>
              <img className='test' src="./calculator.png" alt="" />
              <div className='card-head'>
                <h6>CALCULATOR</h6>
                <div className='project-icon'>
                <a href="https://github.com/AnatakuAmeerah/circle-35-assignment-02" target="_blank" rel="noopener noreferrer"> <FaGithub color="black" /> </a>
                <a href="https://dmystical-coder.github.io/circle-35-assignment-02/" target="_blank" rel="noopener noreferrer"> <GoLink color="black" /> </a>
                </div>
              </div>
              <p className='card-p' >A Calculator app built with Html Css and Javascript that helps making basic arithmetic calculations simple. Equipped with a light and dark made feature.</p>
            </div>
            <div className='project-card'>
              <img className='test' src="./Todo.png" alt="" />
              <div className='card-head'>
                <h6> TODO APP</h6>
                <div className='project-icon'> 
                <a href="https://github.com/AnatakuAmeerah/TODO-VUE-app" target="_blank" rel="noopener noreferrer"> <FaGithub color="black" /> </a>
                <a href="https://todo-vue-app-gamma.vercel.app/" target="_blank" rel="noopener noreferrer"> <GoLink color="black" /> </a>
                </div>
              </div>
              <p className='card-p'> Keep track of your goals using this todo App built with Vue.</p>
            </div>
          </div>
        </section>
        {/* EXPERIENCE */}
        <section id='education'>
          <h1 className='project-head'>EDUCATION</h1>
          <div className='education'>
            <div className='education-sub'>
              <h4 className='education-sub-h4'>ALTSCHOOL AFRICA</h4>
              <div className='education-sub-p1'>LAGOS NIGERIA</div>
            </div>
            <div className='education-sub'>
              <h6 className='education-sub-h6'>Frontend Engineering Diploma</h6>
              <div className='education-sub-p'>March 2023 - March 2024</div>
            </div>
          </div>
          <div className='education'>
            <div className='education-sub'>
              <h4 className='education-sub-h4'>OLABISI ONABANJO UNIVERSITY</h4>
              <div className='education-sub-p1'>OGUN STATE</div>
            </div>
            <div className='education-sub'>
              <h6 className='education-sub-h6'> Bachelor of Pharmacy</h6>
              <p className='education-sub-p'>May 2023 - Till date</p>
            </div>
          </div>
          <div className='education'>
            <div className='education-sub'>
              <h4 className='education-sub-h4'>AIR FORCE SECONDARY SCHOOL</h4>
              <div className='education-sub-p1'>LAGOS STATE</div>
            </div>
            <div className='education-sub'>
              <h6 className='education-sub-h6'> Leaving School Certificate</h6>
              <p className='education-sub-p'>May 2023 - Till date</p>
            </div>
          </div>

        </section>
        {/* Contact */}
        <section id='contact' className='contact'>
          <h1 className='project-head'>CONTACT ME</h1>
          <Contact />
        </section>
      </section>

    </>
  )
}

export default App
