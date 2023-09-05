import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "React JS", ratingPercentage: 79 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "Express JS", ratingPercentage: 84 },
    { skill: "Java programming", ratingPercentage: 87 },
    { skill: "Mongo Db", ratingPercentage: 74 },
    { skill: "Python", ratingPercentage: 81 },
    { skill: "Django", ratingPercentage: 76 },
    { skill: "HTML", ratingPercentage: 79 },
    { skill: "CSS", ratingPercentage: 76 },
    { skill: "C++ Programming Language", ratingPercentage: 80 },
    { skill: "C Programming Language", ratingPercentage: 86 },
    { skill: "C# .Net", ratingPercentage: 72 },
    { skill: "Haskell and Prolog", ratingPercentage: 83 },
    { skill: "LaTex Edition Scientific Text", ratingPercentage: 88 },
    { skill: "MySql Database", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "A Personal Portfolio website to showcase all my details at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Primary Pedagogical Management System",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A pedagogical Management System designed to manager information and updated pedagogical documents between Teachers and HeadTeachers in Primary School. Was my project for Bachelor Degree for Academy purpose",
      subHeading:
        "Technologies Used: Java Programming, Xampp, Java Script, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Lodz, Europe, Poland"}
        subHeading={"Masters in Computer Science"}
        fromDate={"2022"}
        toDate={"Present"}
      />

      <ResumeHeading
        heading={"University of Kigali, Africa, Rwanda"}
        subHeading={"Bachelor Degree with Honours in Computer Science"}
        fromDate={"2018"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"High School Option, Africa, Rwanda"}
        subHeading={"Ecole Technique Officielle de Kibungo (ETO Kibungo)"}
        fromDate={"2007"}
        toDate={"2009"}
      />
       <ResumeHeading
        heading={"High School O-Level Africa, Rwanda"}
        subHeading={"Ecole de Science de Musanze (E.SC.M)"}
        fromDate={"2004"}
        toDate={"2006"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Infosys Poland Lodz"}
          subHeading={"Senior Process Executive"}
          fromDate={"2022"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Experienced in SAP purchase order processing. ensuring discrepancies accurancy, coordinating with suppliers, and resolving.
          </span>
        </div>  
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"GoodMan Rwanda LTD"}
          subHeading={"System Administrator"}
          fromDate={"2020"}
          toDate={"2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Troubleshooting Identifying hardware and software solutions, Diagnosing and repairing faults, Resolving network issues, 
            </span>
            <br/>
        </div>  
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Caritas Kigali"}
          subHeading={"Database Management and System Administrator"}
          fromDate={"2015"}
          toDate={"2019"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Setting up servers and databases, Data analyst and data collections, Troubleshooting and install Network System.
            </span>
            <br/>
        </div>  
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's country songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in Basketball games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
