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
  <script>
   document.querySelector('#btn').addEventListener('click', function(e){
    clone = document.querySelector('#card').cloneNode('card')}
document.body.appendChild(clone);
     const cardCline = cardToClone.cloneNode(true);
{'}'})
</script> 
   <script>
        var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        var letters = ["A", "B", "C", "D", "E", "F"];
        function randomColor() {
            color = ""}
                index= Math.floor(Math.random() * (numbers.length + letters.length));
                color+=(index)?numbers[index]:letters[index-numbers.length];
            {'}'}
            return color;
        {'}'}
       document.querySelector('#colorBtn').addEventListener('click', function (e) {
            card = document.querySelector('.card')}
   
            const currentColor = card.style.backgroundColor;
             card.style.backgroundColor = '#' + randomColor();
        {'}'});
    </script>
  <script>
   document.querySelector('#Headingbtn').addEventListener('click', function(e){
      title = document.querySelector('h4')}
      title.innerText = "Super Pod 2 Realty";
    {'}'})
  </script>
  <script>
    //card delete
    document.querySelector('#dltbtn').addEventListener('click', function(e){
      cards = document.querySelectorAll('.card')}
      
    if (cards.length {'>'} 2) {
        lastCard = cards[cards.length - 1]}
        lastCard.parentNode.removeChild(lastCard);
    {'}'}
    {'}'})
  </script>
  <script>
    
    var original= document.querySelector('#description').innerText;
document.querySelector('#detailsBtn').addEventListener('click', function(e) {
    description = document.querySelector('#description')}
    
    if (description.innerText === 'none' || description.innerText=== '') {
        description.innerText = original}
    {'}'} else {
        description.innerText = ''}
    {'}'}
{'}'});
  </script>
</html> 
  );
  }

export default App;
