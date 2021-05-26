
var receptTomb = [];

var leptetoIndex;

/***********************************************************************/

$(function(){
    
    $.ajax({
        url: "receptek.json",
        success: function(result){
            receptTomb = result;
            console.log(result);
            
            tablazatLetrehozasa();
        }}      
    );

   $("article").on("click", "tr", kivalaszt);

});

/***********************************************************************/

function tablazatLetrehozasa(){
    
    $("article").append("<table>");
    $("article table").append("<tr> <th> Recept neve </th> <th> Elkészítési idő </th> <th> Hozzávalók </th> </tr>");
    
    for (var i = 0; i < receptTomb.length; i++) {
        
        $("article table").append("<tr id='" + i + "'>");
        
        for (var item in receptTomb[i]) {
            
            $("article table tr").eq(i+1).append("<td>" + receptTomb[i][item] + "</td>");
        }  
    }
    
    //$("tr").click(kivalaszt);
    
    $("#bal").click(balraLeptet);
    $("#jobb").click(jobbraLeptet);
    
}

function kivalaszt(){
    
    var id = $(this).attr("id");
    console.log(id);
    console.log(receptTomb[id]);
    
    leptetoIndex = id;
    
    megjelenit(id);
}

function megjelenit(id){
    
    $("#recept").empty();
    
   /*******************************************/
    
    $("#recept").append("<img src = '" + receptTomb[id].kep + "' alt='" + receptTomb[id].nev + "'>");
    
   /*******************************************/
   
    $("#recept").append("<h2>");
    $("#recept h2").append(receptTomb[id].nev);
    
   /*******************************************/
   
    $("#recept").append("<p>");
    $("#recept p").append(receptTomb[id].leiras);
    
   /*******************************************/
   
    $("#recept").append("<p>");
    $("#recept p").eq(1).append("Elkészítés: " + receptTomb[id].elkeszitesiIdo);
    
   /*******************************************/
   
    $("#recept").append("<h3>");
    $("#recept h3").append("Hozzávalók");
    
    $("#recept").append("<ul>");
    
    var hozzavalok = receptTomb[id].hozzavalok;
    console.log(hozzavalok);
    
    for (var i = 0; i < hozzavalok.length; i++) {
        
        for (var item in hozzavalok[i]) {
            
            $("#recept ul").append("<li>" + item + " " + hozzavalok[i][item] + "</li>");
        }
    }
}

function balraLeptet(){
    
    leptetoIndex--;
    
    if(leptetoIndex < 0){
        
        leptetoIndex = receptTomb.length - 1;
    }
    
    megjelenit(leptetoIndex);
}
function jobbraLeptet(){
    
    leptetoIndex++;
    megjelenit(leptetoIndex);
}