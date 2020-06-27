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
    const pdf = new jsPDF('p', 'mm', 'a4')
    const width = pdf.internal.pageSize.getWidth()
    const height = pdf.internal.pageSize.getHeight()
    pdf.addImage(imgData, 'PNG', 0, 0, width,height)
    pdf.save('education_data.pdf')
  })

  input.classList.remove('pdf')
}


function App() {
  return (
    <div className="App">
      <div id='pdf'>
      <Navbar savePDF={savePDF}/>
      <Home />
      </div>
    </div>
  );
}

export default App;
