// Declarações de variaveis
var title;
var subtitle;
var thumb;
var vid;
var time;
var contador =0;
var qntdLike = Math.floor(retornaAlet());
var valorLike = 0;
var qntdDeslike = Math.floor(retornaAlet());
var valorDeslike = 0;
var dayName = new Array ("dom", "seg", "ter", "quar", "qui", "sex", "sab");
var monName = new Array ("jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "out", "nov", "dez");
// Funções pré-programadas
function retornaAlet(){
    return (Math.random() * 8000) + 1;
    }
function AddComentario(){
    var now = new Date();
    var dataFinal = " "+dayName[now.getDay()]+","+now.getDate ()+" de "+monName[now.getMonth()]+" de "+now.getFullYear()+" | "+now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " GMT "+now.getTimezoneOffset()/60+".";
    var comment = $('input[name="txtComment"]').val();
    var scc = $('img[name="imgUser"]').attr( "src" );
    var x = '<div class="comentario"><div class="coluna1"><img class="comentimg" src="'+scc+'"><p id="usuario">User</p></div><div class="coluna2"><div class="coluna2_row1"><p>'+comment+'</p></div><div class="coluna2_row2"><p id="data">'+dataFinal+'</p></div></div></div>';
    $('#CommentsArea').prepend(x);
    $('')
    $('input[name="txtComment"]').val(null);
    }
function cancelAdd(){
    $('input[name="txtComment"]').val(null);
    }
function resetaLikes(){
    $('#deslikeIMG').attr("src","https://www.iconsdb.com/icons/preview/royal-blue/thumbs-down-xxl.png");
    $('#LikeIMG').attr("src","https://www.iconsdb.com/icons/preview/royal-blue/thumbs-up-xxl.png");
    $('h5[name="ctdLike"]').html("???").css("color","royalblue");
    $('h5[name="ctdDeslike"]').html("???").css("color","royalblue");
}
// Funções disparadoras de eventos
$(document).ready(resetaLikes());
$('#cmntForm').submit(function(event){
    event.preventDefault();
    AddComentario();
    });
$("#LikeL").click(function(){
    valorLike = qntdLike+1; 
    valorDeslike = qntdDeslike; 
    $('h5[name="ctdLike"]').html(valorLike).css("color","green");
    $('h5[name="ctdDeslike"]').html(valorDeslike).css("color","royalblue");
    $('#LikeIMG').attr("src","https://www.iconsdb.com/icons/preview/green/thumbs-up-xxl.png");
    $('#deslikeIMG').attr("src","https://www.iconsdb.com/icons/preview/royal-blue/thumbs-down-xxl.png");
});
$("#LikeD").click(function(){
    valorDeslike = qntdDeslike+1; 
    valorLike = qntdLike;
    $('h5[name="ctdDeslike"]').html(valorDeslike).css("color","red");
    $('h5[name="ctdLike"]').html(valorLike).css("color","royalblue");
    $('#deslikeIMG').attr("src","https://www.iconsdb.com/icons/preview/soylent-red/thumbs-down-xxl.png");
    $('#LikeIMG').attr("src","https://www.iconsdb.com/icons/preview/royal-blue/thumbs-up-xxl.png");
    });
$('input[name="txtComment"]').focusin(function() {
        $('#botoes').fadeIn();
        });
$('input[name="txtComment"]').focusout(function() {
        $('#botoes').fadeOut();
        });
$("#expander").click(function(){
    switch(contador){
        case 0:
        $(".userBox").slideDown().fadeIn(1000)
        contador++
        break;
        case 1:
        $(".userBox").slideUp()
        contador--
        break;
        }
        });
$("#comentHead").click(function() {
    switch (contador){
        default:
        $('div[class="linha2"]').slideDown()
        $("#comentHead").html("Comments <small>▼</small>")
        contador++
        break;
        case 0:
        $('div[class="linha2"]').slideDown()
        $("#comentHead").html("Comments <small>▼</small>")
        contador++
        break;
        case 1:$('div[class="linha2"]').slideUp();
        $("#comentHead").html("Comments <small>▲</small>")   
        contador = 0;
        break;
        }
    });
$('a[class="troca"]').click(function(){
        document.getElementById('vidID').pause();
        title =  $("#VidTitle").html();
        subtitle =  $("#VidSubtitle").html();
        thumb = $("#plThumb").attr("src");
        time = $("#plTime").html();
        vid = $("#vidID").attr("src");
        $("#vidID").attr("src",($(this).find('p').html()));
        $("#VidTitle").html($(this).find('#InfoTitle').html());
        document.getElementById('vidID').load();
        $("#plThumb").attr("src",$(this).find('Img').attr('src'));
        $("#plTime").html($(this).find('i').html());
        $("#VidSubtitle").html($(this).find('#InfoSubtitle')).html();
        $("#player").children("video").attr("src",$(this).children('[name="link"]').html());
        $('div[class="name"]').html($(this).children(".info").children("h4").html());
        var v = '<a href="#" class="troca"><div class="vid1"><p name="link">'+vid+'</p><div class="thumb"><img src="'+thumb+'"/><div class="preview-time"><i>'+time+'</i></div></div><div class="info"><h4 id="InfoTitle">'+title+'</h4><br><h6 id="InfoSubtitle">'+subtitle+'</h6><h6>Recomended</h6></div></div></a>';
        $(this).html(v);
        qntdLike = Math.floor(retornaAlet());        
        qntdDeslike = Math.floor(retornaAlet());
        resetaLikes();
        });
$('a[ class="flipkart-navbar-button float-right align-middle"]').click(function(){
    
    switch(contador){
        case 0:
        $('ul[class="nav navbar-nav"]').slideDown()
        contador++
        break;
        case 1:
        $('ul[class="nav navbar-nav"]').slideUp();
        contador--
        break;
        }
        });
