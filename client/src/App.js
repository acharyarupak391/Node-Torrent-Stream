import { useState } from "react";
import "./App.css";
import FileList from "./components/fileList";
import Form from "./components/form";
import Header from "./components/Header";
import VideoPlayer from "./components/videoPlayer";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [filesData, setFilesData] = useState({});
  const [videoData, setVideoData] = useState({});

  const changeAppStep = (step, data) => {
    setCurrentStep(step);
    if (step === 1) setFilesData(data);
    else if (step === 2) setVideoData(data);
  };

  return (
    <div className="App">
      <Header setCurrentStep={changeAppStep} />
      {currentStep === 0 && <Form setCurrentStep={changeAppStep} />}
      {currentStep === 1 && (
        <FileList files={filesData} setCurrentStep={changeAppStep} />
      )}
      {currentStep === 2 && <VideoPlayer video={videoData} />}
      {/* <VideoPlayer video={videoData} /> */}
    </div>
  );
}

export default App;
