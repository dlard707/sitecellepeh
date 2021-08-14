// Aguarda o DOM estar pronto para executar os scripts JQuery
$( document ).ready(function() {
  // recebe o evento de submit do formulário Área do Aluno
  $("#loginAluno").submit(function( event ) {
    // Testa se usuário e senha estão corretos
    if ( $("#inputUsuario").val() == "root" && $("#inputSenha").val() == "1234") {
      // Adiciona classes CSS a DIV mensagem
      $("#mensagem").addClass("alert alert-success alert-dismissible fade show")
      // Remove a classe "alert-warning" caso ela exista
      $("#mensagem").removeClass("alert-warning")
      // apresenta a pensagem para o usuário por 3s
      $("#mensagem").text("Usuário Logado!").show().fadeOut(3000)
    } else { 
      // Adiciona classes CSS a DIV mensagem
      $("#mensagem").addClass("alert alert-warning alert-dismissible fade show")
      // Remove a classe "alert-success" caso ela exista
      $("#mensagem").removeClass("alert-success")
      // apresenta a pensagem para o usuário por 3s
      $("#mensagem").text( "usuário ou senha inválida!" ).show().fadeOut(3000)
      event.preventDefault() //bloqueia o evento de submit
    }
  })
})