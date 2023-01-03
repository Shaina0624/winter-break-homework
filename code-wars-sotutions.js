// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.
//Question 1
function multiples0fThreeOrFive(number) {
    let sum = 0;
    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    return sum;
}
/*
The question was asking us to find the multiples of 3 or 5 that is less than the parameter, `nummaber`. Then we iterate from 3 to the `number` argument. During the iteration, we look for all multiples of 3 and 5 using a conditional statement. Once the multiples are found, we add the multiples to the `sum`. Finally, we `return sum` in line 8 after the iteration is completed and all multiples of 3 and 5 gets added to the sum variable. If there are no multiples of 3 or 5 the sum will equate to 0.
*/

//Question 2
function likes(names) {
  if(names.length === 0) return "no one likes this";
  if(names.length === 1) return `${names[0]} likes this`;
  if(names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if(names.length >= 4) return  `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
/*
The question was asking us to return the names of people who 'like this' if it is 3 people or less who like the same thing. If 4 or more like the same thing we were asked to name the first 2 people who liked it and write the number of other peole who liked it. The method I feel was best to use was conditions. If the length of the array, `names` was `0`, a string without any names will be return. While an array of a length of 1 - 3 names, a string  
*/

//Question 3
function findUniq(arr) {
  return arr.find(item => arr.indexOf(item) === arr.lastIndexOf(item));
}
/*
The question was asking for us to find the number that appears once in an array. I used the find method to see if the element or item of the array appears only once. I did this by finding the index of the item using the method, indexOf, and checking if it is strictly equal to the last index using the method, lastIndexOf. If it does, the item that only appears once would be returned.
*/

//Question 4
function findOutlier(integers){
  const even = integers.filter(nums => nums % 2 === 0);
  const odd = integers.filter(nums => nums % 2 !== 0);
  if(even.length === 1) {
    return even[0];
  } else if (odd.length === 1) {
    return odd[0];
    }
}
/*
The question is asking us to find the integer in an array that is comprised of either odd or even integers that is not consistent with the rest of the array. First, we filtered out the even integers using the `filter` method and stored inside the varible called `even`. Second, we filtered out the odd integers using the `filter` method and stored inside the varible called `odd`. Lastly, we set a condition that will return the first element of the even array if the length of the even length is equal to 1 or return the first element of the odd array if the length of the odd length is equal to 1.
*/

//Question 5
function duplicateCount(text){
  let count = 0;
  const obj = {};
  for(let i = 0; i < text.length; i++){
     if(obj[text[i].toLowerCase()]){ // if it exist 
       obj[text[i].toLowerCase()]++; // add 1
     } else { // if it doesn't exist
       obj[text[i].toLowerCase()] = 1; // add the char as a key wit the value of 1
     }
  }
  for(let char in obj){
    if (obj[char] > 1) { 
      count++;
      }
  }
  return count;
}
/*
The question was asking us to return the count of characters that appears more than once in a string. We, fiirst, initialized a count to the value of 0. Then, we created an empty object to collect all the count of the charcaters. We iterated throguh the string, `text`, and set a condition stating that if the character already exist within the object, `obj`, we increment a value of 1. If not, we set the value equal to 1. After, we have our completed object, we iterate through the object and increment count by 1 each time we come across a key in the object that has a value of over 1. Finally, we return count!
*/

//Question 6
function moveZeros(arr) {
  let noZero = arr.filter(i => i !== 0); 
  const amount = arr.length - noZero.length;
  for (let i = 0; i < amount; i++) {
    noZero.push(0);
  }
  return noZero;  
}
/*
This question is asking us to move all charcaters that are strictly equal to `0` towards the end of the array wothout disrupting the order of the other elements in the array. First we filtered all elements that are not strictly equal to `0` using the `filter` method and strore it inside the varible, `noZero`. We, then, we figured out how many zeros are in the array by seeing the difference between the length of the arugment the array, `arr`, from the length of the filtered arr, `noZero`. Then, we did a for loop to repeatedly push `0` into the `noZero` array. Finally, ew returned `noZero`!
*/

//Question 7
function pigIt(str){ // str = 'Pig latin is cool'
  return str.split(' ').map((word) => {
    if ((/\W/).test(word)) {
      return word;
    } else { 
      return word.substring(1) + word[0] + 'ay';
    }
    }).join(" ");
}
/*
The question is asking us to move the first letter of each word towards the end of the word and adding `ay` directly after each word. First, we converted the string into an array using the `split` method with a space inbetween, so that we may get the words as its own element. We used the method, `map`, to iterate through the arr and setting a condition. The condition we wanted to set is that if a puncutation was detected, we would leave it aloneand  return word as it is and if there is no punctuation we would take the word without the first letter using the method, `substring`, we concatenate with the first letter of the word, and we concatenate `'ay'`. We, lastly, just join the array back into a string.
*/