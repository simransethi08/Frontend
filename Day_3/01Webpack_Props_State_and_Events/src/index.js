import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';
import '../src/stylesheets/mystyles.css';

ReactDOM.render(<Layout />,
document.getElementById('container'));

// ReactDOM.render(
//     <div>
//         <Greet />
//         <Greet name='Sachin Tendulkar'/>
//         <HelloMsg text='India'>
//             Message to India!
//         </HelloMsg>
//         <HelloMsg text='Wolrd'>
//             Message to World!
//         </HelloMsg>
//         <HelloMsg text='Universe'>
//             Message to Universe!
//         </HelloMsg>
//         <Welcome name='Chris Gayle'/>
//     </div>,
//  document.getElementById('container'));

// ReactDOM.render(<Checkbox />,
// document.getElementById('container'));