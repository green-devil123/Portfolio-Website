import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  const projects = [{
    name: "Stashfin Lending",
    category: "Lending Platform",
    tools: "React, Redux, Nodejs, Expressjs, MySQL, MongoDB, Redis, AWS, AWS S3,Typescript,HTML,CSS,Javascript, Docker",
    image: "/images/stashfin.webp",
  },
  {
    name: "Empower Pryzm",
    category: "Data Reliability & Observability Platform",
    tools: "React, Redux, Nodejs, Expressjs, MySQL, MongoDB,HTML,CSS,Javascript, Redis,Typescript, Javascript, Nestjs, Docker, Kubernetes",
    image: "/images/pryzm.webp",
  },
  {
    name: "Canara HSBC Insurance(ISNP)",
    category: "Term Insurance",
    tools: "React, Redux, Nodejs, Expressjs, MySQL, MongoDB,HTML,CSS,Javascript, Redis,Typescript, Javascript, Nestjs, Docker, Kubernetes",
    image: "/images/isnp.webp",
  },
  {
    name: "Zintellix",
    category: "AI-powered e-commerce analytics platform",
    tools: "React, Redux, Nodejs, Expressjs, MySQL, MongoDB,HTML,CSS,Javascript, Redis,Typescript, Javascript, Nestjs, Docker, Kubernetes",
    image: "/images/zintellix.webp",
  }
    // {
    //   name: "Zintellix",
    //   category: "AI-powered e-commerce analytics platform",
    //   tools: "React, Redux, Nodejs, Expressjs, MySQL, MongoDB,HTML,CSS,Javascript, Redis,Typescript, Javascript, Nestjs, Docker, Kubernetes",
    //   image: "/images/zintellix.webp",
    // }
  ]
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{_value.name}</h4>
                    <p>{_value.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{_value.tools}</p>
              </div>
              <WorkImage image={_value.image} alt="/images/placeholder.webp" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
