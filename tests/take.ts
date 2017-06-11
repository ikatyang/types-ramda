import * as R from 'ramda';

{
    // @dts-jest
    R.take(3,[1,2,3,4,5]); // => [1,2,3]

    let members= [ 'Paul Desmond','Bob Bates','Joe Dodge','Ron Crotty','Lloyd Davis','Joe Morello','Norman Bates',
    'Eugene Wright','Gerry Mulligan','Jack Six','Alan Dawson','Darius Brubeck','Chris Brubeck',
    'Dan Brubeck','Bobby Militello','Michael Moore','Randy Jones'];
    let takeFive = R.take(5);
    // @dts-jest
    takeFive(members); // => ['Paul Desmond','Bob Bates','Joe Dodge','Ron Crotty','Lloyd Davis']
}
{
    // @dts-jest:skip string
    R.take(3,'Example'); // => 'Exa'

    let takeThree = R.take(3);
    // @dts-jest:skip string
    takeThree('Example'); // => 'Exa'
}
