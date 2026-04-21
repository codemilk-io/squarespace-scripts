(function(){
  function fix(el){
    var v = el.getAttribute('data-current-styles');
    if(!v) return;
    var fixed = v.replace(/"(custom\w+)":\s+(\d)/g,'"$1":$2');
    if(fixed !== v) el.setAttribute('data-current-styles', fixed);
  }
  function fixAll(){
    document.querySelectorAll('[data-current-styles]').forEach(fix);
  }
  fixAll();
  var o = new MutationObserver(fixAll);
  o.observe(document.body, {attributes:true, subtree:true, attributeFilter:['data-current-styles']});
})();