// Object methods
//refers to objects where the keys have the value of a function.
//this refers to the whole object

let restaurant = {
    name:"Gaucho",
    guestCapacity:75,
    guestCount:0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
     seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize;
    },

    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize;
    },
};

restaurant.seatParty(67);
console.log(restaurant.checkAvailability(3));

restaurant.removeParty(3);
console.log(restaurant.checkAvailability(3));


