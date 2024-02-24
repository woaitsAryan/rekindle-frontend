export function getDayOfWeek(dateString:string){
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}
export function getDayOfMonth(dateString:string){
    const date = new Date(dateString);
    return date.getDate();
}
export function getMonth(dateString:string){
    const date = new Date(dateString);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()];
}
export function getYear(dateString:string){
    const date = new Date(dateString);
    return date.getFullYear();
}
export function getHours(dateString:string){
    const date = new Date(dateString);
    return date.getHours();
}
export function getMinutes(dateString:string){
    const date = new Date(dateString);
    return date.getMinutes();
}
export function getSeconds(dateString:string){
    const date = new Date(dateString);
    return date.getSeconds();
}
        
