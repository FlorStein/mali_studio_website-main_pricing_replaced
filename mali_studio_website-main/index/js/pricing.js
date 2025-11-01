$(document).ready(function() {
    var $item = 0,
      $itemNo = $(".hero figure").length;
    var $autoTransition;
    var isDesktop = window.innerWidth >= 1024;
    
    function transitionSlide() {
      $item++;
      if ($item > $itemNo - 1) {
        $item = 0;
      }
      $(".hero figure").removeClass("on");
      $(".hero figure")
        .eq($item)
        .addClass("on");
    }
    
    // Solo iniciar auto-transición en desktop
    if (isDesktop) {
      $autoTransition = setInterval(transitionSlide, 3500);
    } else {
      // En mobile, cerrar todas las secciones excepto la primera
      $(".hero figure").removeClass("on");
      $(".hero figure").first().addClass("on");
    }
  
    $(".hero figure").click(function() {
      var clickedFigure = $(this);
      
      if (isDesktop) {
        // Comportamiento desktop: mantener abierto
        clearInterval($autoTransition);
        $item = $(this).index();
        $(".hero figure").removeClass("on");
        clickedFigure.addClass("on");
      } else {
        // Comportamiento mobile/tablet: toggle accordion
        if (clickedFigure.hasClass("on")) {
          // Si ya está abierto, cerrarlo
          clickedFigure.removeClass("on");
        } else {
          // Si está cerrado, cerrar todos y abrir este
          $(".hero figure").removeClass("on");
          clickedFigure.addClass("on");
        }
      }
    });
    
    // Manejar cambios de tamaño de ventana
    var resizeTimer;
    $(window).on('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        var wasDesktop = isDesktop;
        isDesktop = window.innerWidth >= 1024;
        
        // Si cambiamos de mobile a desktop
        if (!wasDesktop && isDesktop) {
          clearInterval($autoTransition);
          $(".hero figure").removeClass("on");
          $(".hero figure").first().addClass("on");
          $autoTransition = setInterval(transitionSlide, 3500);
        }
        // Si cambiamos de desktop a mobile
        else if (wasDesktop && !isDesktop) {
          clearInterval($autoTransition);
          $(".hero figure").removeClass("on");
          $(".hero figure").first().addClass("on");
        }
      }, 250);
    });
  });



(function(){
  // Tabs accesibles
  const root = document.getElementById('mas-info'); if(!root) return;
  const tabs = root.querySelectorAll('.mi-tab');
  const panels = root.querySelectorAll('.mi-panel');
  function activate(i){
    tabs.forEach((b,idx)=>{
      const on = i===idx;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-selected', String(on));
      panels[idx].toggleAttribute('hidden', !on);
      panels[idx].classList.toggle('is-active', on);
    });
  }
  tabs.forEach((btn,i)=>{
    btn.addEventListener('click',()=>activate(i));
    btn.addEventListener('keydown',(e)=>{
      if(e.key==='ArrowRight'){ e.preventDefault(); const n=(i+1)%tabs.length; tabs[n].focus(); activate(n); }
      if(e.key==='ArrowLeft'){ e.preventDefault(); const p=(i-1+tabs.length)%tabs.length; tabs[p].focus(); activate(p); }
    });
  });
  if(location.hash){
    const idx = Array.from(panels).findIndex(p=>('#'+p.id)===location.hash);
    if(idx>=0) activate(idx);
  }

  // Reveal-on-scroll
  const els = document.querySelectorAll('.reveal-up');
  if('IntersectionObserver' in window){
    const ob = new IntersectionObserver((es,ob)=>{
      es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); ob.unobserve(e.target);} });
    },{threshold:0.15, rootMargin:'0px 0px -10% 0px'});
    els.forEach(el=>ob.observe(el));
  } else { els.forEach(el=>el.classList.add('is-visible')); }
})();




  