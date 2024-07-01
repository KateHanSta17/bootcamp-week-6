// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
const gradDate = dayjs("2024-11-21").format("MMM D, YYYY");
$("#1a").text(gradDate);

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
const dayOfWeek = dayjs("2027-01-01").format("dddd");
$("#2a").text(dayOfWeek);

// TODO: 3. What is the current time in the format: hours:minutes:seconds
const currentTime = dayjs().format("h:mm:ss A");
$("#3a").text(currentTime);

// TODO: 4. What is the current Unix timestamp?
const unixTimestamp = dayjs().unix();
$("#4a").text(unixTimestamp);

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
const convertedTimestamp = dayjs.unix(1318781876).format("MMM D, YYYY");
$("#5a").text(convertedTimestamp);

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)
const differenceInDays = dayjs("2027-05-04").diff(dayjs(), "days");
$("#6a").text(differenceInDays);

