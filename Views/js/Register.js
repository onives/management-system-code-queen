function formValidation()
{
var FName = document.registration.Firstname;
var LName = document.registration.Lastname;
var uemail = document.registration.email;
var upassword = document.registration.password;
var uadd = document.registration.address;
var uphone= document.registration.phoneno;
var usmaritalstatus = document.registration.usmaritalstatus;
var uwmaritalstatus = document.registration.uwmaritalstatus;
var udate = document.registration.mdate;
if(FName_validation(FName,5,12))
{
if(Lname_validation(LName,7,12))
{
if(uemail(uemail))
{
if(upassword(passid,7,12))
{ 
if(uaddress(ucounty))
{
if(phoneselect(unumbers))
{
if(Validatemarital(umaritalstatus))
{
if(Validatemarital(umaritalstatus))
{
if(validatedate(inputText))
{
}
} 
}
} 
}
}
}
}
}
return false;

}
function allLetter(uFName)
{ 
var letters = /^[A-Za-z]+$/;
if(uFName.value.match(letters))
{
return true;
}
else
{
alert('First name must have alphabet characters only');
uname.focus();
return false;
}
}

function allLetter(uLName)
{ 
var letters = /^[A-Za-z]+$/;
if(uLName.value.match(letters))
{
return true;
}
else
{
alert('Last Name must have alphabet characters only');
uname.focus();
return false;
}
}

function ValidateEmail(uemail)
{ 
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert('You have entered an invalid email address!');
uemail.focus();
return false;
}
}
function CheckPassword(inputtxt) 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(inputtxt.value.match(decimal)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
} 
 function alphanumeric(uadd)  
        { 
        var letters = /^[0-9a-zA-Z]+$/;
        if(uadd.value.match(letters))
        {
        return true;
        }
        else
        {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
        }
function phonenumber(inputtxt)
        {
          var phoneno = /^\d{10}$/;
          if(inputtxt.value.match(phoneno))
          {
              return true;
          }
          else
          {
             alert("Not a valid Phone Number");
             return false;
          }
        }
        
function Validatemarital(umarital,umarital)
{
x=0;

if(umarital.checked) 
{
x++;
} if(umarital.checked)
{
x++; 
}
if(x==0)
{
alert('Select Single/Married');
umarital.focus();
return false;
}
else
{
alert('Form Successfully Submitted');
window.location.reload()
return true;}
}
function validatedate(inputText)
  {
  var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
  // Match the date format through regular expression
  if(inputText.value.match(dateformat))
  {
  document.form1.text1.focus();
  //Test which seperator is used '/' or '-'
  var opera1 = inputText.value.split('/');
  var opera2 = inputText.value.split('-');
  lopera1 = opera1.length;
  lopera2 = opera2.length;
  // Extract the string into month, date and year
  if (lopera1>1)
  {
  var pdate = inputText.value.split('/');
  }
  else if (lopera2>1)
  {
  var pdate = inputText.value.split('-');
  }
  var mm  = parseInt(pdate[0]);
  var dd = parseInt(pdate[1]);
  var yy = parseInt(pdate[2]);
  // Create list of days of a month [assume there is no leap year by default]
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (mm==1 || mm>2)
  {
  if (dd>ListofDays[mm-1])
  {
  alert('Invalid date format!');
  return false;
  }
  }
  if (mm==2)
  {
  var lyear = false;
  if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
  {
  lyear = true;
  }
  if ((lyear==false) && (dd>=29))
  {
  alert('Invalid date format!');
  return false;
  }
  if ((lyear==true) && (dd>29))
  {
  alert('Invalid date format!');
  return false;
  }
  }
  }
  else
  {
  alert("Invalid date format!");
  document.form1.text1.focus();
  return false;
  }
  }
}
