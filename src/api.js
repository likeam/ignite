//Base url

const base_url = "https://api.rawg.io/api";

//Geting the date
const getCurtentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return ` 0${month}`;
    }else{
        return month;
    }
}

const getCurtentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return ` 0${day}`;
    }else{
        return day;
    }
}

//Current day/month/year
const currentYear = new Date().getFullYear;
const currentMonth = getCurtentMonth;
const currentDay = getCurtentDay();
const currentDate = `${currentYear} -${currentMonth} - ${currentDay}`;
const lastYear = `${currentYear - 1} -${currentMonth} - ${currentDay}`;
const nextYear = `${currentYear + 1} -${currentMonth} - ${currentDay}`;


//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;


export const popularGamesURL = () => `${base_url}${popular_games}`;
console.log(popularGamesURL());
