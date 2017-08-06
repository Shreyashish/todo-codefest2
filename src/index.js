import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// let el = React.createElement('ul', {
//     className: "some-class"
// }, React.createElement('li',null,"hello p tag"));
// console.log(el);

// const students = [
//     {name: "shrey"},
//     {name: "yashish"},
//     {name: "vishal"}
// ];
//
// const el = <ul>
//     {students.map((student) => (
//         <li>{student.name}</li>
//     ))}
// </ul>;

// class Student extends React.Component {
//     render() {
//         const students = [
//             {name: "shrey"},
//             {name: "yashish"},
//             {name: "vishal"}
//         ];
//
//         return (
//             <ul>
//                 {students.map((student, index) => (
//                     <li key={index}>{student.name}</li>
//                 ))}
//             </ul>
//         )
//     }
// }

//ReactDOM.render(el, document.getElementById('root'));
//ReactDOM.render(<Student/>, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById('root'));
