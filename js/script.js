// // Banner Auto Slide Start
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(a){
//     showDivs(slideIndex) += n
// }

// function showDivs(a) {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     if (n > imgList.length) slideIndex = 1;
//     else if (n< i) slideIndex = imgList.length;

//     for (i = 0; i < imgList.length; i++){
//         imgList[i].style.display="none";
//     }

//     imgList[slideIndex - 1].style.display ="block";
// }

// setInterval(()=>{
//     plusDivs(1);
// },1000);
// // End

// Script Form Start
function validateForm() {
    const nama = document.forms["formMessage"]["fullNama"].value;
    const tanggalLahir = document.forms["formMessage"]["tanggalLahir"].value;
    const jenisKelamin = document.forms["formMessage"]["jenisKelamin"].value;
    const pesanMessage = document.forms["formMessage"]["pesanMessage"].value;

    if (
        nama == "" ||
        tanggalLahir == "" ||
        jenisKelamin == "" ||
        pesanMessage == ""
    ) {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(nama, tanggalLahir, jenisKelamin, pesanMessage);
    return false;
}

function setSenderUI(nama, tanggalLahir, jenisKelamin, pesanMessage) {
    document.getElementById("senderFullName").innerHTML = nama;
    document.getElementById("senderTanggalLahir").innerHTML = tanggalLahir;
    document.getElementById("senderJenisKelamin").innerHTML = jenisKelamin;
    document.getElementById("senderMessage").innerHTML = pesanMessage;
}
// End
