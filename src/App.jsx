import Navbar from './Components/navBar/Navbar'
import './App.css'
import { FaReact, FaVuejs, FaCss3Alt, FaHtml5, FaLinkedin, FaGithub, } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaLessThan, FaLinkSlash, FaXTwitter, FaGreaterThan, } from "react-icons/fa6";
import { GoLink, GoLinkExternal } from "react-icons/go";
import Footer from './Components/Footer/footer';
import Contact from './Components/Contact/contact';
import About from './Components/About me/about';
import { RxSlash } from 'react-icons/rx';
import { useState } from 'react';
import { ReviewsSection } from './Components/Testimonials/ReviewSection';
// import EventRegistrationButton from './Components/btn/btn';


function App() {
  const [activeSection, setActiveSection] = useState("");
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(section.id); // Update the active section state
      }
    });
  });

  return (
    <>

      {/* NAVBAR */}
      <Navbar />
      <section className='gen-margin'>
        {/* <EventRegistrationButton/> */}
        {/* HERO SECTION */}
        <section className='home-section'>
          <div className='slide-in-'>
            <p className='name-intro'>Hi, I'm <br /> ANATAKU AMEERAH</p>
            <p className='frontend'> <FaLessThan />A Frontend Developer<RxSlash /><FaGreaterThan /></p>
            <p className='what-i-do'>I build interactive and functional websites helping clients and designers bring their dream websites to life. A website is more than just lines of code, its a means of telling a story. Let me help you tell that story.</p>
            <div className='btn-collab-view'>
              <button className='btn-collab' >Lets Collaborate</button>
              <button className='btn-view'
              >View my work</button>
            </div>
            <div className='logo-cont'>
              {/* <div>
                <p className='logo-cont-text'>FIND ME ON</p>
                <div className='icon-cont'>
                  <div > <a className='icon' href="https://www.linkedin.com/in/ameerah-anataku/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a> </div>
                  <div ><a className='icon' href="https://x.com/AAnataku85696" target="_blank" rel="noopener noreferrer"> <FaXTwitter /> </a></div>
                  <div><a className='icon' href="https://github.com/AnatakuAmeerah" target="_blank" rel="noopener noreferrer"> <FaGithub /> </a></div>

                </div>
              </div> */}
              <div>
                <p className='logo-cont-text'>BEST SKILL ON</p>
                <div className='icon-cont'>
                  <div className='icon' >< FaReact color="white" /></div>
                  <div className='icon'><FaVuejs color="white" /></div>
                  <div className='icon'><FaCss3Alt color="white" /></div>
                  <div className='icon'>  <FaHtml5 color="white" /></div>
                  <div className='icon'> <BiLogoTypescript color="white" /> </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <img className='pfp' width={400} height={500} src="./IMG_4681-Edit.jpg" alt="" /> */}
          </div>
        </section>
        {/* ABOUT */}
        <About />
        {/* MY PROJECTS */}
        <section id='project'>
          <h2 className='project-head'>MY PROJECTS</h2>
          <div className="section-divider"></div>
          <p className='project-intro'>Here are some of my projects that showcase my skills and passion for frontend development.</p>
          <div className='grid'>
            <div className='project-card'>
              <img className='test' src="./tcvc.png" alt="" />
              <div className='card-info-cont'>
                <div className='card-head'>
                  <h6>The Creatives Voice Conference</h6>
                  <div className='project-icon'>
                    <a href="https://github.com/TheCreativesVoiceInstitute/TCVC-Website" target="_blank" rel="noopener noreferrer"> <FaGithub color='rgba(240, 127, 240, 0.801)' /> </a>
                    <a href="https://www.thecreativesvoiceinstitute.com/" target="_blank" rel="noopener noreferrer"> <GoLinkExternal color='rgba(240, 127, 240, 0.801)' /> </a>
                  </div>
                </div>
                <p className='card-p'> A Landing page for a conference with features that enabled users to register and book tickets.</p>
                <div className='tech-stack'>
                  <div className='stack'>React</div>
                  <div className='stack'>Javascript</div>
                  <div className='stack'>CSS</div>
                  <div className='stack'>Luma</div>
                </div>
              </div>
            </div>
            <div className='project-card'>
              <img className='test' src="./momo.png" alt="" />
              <div className='card-info-cont'>
                <div className='card-head'>
                  <h6>MOMO YHI</h6>
                  <div className='project-icon'>
                    <a href="https://github.com/AnatakuAmeerah/" target="_blank" rel="noopener noreferrer"> <FaGithub color="rgba(240, 127, 240, 0.801)" /> </a>
                    <a href="https://momoyouthhealthinitiative.com/" target="_blank" rel="noopener noreferrer"> <GoLinkExternal color="rgba(240, 127, 240, 0.801)" /> </a>
                  </div>
                </div>
                <p className='card-p' >A website for an NGO with features that enable volunteer registration and collection of donations.</p>
                <div className='tech-stack'>
                  <div className='stack'>React</div>
                  <div className='stack'>Typescript</div>
                  <div className='stack'>Tailwind CSS</div>
                  <div className='stack'>E-mailJS</div>
                  <div className='stack'>Paystack</div>

                </div>
              </div>
            </div>
            <div className='project-card'>
              <img className='test' src="./pansoou.png" alt="" />
              <div className='card-info-cont'>
                <div className='card-head'>
                  <h6>PANS Annonymous Messaging Service</h6>
                  <div className='project-icon'>
                    <a href="#" target="_blank" rel="noopener noreferrer"> <FaGithub color='rgba(240, 127, 240, 0.801)' /> </a>
                    <a href="https://www.pansoou.com/" target="_blank" rel="noopener noreferrer"> <GoLinkExternal color='rgba(240, 127, 240, 0.801)' /> </a>
                  </div>
                </div>
                <p className='card-p'> A Website that allows pharmacy students make complaints and suggestions annonymously.</p>
                <div className='tech-stack'>
                  <div className='stack'>React</div>
                  <div className='stack'>Javascript</div>
                  <div className='stack'>CSS</div>
                  <div className='stack'>E-mailJS</div>
                </div>
              </div>
            </div>
            <div className='project-card'>
              <img className='test' src="./logistics.png" alt="" />
              <div className='card-info-cont'>
                <div className='card-head'>
                  <h6>LOGEXPERTS</h6>
                  <div className='project-icon'>
                    <a href="https://github.com/AnatakuAmeerah/" target="_blank" rel="noopener noreferrer"> <FaGithub color="rgba(240, 127, 240, 0.801)" /> </a>
                    <a href="https://logistics-4b5o.vercel.app/" target="_blank" rel="noopener noreferrer"> <GoLinkExternal color="rgba(240, 127, 240, 0.801)" /> </a>
                  </div>
                </div>
                <p className='card-p'> A Website built to showcase the services offered by a Logistics Company with features that allow customers get Quotes easily. </p>
                <div className='tech-stack'>
                  <div className='stack'>React</div>
                  <div className='stack'>Typescript</div>
                  <div className='stack'>Tailwind Css</div>
                  <div className='stack'>Paystack</div>
                </div>
              </div>
            </div>
            <div className='project-card'>
              <img className='test' src="./cake.png" alt="" />
              <div className='card-info-cont'>
                <div className='card-head'>
                  <h6> E-commerce Website</h6>
                  <div className='project-icon'>
                    <a href="https://github.com/AnatakuAmeerah/" target="_blank" rel="noopener noreferrer"> <FaGithub color="rgba(240, 127, 240, 0.801)" /> </a>
                    <a href="https://cakeboardandboxng.com/" target="_blank" rel="noopener noreferrer"> <GoLinkExternal color="rgba(240, 127, 240, 0.801)" /> </a>
                  </div>
                </div>
                <p className='card-p'> An E-commerce website showcasing cake boards and boxes with features that enable customers seamelesly make their purchaces.</p>
                <div className='tech-stack'>
                  <div className='stack'>React</div>
                  <div className='stack'>Typescript</div>
                  <div className='stack'>Tailwind Css</div>
                  <div className='stack'>Paystack</div>
                </div>
              </div>
            </div>
            <div className='project-card'>
              <img className='test' src="./campusdash.png" alt="" />
              <div className='card-info-cont'>
                <div className='card-head'>
                  <h6>CAMPUSDASH</h6>
                  <div className='project-icon'>
                    <a href="https://github.com/CampusDash/CampusDash-website" target="_blank" rel="noopener noreferrer"> <FaGithub color='rgba(240, 127, 240, 0.801)' /> </a>
                    <a href="https://campus-dash-website.vercel.app/" target="_blank" rel="noopener noreferrer"> <GoLinkExternal color='rgba(240, 127, 240, 0.801)' /> </a>
                  </div>
                </div>
                <p className='card-p'> A Landing page built with React for a startup showcasing their services with well written Vanilla Css code.From school items to sweetsnacks; everything you need on campus can be found here.</p>
                <div className='tech-stack'>
                  <div className='stack'>React</div>
                  <div className='stack'>Javascript</div>
                  <div className='stack'>CSS</div>
                </div>
              </div>
            </div>
            <div className='project-card'>
              <img className='test' src="./chatter-pic.png" alt="" />
              <div className='card-info-cont'>
                <div className='card-head'>
                  <h6>CHATTER</h6>
                  <div className='project-icon'>
                    <a c href="https://github.com/AnatakuAmeerah/CHATTERPROJECT" target="_blank" rel="noopener noreferrer"> <FaGithub color='rgba(240, 127, 240, 0.801)' /> </a>
                    <a href="https://chatter-capstome.netlify.app/landing" target="_blank" rel="noopener noreferrer"> <GoLinkExternal color='rgba(240, 127, 240, 0.801)' /> </a>
                  </div>
                </div>
                <p className='card-p'>A Chat app built with React and Typescript that allows you to tell a story through posts with the help of Chakra UI, and track the analytics of each post.</p>
                <div className='tech-stack'>
                  <div className='stack'>React</div>
                  <div className='stack'>Typescript</div>
                  <div className='stack'>Chackra</div>
                  <div className='stack'>Firebase</div>
                  <div className='stack'>E-mailJS</div>
                </div>
              </div>
            </div>
            <div className='project-card'>
              <img className='test' src="./hng.png" alt="" />
              <div className='card-info-cont'>
                <div className='card-head'>
                  <h6>LABELLUXE</h6>
                  <div className='project-icon'>
                    <a href="https://github.com/AnatakuAmeerah/HNG-INTERNSHIP-TASK-2" target="_blank" rel="noopener noreferrer"> <FaGithub color='rgba(240, 127, 240, 0.801)' /> </a>
                    <a href="https://hng-internship-task-2.vercel.app/" target="_blank" rel="noopener noreferrer"> <GoLinkExternal color="rgba(240, 127, 240, 0.801)" /> </a>
                  </div>
                </div>
                <p className='card-p'>An E-commerse website built with react showcasing everything and anything fashion from clothes to shoes.</p>
                <div className='tech-stack'>
                  <div className='stack'>React</div>
                  <div className='stack'>Javascript</div>
                  <div className='stack'>CSS</div>
                  <div className='stack'>E-mailJS</div>
                </div>
              </div>
            </div>
            <div className='project-card'>
              <img className='test' src="./Todo.png" alt="" />
              <div className='card-info-cont'>
                <div className='card-head'>
                  <h6> TODO APP</h6>
                  <div className='project-icon'>
                    <a href="https://github.com/AnatakuAmeerah/TODO-VUE-app" target="_blank" rel="noopener noreferrer"> <FaGithub color="rgba(240, 127, 240, 0.801)" /> </a>
                    <a href="https://todo-vue-app-gamma.vercel.app/" target="_blank" rel="noopener noreferrer"> <GoLinkExternal color="rgba(240, 127, 240, 0.801)" /> </a>
                  </div>
                </div>
                <p className='card-p'> Keep track of your goals using this todo App built with Vue.</p>
                <div className='tech-stack'>
                  <div className='stack'>Vue</div>
                  <div className='stack'>Javascript</div>
                  <div className='stack'>CSS</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Reviews */}
        <section id='education' className='education'>
          <ReviewsSection />
        </section>

        {/* Contact */}
        <section id='contact' className='contact'>
          <h1 className='project-head'>LETS CONNECT</h1>
          <div className="section-divider"></div>
          <p className='contact-note'>Whether you have a project in mind, want to collaborate, or just want to say hello, i'd love to hear from you. Drop me a mesage and i'll get back to you as soon as possible.</p>
          <Contact />
        </section>

      </section>
      <Footer />

    </>
  )
}

export default App
