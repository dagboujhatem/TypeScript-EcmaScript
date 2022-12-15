import { Point } from "./modules/points";

var p = new Point();
p.move(10,10) 

// google analytics without window

// ga('send', {
//     hitType: 'event',
//     eventCategory: 'category'
// })


// google analytics with window
window.ga('send', {
    hitType: 'event',
    eventCategory: 'category'
})