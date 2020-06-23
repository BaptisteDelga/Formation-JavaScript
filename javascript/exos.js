function exo1 (){
    var nbr1, nbr2;
    nbr1 = Number(document.getElementById("myInput1_1").value);
    nbr2 = Number(document.getElementById("myInput2_1").value);
    if (nbr1 > nbr2){
        console.log(nbr1 + " est plus grand que " + nbr2);
        alert(nbr1 + " est plus grand que " + nbr2);
    }
    else if (nbr1 < nbr2){
        console.log(nbr2 + " est plus grand que " + nbr1);
        alert(nbr2 + " est plus grand que " + nbr1);
    }
    else{
        console.log("les 2 nombres sont égaux");
        alert("les 2 nombres sont égaux");
    }
}

function exo2 (){
    var nbr1, nbr2, nbr3;
    nbr1 = Number(document.getElementById("myInput1_2").value);
    nbr2 = Number(document.getElementById("myInput2_2").value);
    nbr3 = Number(document.getElementById("myInput3_2").value);
    if ((nbr1 > nbr2) && (nbr1 > nbr3)){
        if (nbr2 > nbr3){
            alert(nbr1 + " > " + nbr2 + " > " + nbr3);
        }
        else if (nbr2 < nbr3){
            alert(nbr1 + " > " + nbr3 + " > " + nbr2);
        }
        else{
            alert(nbr1 + " > " + nbr2);
        }
    }
    else if (nbr2 > nbr1 && nbr2 > nbr3){
        if (nbr1 > nbr3){
            alert(nbr2 + " > " + nbr1 + " > " + nbr3);
        }
        else if (nbr1 < nbr3){
            alert(nbr2 + " > " + nbr3 + " > " + nbr1);
        }
        else{
            alert(nbr2 + " > " + nbr1);
        }
    }
    else if (nbr3 > nbr1 && nbr3 > nbr2){
        if (nbr2 > nbr1){
            alert(nbr3 + " > " + nbr2 + " > " + nbr1);
        }
        else if (nbr2 < nbr1){
            alert(nbr3 + " > " + nbr1 + " > " + nbr2);
        }
        else{
            alert(nbr3 + " > " + nbr2);
        }
    }
    else {
        alert("sont tous égaux");
    }
}

function check3() {
    var nbr1, nbr2, nbr3, nbr4, nbr5;
    nbr1 = Number(document.getElementById("myInput6").value);
    nbr2 = Number(document.getElementById("myInput7").value);
    nbr3 = Number(document.getElementById("myInput8").value);
    nbr4 = Number(document.getElementById("myInput9").value);
    nbr5 = Number(document.getElementById("myInput10").value);

 

    alert(Math.max(nbr1, nbr2, nbr3, nbr4, nbr5))
}