
function result(){
    let height1=document.getElementById("height").value;
    let width1=document.getElementById("width").value;
    let radius1=document.getElementById("radius").value;
    let Font_Size1=document.getElementById("Font_Size").value;
    let Weight1=document.getElementById("Weight").value;
    
    let Margin1=document.getElementById("Margin").value;
    let Bg_Color = document.getElementById("Bg_Color").value;
    let Text_Color = document.getElementById("Text_Color").value;
    let Border_Color = document.getElementById("Border_Color").value;
    let output=document.getElementById("myBtn");

    output.style.background=Bg_Color;
    output.style.color=Text_Color;
    output.style.border="2px solid "+Border_Color;
    
    output.style.height=height1+"px"
    output.style.width=width1+"px"
    output.style.borderRadius=radius1+"px"
    output.style.fontSize=Font_Size1+"px"
    output.style.fontWeight=Weight1
    output.style.margin=Margin1+"px";
    output.style.cursor="pointer";
}


