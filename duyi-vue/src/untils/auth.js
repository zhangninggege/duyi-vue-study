function isLogin(){
    return document.cookie.includes('login=true');
}
function Login(){
    const experDay = 3;
    const date = new Date();
    date.setTime(date.getTime() + experDay * 1000 *60 *60*24);
    document.cookie = `login=true;expires=${date.toGMTString()}`;
    
}
function cancleLogin(){
    const date = new Date();
    date.setTime(date.getTime() - 10000000);
    document.cookie = `login=true;expires=${date.toGMTString()}`;
}

export default{
    isLogin,
    Login,
    cancleLogin,
}