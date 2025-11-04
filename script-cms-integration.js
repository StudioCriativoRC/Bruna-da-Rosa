/**
 * Script de Integração Netlify CMS
 * 
 * Este script carrega automaticamente os dados editados no painel CMS
 * e atualiza o conteúdo do site dinamicamente.
 * 
 * Para usar:
 * 1. Adicione no index.html: <script src="script-cms-integration.js"></script>
 * 2. Certifique-se de que o site está sendo servido por um servidor
 */

// Função principal que carrega todos os dados do CMS
async function loadCMSData() {
    try {
        // Carregar todos os dados em paralelo
        const [faq, modulos, publicoAlvo, footer] = await Promise.all([
            fetch('content/faq.json').then(r => r.json()).catch(() => null),
            fetch('content/modulos-curso.json').then(r => r.json()).catch(() => null),
            fetch('content/publico-alvo.json').then(r => r.json()).catch(() => null),
            fetch('content/footer.json').then(r => r.json()).catch(() => null)
        ]);

        // Popular cada seção se os dados existirem
        if (faq) populateFAQ(faq);
        if (modulos) populateModulos(modulos);
        if (publicoAlvo) populatePublicoAlvo(publicoAlvo);
        if (footer) populateFooter(footer);

        console.log('✅ Dados do CMS carregados com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao carregar dados do CMS:', error);
    }
}

// Popula a seção de FAQ
function populateFAQ(data) {
    const container = document.querySelector('.faq-accordion');
    if (!container) return;

    // Atualizar título se existir
    const tituloElement = document.querySelector('.faq-section h2');
    if (tituloElement && data.titulo_secao) {
        tituloElement.textContent = data.titulo_secao;
    }

    // Gerar HTML para cada pergunta
    container.innerHTML = data.perguntas.map((item, index) => `
        <div class="faq-item">
            <button class="faq-question" onclick="toggleFAQ(this)">
                <span>${item.pergunta}</span>
                <span class="faq-icon">${index === 0 ? '∧' : '∨'}</span>
            </button>
            <div class="faq-answer" style="display: ${index === 0 ? 'block' : 'none'}">
                <p>${item.resposta}</p>
            </div>
        </div>
    `).join('');
}

// Popula os módulos do curso
function populateModulos(data) {
    const container = document.querySelector('.content-grid');
    if (!container) return;

    container.innerHTML = data.modulos.map(modulo => `
        <div class="content-card card-${modulo.cor === 'escuro' ? 'dark' : 'light'}">
            <h3>${modulo.titulo}</h3>
            <p>${modulo.descricao}</p>
        </div>
    `).join('');
}

// Popula os cards de público alvo
function populatePublicoAlvo(data) {
    const container = document.querySelector('.target-grid');
    if (!container) return;

    container.innerHTML = data.cards.map(card => `
        <div class="target-card">
            <div class="target-image">
                <img src="${card.imagem}" alt="${card.descricao}">
            </div>
            <p>${card.descricao}</p>
        </div>
    `).join('');
}

// Popula informações do rodapé
function populateFooter(data) {
    const creditDiv = document.querySelector('.footer-credit');
    if (creditDiv) {
        creditDiv.innerHTML = `
            <p>${data.dev_texto}</p>
            <p class="studio-name">${data.studio_nome}</p>
        `;
    }

    const backButton = document.querySelector('.btn-back-to-top');
    if (backButton && backButton.childNodes.length > 0) {
        // Preserva o ícone, atualiza apenas o texto
        const iconSpan = backButton.querySelector('.back-icon');
        backButton.innerHTML = `${data.botao_topo} `;
        if (iconSpan) {
            backButton.appendChild(iconSpan);
        } else {
            backButton.innerHTML += '<span class="back-icon">↑</span>';
        }
    }
}

// Carregar dados quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCMSData);
} else {
    // DOM já está pronto
    loadCMSData();
}

// Exportar funções para uso externo (se necessário)
window.CMSIntegration = {
    loadCMSData,
    populateFAQ,
    populateModulos,
    populatePublicoAlvo,
    populateFooter
};

