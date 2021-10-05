let array = [1,2,3,4,5,6,7];
let even_number_sum;
let odd_number_sum;
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