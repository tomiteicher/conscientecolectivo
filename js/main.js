$(".trabajo-territorial").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").show();
        $("#logistica").hide();
        $("#recaudador-fondos").hide();
        $("#community-manager").hide();
        $("#editor-audiovisual").hide();
        $("#diseniador-grafico").hide();
        $("#asistente-twitter").hide();
        $("#investigador-politico").hide();

    }
);
$(".logistica").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").hide();
        $("#logistica").show();
        $("#recaudador-fondos").hide();
        $("#community-manager").hide();
        $("#editor-audiovisual").hide();
        $("#diseniador-grafico").hide();
        $("#asistente-twitter").hide();
        $("#investigador-politico").hide();
    }
);
$(".recaudador-fondos").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").hide();
        $("#logistica").hide();
        $("#recaudador-fondos").show();
        $("#community-manager").hide();
        $("#editor-audiovisual").hide();
        $("#diseniador-grafico").hide();
        $("#asistente-twitter").hide();
        $("#investigador-politico").hide();
    }
);
$(".community-manager").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").hide();
        $("#logistica").hide();
        $("#recaudador-fondos").hide();
        $("#community-manager").show();
        $("#editor-audiovisual").hide();
        $("#diseniador-grafico").hide();
        $("#asistente-twitter").hide();
        $("#investigador-politico").hide();
    }
);
$(".editor-audiovisual").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").hide();
        $("#logistica").hide();
        $("#recaudador-fondos").hide();
        $("#community-manager").hide();
        $("#editor-audiovisual").show();
        $("#diseniador-grafico").hide();
        $("#asistente-twitter").hide();
        $("#investigador-politico").hide();
    }
);
$(".diseniador-grafico").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").hide();
        $("#logistica").hide();
        $("#recaudador-fondos").hide();
        $("#community-manager").hide();
        $("#editor-audiovisual").hide();
        $("#diseniador-grafico").show();
        $("#asistente-twitter").hide();
        $("#investigador-politico").hide();
    }
);
$(".asistente-twitter").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").hide();
        $("#logistica").hide();
        $("#recaudador-fondos").hide();
        $("#community-manager").hide();
        $("#editor-audiovisual").hide();
        $("#diseniador-grafico").hide();
        $("#asistente-twitter").show();
        $("#investigador-politico").hide();
    }
);
$(".investigador-politico").click(
    function(e){
        e.preventDefault();
        $("#trabajo-territorial").hide();
        $("#logistica").hide();
        $("#recaudador-fondos").hide();
        $("#community-manager").hide();
        $("#editor-audiovisual").hide();
        $("#diseniador-grafico").hide();
        $("#asistente-twitter").hide();
        $("#investigador-politico").show();
    }
);