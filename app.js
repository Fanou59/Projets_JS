let q1 = document.querySelectorAll('input[name="q1"]');
let reponse = "";
for (i=0; i<=q1.length;i++){
    if(q1[i].checked){
        reponse = q1[i].value;
        break
    }

}
console.log(q1);

