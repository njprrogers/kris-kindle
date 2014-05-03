/**
* Created by nickrogers on 01/05/2014.
*/

// Kris Kindle
function secretSanta( arr ) {
    var cloneOfMembers;
    var giverReceiver = {};

    // Create a copy of the passed array
    cloneOfMembers = arr.slice(0);

    // loop through each item on array of members
    for ( var i = 0, receiver = cloneOfMembers[ cloneOfMembers.length-1 ]; i < arr.length; i++ ) {
        // for receiver equal to the current member, or there is no receiver
        // receiver = random member
        while ( receiver === arr[i] || !receiver ) {
            // Grab a random member from the member array
            receiver = cloneOfMembers[ Math.floor(Math.random() * cloneOfMembers.length) ];
        }
        // remove this member from the cloned array as we are about to allocate them
        cloneOfMembers.splice( cloneOfMembers.indexOf(receiver), 1 );
        // Return object receiver e.g. ret[ 'Nick'] = 'Rory'
        giverReceiver[ arr[i] ] = receiver;
        // initialize receiver
        receiver = null;
    }

    return giverReceiver;
}