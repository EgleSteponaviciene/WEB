var skaicius = 5;

// skaicius tarp 5 ir 10 (5 included 10 not included)

if (skaicius == 5 || skaicius == 10) {
  alert("skaicius yra " + skaicius);
}

if(skaicius >= 5 && skaicius < 10){
  alert("skaicius " + skaicius + " tarp 5 ir 10");
}

if(skaicius > 10){
  alert("skaicius daugiau uz 10");
}
else if (skaicius ==10) {
  alert("skaicius lygus 10");
}
else{
  alert("skaicius mazesnis uz 10");
}

// var skaicius;
// if(!skaicius){
// alert("Skaicius nera apibreztas");
