function checkEmail(email) {
  if (typeof(email) !== "string") return "Error: data type invalid." 
  if (typeof(email) === "undefined") return "Error: undefined parameter."

  const emailvalidation = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  if (emailvalidation.test(email)) {
    return "Valid";
  }
  else {
    return "Invalid";
  }
}
  
console.log(checkEmail("apranata@binar.co.id")) 
console.log(checkEmail("apranata@binar.com")) 
console.log(checkEmail("apranata@binar")) 
console.log(checkEmail("apranata")) 
console.log(checkEmail(123))
console.log(checkEmail()) 