function getUTCTimeStamp(date) {
    if (date) {} else {
        date = new Date();
        return date.getUTCFullYear() + '-' + beautifyDate(date.getUTCMonth() + 1) + '-' + beautifyDate(date.getUTCDate()) + 'T' + beautifyDate(date.getUTCHours()) + ':' + beautifyDate(date.getUTCMinutes()) + ':' + '00Z';
    }
}
function beautifyDate(date) {
    return date < 10 ? '0' + date: date;
}
function getFormattedDate(date) {
    if (date === undefined || !date) {
        return null;
    } else {
        date = new Date(date);
        return beautifyDate(date.getDate()) + '.' + beautifyDate(date.getMonth() + 1) + '.' + date.getFullYear(); //return beautifyDate(date.getUTCDate()) + '/' + beautifyDate(date.getUTCMonth() + 1) + '/' + date.getUTCFullYear();
    }
}
function getFormattedDateOnly(date) {
    if (date === undefined || !date) {
        return null;
    } else {
        date = new Date(date);
        return beautifyDate(date.getDate());
    }
}
function getHourMin(date) {
    if (date === undefined || !date) {
        return null;
    } else {
        date = new Date(date);
        return beautifyDate(date.getHours()) + ':' + beautifyDate(date.getMinutes());
    }
};
function getHMA(date,capital){
	if (date === undefined || !date) {
        return null;
    } else {
        date = new Date(date);
		var hours = date.getHours(),
		minutes = date.getMinutes(),
		ampm = null;
		if(hours === 0){
			hours = 12;
			ampm = capital ? 'AM' : 'am';
		}else if(hours < 12){
			ampm = capital ? 'AM' : 'am';
		}else if(hours == 12){
			ampm = capital ? 'PM' : 'pm';
		}else{
			hours = hours - 12;
			ampm = capital ? 'PM' : 'pm';
		}
        return beautifyDate(hours) + ':' + beautifyDate(minutes) + ampm;
    }
}
function getFormattedDateTime(date){
	if (date === undefined || !date) {
        return null;
    } else {
        date = new Date(date);
        return beautifyDate(date.getDate()) + '/' +beautifyDate(date.getMonth() + 1) + '/' + date.getFullYear() + ' '+ getHourMin(date);
    }
}
function getZoneOffset(date) {
    if (date > 0) {
        date = Math.abs(date);
        date = '-' + date / 60 + ':' + date % 60;
    } else {
        date = Math.abs(date);
        date = '+' + beautifyDate(date / 60) + ':' + beautifyDate(date % 60);
    }
    return date;
}
function getTimeStamp(date) {
    if (date) {} else {
        date = new Date();
        return date.getFullYear() + '-' + beautifyDate(date.getMonth() + 1) + '-' + beautifyDate(date.getDate()) + 'T' + beautifyDate(date.getHours()) + ':' + beautifyDate(date.getMinutes()) + ':00.000' + getZoneOffset(date.getTimezoneOffset());
    }
}
function getMonthNameWithYear(date){
	if (date === undefined || !date) {
        return null;
    } else {
        date = new Date(date);
		var monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		return monthArray[date.getMonth()] + ' ' + date.getFullYear();
	}
}
function isNight(date){
	var night = false;
	if (date === undefined || !date) {
        return night;
    } else {
		date = new Date(date);
		if(date.getHours() >= 20 || date.getHours() <= 5){
			night = true;
		}
	}
	return night;
}