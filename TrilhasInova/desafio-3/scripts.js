// Botão "Criar conta"
document.getElementById('criarContaBtn')?.addEventListener('click', () => {
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
  
    if (!email || !senha) {
      alert('Preencha o e-mail e a senha antes de criar uma conta.');
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExistente = users.find(user => user.email === email);
  
    if (usuarioExistente) {
      alert('Email já cadastrado.');
    } else {
      users.push({ email, senha });
      localStorage.setItem('usuarios', JSON.stringify(users));
      alert('Conta criada com sucesso! Continue o cadastro.');
      window.location.href = 'tela2.html';
    }
  });
  
  // Login
  document.getElementById('loginForm')?.addEventListener('submit', event => {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
  
    const users = JSON.parse(localStorage.getItem('usuarios')) || [];
    const user = users.find(u => u.email === email && u.senha === senha);
  
    if (user) {
      alert('Login realizado com sucesso!');
    } else {
      alert('Email ou senha incorretos, ou inválidos.');
    }
  });
  
  // Cadastro
  const cadastroForm = document.getElementById('cadastroForm');
  cadastroForm?.addEventListener('submit', event => {
    event.preventDefault();
    cadastroForm.noValidate = true;
  
    const nome = document.getElementById('nome').value.trim();
    const dataNascimento = document.getElementById('dataNascimento').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const areaInteresse = document.getElementById('areaInteresse').value;
    const formacao = document.getElementById('formacao').value;
    const experiencia = document.getElementById('experiencia').value.trim();
    const disponibilidade = document.getElementById('disponibilidade').value;
    const sobre = document.getElementById('sobre').value.trim();
    const documentos = document.getElementById('documentos').files.length;
  
    if (!nome || !dataNascimento || !cpf || !telefone || !areaInteresse || !formacao || !experiencia || !disponibilidade || documentos === 0) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }
  
    const dadosUsuario = {
      nome,
      dataNascimento,
      cpf,
      telefone,
      areaInteresse,
      formacao,
      experiencia,
      disponibilidade,
      sobre
    };
  
    localStorage.setItem('usuarioCadastro', JSON.stringify(dadosUsuario));
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'tela1.html';
  });
  
  // Botão voltar
  document.getElementById('voltarBtn')?.addEventListener('click', () => {
    window.location.href = 'tela1.html';
  });
  