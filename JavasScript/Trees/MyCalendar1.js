
var MyCalendar = function() {
    this.bookings = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    if(start >= end) return false;
    
    for (let i = 0; i < this.bookings.length; i++) {
        //2 event cannot start at same time, 
        if (start >= this.bookings[i][0] && start < this.bookings[i][1]) return false;
        if (start < this.bookings[i][0] && end > this.bookings[i][0]) return false;
    }
    
    this.bookings.push([start, end]);
    this.bookings.sort((a,b) => a[0] -b[0])
    
    return true
    
};