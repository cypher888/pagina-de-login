function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if (email == "matheusfelipe@gmail.com" && senha == "123"){
        alert("Sucesso!");
    } else {
        alert("Usuário ou senha incorretos");
    }

}