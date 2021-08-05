alert("guess a number between 1 and 100");
let minNumber = -1,
  maxNumber = 101;

outer: while (maxNumber - minNumber > 1) {
  const halfNumber = Math.floor((minNumber + maxNumber) / 2);
  let userChoise = +prompt(
    `Is ${halfNumber} your number? Press "1" if yes,
     "2" if your number is less then ${halfNumber} and "3"
      if it is more then ${halfNumber}`
  );
  switch (userChoise) {
    case 1:
      alert(`Your number was ${halfNumber}! Gosh it wasn't easy!`);
      break outer;
    case 2:
      maxNumber = halfNumber;
      break;
    case 3:
      minNumber = halfNumber;
      break;
    default:
      alert("You`ve got to input something!");
      break outer;
  }
}
