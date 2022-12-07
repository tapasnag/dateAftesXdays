const addDays = require("date-fns/addDays");
const dateAfterDays = (days) => {
  const newDate = addDays(new date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
module.exports = dateAfterDays;
