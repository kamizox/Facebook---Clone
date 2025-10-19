function createNewAccount() {
    window.location.href = "../Signup/signup.html";
}

class user{
    constructor(firstName,lastName,birthDay,birhtMonth,birhtYear,gender,email_phone,New_Password)
    {
        this.fName = firstName;
        this.lstName = lastName;
        this.birDay = birthDay;
        this.birMonth = birhtMonth;
        this.birYear = birhtYear;
        this.gender = gender;
        this.email_phone = email_phone;
        this.New_Password = New_Password;
    }
}

function Signup(event) {
    event.preventDefault(); 
    let firstName = document.getElementById("first-name")
    let lastName = document.getElementById("last-name")
    let birthDay = document.getElementById("day")
    let birhtMonth = document.getElementById("month") 
    let birhtYear = document.getElementById("year")
    let gender = document.querySelector('input[name="gender"]:checklist')
    let email_phone = document .getElementById("email-phone")
    let New_Password = document.getElementById("New-Password")
}

