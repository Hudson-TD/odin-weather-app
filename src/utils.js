function parseWeekday(value) {
  let current = new Date(value).getDay();

  switch (current) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 0:
      return "Sunday";
      break;
    default:
      break;
  }
}

export { parseWeekday };
