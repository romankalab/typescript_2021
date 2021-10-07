let array = [1,7,2,4,8,5,101,104,12,15];
let even_number_sum = 0;
let odd_number_sum = 0;
array.forEach(number => {if(number%2==0)
            even_number_sum+=number;});
array.forEach(number => {if(number%2==1)
            odd_number_sum+=number;});

if (even_number_sum > odd_number_sum)
{
    console.log(even_number_sum-odd_number_sum);
}
else
{
    console.log(odd_number_sum-even_number_sum);
}