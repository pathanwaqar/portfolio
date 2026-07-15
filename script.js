const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const projects = {
  kiteworks: {
    kicker: 'Enterprise WordPress / Multilingual Delivery',
    title: 'Kiteworks — global security platform modernization',
    content: `
      <p>I delivered ongoing production work for Kiteworks across its large multilingual WordPress ecosystem, covering design modernization, custom theme behaviour, content operations and release safety.</p>
      <h3>What I worked on</h3>
      <ul>
        <li>Implemented a broad visual reskin across the homepage, platform and solution pages, blogs, glossary content, company pages and multilingual templates.</li>
        <li>Created a maintainable CSS strategy by separating content-type overrides, consolidating repeated styles and keeping changes isolated from older templates.</li>
        <li>Resolved PHP 8.2 compatibility and production issues involving custom templates, ACF workflows, WPML media handling, search and resource functionality.</li>
        <li>Handled WordPress/WPML updates, technical SEO items, redirects, schema and content QA, plus staging-to-production release checks.</li>
        <li>Performed responsive and multilingual QA across a large content library while coordinating careful production rollouts.</li>
      </ul>
      <h3>Focus</h3>
      <p>Enterprise WordPress, WPML, PHP, custom templates, frontend systems, technical QA, SEO hygiene and controlled releases.</p>
      <p><a href="https://kiteworks.com/" target="_blank" rel="noreferrer">Visit Kiteworks ↗</a></p>
    `
  },
  healthclinic: {
    kicker: 'Healthcare Web Platform / Patient Journey',
    title: 'Health Clinic MD — treatment discovery and consultation flow',
    content: `
      <p>I contributed to the web experience for Health Clinic MD, a telehealth-focused platform presenting personalized wellness, weight-management and treatment options.</p>
      <h3>What I worked on</h3>
      <ul>
        <li>Supported the responsive website experience across treatment categories, service pages, pricing, FAQ, contact and consultation-focused journeys.</li>
        <li>Helped organize a large treatment catalogue into clearer content pathways so visitors can move from discovery to the appropriate next step.</li>
        <li>Worked on conversion-oriented calls to action, patient-login handoff and interface consistency across desktop and mobile layouts.</li>
        <li>Provided implementation support, visual QA and maintainability improvements for ongoing content and treatment updates.</li>
      </ul>
      <h3>Focus</h3>
      <p>Healthcare UX, structured content, responsive implementation, consultation funnels, patient handoff and production QA.</p>
      <p><a href="https://healthclinicmd.com/" target="_blank" rel="noreferrer">Visit Health Clinic MD ↗</a></p>
    `
  },
  hrpal: {
    kicker: 'AI-Assisted Product',
    title: 'HRPal — structured HR and employment-law assistance',
    content: `
      <p>A GPT-4-powered business assistant built to work with client-specific HR and employment-law data rather than returning generic FAQ responses.</p>
      <h3>System contribution</h3>
      <ul>
        <li>Mapped user questions into controlled retrieval and response workflows.</li>
        <li>Connected AI behaviour to structured business data and document-generation needs.</li>
        <li>Handled product logic, interface flow, validation and full-stack implementation concerns.</li>
      </ul>
      <p>The project was designed as an operational tool with defined data boundaries—not simply a chatbot embedded in a page.</p>
    `
  },
  officernd: {
    kicker: 'API Integration System',
    title: 'OfficeRND directory and booking synchronization',
    content: `
      <p>An operational integration that synchronizes resource, company and booking data from OfficeRND into a structured internal directory.</p>
      <h3>System contribution</h3>
      <ul>
        <li>Worked with paginated REST API data and normalized records for local storage.</li>
        <li>Mapped resources, companies, bookings and reporting data into MySQL-backed workflows.</li>
        <li>Built resilient processing and display logic for an internal operational tool.</li>
      </ul>
    `
  },
  hvac: {
    kicker: 'AI-Assisted Mobile Product',
    title: 'Ask Your HVAC Pro — guided troubleshooting',
    content: `
      <p>A mobile troubleshooting experience designed to guide users through HVAC questions using a practical diagnostic flow.</p>
      <h3>System contribution</h3>
      <ul>
        <li>Worked across Flutter interface flows, Firebase services and OpenAI API integration.</li>
        <li>Focused on stable prompts, usable response presentation and mobile interaction design.</li>
        <li>Supported testing and implementation decisions across the product workflow.</li>
      </ul>
    `
  },
  shopify: {
    kicker: 'Regional Commerce System',
    title: 'Regional B2B/B2C commerce operations',
    content: `
      <p>A Shopify implementation supporting professional and consumer customers across US and UK operations.</p>
      <h3>System contribution</h3>
      <ul>
        <li>Configured customer access, professional pricing and product visibility logic.</li>
        <li>Separated regional inventory and fulfilment workflows across US and UK providers.</li>
        <li>Handled Shopify theme customisation, operational testing and maintainable admin workflows.</li>
      </ul>
    `
  },
  alacarte: {
    kicker: 'Public Shopify Codebase',
    title: 'À La Carte Cooking Class storefront',
    content: `
      <p>A custom Shopify implementation for a cooking-class and culinary-kit brand.</p>
      <h3>System contribution</h3>
      <ul>
        <li>Built Liquid templates and reusable storefront components.</li>
        <li>Implemented responsive styling and ecommerce-oriented content structure.</li>
        <li>Maintained the project as a public GitHub codebase.</li>
      </ul>
      <p><a href="https://github.com/pathanwaqar/Alacartecookingclass" target="_blank" rel="noreferrer">View repository ↗</a></p>
    `
  }
};

// Reveal elements on scroll.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Header, progress and parallax.
const header = document.querySelector('.site-header');
const progress = document.querySelector('.scroll-progress span');
const parallaxItems = document.querySelectorAll('[data-parallax]');
function onScroll() {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 24);
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
  if (!reduceMotion) {
    parallaxItems.forEach((el) => {
      const rate = Number(el.dataset.parallax || 0.05);
      el.style.transform = `translate3d(0, ${y * rate}px, 0)`;
    });
  }
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Local time in Sugar Land (Central Time).
function updateTime() {
  const time = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  }).format(new Date());
  document.querySelector('#local-time').textContent = time;
}
updateTime();
setInterval(updateTime, 1000);
document.querySelector('#year').textContent = new Date().getFullYear();

// Mobile navigation.
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

// Project filtering.
const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.project-card');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach((card) => {
      const match = filter === 'all' || card.dataset.category.includes(filter);
      card.classList.toggle('is-hidden', !match);
    });
  });
});

// Project dialog.
const dialog = document.querySelector('#project-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogKicker = document.querySelector('#dialog-kicker');
const dialogContent = document.querySelector('#dialog-content');
document.querySelectorAll('[data-open-project]').forEach((button) => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.openProject];
    if (!project) return;
    dialogKicker.textContent = project.kicker;
    dialogTitle.textContent = project.title;
    dialogContent.innerHTML = project.content;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});
function closeDialog() {
  dialog.close();
  document.body.style.overflow = '';
}
document.querySelector('.dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) closeDialog();
});
dialog.addEventListener('close', () => { document.body.style.overflow = ''; });

// Counters.
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) return;
    const end = Number(target.dataset.count);
    const suffix = target.dataset.suffix || '';
    const duration = reduceMotion ? 0 : 1200;
    const start = performance.now();
    function tick(now) {
      const p = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      target.textContent = `${Math.round(end * eased)}${suffix}`;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    counterObserver.unobserve(target);
  });
}, { threshold: .6 });
document.querySelectorAll('[data-count]').forEach((el) => counterObserver.observe(el));

// Cursor follower.
if (!reduceMotion && matchMedia('(pointer:fine)').matches) {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
  addEventListener('mousemove', (e) => {
    x = e.clientX; y = e.clientY;
    dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
    document.body.classList.add('cursor-ready');
  });
  function cursorLoop() {
    rx += (x - rx) * .16;
    ry += (y - ry) * .16;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(cursorLoop);
  }
  cursorLoop();
  document.querySelectorAll('a,button,.tilt-card').forEach((el) => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

// Magnetic buttons.
if (!reduceMotion && matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * .16}px,${dy * .16}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

// Perspective tilt.
if (!reduceMotion && matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - .5) * 8;
      const rotateX = (.5 - py) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

// Scramble intro label.
if (!reduceMotion) {
  const scramble = document.querySelector('.scramble');
  const finalText = scramble.dataset.text;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789•/<>_';
  let frame = 0;
  function scrambleText() {
    const revealTo = Math.floor(frame / 2.4);
    scramble.textContent = finalText.split('').map((char, index) => {
      if (char === ' ') return ' ';
      return index < revealTo ? char : chars[Math.floor(Math.random() * chars.length)];
    }).join('');
    frame += 1;
    if (revealTo < finalText.length) requestAnimationFrame(scrambleText);
  }
  setTimeout(scrambleText, 350);
}

// Animated network background.
if (!reduceMotion) {
  const canvas = document.querySelector('#network-canvas');
  const ctx = canvas.getContext('2d');
  let nodes = [];
  let mouse = { x: -9999, y: -9999 };
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = `${innerWidth}px`;
    canvas.style.height = `${innerHeight}px`;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const count = Math.min(70, Math.max(28, Math.floor(innerWidth / 22)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      vx: (Math.random() - .5) * .22,
      vy: (Math.random() - .5) * .22,
      r: Math.random() * 1.3 + .4
    }));
  }
  addEventListener('resize', resize);
  addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
  function animateNetwork() {
    ctx.clearRect(0,0,innerWidth,innerHeight);
    nodes.forEach((n) => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < -20) n.x = innerWidth + 20;
      if (n.x > innerWidth + 20) n.x = -20;
      if (n.y < -20) n.y = innerHeight + 20;
      if (n.y > innerHeight + 20) n.y = -20;
      const md = Math.hypot(n.x - mouse.x, n.y - mouse.y);
      if (md < 130) {
        n.x += (n.x - mouse.x) * .002;
        n.y += (n.y - mouse.y) * .002;
      }
      ctx.beginPath();
      ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fillStyle = 'rgba(124,247,164,.35)';
      ctx.fill();
    });
    for (let i=0;i<nodes.length;i++) {
      for (let j=i+1;j<nodes.length;j++) {
        const d = Math.hypot(nodes[i].x-nodes[j].x,nodes[i].y-nodes[j].y);
        if (d < 130) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x,nodes[i].y);
          ctx.lineTo(nodes[j].x,nodes[j].y);
          ctx.strokeStyle = `rgba(107,140,255,${(1-d/130)*.09})`;
          ctx.lineWidth = .7;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animateNetwork);
  }
  resize();
  animateNetwork();
}
