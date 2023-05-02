function Validar(){
    let email      = document.getElementById('email').value;
    let senha      = document.getElementById('senha').value;
    let telefone   = document.getElementById('telefone').value;
    let nome       = document.getElementById('nome').value;
    let endereco   = document.getElementById('endereco').value;
    let nascimento = document.getElementById('nascimento').value;
    let cpf        = document.getElementById('cpf').value;

        if(!email || !senha || !telefone || !nome || !endereco || !cpf || !nascimento){
            alert("Verifique se você preencheu todos os campos obrigatórios");
        }else{
            alert("Campos preenchidos com sucesso!")
        }
    }