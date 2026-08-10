const menuButton=document.querySelector('.menu-button');
const closeMenu=()=>{document.body.classList.remove('menu-open');menuButton?.setAttribute('aria-expanded','false')};
menuButton?.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');menuButton.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('.mobile-nav a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
document.querySelectorAll('a[href^="https://wa.me"],a[href^="https://t.me"],a[href^="https://max.ru"]').forEach(link=>link.addEventListener('click',()=>{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'messenger_click',messenger:link.href.includes('wa.me')?'whatsapp':link.href.includes('t.me')?'telegram':'max'});}));
