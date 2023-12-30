function setCookie(key,value,expires=1-1-1970){
    if(key){
        document.cookie = key + '=' + value + ';' + 'expires=' + expires;
    }
    else{
        throw 'enter key'
    }
}


function getCookie(key){
    var cokie = listAllCookies()
    return cokie[key]
}


function listAllCookies(){
    var cookies = document.cookie.split('; ')
    var array = new Array()
    for(var i = 0 ;i<cookies.length;i++){
        var values = cookies[i].split('=')
        array[values[0]]=values[1]
    }
    return array
}


function deleteCookie(key){
    setCookie(key,'')
}



function checkCookie(key){
    if (getCookie(key)){
        return true
    }
    else {return false}
}