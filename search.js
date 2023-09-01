const lyrics = 'Tumi bondhu Kala pakhi, ami jeno ki, sada sada kala kala';
var searchSting = 'pakhi';

var doesExits = lyrics.toLowerCase().includes(searchSting.toLowerCase());

console.log(doesExits);

console.log(lyrics.indexOf('ami'));

if(lyrics.indexOf('kaala') !== -1)
{
    console.log('String does Exits');
}
else
{
    console.log('Does not Exits');
}

console.log(lyrics.startsWith('Tumi'));

const chars = lyrics.split('');
//console.log(chars);

const partial = lyrics.slice(5,9);
console.log(partial);
const partial2 = lyrics.substring(5,9);
console.log(partial2);



function maxInArray(numbers){
    
    let largest = numbers[0];
    for(let i=0; i < numbers.length; i++)
    {
        
        const index = i;
        const elements = numbers[index];
        if(elements > largest)
        {
            largest = elements;
        }
        
    }
    return largest;
}

const heights = [167,554,646,323,665,656];
const tallest = maxInArray(heights);
console.log('Tallest person is: ', tallest);