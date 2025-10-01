import './aboutme.css';

function About() {
    return (
        <>
            <section className="about-me-bg">
                <h2 className='project-head' style={{ color: 'rgba(240, 127, 240, 0.801)', paddingTop: '0' }}>ABOUT ME</h2>
                <div className='pic-text-cont'>
                    <img className='mirah-pic' src="Ameerah.svg" alt="profile-pic" />
                    <p className="about-p">
                        Ameerah is a creative and highly motivated frontend developer with a diploma in Frontend Engineering from AltSchoolAfrica, she is proficient in web development using frameworks and languages like
                        HTML, CSS, JavaScript, React, Vue and Typescript. She is also well versed in the implementation of backend technologies and able to implement web design concepts that are scalable and user friendly.
                    </p>
                </div>

            </section>
        </>
    )
}
export default About