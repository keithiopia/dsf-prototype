//alert(sessionStorage["id"] + " - " + sessionStorage["password"] );
if (!(((sessionStorage["id"]) === "elena") 
    && ((sessionStorage["password"]) === "pass"))){
    window.location="#p/birthBenefit/badLogin";
    //use this to stop all other events
    appModel.stopScripts = true;  
} 