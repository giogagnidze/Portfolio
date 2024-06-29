import profilePic from "./assets/gio.jpg"

function Main() {
  return (
    <main id="home" className="container">
      <div className="container main">
        <div className="row">
          <div className="col-sm-5 main-txt">
            <h1>Hello, I'm <b>Gio Gagnidze!</b></h1>
            <h1>Currently working in <b>GOA</b></h1>
            <div className="social">
              <a href="https://www.facebook.com/profile.php?id=100072526356583"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/_gagno__/"><i className="fab fa-instagram"></i></a>
              <a href="https://github.com/giogagnidze/"><i className="fab fa-github"></i></a>
              <a href="https://www.youtube.com/@Goal_Oriented_Academy__GOA"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-sm-7 img-div">
            <img className="img-responsive" src={profilePic} alt="Gagnidze Crew logo" />
          </div>
        </div>

        <div className="container mt-5 pt-5">
          <div id="about" className="d-flex justify-content-center align-items-center mt-5 pt-5">
            <h1 className="mt-5 pt-5">About <b>Me</b></h1>
          </div>
          <div className="d-flex justify-content-center align-items-center pt-5">
            <img className="rounded-circle" src={profilePic} width="200px" alt="Gio Gagnidze"/>
          </div>
          <div className="lorem pt-5">
            <p>Greetings! I'm Gio Gagnidze, a dedicated 16-year-old web developer hailing from the beautiful country of Georgia. From a young age, I've been captivated by the endless possibilities of web development, diving headfirst into the world of coding and design. Specializing in front-end development, I channel my passion into creating seamless digital experiences. My toolkit includes HTML, CSS, JavaScript, and more, allowing me to craft websites that are not only functional but visually striking.</p>
          </div>
          <div className="read-more d-flex justify-content-center align-items-center pt-5">
            <button className="button"><a href="https://www.facebook.com/profile.php?id=100072526356583">See More</a></button>
          </div>
        </div>

        <div id="service" className="container pt-5">
          <div className="read-more d-flex justify-content-center align-items-center mt-5 pt-5">
            <h1>My <b>Services</b></h1>
          </div>
          <div className="services row mt-5 pt-5">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="service mx-auto">
                <h1 className="text-center pt-3">Web <b>Dev</b></h1>
                <p className="text-center pt-3">Web development is the art of transforming concepts into functional websites through programming languages like HTML, CSS, and JavaScript. It involves structuring content, ensuring responsiveness across devices, and optimizing performance for seamless user interaction.</p>
                <div className="d-flex justify-content-center align-items-center pt-3">
                  <button><a href="https://www.youtube.com/results?search_query=Web+Development">Read More</a></button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="service mx-auto">
                <h1 className="text-center pt-3">UI/UX <b>Design</b></h1>
                <p className="text-center pt-3">UI/UX design harmonizes aesthetics and functionality to create intuitive and enjoyable digital experiences. UI (User Interface) design focuses on visual elements and layouts that guide user interaction, while UX (User Experience) design prioritizes user psychology and behavior to enhance satisfaction and usability.</p>
                <div className="d-flex justify-content-center align-items-center pt-3">
                  <button><a href="https://www.youtube.com/results?search_query=UI%2FUX+Design">Read More</a></button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="service mx-auto">
                <h1 className="text-center pt-3">Web <b>Design</b></h1>
                <p className="text-center pt-3">Web design combines creativity with technical skills to craft visually compelling and user-friendly websites. It encompasses layout design, typography, color schemes, and graphic elements that not only attract but also engage users, reflecting brand identity and enhancing overall user experience.</p>
                <div className="d-flex justify-content-center align-items-center pt-3">
                  <button><a href="https://www.youtube.com/results?search_query=Web+Design">Read More</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="skill" className="fifth-div container mt-5">
          <div id="center">
            <div className="skills text-center mb-4">
              <h1>My <b>Skills!</b></h1>
            </div>
            <div className="ps text-center mb-4">
              <h1><b>Programming Language</b> Skills:</h1>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="skillbox">
                  <p><b>Communication</b></p>
                  <p>100%</p>
                  <div className="skill">
                    <div className="skill_level" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="skillbox">
                  <p><b>HTML</b></p>
                  <p>95%</p>
                  <div className="skill">
                    <div className="skill_level" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="skillbox">
                  <p><b>CSS</b></p>
                  <p>90%</p>
                  <div className="skill">
                    <div className="skill_level" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="skillbox">
                  <p><b>Python</b></p>
                  <p>70%</p>
                  <div className="skill">
                    <div className="skill_level" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="skillbox">
                  <p><b>JavaScript</b></p>
                  <p>70%</p>
                  <div className="skill">
                    <div className="skill_level" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="skillbox">
                  <p><b>React</b></p>
                  <p>50%</p>
                  <div className="skill">
                    <div className="skill_level" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="skillbox">
                  <p><b>Bootstrap</b></p>
                  <p>50%</p>
                  <div className="skill">
                    <div className="skill_level" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="skillbox">
                  <p><b>Git</b></p>
                  <p>60%</p>
                  <div className="skill">
                    <div className="skill_level" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="skillbox">
                  <p><b>Tailwind CSS</b></p>
                  <p>45%</p>
                  <div className="skill">
                    <div className="skill_level" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="container pt-5 mt-3 py-5">
          <div className="d-flex justify-content-center align-items-center pt-5">
            <div className="login-box">
              <h1 className="c-m py-5">Contact <b>Me!</b></h1>
              <form>
                <div className="input-box">
                  <input id="name" type="text" className="form-control" required />
                  <label>Name</label>
                </div>
                <div className="input-box">
                  <input id="surname" type="text" className="form-control" required />
                  <label>Lastname</label>
                </div>
                <div className="input-box">
                  <input id="email" type="email" className="form-control" required />
                  <label>Email</label>
                </div>
                <div className="input-box">
                  <input id="number" type="tel" className="form-control" required />
                  <label>Number</label>
                </div>
                <div className="input-box">
                  <input id="message" className="form-control" rows="4" required></input>
                  <label>Message</label>
                </div>
                <button type="submit" className="form-btn btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>

        <footer className="text-white pt-5 py-5">
          <div className="container pt-5">
            <div className="row">
              <div className="col-md-6 text-center mb-3 mb-md-0">
                <div className="footer">
                  <a href="https://www.facebook.com/profile.php?id=100072526356583" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                  <a href="https://www.instagram.com/_gagno__/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href="https://github.com/giogagnidze/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                  <a href="https://www.youtube.com/@Goal_Oriented_Academy__GOA" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                  <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer"><i className="fab fa-google"></i></a>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="footer-social">
                  <nav>
                    <ul className="list-unstyled d-flex justify-content-center justify-content-md-end mb-0">
                      <li className="lg-3"><a href="#home">Home</a></li>
                      <li className="lg-3"><a href="#about">About</a></li>
                      <li className="lg-3"><a href="#service">Services</a></li>
                      <li className="lg-3"><a href="#skill">Skills</a></li>
                      <li className="lg-3"><a href="#contact">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 text-center mb-3 mb-md-0">
                <div className="footer-copyright">
                  <p>Copyright &copy; 2024 Designed by <b><a href="https://github.com/giogagnidze" target="_blank" rel="noopener noreferrer" className="text-white">Gio Gagnidze</a></b></p>
                  <p>Made with <b>React </b>and<b> Bootstrap</b></p>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="footer-phone">
                  <p><i className="fa fa-phone"></i> <a href="tel:592153236" className="text-white">+995 592-15-32-36</a></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Main;
