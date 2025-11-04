// Smooth Scroll para seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll para o topo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle FAQ (Acordeão)
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const faqIcon = button.querySelector('.faq-icon');
    
    // Fecha todos os outros FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
            const otherAnswer = item.querySelector('.faq-answer');
            const otherIcon = item.querySelector('.faq-icon');
            otherAnswer.classList.remove('active');
            otherAnswer.style.maxHeight = '0';
            otherAnswer.style.padding = '0 30px';
            otherIcon.textContent = '∨';
        }
    });
    
    // Toggle FAQ atual
    const isActive = faqItem.classList.contains('active');
    
    if (isActive) {
        faqItem.classList.remove('active');
        faqAnswer.classList.remove('active');
        faqAnswer.style.maxHeight = '0';
        faqAnswer.style.padding = '0 30px';
        faqIcon.textContent = '∨';
    } else {
        faqItem.classList.add('active');
        faqAnswer.classList.add('active');
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        faqAnswer.style.padding = '0 30px 25px';
        faqIcon.textContent = '∧';
    }
}

// Play Video (simulação)
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.play-button');
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    if (playButton && videoPlaceholder) {
        playButton.addEventListener('click', function() {
            alert('Aqui seria reproduzido o vídeo de apresentação do curso!\n\nVocê pode integrar com YouTube, Vimeo ou outro player de vídeo.');
        });
    }
    
    // Playlist items click
    const playlistItems = document.querySelectorAll('.playlist-item');
    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active de todos
            playlistItems.forEach(i => i.style.background = '');
            // Adiciona active no clicado
            this.style.background = 'rgba(255, 255, 255, 0.1)';
            alert('Aqui seria carregado o vídeo selecionado da playlist.');
        });
    });
    
    // Animação ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elementos para animar
    const animatedElements = document.querySelectorAll('.target-card, .content-card, .faq-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Header fixo com efeito de scroll
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.boxShadow = 'none';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Primeira FAQ aberta por padrão
    const firstFaqItem = document.querySelector('.faq-item:first-child');
    if (firstFaqItem) {
        const firstAnswer = firstFaqItem.querySelector('.faq-answer');
        firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
        firstAnswer.style.display = 'block';
        firstFaqItem.classList.add('active');
    }
});

// Função para adicionar efeito parallax suave
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before, .about-section::before');
    
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});

// Adiciona interatividade aos cards de conteúdo
document.addEventListener('DOMContentLoaded', function() {
    const contentCards = document.querySelectorAll('.content-card');
    
    contentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Adiciona animação às imagens da galeria
    const galleryImages = document.querySelectorAll('.gallery-images img');
    
    galleryImages.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        img.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }, index * 100);
    });
    
    // Lightbox para todas as imagens
    initializeLightbox();
    
    // Tooltip da dica de imagem
    initializeImageHint();
});

// Formulário de contato ou CTA (se necessário)
function handleCTAClick() {
    // Aqui você pode adicionar integração com:
    // - WhatsApp
    // - Formulário de contato
    // - Página de checkout
    // - etc.
    
    const whatsappNumber = '5511999999999'; // Substitua pelo número real
    const message = 'Olá! Gostaria de saber mais sobre o curso CAPTURE de fotografia mobile.';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Descomente a linha abaixo para ativar o redirecionamento para WhatsApp
    // window.open(whatsappURL, '_blank');
    
    alert('Botão CTA clicado! Aqui você pode redirecionar para WhatsApp, página de vendas, formulário, etc.');
}

// Adiciona funcionalidade aos botões principais
document.addEventListener('DOMContentLoaded', function() {
    const primaryButtons = document.querySelectorAll('.btn-primary');
    
    primaryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Se o botão não tiver uma função específica de scroll
            if (!this.getAttribute('onclick')) {
                e.preventDefault();
                handleCTAClick();
            }
        });
    });
});

// Contador de scroll para mostrar progresso (opcional)
window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    // Você pode usar essa porcentagem para criar uma barra de progresso
    // console.log('Scroll: ' + Math.round(scrollPercent) + '%');
});

// Preloader (opcional - descomente se quiser usar)
/*
window.addEventListener('load', function() {
    const preloader = document.createElement('div');
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #2d1f1f;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        transition: opacity 0.5s ease;
    `;
    
    const spinner = document.createElement('div');
    spinner.textContent = 'CAPTURE';
    spinner.style.cssText = `
        font-size: 48px;
        color: #D4915F;
        font-weight: 700;
        letter-spacing: 5px;
    `;
    
    preloader.appendChild(spinner);
    document.body.appendChild(preloader);
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(preloader);
        }, 500);
    }, 1000);
});
*/

// Lightbox - Função para ampliar imagens com zoom
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const imageContainer = document.querySelector('.lightbox-image-container');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const zoomResetBtn = document.getElementById('zoom-reset');
    
    let scale = 1;
    let posX = 0;
    let posY = 0;
    let isDragging = false;
    let startX, startY;
    
    // Seleciona todas as imagens que podem ser ampliadas
    const clickableImages = document.querySelectorAll(
        '.hero-img-large, .hero-img-small, .story-img, ' +
        '.about-image > img:not(.about-logo-element), ' +
        '.gallery-images img, .target-image img'
    );
    
    // Adiciona evento de clique em todas as imagens
    clickableImages.forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
    });
    
    function openLightbox(src, alt) {
        lightbox.style.display = 'block';
        lightboxImg.src = src;
        lightboxCaption.textContent = '';
        document.body.style.overflow = 'hidden';
        resetZoom();
    }
    
    // Botões de zoom
    zoomInBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        scale = Math.min(scale * 1.5, 4);
        updateTransform();
    });
    
    zoomOutBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        scale = Math.max(scale / 1.5, 1);
        if (scale === 1) {
            posX = 0;
            posY = 0;
        }
        updateTransform();
    });
    
    zoomResetBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        resetZoom();
    });
    
    // Zoom com scroll do mouse
    imageContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        scale = Math.max(1, Math.min(scale * delta, 4));
        
        if (scale === 1) {
            posX = 0;
            posY = 0;
        }
        
        updateTransform();
    });
    
    // Touch events para zoom
    let initialDistance = 0;
    let initialScale = 1;
    
    imageContainer.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
            // Pinch zoom
            e.preventDefault();
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            initialDistance = Math.sqrt(
                Math.pow(touch2.clientX - touch1.clientX, 2) +
                Math.pow(touch2.clientY - touch1.clientY, 2)
            );
            initialScale = scale;
        } else if (e.touches.length === 1 && scale > 1) {
            // Single touch drag
            isDragging = true;
            const touch = e.touches[0];
            startX = touch.clientX - posX;
            startY = touch.clientY - posY;
            imageContainer.style.cursor = 'grabbing';
        }
    });
    
    imageContainer.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2) {
            // Pinch zoom
            e.preventDefault();
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const currentDistance = Math.sqrt(
                Math.pow(touch2.clientX - touch1.clientX, 2) +
                Math.pow(touch2.clientY - touch1.clientY, 2)
            );
            
            if (initialDistance > 0) {
                const scaleChange = currentDistance / initialDistance;
                scale = Math.max(1, Math.min(initialScale * scaleChange, 4));
                
                if (scale === 1) {
                    posX = 0;
                    posY = 0;
                }
                
                updateTransform();
            }
        } else if (e.touches.length === 1 && isDragging) {
            // Single touch drag
            e.preventDefault();
            const touch = e.touches[0];
            
            posX = touch.clientX - startX;
            posY = touch.clientY - startY;
            
            // Limita o movimento para não sair muito da tela
            const maxX = (lightboxImg.offsetWidth * scale - window.innerWidth) / 2;
            const maxY = (lightboxImg.offsetHeight * scale - window.innerHeight) / 2;
            
            posX = Math.max(-maxX, Math.min(posX, maxX));
            posY = Math.max(-maxY, Math.min(posY, maxY));
            
            updateTransform();
        }
    });
    
    imageContainer.addEventListener('touchend', (e) => {
        if (e.touches.length === 0) {
            isDragging = false;
            if (scale > 1) {
                imageContainer.style.cursor = 'grab';
            }
        }
    });
    
    // Funções auxiliares
    function resetZoom() {
        scale = 1;
        posX = 0;
        posY = 0;
        updateTransform();
    }
    
    function updateTransform() {
        lightboxImg.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
        imageContainer.style.cursor = scale > 1 ? 'grab' : 'default';
    }
    
    // Arrastar imagem quando com zoom
    lightboxImg.addEventListener('mousedown', (e) => {
        if (scale > 1) {
            isDragging = true;
            startX = e.clientX - posX;
            startY = e.clientY - posY;
            imageContainer.style.cursor = 'grabbing';
            e.preventDefault();
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        posX = e.clientX - startX;
        posY = e.clientY - startY;
        
        // Limita o movimento para não sair muito da tela
        const maxX = (lightboxImg.offsetWidth * scale - window.innerWidth) / 2;
        const maxY = (lightboxImg.offsetHeight * scale - window.innerHeight) / 2;
        
        posX = Math.max(-maxX, Math.min(posX, maxX));
        posY = Math.max(-maxY, Math.min(posY, maxY));
        
        updateTransform();
    });
    
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            if (scale > 1) {
                imageContainer.style.cursor = 'grab';
            }
        }
    });
    
    // Fecha o lightbox
    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === imageContainer) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            closeLightbox();
        }
    });
    
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
        resetZoom();
    }
}

// Função para controlar o tooltip da dica de imagem
function initializeImageHint() {
    const imageHint = document.getElementById('image-hint');
    let tooltip = null;
    let isTooltipVisible = false;
    let hasShownAutoTooltip = false;
    
    // Cria o tooltip se não existir
    function createTooltip() {
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'image-hint-tooltip';
            tooltip.textContent = 'Clique nas imagens para ampliar';
            imageHint.appendChild(tooltip);
        }
    }
    
    // Mostra o tooltip
    function showTooltip() {
        createTooltip();
        tooltip.classList.add('show');
        isTooltipVisible = true;
    }
    
    // Esconde o tooltip
    function hideTooltip() {
        if (tooltip) {
            tooltip.classList.remove('show');
            isTooltipVisible = false;
        }
    }
    
    // Toggle do tooltip
    function toggleTooltip() {
        if (isTooltipVisible) {
            hideTooltip();
        } else {
            showTooltip();
        }
    }
    
    // Mostra automaticamente no mobile
    function showAutoTooltip() {
        if (window.innerWidth <= 768 && !hasShownAutoTooltip) {
            hasShownAutoTooltip = true;
            showTooltip();
            
            // Esconde automaticamente após 4 segundos
            setTimeout(() => {
                hideTooltip();
            }, 4000);
        }
    }
    
    // Event listeners
    imageHint.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleTooltip();
    });
    
    // Esconde o tooltip ao clicar fora
    document.addEventListener('click', function(e) {
        if (!imageHint.contains(e.target) && isTooltipVisible) {
            hideTooltip();
        }
    });
    
    // Esconde o tooltip ao fazer scroll
    window.addEventListener('scroll', function() {
        if (isTooltipVisible) {
            hideTooltip();
        }
    });
    
    // Mostra automaticamente no mobile quando a página carrega
    window.addEventListener('load', function() {
        setTimeout(showAutoTooltip, 1000);
    });
    
    // Também mostra se a tela for redimensionada para mobile
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768 && !hasShownAutoTooltip) {
            showAutoTooltip();
        }
    });
}

