import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="scanlines" aria-hidden="true"></div>
    <header class="topbar">
      <a class="brand" href="#inicio" aria-label="Gustavo Miranda, início">
        <span class="brand-mark">GM<span>_</span></span>
        <span>Gustavo Miranda</span>
      </a>
      <button class="menu-toggle" type="button" (click)="menuOpen = !menuOpen" [attr.aria-expanded]="menuOpen" aria-label="Abrir menu">
        <span></span><span></span>
      </button>
      <nav [class.open]="menuOpen" aria-label="Navegação principal">
        <a href="#inicio" (click)="closeMenu()">Inicio</a>
        <a href="#carreira" (click)="closeMenu()">Carreira</a>
        <a href="#formacao" (click)="closeMenu()">Formação</a>
        <a href="#projetos" (click)="closeMenu()">Projetos</a>
        <a href="#skills" (click)="closeMenu()">Skills</a>
      </nav>
      <span class="availability"><i></i> disponível para oportunidades</span>
    </header>

    <main>
      <section class="hero" id="inicio">
        <div class="hero-grid"></div>
        <div class="ascii-backdrop" aria-hidden="true">
          <ascii-art piece="black-hole" look="dots" mono dot-size="21" density="200"></ascii-art>
        </div>
        <div class="hero-shade"></div>
        <div class="hero-content">
          <p class="eyebrow"><span class="prompt">&gt;</span> PORTFÓLIO / 2026 <span class="blink">_</span></p>
          <h1>Gustavo<br><span>Miranda</span></h1>
          <div class="role-line"><span class="role-bar"></span> DESENVOLVEDOR FULL STACK</div>
          <p class="hero-copy">Transformando ideias em soluções digitais.<br>Da infraestrutura ao código, conectando tecnologia e resultado.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projetos">Explorar projetos <span>↘</span></a>
            <a class="button button-ghost" href="#contato">Entrar em contato <span>↗</span></a>
          </div>
        </div>
        <div class="hero-index"><span>01</span> / 05</div>
        <a class="scroll-cue" href="#sobre"><span></span> SCROLL PARA EXPLORAR</a>
        <div class="hero-coordinate">23°33' S&nbsp; 46°38' W</div>
      </section>

      <section class="section about-section" id="sobre">
        <div class="section-kicker"><span>01</span> SOBRE MIM <span class="kicker-line"></span></div>
        <div class="about-layout">
          <div class="portrait-wrap">
            <div class="portrait-frame">
              <img src="assets/gustavo.jpg" alt="Foto de Gustavo Miranda" class="portrait" (load)="photoMissing = false" (error)="photoMissing = true" [class.hidden]="photoMissing">
              <div class="portrait-placeholder" [class.hidden]="!photoMissing">
                <span class="portrait-symbol">GM</span>
                <span>FOTO / PERFIL</span>
                <small>adicione sua foto em<br>src/assets/gustavo.jpg</small>
              </div>
              <span class="frame-corner corner-a"></span><span class="frame-corner corner-b"></span>
              <span class="portrait-tag">FIG. 001 — GUSTAVO</span>
            </div>
            <div class="portrait-caption"><span class="status-dot"></span> São Paulo, Brasil <span class="caption-sep">/</span> tecnologia & desenvolvimento</div>
          </div>
          <div class="about-copy">
            <p class="micro-label">QUEM SOU EU</p>
            <h2>Curioso por natureza.<br><span>Construtor por escolha.</span></h2>
            <p>Sou profissional de tecnologia com experiência em infraestrutura, sustentação de aplicações e ambientes em nuvem. Ao longo da minha trajetória, desenvolvi uma visão ampla de como sistemas funcionam — da operação e dos servidores até a experiência de quem utiliza o software.</p>
            <p>Hoje direciono essa experiência para o desenvolvimento full stack, estudando e construindo soluções com Java, Spring Boot, APIs REST, bancos de dados e tecnologias web. Gosto de investigar problemas, automatizar tarefas e transformar necessidades reais em ferramentas simples e eficientes.</p>
            <div class="about-stats">
              <div><strong>TI</strong><span>Infraestrutura & software</span></div>
              <div><strong>DEV</strong><span>Full stack em evolução</span></div>
              <div><strong>SP</strong><span>Brasil</span></div>
            </div>
            <a class="text-link" href="https://github.com/gustamba" target="_blank" rel="noopener noreferrer">VER GITHUB <span>↗</span></a>
          </div>
        </div>
      </section>

      <section class="section career-section" id="carreira">
        <div class="section-kicker"><span>02</span> TRAJETÓRIA <span class="kicker-line"></span></div>
        <div class="section-heading">
          <h2>Uma carreira em <span>construção.</span></h2>
          <p>Experiências que conectam processos, pessoas e tecnologia.</p>
        </div>
        <div class="timeline">
          <article class="timeline-item current">
            <div class="timeline-date">MAI 2025 — ATUAL</div>
            <div class="timeline-node"><span></span></div>
            <div class="timeline-card">
              <div class="timeline-top"><span class="timeline-type">01 / ATUAL</span><span class="tag">TECNOLOGIA</span></div>
              <h3>Analista de Infraestrutura</h3>
              <h4>Bohm Tecnologia e Inteligência</h4>
              <p>Atuação na instalação, sustentação e suporte de sistemas ERP em ambientes locais e cloud. Administração e suporte a Windows Server, IIS, Oracle Database e sessões de Terminal Server, além de diagnóstico de incidentes e automações com Python.</p>
              <div class="mini-tags"><span>Windows Server</span><span>AWS / Oracle Cloud</span><span>Oracle SQL</span><span>Python</span><span>ERP</span></div>
            </div>
          </article>
          <article class="timeline-item">
            <div class="timeline-date">MAI 2019 — MAI 2025</div>
            <div class="timeline-node"><span></span></div>
            <div class="timeline-card">
              <div class="timeline-top"><span class="timeline-type">02 / EXPERIÊNCIA</span><span class="tag">TI & OPERAÇÕES</span></div>
              <h3>Analista de TI</h3>
              <h4>Aliança Traduções</h4>
              <p>Responsável pela tecnologia interna, suporte aos usuários, manutenção de ambientes e ferramentas corporativas, buscando manter a operação estável e os processos de trabalho eficientes.</p>
              <div class="mini-tags"><span>Suporte</span><span>Infraestrutura</span><span>Microsoft 365</span><span>Processos</span></div>
            </div>
          </article>
          <article class="timeline-item">
            <div class="timeline-date">JAN 2018 — MAI 2019</div>
            <div class="timeline-node"><span></span></div>
            <div class="timeline-card">
              <div class="timeline-top"><span class="timeline-type">03 / EXPERIÊNCIA</span><span class="tag">ADMINISTRATIVO</span></div>
              <h3>Contas a Receber</h3>
              <h4>Aliança Traduções</h4>
              <p>Rotinas financeiras, acompanhamento de recebimentos e organização de informações administrativas — experiência que fortaleceu minha visão de negócio e processos.</p>
            </div>
          </article>
          <article class="timeline-item">
            <div class="timeline-date">FEV 2017 — JAN 2018</div>
            <div class="timeline-node"><span></span></div>
            <div class="timeline-card">
              <div class="timeline-top"><span class="timeline-type">04 / INÍCIO</span><span class="tag">CRIAÇÃO</span></div>
              <h3>Estágio em Editoração / Diagramação</h3>
              <h4>Aliança Traduções</h4>
              <p>Primeiro contato profissional com tecnologia e produção digital, trabalhando com editoração, diagramação e ferramentas gráficas.</p>
            </div>
          </article>
        </div>
      </section>

      <section class="section education-section" id="formacao">
        <div class="section-kicker"><span>03</span> FORMAÇÃO <span class="kicker-line"></span></div>
        <div class="section-heading">
          <h2>Aprender faz parte <span>do processo.</span></h2>
          <p>Uma base multidisciplinar, com foco contínuo em tecnologia.</p>
        </div>
        <div class="education-grid">
          <article class="edu-card">
            <span class="edu-year">2018</span><span class="edu-icon">[A]</span>
            <p class="micro-label">GRADUAÇÃO</p><h3>Administração de Empresas</h3><p class="edu-place">Universidade Anhembi Morumbi</p>
            <span class="edu-index">EDU / 001</span>
          </article>
          <article class="edu-card featured">
            <span class="edu-year">PÓS-GRADUAÇÃO</span><span class="edu-icon">[&lt;/&gt;]</span>
            <p class="micro-label">ESPECIALIZAÇÃO</p><h3>Desenvolvimento de Software com Metodologia Ágil</h3><p class="edu-place">Universidade Anhembi Morumbi</p>
            <span class="edu-index">EDU / 002</span>
          </article>
          <article class="edu-card">
            <span class="edu-year">2024</span><span class="edu-icon">[01]</span>
            <p class="micro-label">FORMAÇÃO COMPLEMENTAR</p><h3>Linux Fundamentos & Gestão de Infraestrutura</h3><p class="edu-place">FIAP</p>
            <span class="edu-index">EDU / 003</span>
          </article>
          <article class="edu-card">
            <span class="edu-year">EM ANDAMENTO</span><span class="edu-icon">[J]</span>
            <p class="micro-label">ESTUDOS</p><h3>Java Fundamentos</h3><p class="edu-place">FIAP Nano Course</p>
            <span class="edu-index">EDU / 004</span>
          </article>
        </div>
      </section>

      <section class="section projects-section" id="projetos">
        <div class="section-kicker"><span>04</span> LABORATÓRIO <span class="kicker-line"></span></div>
        <div class="section-heading">
          <h2>Ideias que viram <span>código.</span></h2>
          <p>Projetos de estudo e experimentação. Em constante evolução.</p>
        </div>
        <div class="project-grid">
          <article class="project-card">
            <div class="project-visual visual-terminal"><span class="terminal-dots">● ● ●</span><pre>&gt; java -jar livraria.jar
[OK] catálogo carregado
[OK] vendas registradas
_</pre><span class="visual-number">01</span></div>
            <div class="project-info"><div class="project-meta"><span>JAVA / POO</span><span>CLI</span></div><h3>Sistema de Livraria</h3><p>Aplicação de linha de comando para praticar orientação a objetos, cadastro de livros e registro de vendas.</p><a href="https://github.com/gustamba" target="_blank" rel="noopener noreferrer">VER NO GITHUB ↗</a></div>
          </article>
          <article class="project-card">
            <div class="project-visual visual-code"><span class="code-line">const <b>receitas</b> = await api.get();</span><span class="code-line indent">if (despensa.has(ingredientes)) &#123;</span><span class="code-line indent2">return <b>pratosPossiveis</b>;</span><span class="code-line indent">&#125;</span><span class="visual-number">02</span></div>
            <div class="project-info"><div class="project-meta"><span>ANGULAR / JAVA</span><span>FULL STACK</span></div><h3>Receitas & Despensa</h3><p>Conceito de aplicação para cadastrar receitas e ingredientes disponíveis, sugerindo pratos que podem ser preparados.</p><span class="project-status">EM PLANEJAMENTO</span></div>
          </article>
          <article class="project-card">
            <div class="project-visual visual-monitor"><div class="monitor-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span class="monitor-label">SERVER STATUS: ONLINE</span><span class="visual-number">03</span></div>
            <div class="project-info"><div class="project-meta"><span>PYTHON / AUTOMATION</span><span>INFRA</span></div><h3>Monitoramento & Automação</h3><p>Scripts e ferramentas para apoiar rotinas de infraestrutura, consultas, verificações e tarefas repetitivas.</p><span class="project-status">ESTUDOS / LAB</span></div>
          </article>
        </div>
      </section>

      <section class="section skills-section" id="skills">
        <div class="section-kicker"><span>05</span> STACK & FERRAMENTAS <span class="kicker-line"></span></div>
        <div class="section-heading">
          <h2>Ferramentas do <span>meu repertório.</span></h2>
          <p>Tecnologias que utilizo profissionalmente, estudo ou exploro em projetos.</p>
        </div>
        <div class="skill-groups">
          <div class="skill-group"><div class="skill-group-title"><span>01</span> INFRAESTRUTURA & CLOUD</div><div class="skill-list">
            <div class="skill"><b>▣</b><span>Windows Server</span></div><div class="skill"><b>⌘</b><span>Linux</span></div><div class="skill"><b>▤</b><span>IIS</span></div><div class="skill"><b>☁</b><span>Nuvem</span></div><div class="skill"><b>◈</b><span>Docker</span></div><div class="skill"><b>⌁</b><span>Cloudflare</span></div><div class="skill"><b>◉</b><span>Nginx</span></div>
          </div></div>
          <div class="skill-group"><div class="skill-group-title"><span>02</span> DESENVOLVIMENTO</div><div class="skill-list">
            <div class="skill"><b>Py</b><span>Python / Tk</span></div><div class="skill"><b>J</b><span>Java</span></div><div class="skill"><b>◫</b><span>HTML + CSS + JS</span></div><div class="skill"><b>DB</b><span>SQL</span></div><div class="skill"><b>⬡</b><span>Node.js</span></div><div class="skill"><b>N</b><span>NPM</span></div><div class="skill"><b>⌘</b><span>BAT / Scripts</span></div>
          </div></div>
          <div class="skill-group"><div class="skill-group-title"><span>03</span> OBSERVABILIDADE & PRODUTIVIDADE</div><div class="skill-list">
            <div class="skill"><b>◌</b><span>Grafana</span></div><div class="skill"><b>◉</b><span>Prometheus</span></div><div class="skill"><b>▦</b><span>Office</span></div><div class="skill"><b>▤</b><span>Documentação</span></div><div class="skill"><b>Ps</b><span>Photoshop</span></div><div class="skill"><b>Ai</b><span>Illustrator</span></div>
          </div></div>
        </div>
        <p class="skills-note"><span>*</span> Stack em constante aprendizado. Conhecimento e profundidade variam conforme a ferramenta.</p>
      </section>

      <section class="contact-section" id="contato">
        <div class="contact-orbit" aria-hidden="true"></div>
        <div class="section-kicker"><span>06</span> CONTATO <span class="kicker-line"></span></div>
        <div class="contact-content">
          <p class="micro-label">VAMOS CONVERSAR?</p>
          <h2>O próximo projeto<br>pode começar <span>aqui.</span></h2>
          <p class="contact-copy">Estou aberto a oportunidades, conexões e novos desafios em tecnologia e desenvolvimento.</p>
          <a class="contact-email" href="mailto:gustavodefaustino@gmail.com">gustavodefaustino@gmail.com <span>↗</span></a>
          <div class="contact-details">
            <a href="tel:+5511976902628"><span>TELEFONE</span>+55 11 97690-2628</a>
            <a href="https://www.linkedin.com/in/gustavo-de-faustino-miranda/" target="_blank" rel="noopener noreferrer"><span>LINKEDIN</span>gustavo-de-faustino-miranda ↗</a>
            <a href="https://github.com/gustamba" target="_blank" rel="noopener noreferrer"><span>GITHUB</span>github.com/gustamba ↗</a>
          </div>
        </div>
      </section>
    </main>
    <footer><a class="brand footer-brand" href="#inicio"><span class="brand-mark">GM<span>_</span></span> Gustavo Miranda</a><span>DESENHADO & CODIFICADO COM INTENÇÃO.</span><span>© 2026 — TODOS OS DIREITOS RESERVADOS</span></footer>
  `
})
export class AppComponent implements AfterViewInit, OnDestroy {
  menuOpen = false;
  photoMissing = true;
  private observer?: IntersectionObserver;

  closeMenu(): void { this.menuOpen = false; }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.section, .timeline-item, .project-card, .edu-card').forEach((el) => this.observer?.observe(el));
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}
