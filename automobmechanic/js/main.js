function redirectToServices() {
    window.location.assign("services.html");
}
//This function will validate the user Id and password according to the data in the json file 
// if user id and password matched  it will redirect you home page else it will show an unsucessfull message 
function validateForm() {
    var username = document.getElementById("uname").value; // taking input  username 
    console.log(username);
    var password = document.getElementById("pwd").value;
    console.log(password);
     
    //here we are using fetch api to load the data in json file 
    fetch('../js/users.json').then(result => result.json()).then(json => {
        let flag = false; // when there is not match found for the given userId and password then it will set the flag to false 
         // we will use this variable later in the code
        for (let i = 0; i < 6; i++) {
            if (username == json[i].username && password == json[i].password) {
                alert("Logged Sucessfully");
                flag = true; // here we are setting it to true as the match is found;
                flag1 = true;
                sessionStorage.setItem("UserName", username);
                sessionStorage.setItem("Flag", "true"); // here we are using session storage function because once the page is redirected to home.html all the other variable will be erased.
                window.location.assign("home.html") // redirecting to home.html
                break;
            }
        }
        if (flag == false) {
               //if there is no match of the given userid and password the this message will apper
            alert("Invalid Credentails");
        }
    })
}

if(sessionStorage.getItem("Flag") == "true") {
    changeNavBar();
}

function changeNavBar() {
    // Giving access according to user
        
    if(sessionStorage.getItem("UserName") == "admin"){
        document.getElementById('login').style.display = "none";
        document.getElementById("services").style.display = "none";
        document.getElementById("booking").style.display = "none";
        sessionStorage.removeItem("flag");
        let parent = document.getElementById("name");
         parent.textContent = 'Hi ' + sessionStorage.getItem("UserName") + " |";
     
    }
    else {
         document.getElementById("login").style.display = "none";
         document.getElementById('reports').style.display = "none";
         sessionStorage.removeItem("flag");
         let parent = document.getElementById("name");
         parent.textContent = 'Hi ' + sessionStorage.getItem("UserName") + " |";
    }
}
//function used in services.html
function MoreDetailsPMS(){
sessionStorage.setItem("value" ,"1");
window.location.assign("preventive-maintenance-service.html");


}

function MoreDetailsBPS(){
    sessionStorage.setItem("value" ,"2");
    window.location.assign("body-repair-service.html");

    }
function MoreDetailsCCS(){
    sessionStorage.setItem("value" ,"3");
    window.location.assign("car-care-service.html");
    }


function countDown(){
// Working on this, i will update this soon
}

//function PMS
function bookingPMS(){
    sessionStorage.setItem("Stage1","true")
    window.location.assign("booking.html"); //REDIRECT TO booking.html
}


//redirect the booking.html
function bookingBPS(){
    sessionStorage.setItem("Stage1","true")
    window.location.assign("booking.html");
    
}

function bookingCCS(){
    sessionStorage.setItem("Stage1","true")
    window.location.assign("booking.html");
 
}
//redirect back to the last page opended
function backUrl(){
  window.history.back();
}

if( sessionStorage.getItem("Stage1")=="true"){
    document.getElementById("selectService").selectedIndex = sessionStorage.getItem("value"); 
        // so that the selectservice will have the default value according the servies you choose
    sessionStorage.removeItem("Stage1");
  //  sessionStorage.removeItem("value");
}




function validatebooking(){
    sessionStorage.setItem("bookingsuccess","true");
    checkDate();
 return true;
}

document.getElementById("appointmentDate").addEventListener("change", function() {
     var input = this.value;
        console.log(input); //e.g. 2015-11-13
        let today = new Date().toISOString().slice(0, 10)
        console.log(today);   
        if(input < today ){
            document.getElementById("errorMsg").innerHTML = "*Error Please entre a Valid date"
                console.log("Error Please entre a valid date");
                }
            else{
                document.getElementById("errorMsg").innerHTML = "";
            } });


if(sessionStorage.getItem("bookingsuccess") == "true"){
    setTimeout(()=>{
        console.log("You are insde this function")
        prompt("On a scale of 1-10, how likely are you to recommend our website to your friends or family?");
        alert("Thanks for your feedback");
        sessionStorage.removeItem("bookingsuccess");
        ;},6000);
}



function logout(){
    sessionStorage.clear();
    alert("Logged out successfully");
    window.location.assign("home.html");
}
