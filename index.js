
function expression(id) {
    
    let num = document.getElementById(id).innerText
    document.getElementById('display').innerText += num
    
}
function calculate(id){
   
    let value = eval(document.getElementById('display').innerText)
    document.getElementById('display').innerText = value
    
}
function clearScr(id) {
    if (id == 'AC'){
    document.getElementById('display').innerText = '' ;
    }

    if (id == 'backSpc')
    {
        let result = (document.getElementById('display').innerText).slice(0, -1) 
        document.getElementById('display').innerText = result

    }
   

}