

$(document).ready(function(){
                $("#Jogar").click(function(){ //Botão de começar o jogo
                    var Op = $("#opgalo").val();

                    switch(parseInt(Op)) { // Verificação da opção escolhida
                        case 1:
                            $("#drag").slideUp(1500);
                            $("#slideD").slideDown(1500);
                            $("#bg1").fadeIn(3000);
                            $("#rematch").fadeIn(2000);
                            $(".galo_O").fadeIn(2000);
                            $(".galo_X").fadeIn(2000);
                            $("#rematch").click(function(){ // Imagens voltam ao lugar inicial
                                $(".galo_O").animate({  //efeitos
                                    top: "100px",
                                    left: "24px"
                                });

                                $(".galo_X").animate({
                                    top: "-423px",
                                    left: "1120px"
                                });
                            })

                            break;
                        case 2:
                            $("#drag").slideUp(1500);
                            $("#slideD").slideDown(1500);
                            $("#bg1").fadeIn(3000);
                            $(".galo_O2").fadeIn(2000);
                            $(".galo_X2").fadeIn(2000);
                            $("#como").fadeIn(2000);
                            $("#rematch").fadeIn(2000);
                            
                            break;
                        default:
                            alert("Por favor, escolha uma opção!")
                            break;

                    }    
                })
                $(".galo_O").hide();
                $(".galo_X").hide();
                $(".galo_O").draggable({revert: "invalid"});
                $(".galo_X").draggable({revert: "invalid"});
                $("#bg1").droppable();
                $("#slideD").hide();
                $("#bg1").hide();
                $("#drag").draggable();
                $("#rematch").hide();
                $('input').focus(function(){
                    $(this).css('background-color', '#f2f2f2')
                })

                $('input').focusout(function(){
                    $(this).css('background-color', '#ffffff')
                })

                $("#slideD").click(function(){
                    $("#drag").slideDown(2000);
                    $("#slideD").slideUp(1500);
                    $("#bg1").fadeOut(2200);
                    $("#como").fadeOut(2000);
                    $("#rematch").fadeOut(2000);
                    $(".galo_O").fadeOut(2000);
                    $(".galo_X").fadeOut(2000);
                
                })

                $("#slideD").mouseenter(function(){
                    $(this).attr("src", "Imagens/slidedown1.png");
                })

                $("#slideD").mouseleave(function(){
                    $(this).attr("src", "Imagens/slidedown.png");
                })

                $("#rematch").mouseenter(function(){
                    $(this).attr("src", "Imagens/btrm.png");
                    $(this).attr("style", "width: 300px; height: 85px")
                })

                $("#rematch").mouseleave(function(){
                    $(this).attr("src", "Imagens/btrm1.png");
                    $(this).attr("style", "width: 321px; height: 96px") //manipulação de atributos
                })

                $("#next").click(function(){
                    $("#drag").css({"background": "#" + Math.floor( Math.random() * 16777215 ).toString( 16 )});
                })


            })