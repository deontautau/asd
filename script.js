function loginPage(){
    let userInput = document.getElementById("user");
    let sandiInput= document.getElementById("sandi");
    let tombol= document.getElementById("tombol");

    if(
        userInput.value === "" ||
        sandiInput.value === ""
    ) {
        alert("Semua kolom harus terisi!");
        return;
    } 
    
    else(
        document.getElementById('tombol').addEventListener
        ('click', function()
         {
            window.location.href = 'file:///C:/Users/PC_RBRPL3_011/Downloads/WhatsApp%20Image%202026-09-28%20at%2013.58.12.jpeg';
        })


    )

}
