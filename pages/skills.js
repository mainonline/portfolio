import { Container, Heading } from '@chakra-ui/react'
import { IoLogoFirebase, IoLanguage, IoCode, IoLibrary, IoCheckmarkDone, IoDesktopOutline, IoDiamond } from "react-icons/io5"
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'


const Posts = () => (
  <Layout title="Posts">
    <Container>


      <Section delay={0.5}>
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon"><IoLogoFirebase /></div>
              <Heading as="h4" variant="section-titleh4">
                Experience
              </Heading>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h active">
                <div className="date">2021 - Present</div>
                <Heading as="h5" variant="section-titleh5">
                  Front-End Developer
                </Heading>
                <div className="company">InAct Inc.</div>
                <p>
                  Building responsive and mobile first web applications
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2020 - 2021</div>
                <Heading as="h5" variant="section-titleh5">
                  Fron-End Mentor
                </Heading>
                <div className="company">Skilland School</div>
                <p>
                  Еaught programming courses for beginners
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2019, December - 2020, March</div>
                <Heading as="h5" variant="section-titleh5">
                  Front-End Support
                </Heading>
                <div className="company">It Academy Bishkek</div>
                <p>
                  Menot assistant in web programming courses
                </p>
              </div>
            </div>
          </div>

          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon"><IoLibrary /></div>
              <Heading as="h4" variant="section-titleh4">
                Education
              </Heading>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h">
                <div className="date">2006 - 2017</div>
                <Heading as="h5" variant="section-titleh5">
                  High School
                </Heading>
                <div className="company">Kyzyl-Kiya</div>
                <p>
                  High School degree in the gymnasium
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2017 - 2018</div>
                <Heading as="h5" variant="section-titleh5">
                  New Generation Academy
                </Heading>
                <div className="company">Bishkek</div>
                <p>
                  Preparatory program at AUCA
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2018 - 2022</div>
                <Heading as="h5" variant="section-titleh5">
                  American University of Central Asia
                </Heading>
                <div className="company">Bishkek</div>
                <p>
                  Bachelor degree in Software Engineering
                </p>
              </div>
            </div>
          </div>

          <div className="clear"></div>
        </div>
      </Section>









      <Heading as="h3" fontSize={20} mb={8} mt={8}>
        My Skills
      </Heading>

      <Section delay={0.8}>
        <div className="content skills">

          <div className="row">

            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="skills-list">
                <div className="skill-title border-line-h">
                  <div className="icon"><IoDesktopOutline /></div>
                  <Heading as="h5" variant="section-titleh5">
                    Design
                  </Heading>
                </div>
                <ul>
                  <li className="border-line-h">
                    <Heading as="h6" variant="section-titleh6">
                      Web Design
                    </Heading>
                    <div className="progress">
                      {/* <div className="percentage" style="width: 90%"></div> */}
                      <div className="percentage pro90"></div>
                    </div>
                  </li>
                  <li className="border-line-h">
                    <Heading as="h6" variant="section-titleh6">
                      Graphic Design
                    </Heading>
                    <div className="progress">
                      {/* <div className="percentage" style="width: 65%"></div> */}
                      <div className="percentage pro65"></div>
                    </div>
                  </li>
                  <li className="border-line-h">
                    <Heading as="h6" variant="section-titleh6">
                      Photoshop
                    </Heading>
                    <div className="progress">
                      {/* <div className="percentage" style="width: 75%"></div> */}
                      <div className="percentage pro75"></div>
                    </div>
                  </li>
                  <li>
                    <Heading as="h6" variant="section-titleh6">
                      Figma
                    </Heading>
                    <div className="progress">
                      {/* <div className="percentage" style="width: 85%"></div> */}
                      <div className="percentage pro85"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>


            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="skills-list dotted">
                <div className="skill-title border-line-h">
                  <div className="icon"><IoLanguage /></div>
                  <Heading as="h5" variant="section-titleh5">
                    Languages
                  </Heading>
                </div>
                <ul>
                  <li className="border-line-h">
                    <Heading as="h6" variant="section-titleh6">
                      Kyrgyz
                    </Heading>
                    <div className="progress">
                      <div className="percentage pro90"/>
                      <span className="dg">
                        <span className="lighted"/>
                        <span className="lighted"/>
                        <span className="lighted"/>
                        <span className="lighted"/>
                        <span className="lighted"/>
                        <span className="lighted"/>
                        <span className="lighted"/>
                        <span className="lighted"/>
                        <span className="lighted"/>
                        <span className="lighted"/>
                      </span>
                      {/* <div className="percentage" style="width: 90%"></div> */}
                    </div>
                  </li>
                  <li className="border-line-h">
                    <Heading as="h6" variant="section-titleh6">
                      English
                    </Heading>
                    <div className="progress">
                      {/* <div className="percentage" style="width: 60%"></div> */}
                      <div className="percentage pro60"></div>
                      <span className="dg">
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                  </li>
                  <li className="border-line-h">
                    <Heading as="h6" variant="section-titleh6">
                      German
                    </Heading>
                    <div className="progress">
                      {/* <div className="percentage" style="width: 30%"></div> */}
                      <div className="percentage pro30"></div>
                      <span className="dg">
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <Heading as="h6" variant="section-titleh6">
                      Russian
                    </Heading>
                    <div className="progress">
                      {/* <div className="percentage" style="width: 70%"></div> */}
                      <div className="percentage pro70"></div>
                      <span className="dg">
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span className="lighted"></span>
                        <span></span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>


            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="skills-list circles">
                <div className="skill-title border-line-h">
                  <div className="icon"><IoCode /></div>
                  <Heading as="h5" variant="section-titleh5">
                    Coding
                  </Heading>
                </div>
                <ul>
                  <li>
                    <div className="progress p75">
                      <span>75%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <Heading as="p" variant="section-titleP">
                      Java / C++
                    </Heading>
                  </li>
                  <li>
                    <div className="progress p85">
                      <span>85%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <Heading as="p" variant="section-titleP">
                      JS / TS / React
                    </Heading>
                  </li>
                  <li>
                    <div className="progress p95">
                      <span>95%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <Heading as="p" variant="section-titleP">
                      HTML / CSS / Saas
                    </Heading>
                  </li>
                  <li>
                    <div className="progress p90">
                      <span>90%</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <Heading as="p" variant="section-titleP">
                      Wordpress
                    </Heading>
                  </li>
                </ul>
              </div>
            </div>


            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="skills-list list">
                <div className="skill-title border-line-h">
                  <div className="icon"><IoDiamond /></div>
                  <Heading as="h5" variant="section-titleh5">
                    Knowledge
                  </Heading>
                </div>
                <ul>
                  <li>
                    <div className="flex__it">
                      <IoCheckmarkDone />
                      <Paragraph>Structural Programming</Paragraph>
                    </div>
                  </li>
                  <li>
                    <div className="flex__it">
                      <IoCheckmarkDone />
                      <Paragraph>Object Oriented P-ing</Paragraph>
                    </div>
                    {/* <div className="name">iOS and android apps</div> */}
                  </li>
                  <li>
                    <div className="flex__it">
                      <IoCheckmarkDone />
                      <Paragraph>Website hosting</Paragraph>
                    </div>
                    {/* <div className="name">Create logo design</div> */}
                  </li>
                  <li>
                    <div className="flex__it">
                      <IoCheckmarkDone />
                      <Paragraph>Graphics and animations</Paragraph>
                    </div>
                    {/* <div className="name">Design for print</div> */}
                  </li>
                  <li>
                    <div className="flex__it">
                      <IoCheckmarkDone />
                      <Paragraph>SOE optimization</Paragraph>
                    </div>
                    {/* <div className="name">Modern and mobile-ready</div> */}
                  </li>
                  <li>
                    <div className="flex__it">
                      <IoCheckmarkDone />
                      <Paragraph>CSS Frameworks</Paragraph>
                    </div>
                    {/* <div className="name">Advertising services include</div> */}
                  </li>
                </ul>
              </div>
            </div>

            <div className="clear"></div>
          </div>
        </div>
      </Section>



    </Container >
  </Layout >
)

export default Posts

