
function show(input) {
    document.getElementById('screen').value +=input
}
function calc(){
    let result=eval(document.getElementById('screen').value)
    document.getElementById('screen').value=result   
}
function allClear(){
    document.getElementById('screen').value=""
}
function del(){
    let text=document.getElementById('screen').value
    document.getElementById('screen').value=text.slice(0,-1)
}
