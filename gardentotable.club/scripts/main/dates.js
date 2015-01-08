/** 
 * Scripts used to display dates
 * Brian Bansenauer
 */
 //
//
// Formatting Date output
function longDate (dDate)
{
	dateString = dayOfWeek(dDate.getDay());
	dateString += ", " + monthName(dDate.getMonth());
	dateString += " " + dDate.getDate();
	
	return dateString;
}

function shortDate (dDate)
{	
	dateString = monthName(dDate.getMonth());
	dateString += "&nbsp;" + dDate.getDate()
		
	return dateString;
}

function tinyDate (dDate)
{
	dateString = (dDate.getMonth()+1);
	dateString += "/" + dDate.getDate()
		
	return dateString;
}

function longDateS( dateString )
{
	return longDate(createProperDate(dateString));
}

function shortDateS (dateString)
{	
	return shortDate(createProperDate(dateString));
}

function tinyDateS (dateString)
{
	return tinyDate(createProperDate(dateString));
}

function createProperDate( dateString ) {
	return new Date(dateString+"T08:00:00");
}

//Returns Month name from reult of getMonth() method

function monthName(i) {
	var monthString;
	switch (i)
	{
		case 0: monthString = "January";break;
		case 1: monthString = "February";break;
		case 2: monthString = "March";break;
		case 3: monthString = "April";break;
		case 4: monthString = "May";break;
		case 5: monthString = "June";break;
		case 6: monthString = "July";break;
		case 7: monthString = "August";break;
		case 8: monthString = "September";break;
		case 9: monthString = "October";break;
		case 10: monthString = "November";break;
		case 11: monthString = "December";break;
		default : monthString = "unknown";
	}
	return monthString;
}

//Returns Day of week from result of getDay() method
function dayOfWeek(i) {
	var weekDayString;
	switch (i)
	{
		case 0: weekDayString = "Sunday";break;
		case 1: weekDayString = "Monday";break;
		case 2: weekDayString = "Tuesday";break;
		case 3: weekDayString = "Wednesday";break;
		case 4: weekDayString = "Thursday";break;
		case 5: weekDayString = "Friday";break;
		case 6: weekDayString = "Saturday";break;
		default : weekDayString = "unknown";
	}
	return weekDayString;
}