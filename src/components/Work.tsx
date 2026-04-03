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

  const projects = [
  {
    name: "AI Knowledge Assistant",
    category: "RAG-based System",
    tools: "Built a RAG-based AI system enabling natural language querying over documents using embeddings and semantic search. Implemented LangChain pipelines with prompt engineering, token optimization, and multi-agent automation for end-to-end development workflow.",
    image: "/images/knowlegeAssistant.png",
  },
  {
    name: "AI Multi-Agent Software Development Platform",
    category: "Lending Platform",
    tools: "Designing and developed a multi-agent AI system that automated end- to-end software development by simulating roles such as requirement analysis, UX design, development, testing, and deployment. Built agent orchestration pipelines with structured outputs, human-in-the-loop approvals, and automated CI/CD deployment using Docker and Kubernetes, ensuring scalable and controlled application delivery.",
    image: "/images/multiagent.png",
  },
  {
    name: "Stashfin Lending",
    category: "Lending Platform",
    tools: "Built and maintained scalable lending platforms using Node.js, Express.js, MySQL, MongoDB, React.js, and Tailwind CSS, supporting high-volume loan processing with improved reliability and performance. Integrated financial systems like DigiLocker, CKYC, CERSAI, and Account Aggregator to reduce onboarding time and ensure compliance, while collaborating with cross-functional teams to accelerate delivery and improve product quality.",
    image: "/images/stashfin.webp",
  },
  {
    name: "Empower Pryzm",
    category: "Data Reliability & Observability Platform",
    tools: "Empower Pryzm is an advanced data observability and monitoring platform designed to track, analyze, and improve database infrastructure performance in real time. It enables proactive incident detection by monitoring data pipelines, query performance, and system health, helping teams identify anomalies and resolve issues quickly. The platform improves data reliability, operational efficiency, and system stability by providing deep visibility into database behavior and infrastructure metrics.",
    image: "/images/pryzm.webp",
  },
  {
    name: "Canara HSBC Insurance(ISNP)",
    category: "Term Insurance",
    tools: "Developed the **Term Insurance ISNP platform** supporting 28 insurance products and 40+ APIs, optimizing backend performance and reducing API latency from 4s to 1s (70% improvement). Integrated **Strapi CMS** to enable configurable product workflows, decreasing customization effort and accelerating product rollout by 25%.",
    image: "/images/isnp.webp",
  },
  {
    name: "Zintellix",
    category: "AI-powered e-commerce analytics platform",
    tools: "Build a scalable price-optimization SaaS platform using the MERN stack, improving pricing accuracy by 22% and supporting 10k+ daily transactions. Designed pricing algorithms and analytics workflows while establishing code reviews and CI/CD practices, reducing deployment failures by 30% and improving release stability.",
    image: "/images/zintellix.webp",
  }
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
                <h4>Description</h4>
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
