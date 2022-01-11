let message;
function scuberGreetingForFeet(feet){
  // Write your code here!

  if (feet <= 400) {
    message = "This one is on me!"
  }
  else if (feet > 2000 && feet < 2500) {
    message = "I will gladly take your thirty bucks."
  }
  else if (feet > 2500) {
    message = "No can do.";
  }
  return message;
}

function ternaryCheckCity(city){
  // Write your code here!
  city === 'NYC' ? (message = 'Ok, sounds good.') : (message = "No go.");
  return message;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      message = "Thank you so much.";
      break;
    case 'not as generous':
      message = 'Thank you.';
      break;
    default:
      message = 'Bye.';
      break;
  }
  return message;
}