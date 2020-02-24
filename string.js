function toUpperCase(){
    s=document.getElementById('test1').value
    s=s.toUpperCase()
    document.getElementById('test1').value=s
}
function toLowerCase(){
    s=document.getElementById('test1').value
    s=s.toLowerCase()
    document.getElementById('test1').value=s
}
function ev()
{
    s=document.getElementById('test1').value
    document.getElementById('test1').value=eval(s)
}
function charAt(){
    c=document.getElementById('ch').value
    s=document.getElementById('test1').value
    document.getElementById('test1').value=s.charAt(c)
}
function substring(){
    i1=document.getElementById('f').value
    i2=document.getElementById('s').value
    s=document.getElementById('test1').value
    document.getElementById('test1').value=s.substring(i1,i2)
}

