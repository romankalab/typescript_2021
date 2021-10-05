let word = "oko";
let word_backwards = "";
for (let i = word.length; i >= 0; i--)
{
    word_backwards+=word.charAt(i);
}
let word_half;
if (word.length%2 == 1)
{
    word_half = word.length/2 + 0.5;
}
else
{
    word_half = word.length/2;
}

let test_palindrome = word.slice(0, word_half)
let test_palindrome2 = word_backwards.slice(0, word_half);
if (word.slice(0, word_half) == word_backwards.slice(0, word_half))
{
    console.log(true);
}
else
{
    console.log(false);
}