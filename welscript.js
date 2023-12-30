var cookies = listAllCookies()
var Uimg = document.getElementById('imgg')
Uimg.src = cookies['Gender']
var Uname = document.getElementById('name')
Uname.innerText=cookies['username']
Uname.style.color = cookies['color']
var x 
if(checkCookie('visited')){
    
    
    var visitTimes =parseInt( getCookie('visited'))+1
   console.log(visitTimes)
    
   
    setCookie('visited',visitTimes,date)
    document.getElementById('visit').innerText =visitTimes
    document.getElementById('visit').style.color=cookies['color']
}
else{
    x=1
    console.log('yes?')
    document.getElementById('visit2').innerText = 'This your first time in the page '
    var date = new Date();
    date.setMonth(date.getMonth()+1)
    setCookie('visited',x,date)
    console.log(x)
}