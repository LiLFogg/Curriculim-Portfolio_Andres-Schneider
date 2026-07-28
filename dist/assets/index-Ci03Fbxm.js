(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();function a(){return`
  
  <nav class="navbar">

      <div class="logo">
          <span class="cyan">ANDRÉS</span> SCHNEIDER
      </div>

      <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li>
            <a
              href="https://github.com/LiLFogg"
              target="_blank"
              class="github-icon"
            >
              GitHub 
              >
            </a>
          </li>
      </ul>

  </nav>
  `}const c="/Curriculim-Portfolio_Andres-Schneider/assets/imagen-perfil-BUxAP1uE.jpg";function l(){return`
  
  <section id="home" class="hero">

      <div class="hero-image">

          <div class="avatar-glow">

              <img
                src="${c}"
                alt="Andrés"
              >

          </div>

      </div>

      <div class="hero-content">

          <h1>ANDRÉS SCHNEIDER</h1>

          <h2>Full Stack Developer / AI Enthusiast</h2>

          <p class="location">
            📍 San Francisco, Argentina || 30/10/2002
          </p>
          <p class="location"> Edad: 23 años</p>

          <p class="description">

            Soy un apasionado Full Stack Developer dedicado a crear innovaciones web,
            soluciones innovadoras y eficientes.

            Mi trabajo está significativamente atado a las herramientas de
            inteligencia artificial.

          </p>

      </div>

  </section>
  `}const d="/Curriculim-Portfolio_Andres-Schneider/assets/screenshot-envios-sf-CclJmG4d.png",u="/Curriculim-Portfolio_Andres-Schneider/assets/screenshot-mrrouben-0wC5Z0VI.png",p=[{title:"Sistema de logística y reparto Envios'SF",image:d,description:"Sistema complejo de logistica de repartos en desarrollo constante.",link:"https://www.envios-sf.com/"},{title:"Página web de comercio local Mr.Rouben",image:u,description:"Pagina de compras online para comercio local en crecimiento.",link:"https://www.mrrouben.ar/"}];function m(){return`
  
  <section id="projects">

      <h2 class="section-title">
        PROYECTOS
      </h2>

      <div class="projects-grid">

          ${p.map(t=>`
              
                <div class="project-card">

                    <h3>${t.title}</h3>

                    <img
                      src="${t.image}"
                      alt="${t.title}"
                    >

                    <p>${t.description}</p>

                    <a
                      href="${t.link}"
                      target="_blank"
                    >
                      Ver Proyecto
                    </a>

                </div>
            `).join("")}

      </div>

  </section>
  `}function f(){return`
  
  <section id="contact">

      <h2 class="section-title">
        CONTACTO
      </h2>

      <div class="contact-card">

          <p>
            📧 andresschneiderr@gmail.com
          </p>

          <p>
            📱 +54 9 3564 63-1169
          </p>

          <p>

              <a
                href="https://github.com/LiLFogg"
                target="_blank"
              >
                GitHub Repository
              </a>

          </p>

      </div>

  </section>
  `}const g=document.querySelector("#app");g.innerHTML=`

<div class="background-grid"></div>

${a()}

<main>

    ${l()}

    ${m()}

    ${f()}

</main>

`;
