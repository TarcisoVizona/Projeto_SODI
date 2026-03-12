const login = document.querySelector('#login');
const Sign = document.querySelector('#Sign_up');
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');
const btn_enviar = document.querySelector('#Enviar');
const btn_Cadastrar = document.querySelector('#Cadastrar');
const senha = document.querySelector('#senha');
const api = 'http://192.168.1.15:3000';
const icone2 = document.querySelector('.icone2');

inputs[2].style.display = 'none';
icone2.style.display = 'none';
Sign.addEventListener('click', () => {
    inputs[2].style.display = 'block';
    senha.style.display = 'flex';
    btn.id = 'Cadastrar';
    btn.innerHTML = 'Cadastrar'
    login.style.color = '#d9d9d9';
    Sign.style.color = '#3c8670';
    Sign.style.borderBottom = '2px solid #3c8670';
    login.style.borderBottom = 'none';
});

login.addEventListener('click', () => {
    inputs[2].style.display = 'none';
    btn.id = 'Entrar';
    btn.innerHTML = 'Entrar'
    login.style.color = '#3c8670';
    Sign.style.color = '#d9d9d9';
    Sign.style.borderBottom = 'none';
    login.style.borderBottom = '2px solid #3c8670';

});

btn_enviar.addEventListener('click', async () => {
    const user = inputs[0].value;
    const password = inputs[1].value;
    const resposta = await fetch(`${api}/usuarios/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            user,
            password
        })
    })
    resposta.status == 201 ? window.location.href = './index.html' : alert('Erro ao acessar');
})
btn_Cadastrar.addEventListener('click', async () => {
    const user = inputs[0].value;
    const password = inputs[1].value;
    const confirmar = inputs[2].value;
    password != confirmar ? alert('As senhas precisam ser iguais') :
        await fetch(`${api}/cadastroUser`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                user,
                password
            })
        })
    res.status == 201 ? (alert('Cadastro realizado com sucesso'), window.location.reload()) : alert('Erro ao cadastrar');
})