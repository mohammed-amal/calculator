function num(val) {
    document.getElementById("scr").value=document.getElementById("scr").value+val
    

}

function del() {
    document.getElementById("scr").value=""
}
function eqel() {
    var text=document.getElementById("scr").value
    var ans=eval(text)
    document.getElementById("scr").value=ans
}
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxM7TXgtLRp-ip3Nq6TMazFWczga778prw_rIWnuL2duR3w6F-2/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
        
