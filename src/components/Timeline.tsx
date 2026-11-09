import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faAward } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div id="experience" style={{ position: 'relative', top: '-70px' }} />
      <div className="items-container">
        <h1>Experience & Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="6 Months"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase as any} />}
          >
            <h3 className="vertical-timeline-element-title">AI Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Recursive Coders — Vijayanagar, Bengaluru, Karnataka</h4>
            <p>
              • Gained practical experience in Artificial Intelligence and Machine Learning through hands-on development and technical tasks.<br/>
              • Built solutions with Python and AI/ML concepts to strengthen problem-solving and model implementation skills.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap as any} />}
          >
            <h3 className="vertical-timeline-element-title">B.E. in Computer Science & Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">City Engineering College — Bengaluru, Karnataka</h4>
            <p>
              CGPA: <strong>8.48</strong><br/>
              Coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks.
            </p>
          </VerticalTimelineElement>

          <div id="honors" style={{ position: 'relative', top: '-90px' }} />
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2026"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faAward as any} />}
          >
            <h3 className="vertical-timeline-element-title">Hackathons & Honors</h3>
            <h4 className="vertical-timeline-element-subtitle">National & Inter-College Competitions</h4>
            <p>
              • <strong>Smart India Hackathon (SIH) 2026:</strong> First Round Selection for WeatherGPT (PS 26068).<br/>
              • <strong>Elite Hack 1.0:</strong> IIT Madras - GPAi.<br/>
              • <strong>3SVK National Cloud & AI Innovation Challenge</strong> & Devcation Delhi 2026.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap as any} />}
          >
            <h3 className="vertical-timeline-element-title">Pre-University Course (PUC)</h3>
            <h4 className="vertical-timeline-element-subtitle">Akshara PU College — Shivamogga, Karnataka</h4>
            <p>
              Graduated with <strong>85.85%</strong>.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap as any} />}
          >
            <h3 className="vertical-timeline-element-title">SSLC (Secondary School)</h3>
            <h4 className="vertical-timeline-element-subtitle">Shri Jnanakshi Vidyaniketan — Davanagere, Karnataka</h4>
            <p>
              Graduated with <strong>83.84%</strong>.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;