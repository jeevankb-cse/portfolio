import React from "react";
import scamshieldImg from '../assets/images/scamshield.jpg';
import weathergptImg from '../assets/images/weathergpt.jpg';
import voxveritasImg from '../assets/images/voxveritas.jpg';
import smartvotingImg from '../assets/images/smartvoting.webp';
import cureaiImg from '../assets/images/cureai.jpg';
import diseasedetectionImg from '../assets/images/diseasedetection.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Featured Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/jeevankb-cse/ScamShield-AI" target="_blank" rel="noreferrer"><img src={scamshieldImg} className="zoom" alt="ScamShield AI" width="100%"/></a>
                <a href="https://github.com/jeevankb-cse/ScamShield-AI" target="_blank" rel="noreferrer"><h2>ScamShield AI – Fraud Detection Platform</h2></a>
                <p>Developed a Python-based AI cybersecurity platform to detect scams across SMS, WhatsApp, emails, URLs, screenshots, and PDF invoices. Implemented NLP scam classification, OCR text extraction, and risk scoring using Flask, Scikit-learn, OpenCV, and Tesseract OCR.</p>
            </div>
            <div className="project">
                <a href="https://github.com/jeevankb-cse/WeatherGPT" target="_blank" rel="noreferrer"><img src={weathergptImg} className="zoom" alt="WeatherGPT" width="100%"/></a>
                <a href="https://github.com/jeevankb-cse/WeatherGPT" target="_blank" rel="noreferrer"><h2>WeatherGPT – Conversational AI Weather</h2></a>
                <p>Developed an AI-powered weather platform for conversational forecasting, weather alerts, and climate information. Integrated live weather APIs, natural language processing, and location-based advisories. (SIH 2026 First Round Selection).</p>
            </div>
            <div className="project">
                <a href="https://github.com/jeevankb-cse/VoxVeritas" target="_blank" rel="noreferrer"><img src={voxveritasImg} className="zoom" alt="VoxVeritas" width="100%"/></a>
                <a href="https://github.com/jeevankb-cse/VoxVeritas" target="_blank" rel="noreferrer"><h2>VoxVeritas – AI Voice Detection</h2></a>
                <p>Engineered an AI-powered system to distinguish synthetic AI-generated voices (deepfakes) from human speech using acoustic signal analysis. Built a Python-based audio detection pipeline with a TypeScript web dashboard.</p>
            </div>
            <div className="project">
                <a href="https://github.com/jeevankb-cse/Smart-voting-system-using-face-recognition" target="_blank" rel="noreferrer"><img src={smartvotingImg} className="zoom" alt="Smart Voting System" width="100%"/></a>
                <a href="https://github.com/jeevankb-cse/Smart-voting-system-using-face-recognition" target="_blank" rel="noreferrer"><h2>Smart Voting System Using Face Recognition</h2></a>
                <p>Built a secure Python biometric voting application using OpenCV, Flask, and K-Nearest Neighbors (KNN) for facial verification. Implemented blink-based liveness detection and cryptographic hash voter verification to prevent duplicate voting.</p>
            </div>
            <div className="project">
                <a href="https://cureai-health.vercel.app/" target="_blank" rel="noreferrer"><img src={cureaiImg} className="zoom" alt="CureAI Health" width="100%"/></a>
                <a href="https://cureai-health.vercel.app/" target="_blank" rel="noreferrer"><h2>CureAI – Your AI Health Assistant</h2></a>
                <p>An AI-powered healthcare platform for early disease screening, health guidance, and rural accessibility. Features offline edge AI support, multi-language assistance (English/Hindi/Kannada), and live deployment on Vercel.</p>
            </div>
            <div className="project">
                <a href="https://github.com/jeevankb-cse/AI-Healthcare-in-Rural-area" target="_blank" rel="noreferrer"><img src={diseasedetectionImg} className="zoom" alt="AI Disease Detection" width="100%"/></a>
                <a href="https://github.com/jeevankb-cse/AI-Healthcare-in-Rural-area" target="_blank" rel="noreferrer"><h2>DL-Based Early Disease Detection System</h2></a>
                <p>Deep learning solution tailored for accessible rural healthcare. Detects pneumonia via chest X-ray, anemia from blood reports, and skin diseases from dermatological imaging with ONNX and TensorFlow Lite.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;