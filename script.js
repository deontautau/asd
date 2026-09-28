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
            window.location.href = 'https://api.smkn11bdg.sch.id/storage/siswa/1769651436_0091987958.jpg';
        })


    )

}
