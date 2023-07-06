var data = [
  {
     "nim":"06041282025047",
     "nama":"Sayang"
  },
  {
     "nim":"123",
     "nama":"Staf Magang"
  },
  {
   "nim": "08011182227049",
   "nama": "TYARA HESTIYANI PUTRI"
  },
  {
   "nim": "06131382227089",
   "nama": "DZAKIRAH ZAINAL"
  },
  {
   "nim": "06081382227085",
   "nama": "ZAKIYAH HASANAH"
  },
  {
   "nim": "06111282227045",
   "nama": "REVINA SIHITE"
  },
  {
   "nim": "08021182227016",
   "nama": "TARA ZAGITA"
  },
  {
   "nim": "01021282227052",
   "nama": "PANCA WIJAYA"
  },
  {
   "nim": "10011182227007",
   "nama": "CHERIA TARA MELANI"
  },
  {
   "nim": "05011282227085",
   "nama": "ARYA ANUGRAH AGUNG"
  },
  {
   "nim": "05011382227178",
   "nama": "LOUIS PIETER NATHANIEL"
  },
  {
   "nim": "02011182227065",
   "nama": "MICKEY JULIANSYAH"
  },
  {
   "nim": "05071282227051",
   "nama": "BELLA NOVIOLA"
  },
  {
   "nim": "07011182227120",
   "nama": "YOLANDA WAHIDATUNISA"
  },
  {
   "nim": "03051282126090",
   "nama": "INDO MILANO AKHBAR"
  },
  {
   "nim": "01011182227004",
   "nama": "SANDI ANDARA"
  },
  {
   "nim": "07031282227073",
   "nama": "Fianita Desriani Putri"
  },
  {
   "nim": "01011382126211",
   "nama": "Rapa Firza Putra Aranda"
  },
  {
   "nim": "07011382227211",
   "nama": "Agra Dinda Purwanto"
  },
  {
   "nim": "05071382227091",
   "nama": "Al Aziiz Afi Akbar"
  },
  {
   "nim": "05081382227075",
   "nama": "Serly Abdesti"
  },
  {
   "nim": "10011382227209",
   "nama": "Khairunnisa Catur Wulandari"
  },
  {
   "nim": "10011382227182",
   "nama": "Mellza Anggreini"
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