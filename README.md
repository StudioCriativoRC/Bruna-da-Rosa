# 📸 CAPTURE - Site do Curso de Fotografia Mobile

Site desenvolvido para o curso **CAPTURE** de fotografia mobile da **Bruna da Rosa**.

## 🎨 Funcionalidades Implementadas

### ✅ Interatividade Completa
- **Navegação suave** entre seções com scroll animado
- **Acordeão FAQ** totalmente funcional
- **Galeria interativa** com efeito lightbox ao clicar nas imagens
- **Vídeo player** com playlist (pronto para integração)
- **Botões CTA** funcionais com scroll para seções
- **Botão "Voltar ao Topo"** com scroll suave
- **Animações ao scroll** (fade-in e slide-up)
- **Efeito parallax** em elementos de fundo
- **Hover effects** em cards e imagens

### 📱 Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Grid system moderno e flexível
- Imagens otimizadas para diferentes telas

### 🎯 Seções do Site

1. **Hero** - Apresentação inicial com CTA
2. **História** - Storytelling sobre Ana e o problema
3. **Vídeo do Curso** - Player com playlist de aulas
4. **Sobre Bruna** - Apresentação pessoal
5. **Galeria** - Exemplos de fotos com técnicas CAPTURE
6. **Público-Alvo** - Para quem é o curso
7. **Conteúdo** - O que está incluído no curso
8. **FAQ** - Perguntas frequentes com acordeão
9. **Footer** - Créditos e navegação

## 🚀 Como Usar

### 1. Estrutura de Arquivos

```
Bruna da Rosa/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interativo
├── README.md           # Este arquivo
└── site/               # Pasta com imagens do design
    ├── Site (1).png
    ├── Site (2).jpg
    ├── Site (3).jpg
    ├── Site (4).jpg
    ├── Site (5).jpg
    └── Site (6).png
```

### 2. Adicionar Imagens Reais

O site está configurado para buscar imagens em `site/`. Você precisa adicionar suas próprias fotos:

**Imagens necessárias:**
- `site/placeholder-1.jpg` - Casal em cavalos (Hero)
- `site/placeholder-2.jpg` - Pessoa em trilha (Hero)
- `site/placeholder-3.jpg` - Mãe e filha 1 (História)
- `site/placeholder-4.jpg` - Mãe e filha 2 (História)
- `site/placeholder-5.jpg` - Mãe e filha 3 (História)
- `site/placeholder-bruna.jpg` - Foto da Bruna da Rosa
- `site/placeholder-gallery-1.jpg` até `placeholder-gallery-5.jpg` - Galeria
- `site/placeholder-target-1.jpg` até `placeholder-target-6.jpg` - Público-alvo

**Dica:** Renomeie suas fotos ou atualize os caminhos no `index.html`.

### 3. Abrir o Site

Basta abrir o arquivo `index.html` no navegador:
- Duplo clique no arquivo
- Ou clique com botão direito → "Abrir com" → Seu navegador preferido

### 4. Personalizar Conteúdo

**Textos:** Edite o `index.html` para alterar textos, títulos e descrições.

**Cores:** Modifique as cores no `styles.css` na seção `/* Colors */`.

**Funcionalidades:** Adicione ou modifique interações no `script.js`.

## 🔧 Integrações Disponíveis

### WhatsApp
No arquivo `script.js`, função `handleCTAClick()`, adicione seu número:

```javascript
const whatsappNumber = '5511999999999'; // Seu número com DDI
```

Descomente a linha para ativar o redirecionamento:
```javascript
window.open(whatsappURL, '_blank');
```

### Vídeo Player
O site está pronto para integrar com:
- **YouTube** - Incorpore vídeos do YouTube
- **Vimeo** - Player Vimeo
- **HTML5 Video** - Vídeos hospedados

Basta substituir o `.video-placeholder` por um iframe ou tag `<video>`.

### Plataforma de Pagamento
Adicione links para checkout nos botões CTA:
- Hotmart
- Eduzz
- Monetizze
- Stripe
- PagSeguro

## 🎨 Paleta de Cores

```css
Marrom escuro: #2d1f1f
Marrom médio: #4a3333
Laranja claro: #E8A575
Laranja médio: #D4915F
Laranja escuro: #C07D4A
Marrom terra: #8B5E3C
Verde destaque: #4CAF50
Ciano destaque: #00BCD4
```

## 📱 Responsividade

O site se adapta automaticamente para:
- **Desktop** (1400px+)
- **Tablet** (768px - 1024px)
- **Mobile** (até 768px)

## ⚡ Performance

- CSS puro (sem frameworks pesados)
- JavaScript vanilla (sem jQuery ou bibliotecas)
- Imagens otimizadas
- Scroll suave nativo do navegador
- Animações com CSS transitions

## 🛠️ Próximos Passos Recomendados

1. **Adicionar imagens reais** do curso e da Bruna
2. **Integrar vídeos** do YouTube ou Vimeo
3. **Conectar WhatsApp** para contato direto
4. **Adicionar Analytics** (Google Analytics, Facebook Pixel)
5. **Implementar SEO** (meta tags, schema markup)
6. **Adicionar formulário de email** (Mailchimp, ConvertKit)
7. **Integrar página de vendas** (Hotmart, Eduzz, etc.)
8. **Otimizar imagens** (compressão, lazy loading)
9. **Adicionar favicon** do curso
10. **Testar em diferentes dispositivos**

## 📞 Suporte

Para dúvidas sobre o código ou personalizações, consulte os comentários em cada arquivo.

---

**Desenvolvido com ❤️ para Bruna da Rosa**

*STUDIO CRIATIVO*

