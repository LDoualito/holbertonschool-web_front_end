function changeMode(size, weight, transform, background, color) {
    return function() {
      document.body.style.fontSize = size + 'px';
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    }
  }
  
  function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
    
    let p = document.createElement('p');
    p.innerHTML = 'Welcome Holberton!';
    document.body.appendChild(p);
  
    let btnSpooky = document.createElement('button');
    btnSpooky.innerHTML = 'Spooky';
    document.body.appendChild(btnSpooky);
  
    let btnDarkMode = document.createElement('button');
    btnDarkMode.innerHTML = 'Dark Mode';
    document.body.appendChild(btnDarkMode);
  
    let btnScreamMode = document.createElement('button');
    btnScreamMode.innerHTML = 'Scream Mode';
    document.body.appendChild(btnScreamMode);
  
    btnSpooky.onclick = spooky;
    btnDarkMode.onclick = darkMode;
    btnScreamMode.onclick = screamMode;
  }
  
  main();