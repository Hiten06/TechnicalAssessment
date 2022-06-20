

function addweeks(weeks,date){
        date.setDate(date.getDate()+weeks*7)
        return date;
}

function adddays(days,date){
    date.setDate(date.getDate()+days)
    return date;
}

function add187days(date){
    date.setDate(date.getDate()+187);
    return date;
}
const addweek = addweeks(6,new Date("2022-06-20"));
const addday = adddays(6,new Date("2022-06-20"));
const add187 = add187days(new Date("2022-06-20"));
module.exports = [addweek,addday,add187];