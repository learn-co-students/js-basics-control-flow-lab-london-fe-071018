// Write your code in this file!

function scuberGreetingForFeet(distance) {
  if (distance >= 199 && distance <=400){
    return "This one is on me!"
  }
  else if (distance >= 2000 && distance < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if (distance > 2500){
    return "No can do."
  }
}

function ternaryCheckCity(destination) {
  if (destination === 'NYC'&& destination !=='Pittsburgh'){
    return 'Ok, sounds good.'
  } 
  if (destination === 'Pittsburgh'){
    return "No go."
  }
}

function switchOnCharmFromTip(tip) {
  if (tip === 'generous'){
    return 'Thank you so much.'
  }
  else if (tip === 'not as generous'){
    return 'Thank you.'
  }
  else if (tip = 'thanks for everything') {
    return 'Bye.'
  }
}

