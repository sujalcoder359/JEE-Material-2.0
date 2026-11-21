(function(){var q=document.getElementById('q');if(!q)return;
var cards=[].slice.call(document.querySelectorAll('.res')),secs=[].slice.call(document.querySelectorAll('.ch')),cover=document.querySelector('.cover'),empty=document.getElementById('empty');
q.addEventListener('input',function(){var v=q.value.trim().toLowerCase(),any=false;
cards.forEach(function(c){var m=!v||c.textContent.toLowerCase().indexOf(v)>-1;c.hidden=!m;if(m)any=true});
secs.forEach(function(s){s.hidden=!s.querySelector('.res:not([hidden])')});
if(cover)cover.hidden=!!v;empty.hidden=any||!v});
var links={};[].forEach.call(document.querySelectorAll('.nav a[data-t]'),function(a){links[a.dataset.t]=a});
if('IntersectionObserver' in window&&secs.length>1){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){for(var k in links)links[k].classList.remove('on');if(links[e.target.id])links[e.target.id].classList.add('on')}})},{rootMargin:'-20% 0px -70% 0px'});secs.forEach(function(s){io.observe(s)})}
})();
