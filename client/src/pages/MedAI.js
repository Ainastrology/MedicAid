// // import React, { useState } from 'react';
// import './../styling/MedicAI.css';
// import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
// // import { GoogleGenerativeAI } from '@google/generative-ai';
// // import GEN_AI_API_KEY from '.env';

// // const MedicAidAI = () => {

// //     const {
// //         GoogleGenerativeAI,
// //         HarmCategory,
// //         HarmBlockThreshold,
// //       } = require("@google/generative-ai");
      
// //       const apiKey = process.env.GEMINI_API_KEY;
// //       const genAi = new GoogleGenerativeAI(apiKey);
      
// //         //   const model = genAI.getGenerativeModel({
// //         //     model: "gemini-1.5-flash",
// //         //   });

// //       //Setup the Model
// //       const generationConfig = {
// //         temperature: 1,
// //         topP: 0.95,
// //         topK: 64,
// //         maxOutputTokens: 8192,
// //         responseMimeType: "text/plain",
// //       };

// //       //Adjust the safety settings
// //       const safetySettings = [
// //         {
// //           category: HarmCategory.HARM_CATEGORY_HARASSMENT,
// //           threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
// //         },
// //         {
// //           category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
// //           threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
// //         },
// //       ];
      
// //       const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings });
      
// //     const [text, setText] = useState('');
// //     const [image, setImage] = useState(null);
// //     const [imagePreview, setImagePreview] = useState('');

// //     const handleTextChange = (e) => {
// //         setText(e.target.value);
// //     };

// //     const handleImageUpload = (e) => {
// //         const file = e.target.files[0];
// //         setImage(file);
// //         setImagePreview(URL.createObjectURL(file));
// //     };

// //     const handleSubmit = () => {
// //         if (!text || !image) {
// //             alert('Please enter text and upload an image.');
// //             return;
// //         }

// //         // Handle form submission logic here (e.g., send data to backend)
// //         console.log('Submitted text:', text);
// //         console.log('Submitted image:', image);

// //         // Reset form
// //         setText('');
// //         setImage(null);
// //         setImagePreview('');
// //     };

// //     return (
// //         <div className="medicaid-ai-container">
// //             <h2>MedicAid AI</h2>
// //             <textarea
// //                 className="medicaid-ai-textarea"
// //                 value={text}
// //                 onChange={handleTextChange}
// //                 placeholder="Enter your text here..."
// //             ></textarea>
// //             <input
// //                 type="file"
// //                 className="medicaid-ai-file-input"
// //                 onChange={handleImageUpload}
// //                 accept="image/*"
// //             />
// //             {imagePreview && (
// //                 <div className="medicaid-ai-image-preview">
// //                     <img src={imagePreview} alt="Preview" />
// //                 </div>
// //             )}
// //             <button className="medicaid-ai-submit-button" onClick={handleSubmit}>
// //                 Submit
// //             </button>
// //         </div>
// //     );
// // };

// // export default MedicAidAI;





// // import React, { useState } from 'react';
// // // import './../styling/MedAI.css';

// // const MedicAidAI = () => {
// //     const [page, setPage] = useState('Home');
// //     const [uploadImage, setUploadImage] = useState(null);
// //     const [analysisResult, setAnalysisResult] = useState('');


// // // Setup the Model
// //       const generationConfig = {
// //         temperature: 1,
// //         topP: 0.95,
// //         topK: 64,
// //         maxOutputTokens: 8192,
// //         responseMimeType: "text/plain",
// //       };

// // //  Adjust the safety settings
// //       const safetySettings = [
// //         {
// //           category: HarmCategory.HARM_CATEGORY_HARASSMENT,
// //           threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
// //         },
// //         {
// //           category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
// //           threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
// //         },
// //       ];
      
// //     const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings });
      
// //     const 
// //     {
// //         GoogleGenerativeAI,
// //         HarmCategory,
// //         HarmBlockThreshold,
// //     } = require("@google/generative-ai");
              
// //     const apiKey = process.env.GEMINI_API_KEY;
// //     const genAi = new GoogleGenerativeAI(apiKey);
              

// //     const handlePageChange = (selectedPage) => {
// //         setPage(selectedPage);
// //     };

// //     const handleImageUpload = (event) => {
// //         // setUploadImage(event.target.files[0]);
// //         const file = event.target.files[0];
// //         setUploadImage(file);
// //         // setImagePreview(URL.createObjectURL(file));
// //     };

// //     const handleAnalysis = async () => 
// //     {
// //         if (uploadImage) 
// //         {
// //             // Logic for sending the image to the API for analysis
// //             // Placeholder for API call to MedicAid AI
// //             history: 
// //             [
// //                 {
// //                   role: "user",
// //                   parts: [
// //                     {text: "what is nausea\n"}
// //                   ]
// //                 },
// //                 {
// //                   role: "model",
// //                   parts: [
// //                     {text: "Nausea is an unpleasant feeling of discomfort in your stomach that often makes you feel like you are going to vomit. It is a common symptom that can be caused by many different things, including:\n\n**Common Causes:**\n\n* **Motion sickness:**  This is caused by the movement of your body, like in a car or boat.\n* **Food poisoning:**  This is caused by eating contaminated food.\n* **Pregnancy:** Nausea is a common symptom of early pregnancy.\n* **Gastrointestinal problems:** Conditions like gastritis, ulcers, or irritable bowel syndrome can cause nausea.\n* **Medications:** Some medications can cause nausea as a side effect.\n* **Stress or anxiety:**  Emotional distress can sometimes trigger nausea.\n* **Infections:**  Viral or bacterial infections can cause nausea.\n* **Headaches:** Migraines can sometimes cause nausea.\n* **Dehydration:** Not drinking enough fluids can lead to nausea.\n* **Overeating or eating too fast:** Eating too much or too quickly can upset your stomach.\n\n**Symptoms:**\n\n* Feeling sick to your stomach\n* Feeling like you are going to vomit\n* Stomach cramps\n* Dizziness\n* Sweating\n* Pale skin\n\n**Treatment:**\n\nTreatment for nausea depends on the cause. If you are experiencing nausea, it is important to see a doctor to determine the underlying cause and receive appropriate treatment.\n\n**Home Remedies:**\n\n* **Stay hydrated:** Drink plenty of fluids, especially water or clear broth.\n* **Eat bland foods:** Stick to plain crackers, toast, or rice.\n* **Get some rest:**  Rest can help your body recover.\n* **Avoid strong odors:** Some smells can trigger nausea.\n* **Ginger:** Ginger has been shown to help reduce nausea. You can drink ginger tea or take ginger supplements.\n* **Over-the-counter medications:** Anti-nausea medications like Pepto-Bismol or Dramamine can help.\n\n**When to see a doctor:**\n\n* If your nausea is severe or persistent\n* If you are vomiting\n* If you have a fever\n* If you are experiencing other symptoms, such as abdominal pain or diarrhea\n* If you are pregnant and experiencing nausea\n\nIt is important to remember that this is not a comprehensive list, and you should always consult with a healthcare professional for any health concerns. \n"}
// //                   ]
// //                 }
// //             ]
// //         }
          
// //         // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// //         // console.log(result.response.text());
        
// //         //     const response = "Sample analysis result based on the uploaded image.";
// //         const response = setAnalysisResult(response);
// //     };

// //     return (
// //         <div className="medicaid-ai-container">
// //             <div className="sidebar">
// //                 <h2>Navigation</h2>
// //                 <button onClick={() => handlePageChange('Home')}>Home</button>
// //                 <button onClick={() => handlePageChange('MedicAid AI')}>MedicAid AI</button>
// //                 <div className="sidebar-description">
// //                     <p>Medicaid is your go-to platform for all things healthcare, offering seamless access to essential information, resources, and tools designed to help you navigate the complexities of Medicaid with ease.</p>
// //                     <p>Whether you're seeking guidance on eligibility, understanding benefits, or staying updated on the latest healthcare policies, Medicaid empowers you to make informed decisions, ensuring you and your loved ones receive the care you deserve.</p>
// //                     <p>Affordable Care, Quality Service – That’s Medicaid.</p>
// //                 </div>
// //             </div>

// //             <div className="content">
// //                 {page === 'Home' && (
// //                     <div className="home-page">
// //                         <h1>Welcome to MedicAid Image Analyzer🩺</h1>
// //                         <p>From Query to Cure, We Make Health Secure</p>
// //                         <h2>MedicAid presents you an AI Medical Assistant named MedicAid Image Analyzer, which allows you to identify your medical or health-related issues through images</h2>
// //                     </div>
// //                 )}

// //                 {page === 'MedicAid AI' && (
// //                     <div className="ai-page">
// //                         <h1>MedicAid Image Analyzer🩺</h1>
// //                         <h2>Upload the image for analysis</h2>
// //                         <input type="file" accept="image/png, image/jpeg" onChange={handleImageUpload} />
// //                         {uploadImage && (
// //                             <img
// //                                 src={URL.createObjectURL(uploadImage)}
// //                                 alt="Uploaded Medical"
// //                                 width={250}
// //                                 style={{ borderRadius: '50%' }}
// //                             />
// //                         )}
// //                         <button onClick={handleAnalysis}>Generate the analysis</button>
// //                         {analysisResult && <p>{analysisResult}</p>}
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default MedicAidAI;
























// // import React, { useState } from 'react';
// // // import './MedicAidAI.css';

// // const MedicAidAI = () => {
// //     const [page, setPage] = useState('Home');
// //     const [uploadImage, setUploadImage] = useState(null);
// //     const [analysisResult, setAnalysisResult] = useState('');

// //     const handlePageChange = (selectedPage) => {
// //         setPage(selectedPage);
// //     };

// //     const handleImageUpload = (event) => {
// //         setUploadImage(event.target.files[0]);
// //     };

// //     const handleAnalysis = async () => {
// //         if (uploadImage) {
// //             // Placeholder: API logic for sending the image and history to MedicAid AI
// //             const history = [
// //                 {
// //                     role: "user",
// //                     parts: [
// //                         { text: "what is nausea\n" }
// //                     ]
// //                 },
// //                 {
// //                     role: "model",
// //                     parts: [
// //                         {
// //                             text: "Nausea is an unpleasant feeling of discomfort in your stomach that often makes you feel like you are going to vomit. It is a common symptom that can be caused by many different things, including:\n\n**Common Causes:**\n\n* **Motion sickness:**  This is caused by the movement of your body, like in a car or boat.\n* **Food poisoning:**  This is caused by eating contaminated food.\n* **Pregnancy:** Nausea is a common symptom of early pregnancy.\n* **Gastrointestinal problems:** Conditions like gastritis, ulcers, or irritable bowel syndrome can cause nausea.\n* **Medications:** Some medications can cause nausea as a side effect.\n* **Stress or anxiety:**  Emotional distress can sometimes trigger nausea.\n* **Infections:**  Viral or bacterial infections can cause nausea.\n* **Headaches:** Migraines can sometimes cause nausea.\n* **Dehydration:** Not drinking enough fluids can lead to nausea.\n* **Overeating or eating too fast:** Eating too much or too quickly can upset your stomach.\n\n**Symptoms:**\n\n* Feeling sick to your stomach\n* Feeling like you are going to vomit\n* Stomach cramps\n* Dizziness\n* Sweating\n* Pale skin\n\n**Treatment:**\n\nTreatment for nausea depends on the cause. If you are experiencing nausea, it is important to see a doctor to determine the underlying cause and receive appropriate treatment.\n\n**Home Remedies:**\n\n* **Stay hydrated:** Drink plenty of fluids, especially water or clear broth.\n* **Eat bland foods:** Stick to plain crackers, toast, or rice.\n* **Get some rest:**  Rest can help your body recover.\n* **Avoid strong odors:** Some smells can trigger nausea.\n* **Ginger:** Ginger has been shown to help reduce nausea. You can drink ginger tea or take ginger supplements.\n* **Over-the-counter medications:** Anti-nausea medications like Pepto-Bismol or Dramamine can help.\n\n**When to see a doctor:**\n\n* If your nausea is severe or persistent\n* If you are vomiting\n* If you have a fever\n* If you are experiencing other symptoms, such as abdominal pain or diarrhea\n* If you are pregnant and experiencing nausea\n\nIt is important to remember that this is not a comprehensive list, and you should always consult with a healthcare professional for any health concerns.\n"
// //                         }
// //                     ]
// //                 }
// //             ];

// //             // Example: Sending the image and history to an API
// //             const formData = new FormData();
// //             formData.append('image', uploadImage);
// //             formData.append('history', JSON.stringify(history));

// //             try {
// //                 const response = await fetch('/api/medicaid-ai/analyze', {
// //                     method: 'POST',
// //                     body: formData,
// //                 });

// //                 const result = await response.json();
// //                 setAnalysisResult(result.analysis); // Assuming the API returns an 'analysis' field
// //             } catch (error) {
// //                 console.error('Error analyzing the image:', error);
// //                 setAnalysisResult('Failed to analyze the image. Please try again.');
// //             }
// //         }
// //     };

// //     return (
// //         <div className="medicaid-ai-container">
// //             <div className="sidebar">
// //                 <h2>Navigation</h2>
// //                 <button onClick={() => handlePageChange('Home')}>Home</button>
// //                 <button onClick={() => handlePageChange('MedicAid AI')}>MedicAid AI</button>
// //                 <div className="sidebar-description">
// //                     <p>Medicaid is your go-to platform for all things healthcare, offering seamless access to essential information, resources, and tools designed to help you navigate the complexities of Medicaid with ease.</p>
// //                     <p>Whether you're seeking guidance on eligibility, understanding benefits, or staying updated on the latest healthcare policies, Medicaid empowers you to make informed decisions, ensuring you and your loved ones receive the care you deserve.</p>
// //                     <p>Affordable Care, Quality Service – That’s Medicaid.</p>
// //                 </div>
// //             </div>

// //             <div className="content">
// //                 {page === 'Home' && (
// //                     <div className="home-page">
// //                         <h1>Welcome to MedicAid Image Analyzer🩺</h1>
// //                         <p>From Query to Cure, We Make Health Secure</p>
// //                         <h2>MedicAid presents you an AI Medical Assistant named MedicAid Image Analyzer, which allows you to identify your medical or health-related issues through images.</h2>
// //                     </div>
// //                 )}

// //                 {page === 'MedicAid AI' && (
// //                     <div className="ai-page">
// //                         <h1>MedicAid Image Analyzer🩺</h1>
// //                         <h2>Upload the image for analysis</h2>
// //                         <input type="file" accept="image/png, image/jpeg" onChange={handleImageUpload} />
// //                         {uploadImage && (
// //                             <img
// //                                 src={URL.createObjectURL(uploadImage)}
// //                                 alt="Uploaded Medical"
// //                                 width={250}
// //                                 style={{ borderRadius: '50%' }}
// //                             />
// //                         )}
// //                         <button onClick={handleAnalysis}>Generate the analysis</button>
// //                         {analysisResult && <p>{analysisResult}</p>}
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default MedicAidAI;





// // The following was placed here for relevance but should be added to imports.
// // To generate content, use this import path for GoogleGenerativeAI.
// // Note that this is a different import path than what you use for the File API.
// // import { GoogleGenerativeAI, GoogleAIFileManager } from "@google/generative-ai";

// // const MedicAidAI = () => {


// // // Initialize GoogleGenerativeAI with your API_KEY.
// // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // const model = genAI.getGenerativeModel({
// //   // Choose a Gemini model.
// //   model: "gemini-1.5-pro",
// // });

// // // Upload file ...
// // const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY);

// // // Upload the file and specify a display name.
// // const uploadResponse = fileManager.uploadFile("jetpack.jpg", {
// //   mimeType: "image/jpeg",
// //   displayName: "Jetpack drawing",
// // });

// // // View the response.
// // console.log(`Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`);


// // // Generate content using text and the URI reference for the uploaded file.
// // const result = model.generateContent([
// //     {
// //       fileData: {
// //         mimeType: uploadResponse.file.mimeType,
// //         fileUri: uploadResponse.file.uri
// //       }
// //     },
// //     { text: "Describe how this product might be manufactured." },
// //   ]);

// // // Output the generated text to the console
// // console.log(result.response.text())

// // };

// //  export default MedicAidAI;




// // import './../styling/MedicAI.css';
// // import { GoogleGenerativeAI } from "@google/generative-ai";

// // // Create a functional component
// // const MedicAidAI = () => {
// //   // Initialize GoogleGenerativeAI with your API_KEY
// //   const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// //   // Get the generative model
// //   const model = genAI.getGenerativeModel({
// //     model: "gemini-1.5-pro",
// //   });

// //   // Provide file details manually or handle file uploads differently
// //   const uploadResponse = {
// //     file: {
// //       mimeType: "image/jpeg",
// //       uri: "http://example.com/jetpack.jpg", // Provide the correct URI of your uploaded file
// //       displayName: "Jetpack drawing"
// //     }
// //   };

// //   // Generate content using text and the URI reference for the uploaded file
// //   model.generateContent([
// //     {
// //       fileData: {
// //         mimeType: uploadResponse.file.mimeType,
// //         fileUri: uploadResponse.file.uri
// //       }
// //     },
// //     { text: "Describe how this product might be manufactured." },
// //   ]).then(result => {
// //     // Output the generated text to the console
// //     console.log(result.response.text());
// //   }).catch(error => {
// //     console.error("Error generating content:", error);
// //   });
// // };

// // export default MedicAidAI;






// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useDropzone } from 'react-dropzone';

// // const MedicAidAIPage = () => {
// //   const [file, setFile] = useState(null);
// //   const [response, setResponse] = useState('');
  
// //   const onDrop = (acceptedFiles) => {
// //     setFile(acceptedFiles[0]);
// //   };

// //   const { getRootProps, getInputProps } = useDropzone({ onDrop });

// //   const handleSubmit = async () => {
// //     if (!file) {
// //       alert('Please upload an image first.');
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append('file', file);

// //     try {
// //       const result = await axios.post('/api/analyze-image', formData, {
// //         headers: { 'Content-Type': 'multipart/form-data' }
// //       });
// //       setResponse(result.data.text);
// //     } catch (error) {
// //       console.error('Error analyzing image:', error);
// //     }
// //   };

// //   return (
// //     <div className="medicaid-ai-page">
// //       <h1>MedicAid Image Analyzer🩺</h1>
// //       <p>MedicAid presents you an AI Medical Assistant that allows you to identify your medical or health-related issues through images.</p>
      
// //       <div {...getRootProps()} style={{ border: '2px dashed #cccccc', padding: '20px', textAlign: 'center' }}>
// //         <input {...getInputProps()} />
// //         <p>Drag 'n' drop an image here, or click to select one</p>
// //       </div>
// //       {file && <img src={URL.createObjectURL(file)} alt="Uploaded" width={250} />}
// //       <button onClick={handleSubmit}>Generate the analysis</button>
// //       <div>
// //         <h2>Analysis Result:</h2>
// //         <p>{response}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MedicAidAIPage;










// // src/pages/MedicAidAIPage.js

// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { Lottie } from 'lottie-react';
// import animationData from '../Hello2.json'; // Ensure this path is correct

// const MedicAidAIPage = () => {
//   const [file, setFile] = useState(null);
//   const [analysisResult, setAnalysisResult] = useState('');

//   // useDropzone configuration
//   const onDrop = useCallback((acceptedFiles) => {
//     setFile(acceptedFiles[0]);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/jpeg, image/png, image/jpg',
//     onDrop,
//   });

//   // Handle analysis on button click
//   const handleAnalysis = async () => {
//     if (!file) return;

//     // Simulate file processing and API call
//     const reader = new FileReader();
//     reader.onloadend = async () => {
//       const imageData = reader.result;

//       // Simulate an API call
//       setTimeout(() => {
//         setAnalysisResult('Simulated analysis result for the uploaded image.');
//       }, 2000);
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h1>MedicAid AI Image Analyzer 🩺</h1>
//       <p>Upload an image to analyze for medical insights.</p>

//       <div
//         {...getRootProps()}
//         style={{
//           border: '2px dashed #007bff',
//           padding: '20px',
//           textAlign: 'center',
//           cursor: 'pointer',
//           marginBottom: '20px',
//         }}
//       >
//         <input {...getInputProps()} />
//         {file ? (
//           <div>
//             <img
//               src={URL.createObjectURL(file)}
//               alt="Uploaded preview"
//               style={{ maxWidth: '100%', marginBottom: '20px' }}
//             />
//             <button
//               onClick={handleAnalysis}
//               style={{
//                 padding: '10px 20px',
//                 border: 'none',
//                 backgroundColor: '#007bff',
//                 color: 'white',
//                 cursor: 'pointer',
//               }}
//             >
//               Generate Analysis
//             </button>
//           </div>
//         ) : (
//           <p>Drag 'n' drop an image here, or click to select one</p>
//         )}
//       </div>

//       {analysisResult && (
//         <div>
//           <h2>Analysis Result:</h2>
//           <p>{analysisResult}</p>
//         </div>
//       )}

//       <Lottie
//         animationData={animationData}
//         loop
//         autoplay
//         style={{ height: 190, width: '100%', marginTop: '20px' }}
//       />
//     </div>
//   );
// };

// export default MedicAidAIPage;
