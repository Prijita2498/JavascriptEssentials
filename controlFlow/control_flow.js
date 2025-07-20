//#region If else if else Block
let userRole = "admin";
let accessLevel;

if (userRole === "admin") 
    accessLevel = "Full access granted";
else if (userRole === "manager") 
    accessLevel = "Limited access granted";
else 
    accessLevel = "No access granted";

console.log("Access Level:", accessLevel);
//#endregion

//#region Nested If else Block
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") 
        userMessage = "Welcome, Admin!";
    else 
        userMessage = "Welcome, User!";
} 
else
    userMessage = "Please log in to access the system.";

console.log("User Message:", userMessage);
//#endregion

//#region switch Block
let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin" :
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber" :
        userCategory = "Subscriber";
        break;
    default : 
    userCategory = "Unknown";
}

console.log("User Category:", userCategory);
//#endregion

//#region Ternary Operator
let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated" ;

console.log("Authentication Status:", authenticationStatus);
//#endregion


//#region Practice Task
let role = "Employee";
let hasAccess;
if(role==="Employee")
    hasAccess = "Authorized to have access to Dietary Services";
else if(role==="Enrolled Member")
    hasAccess = "Authorized to have access to Dietary Services and one-to-one interaction with dietician";
else if(role==="Subscriber")
    hasAccess = "Authorized to have partial access to facilitate Dietary Services only"
else
    hasAccess = "Need to enroll or at least subscribe first to avail this facility."

console.log("Has Access to : ", hasAccess);
//#endregion

