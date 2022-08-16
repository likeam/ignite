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

