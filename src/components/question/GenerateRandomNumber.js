import React from "react";
const GenerateRandomNumber = () => {
  let RandomNumber = Math.floor(Math.random() * 3) + 1;
  let RandomNumber1 = Math.floor(Math.random() * 6) + 1;
  console.log(RandomNumber);
  console.log(RandomNumber1);
  let sum = RandomNumber + RandomNumber1;
  console.log(sum);

  this.setState({
    NumberHolder: RandomNumber,
    NumberHold: RandomNumber1,
    sum,
  });
};
export default GenerateRandomNumber;
