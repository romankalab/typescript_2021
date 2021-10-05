let r = "rock";
let p = "paper";
let s = "scissors";
let p1 = r;
let p2 = p;

if (p1 == r)
{
    if (p2 == r)
    {
        console.log("TIE.");
    }
    if (p2 == p)
    {
        console.log("Player2 wins.");
    }
    if (p2 == s)
    {
        console.log("Player1 wins.");
    }
}
if (p1 == p)
{
    if (p2 == r)
    {
        console.log("Player1 wins.");
    }
    if (p2 == p)
    {
        console.log("TIE.");
    }
    if (p2 == s)
    {
        console.log("Player2 wins.");
    }
}
if (p1 == s)
{
    if (p2 == r)
    {
        console.log("Player2 wins.");
    }
    if (p2 == p)
    {
        console.log("Player1 wins.");
    }
    if (p2 == s)
    {
        console.log("TIE.");
    }
}