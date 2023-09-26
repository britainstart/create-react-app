import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html lang="en">
  <div id ="card" class = "card"> </div>
<head> </head>
<meta charset="UTF-8"> </meta>
<meta name="viewport" content="width=device-width, initial-scale=1.0"> </meta>
<link rel="stylesheet" href="styles.css"> </link>
<title>Card Example</title>

<body>
<div class = "card">
<img src="https://www.mydomaine.com/thmb/CaWdFGvTH4-h1VvG6tukpKuU2lM=/3409x0/filters:no_upscale():strip_icc()/binary-4--583f06853df78c6f6a9e0b7a.jpeg"> </img>
      
<div class="card-content"> 
          <h4><b>Two Pod Real Estate Agency</b></h4>
<p id = 'description'> Real Estate Company Focused on delivering the best properties for college students at Penn State University in State College, PA</p> 
      <button class="details-button" id="detailsBtn">Details</button>
      </div>
      </div> 
</body> 
  <div> </div>
  <button id ="btn">Duplicate</button>
  <button id="colorBtn">BGColorChanger</button>
  <button id="Headingbtn">HeadingChanger</button>
  <button id ="dltbtn">DeleteCard</button>
</html> 
  );
  }

export default App;
