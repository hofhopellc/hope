// var T=[["Ishmael Togamae, MD","Medical Director","ishmael@harborofhopeor.com","/img/team/ishmael-togamae.jpg"],["Habtamu Egata, DNP, PMHNP-BC","Clinical Director","habtamu@harborofhopeor.com","/img/team/habtamu-egata.jpg"],["Larry J. Johnson, CADC II","Clinical Supervisor","J.johnson@harborofhopeor.com","/img/team/larry-johnson.jpg"],["Frank Gilbert, CRM, CADC-R","Certified Recovery Mentor","frank@harborofhopeor.com","/img/team/frank-gilbert.jpg"],["Holly Walker, CRM, CADC-R","Certified Recovery Mentor","holly@harborofhopeor.com","/img/team/holly-walker.jpg"],["Nasteha Isaak","Administrative Manager","nasteha@harborofhopeor.com","/img/team/nasteha-isaak.jpg"],["Abdi Derow","Co-Founder &amp; Operations Manager","abdi@harborofhopeor.com","/img/team/abdi-derow.jpg"]];
// var s='<svg viewBox="0 0 100 100"><circle cx="50" cy="36" r="17" fill="#2c6b2a"/><path d="M10 100c0-26 18-40 40-40s40 14 40 40z" fill="#2c6b2a"/></svg>';
// document.getElementById('tg').innerHTML=T.map(function(m){return '<div><div class="ph">'+(m[3]?'<img src="'+m[3]+'" alt="Portrait of '+m[0].split(',')[0]+'" loading="lazy">':s)+'</div><h3>'+m[0]+'</h3><div class="role">'+m[1]+'</div><a href="mailto:'+m[2]+'">'+m[2]+'</a></div>'}).join('');
var FORM_URL='https://docs.google.com/forms/d/e/1FAIpQLScssZUwRjpPhp6OJwxLtyC1a5E1SPUa72ayrB1EOwDfywLeRw/formResponse';
document.getElementById('f').addEventListener('submit',function(e){
  e.preventDefault();
  var f=e.target, btn=f.querySelector('button'), ok=document.getElementById('ok');
  btn.disabled=true; btn.textContent='Sending...';
  fetch(FORM_URL,{method:'POST',mode:'no-cors',body:new FormData(f)}).then(function(){
    f.reset(); btn.textContent='Send request'; btn.disabled=false;
    ok.textContent='Thank you. We will call you back soon.'; ok.style.display='block';
  }).catch(function(){
    btn.textContent='Send request'; btn.disabled=false;
    ok.textContent='Sorry, that did not go through. Please call us at 503-964-5182.'; ok.style.display='block';
  });
});