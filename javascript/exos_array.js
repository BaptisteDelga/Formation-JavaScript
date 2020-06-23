document.writeln('<h1>Exo 1</h1>');
function compare (){
    var nbr1 = 21;
    var seuil = 20;
    if (nbr1 > seuil){
        console.log("Température supérieure au seuil");
        document.write("<p>Température supérieure au seuil</p>")
    }
    else if (nbr1 < seuil){
        console.log("Température inférieure au seuil");
        document.write("<p>Température inférieure au seuil</p>")
    }
}

document.writeln("<p>blablablablabla</p>");
        
document.write('<p>salut</p>');
compare()
var l = 10
for (var i=0 ; i<l ; i++){
    document.write('*<br>');
}

for (var i=0 ; i<l ; i++){
    document.writeln('*');
}
document.writeln('<br>');

/* 2 - */
document.writeln('<h1>Exo 2</h1>');
t=[1, 3, 5];
for (var i=0 ; i<t.length ; i++){
    document.write(t[i],'<br>')
}
var somme = t.reduce(function(sum,elem){
    return sum + elem;
});
document.write("Somme : "+somme,"<br>");
var multiplication = t.reduce(function(mult,elem){
    return mult * elem;
});
document.write("Multiplication : "+multiplication,"<br>");

/* 3 - */
document.writeln('<h1>Exo 3</h1>');
for (var i=0 ; i<15 ; i++){
    if (i % 2 == 0){
        document.writeln(i+' est pair<br>');
    }
    else{
        document.writeln(i+' est impair<br>');
    }
}


/* 4 - */
document.writeln('<h1>Exo 4</h1>');
var students = [["David", 80], ["Vinoth", 77], ["Divya", 88], ["Isitha", 95], ["Thomas", 68]];
var avg = 0;

for (var i=0; i<students.length; i++){
    avg += students[i][1];
    var avgmarks = avg/(students.length);
}
document.write('<table border="3" width="500px">');
document.write('<tr><th>Student Name</th><th>Marks</th><tr>');
document.write('<tr><td>',students[0][0],'</td><td>',students[0][1],'</td><tr>');
document.write('<tr><td>',students[1][0],'</td><td>',students[1][1],'</td><tr>');
document.write('<tr><td>',students[2][0],'</td><td>',students[2][1],'</td><tr>');
document.write('<tr><td>',students[3][0],'</td><td>',students[3][1],'</td><tr>');
document.write('<tr><td>',students[4][0],'</td><td>',students[4][1],'</td><tr>');
document.write('</table>');

document.write("Moyenne : " + (avg/(students.length)),'<br>');

if (avgmarks < 60){
    var grade = "F";
}
else if (60 <= avgmarks < 70){
    var grade = "D";
}
else if (70 <= avgmarks < 80){
    var grade = "C";
}
else if (80 <= avgmarks < 90){
    var grade = "B";
}
else if (90 <= avgmarks < 100){
    var grade = "A";
}
document.write('<table border="3" width="500px">');
document.write('<tr><th>Range</th><th>Marks</th></tr>');
document.write('<tr><td> <60</td><td>F</td></tr>');
document.write('<tr><td> <70</td><td>D</td></tr>');
document.write('<tr><td> <80</td><td>C</td></tr>');
document.write('<tr><td> <90</td><td>B</td></tr>');
document.write('<tr><td> <100</td><td>A</td></tr>');
document.write('</table>');

/* 5 - */
document.writeln('<h1>Exo 5</h1>');
var noms = new Array();

function add_name(){
    var nom = document.getElementById("nom").value;
    noms.push(nom); //insère un elt dans un tableau
    console.log(noms);
}

function tirage_sort(){
    if (noms.length > 0){
        var i = Math.floor(Math.random() * noms.length); //fournit un nb réel entre 0 et le nombre de noms-1
        alert ("Le gagnant est : "+noms[i]);
    }
    else{
        alert("Veuillez ajouter des noms svp");
    }
}



