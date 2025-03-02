import { useState } from "react";

const FaceCapture = () => {
  const [message, setMessage] = useState("");

  const handleFaceRecognition = () => {
    fetch("http://localhost:5000/api/face-recognition")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Face Recognition Failed!"));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Face Recognition</h2>
      <button onClick={handleFaceRecognition} className="w-full bg-green-500 text-white py-2 rounded">
        Start Recognition
      </button>
      <p className="mt-4">{message}</p>
    </div>
  );
};

export default FaceCapture;
