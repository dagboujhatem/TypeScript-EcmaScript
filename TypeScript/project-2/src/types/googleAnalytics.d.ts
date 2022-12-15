// 1st way

// declare function ga (
//     eventName: string, 
//     options: { 
//         hitType: string, 
//         eventCategory?: string 
//     }): void

// 2nd way

// declare var ga : (
//     eventName: string, 
//     options: { 
//         hitType: string, 
//         eventCategory?: string 
//     }) => void

// 3th way
interface Window {
    ga: (
        eventName: string,
        options: {
            hitType: string,
            eventCategory?: string
        }) => void
}