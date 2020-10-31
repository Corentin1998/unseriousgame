console.log("c'est ici qu'il y a une enigme");
// S'inspirer du script ci-dessous pour faire un décompte "temps restant" et afficher perdu si on ne répond pas en moins de 15 secondes.
function startChrono(){
    let time=0;
    setInterval( //crée une boucle
        function(){
            time++; // 1,2,3,4 etc...
            document.title="ça fait "+time+" secondes que tu réfléchis"; //affiche le temps passé dans le titre de page
            // une fois que tu as réussi essaye de résoudre ces todos dans l'ordre...
            // todo 1 afficher le décompte dans la page HTML
            // todo 2 Quand ça fait 5 secondes on affiche "dépeche toi" 
            // todo 3 Quand ça fait 10 secondes on affiche "ça commence à être chaud" 
            // todo 4 Quand ça fait 15 secondes on affiche "trop tard" pendant 2 secondes, puis on redirige vers la (bonne) page "perdu" 
        },
    1000 // toutes les 1000 millisecondes
    );
}