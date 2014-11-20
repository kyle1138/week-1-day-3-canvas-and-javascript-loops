var day = process.argv[2];
day = day.toLowerCase();

if (day === "saturday" || day === "sunday"){
  console.log("It's the weekend!")
}
else if (day === "monday" || day === "tuesday"){
  console.log("It's a weekday")
}
else if (day === "wednesday" || day === "thursday"){
  console.log("It's a weekday")
}
else if (day === "friday"){
  console.log("It's a weekday")

}
else{
  console.log("that's not a day of the week.")
};
