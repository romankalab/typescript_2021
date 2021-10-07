let word = "Jozko Mrkvicka";
let word2 = "Mrkvicka";
if (word.substr(word.length-word2.length, word2.length) == word2)
{
    console.log(true);
}
else
{
    console.log(false);
}