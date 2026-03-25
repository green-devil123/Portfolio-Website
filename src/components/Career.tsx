import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Software Engineer</h4>
                <h5>Stashfin</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Engineered high-throughput lending APIs and integrated DigiLocker KYC, CKYC, and Account Aggregator services, reducing onboarding by 35%. Developed reusable UI components reducing frontend bugs by 20%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Developer</h4>
                <h5>Zintellix</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              Architected a high-performance price-optimization SaaS platform. Implemented pricing algorithms driving a 22% accuracy boost and established CI/CD pipelines reducing deployment errors by 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Lumiq.ai</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Designed and deployed Empower Pryzm, a robust observability platform. Developed a Term Insurance ISNP platform with 40 APIs, reducing response times by 70%, and built data integration tools.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Trilyo</h5>
              </div>
              <h3>2020 - 2021</h3>
            </div>
            <p>
              Engineered AI chatbots with Dialogflow for enterprise clients including ITC Hotels and Borosil, reducing support tickets by 30%. Built scalable dashboards and backend services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Manprax Software LLP</h5>
              </div>
              <h3>2018 - 2020</h3>
            </div>
            <p>
              Delivered multiple full-stack projects including event engagement portals and bidding platforms. Began as an Intern and progressed to implementing scalable features across various dashboards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
