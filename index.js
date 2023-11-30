//HTML Code Textarea
var html = document.getElementById('html-editor')
//CSS Code Textarea
var css = document.getElementById('css-editor')
//JS Code Textarea
var js = document.getElementById('js-editor')
// Preview Iframe
var preview_panel = document.getElementById('preview-panel').contentWindow.document
// Run or Execute button
var compile = document.getElementById('execute_code')

var clear = document.getElementById('reset_code')

var my= " ";

// Compiling and Execute Code
compile.addEventListener('click', function(){
  preview_panel.open()
  preview_panel.writeln(`<style>${css.value}</style>`)
  preview_panel.writeln(`${html.value}`)
  preview_panel.writeln(`<script>${js.value}</script>`)

  preview_panel.close()
})

clear.addEventListener('click',function(){
  preview_panel.open();
  preview_panel.writeln(my);
  preview_panel.close();
})

// Real-Time Preview
html.addEventListener('keyup', function() {
  runCode(); 
});
css.addEventListener('keyup', function() {
  runCode();
});
js.addEventListener('keyup', function() {
  runCode();
});

// Error Handling
function runCode() {
  try {
      preview_panel.open();
      preview_panel.writeln(`<style>${css.value}</style>`);
      preview_panel.writeln(`${html.value}`);
      preview_panel.writeln(`<script>${js.value}</script>`);
      preview_panel.close();
  } catch (e) {
      preview_panel.open();
      preview_panel.writeln(e.message);
      preview_panel.close();
  }
}


var darkModeButton = document.getElementById('dark_mode');
var isDarkMode = true; // Flag to track the current mode

// Initial state is dark mode
setDarkMode();

darkModeButton.addEventListener('click', function() {
  // Toggle the mode
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    setDarkMode();
  } else {
    setLightMode();
  }
});

function setDarkMode() {
  // Get all the cards
  var cards = document.getElementsByClassName('card');

  // Get all the buttons
  var buttons = document.getElementsByTagName('button');

  // Dark Mode
  preview_panel.body.style.backgroundColor = '#2b2b2b';
  preview_panel.body.style.color = 'white';
  darkModeButton.style.backgroundColor = 'black';
  darkModeButton.style.color = 'white';

  // Loop through the cards and change their background and text color
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = '#2b2b2b';
    cards[i].style.color = 'white';
  }

  // Loop through the buttons and change their background and text color
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = 'white';
    buttons[i].style.color = 'black';
  }
}

function setLightMode() {
  // Get all the cards
  var cards = document.getElementsByClassName('card');

  // Get all the buttons
  var buttons = document.getElementsByTagName('button');

  // Light Mode
  preview_panel.body.style.backgroundColor = 'white';
  preview_panel.body.style.color = 'black';
  darkModeButton.style.backgroundColor = 'white';
  darkModeButton.style.color = 'black';

  // Loop through the cards and change their background and text color
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = 'white';
    cards[i].style.color = 'black';
  }

  // Loop through the buttons and change their background and text color
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = 'black';
    buttons[i].style.color = 'white';
  }
}




// Dark Mode


/*var darkModeButton = document.getElementById('dark_mode');
darkModeButton.addEventListener('click', function() {
  // Change the background and text color of the preview panel
  preview_panel.body.style.backgroundColor = '#2b2b2b';
  preview_panel.body.style.color = 'white';

  // Get all the cards
  var cards = document.getElementsByClassName('card');

  // Loop through the cards and change their background and text color
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = '#2b2b2b';
    cards[i].style.color = 'white';
  }

  // Get all the buttons
  var buttons = document.getElementsByTagName('button');

  // Loop through the buttons and change their background and text color
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = 'white';
    buttons[i].style.color = 'black';
  }
});*/


/*var darkModeButton = document.getElementById('dark_mode');
var isDarkMode = false; // Flag to track the current mode

darkModeButton.addEventListener('click', function() {
  // Toggle the mode
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    // Dark Mode
    preview_panel.body.style.backgroundColor = '#2b2b2b';
    preview_panel.body.style.color = 'white';
    darkModeButton.style.backgroundColor = 'black';
    darkModeButton.style.color = 'white';
  } else {
    // Light Mode
    preview_panel.body.style.backgroundColor = 'white';
    preview_panel.body.style.color = 'black';
    darkModeButton.style.backgroundColor = 'white';
    darkModeButton.style.color = 'black';
  }
});*/
