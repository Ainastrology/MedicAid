// import React from "react";
// import { createRoot } from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { useAuth0 } from "@auth0/auth0-react";
// import App from './../App';
// import './../styling/Home.css';

// // Ensure the root element exists
// const rootElement = document.getElementById('root');
// if (!rootElement) {
//     throw new Error('Failed to find the root element');
// }

// // Create the root
// const root = createRoot(rootElement);

// // Render the application
// root.render(
//   <Auth0Provider
//     domain="dev-cpax538b3nd6ywje.us.auth0.com"
//     clientId="qfYK4NUX8UHMhLwXhY12OIRmQV3GdMUP"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>
// );

// // Separate component definition
// const LoginButton = () => {
//     const { loginWithRedirect } = useAuth0();
  
//     return (
//         <div className="login-btn">
//             <button onClick={() => loginWithRedirect()}>Log In</button>;
//         </div>
    
//     );
//   };

// export default LoginButton;






import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../Hello2.json';  // Ensure this file is in the public directory

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to MedicAid Image Analyzer🩺</h1>
      <p>From Query to Cure, We Make Health Secure</p>
      <Lottie 
        options={{
          loop: true,
          autoplay: true, 
          animationData: animationData
        }}
        height={190}
        width="100%"
      />
    </div>
  );
};

export default HomePage;

