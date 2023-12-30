var userName = document.getElementById('username')
var userAge = document.getElementById('age')
var Gender = document.getElementsByName('Gender')
var Color = document.getElementById('color')

function checkCookies(){
    if(getCookie(Color.name)){
        deleteCookie(userName.name)
        deleteCookie(Color.name)
        deleteCookie(userAge.name)
        deleteCookie(Gender[0].name)
    }
}





function butStart(){

setCookie(userName.name,userName.value)
setCookie(userAge.name,userAge.value)
setCookie(Color.name,Color.value)
//check which button is checked and get its image
for(var i = 0 ;i<Gender.length;i++){
    if (Gender[i].checked && Gender[i].id =='male' ){
        setCookie(Gender[i].name,'1.jpg')
    }
    else if(Gender[i].checked && Gender[i].id =='female'){
        setCookie(Gender[i].name,'2.jpg')
    }
}
// validation before new page
if(!getCookie(userName.name)||!getCookie(userAge.name)){
    alert('enter name and age')
}
else{
location.replace("welcome.html")
}}