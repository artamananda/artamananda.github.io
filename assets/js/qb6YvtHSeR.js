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
        "nim": "338816",
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
        return;
      }
    }
    if(a == false){
      
    }
  });