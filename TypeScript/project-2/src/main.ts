import { Point } from "./modules/points";

var p = new Point();
p.move(10, 10)

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


// Scroll to business logic
import scrollTo from 'scroll-to';

const button = document.getElementById('button') as HTMLButtonElement;
button.addEventListener('click', (e: MouseEvent)=>{
    e.preventDefault();
    scrollTo(10, 100, {
        ease: 'out-bounce',
        duration: 1500
    })
})
