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