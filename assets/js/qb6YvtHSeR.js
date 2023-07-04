var data = [
    {
        "nim": "09021282025047",
        "nama": "PUTRA AL FARIZI"
    },
    {
        "nim": "0901282025049",
        "nama": "AKBAR"
    },
    {
        "nim": "123",
        "nama": "Staf Magang"
    }
];

$(document).ready(function() {
    var a = false;
    var nim = new URLSearchParams(window.location.search).get("nim");
    for (var i = 0; i < data.length; i++) {
      if (nim == data[i].nim) {
        $("#namastaf").append(data[i].nama);
        $("#lock").remove();
        var element = document.getElementById("myelement");
        element.classList.add("notblur");
        return;
      }
    }
    if(a == false){
      
    }
  });