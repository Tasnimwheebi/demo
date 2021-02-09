var order = prompt("which kind of sunblock do you prefere sebamed or vichy?")
                
while(order !== "vichy" && order !== "sebamed")
{
    order = prompt("which kind of sunblock do you prefer?")
 }   
    var itemorder = '';
    if(order == "vichy")
    {
        itemorder = '<img src="Vsun.png" alt="vichy sunblock"/>';
    }
    else if(order == "sebamed")
    {
        itemorder = '<img src="Ssun.jpg" alt="sebamed sunblock"/>';
        
    }
    var numofpeices = prompt("how many sunblock do you want to order?");

    var result ='';
    for(var i=0; i<numofpeices; i++)
    {
        result = result + itemorder;
    }
    document.write(result);
