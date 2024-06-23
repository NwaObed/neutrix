import React, {useEffect} from 'react'
import { PopupWidget, PopupButton } from "react-calendly";
import {useNavigate} from 'react-router-dom';
import '../styles/custom-style.css'

// function Button(props) {

//     const openCalendly = () => {
//         // window.Calendly.initPopupWidget({ url: 'https://calendly.com/neutrixclass/45min' });
//     //     // window.open('https://calendly.com/neutrixclass/45min', '_blank');
//     //     // console.log("I am clicked!");
//     //     return false;
//     };

//     useEffect(() => {
//         const head = document.querySelector('head');
//         const script = document.createElement('script');
//         script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
//         head.appendChild(script);
//       }, []);

//     return (
//         <div>
//             <button onClick={() => document.getElementById('calendly-widget').classList.toggle('hidden')} className='intro'>{props.action}
//             </button>
//             <div id="calendly-widget" className="hidden">
//                 <div
//                     className="calendly-inline-widget"
//                     data-url="https://calendly.com/neutrixclass/45min"
//                     style={{ minWidth: '100%', height: '500px' }}
//                     ></div>
//             </div>
//         </div>
//         // <button onClick={openCalendly} className='intro'>{props.action}</button>
//     );
// };

// **************************** Method 2 ********************//

// const Button = (props) => {
//   useEffect(() => {
//     // Ensure Calendly script is loaded
//     const script = document.createElement('script');
//     script.src = 'https://assets.calendly.com/assets/external/widget.js';
//     script.async = true;
//     script.onload = () => {
//       console.log('Calendly widget script loaded successfully.');
//     };
//     script.onerror = () => {
//       console.error('Failed to load Calendly widget script.');
//     };
//     document.body.appendChild(script);
//   }, []);

//   const openCalendly = () => {
//     if (window.Calendly) {
//       console.log('Opening Calendly popup...');
//       window.Calendly.initInlineWidget({ url: 'https://calendly.com/neutrixclass/45min' });
//     } else {
//       console.error('Calendly widget script is not loaded.');
//     }
//     return false;
//   };

//   return (
//     <div>
//       <button onClick={openCalendly}>{props.action}</button>
//     </div>
//   );
// };


// *************** Method 3 *********************//
// import React, { useState, useEffect } from 'react';

// const Button = () => {
//   const [showCalendly, setShowCalendly] = useState(false);

//   const openCalendly = () => {
//     setShowCalendly(true);
//   };

//   useEffect(() => {
//     if (showCalendly) {
//       const script = document.createElement('script');
//       script.src = 'https://assets.calendly.com/assets/external/widget.js';
//       script.async = true;
//       script.onload = () => {
//         window.Calendly.initInlineWidget({
//           url: 'https://calendly.com/neutrixclass/45min',
//           parentElement: document.getElementById('calendly-container'),
//           prefill: {},
//           utm: {}
//         });
//       };
//       document.getElementById('calendly-container').appendChild(script);
//     }
//   }, [showCalendly]);

//   return (
//     <div>
//       <div>
//         <button onClick={openCalendly}>Book a Session Now</button>
//       </div>
//       {showCalendly && <div id="calendly-container"></div>}
//     </div>
//   );
// };

// ************* Using react calendly **************//

const BookButton = () => {
  return (
    <div className="App">
      <PopupButton
        url="https://calendly.com/neutrixclass/45min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Book a session Now"
        textColor="#ffffff"
        color="#00a2ff"
      />
    </div>
  );
};

const HomeButton = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.path);
  }
  return (
    <div className='button-container' onClick={handleClick}>
      <button className='home-button'>{props.children}</button>
    </div>
  )
};

const FeedbackButton = () => {
  return (
    <div className="feedback-button">
      <PopupWidget
        url="https://docs.google.com/forms/d/e/1FAIpQLSfjp45-8BFhX5e8oIVGxEJRkAhxz-P1N81j9ASF6yycjpGfCg/viewform?embedded=true"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Feedback"
        textColor="#15375c"
        color="#f9f9f9"
        backgroundcolor="red"
      />
    </div>
  );
}
{/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfjp45-8BFhX5e8oIVGxEJRkAhxz-P1N81j9ASF6yycjpGfCg/viewform?embedded=true" width="640" height="1097" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}

export default BookButton;
export {HomeButton, FeedbackButton};
