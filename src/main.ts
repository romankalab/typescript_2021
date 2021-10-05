let array = [4,5,1,6,8,3];
array.sort((a, b) => a - b);
let smallest_number = array[0];
let biggest_number = array[array.length-1];
console.log("Smallest number is " + smallest_number 
            + ", biggest number is " + biggest_number 
            + ". The difference is " + (biggest_number-smallest_number) 
            + ".");