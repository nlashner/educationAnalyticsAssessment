import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'


function savePDF(){
  const input = document.getElementById('pdf')
  input.classList.add('pdf')

  html2canvas(input)
  .then((canvas) => {
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF()
    pdf.addImage(imgData, 'JPEG', 0, 0)
    pdf.save('download.pdf')
  })
}


function App() {
  return (
    <div className="App">
      <div id='pdf'>
      <button onClick={savePDF}>Save Page as PDF</button>
      <Navbar />
      <Home />
      </div>
    </div>
  );
}

export default App;
