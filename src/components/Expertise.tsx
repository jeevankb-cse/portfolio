import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "OpenCV",
    "Scikit-learn",
    "TensorFlow",
    "NumPy",
    "Pandas",
    "Tesseract OCR"
];

const labelsSecond = [
    "Flask",
    "FastAPI",
    "Django",
    "SQL",
    "MySQL Workbench",
    "Postman",
    "Git",
    "GitHub",
    "Linux",
    "RESTful APIs"
];

const labelsThird = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "TypeScript",
    "VS Code",
    "Jupyter Notebook",
    "Google Colab"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython as any} size="3x"/>
                    <h3>AI, ML & Computer Vision</h3>
                    <p>Hands-on experience developing end-to-end intelligent systems involving Machine Learning, Deep Learning, NLP, and Computer Vision. Built solutions for fraud detection, facial recognition, and synthetic audio detection.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker as any} size="3x"/>
                    <h3>Backend & API Engineering</h3>
                    <p>Proficient in building scalable backend architectures and robust RESTful APIs using Python frameworks. Experienced in database modeling, SQL queries, and API testing with Postman.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact as any} size="3x"/>
                    <h3>Frontend & Web Development</h3>
                    <p>Skilled in building responsive, modern user interfaces and interactive dashboards with React.js and modern web standards. Passionate about connecting machine learning pipelines to clean web user experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;