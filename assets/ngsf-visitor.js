/* NGSF Public Visitor Counter — privacy-conscious, first-party counter */
(function () {
  'use strict';
  var API = 'https://ngsf-public-visitors.helpline-ngsf.workers.dev';
  var KEY = 'ngsf_public_visitor_id_v1';
  function visitorId() {
    try {
      var id = localStorage.getItem(KEY);
      if (id && /^[a-f0-9-]{32,64}$/i.test(id)) return id;
      id = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() :
        Array.from(crypto.getRandomValues(new Uint8Array(16)), function (b) { return b.toString(16).padStart(2, '0'); }).join('');
      localStorage.setItem(KEY, id);
      return id;
    } catch (e) {
      return (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : Array.from({length:32}, function () { return Math.floor(Math.random()*16).toString(16); }).join('');
    }
  }
  var id = visitorId();
  var box = document.createElement('aside');
  box.id = 'ngsf-visitor-counter';
  box.setAttribute('aria-label', 'Website visitor statistics');
  box.innerHTML = '<div class="ngsf-vc-title">👁️ NGSF Website Visitors</div><div class="ngsf-vc-grid"><span>Total <b id="ngsf-vc-total">—</b></span><span>Today <b id="ngsf-vc-today">—</b></span><span>Live <b id="ngsf-vc-live">—</b></span></div>';
  var style = document.createElement('style');
  style.textContent = '#ngsf-visitor-counter{position:fixed;z-index:34;left:12px;bottom:16px;width:min(270px,calc(100vw - 24px));padding:9px 12px;border:1px solid #d6aa3d;border-radius:10px;background:linear-gradient(120deg,#071a33,#123e70);color:#fff;box-shadow:0 4px 16px #0003;font:12px/1.4 Arial,sans-serif}#ngsf-visitor-counter .ngsf-vc-title{font-weight:800;color:#f8e4ad;margin-bottom:5px}#ngsf-visitor-counter .ngsf-vc-grid{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap}#ngsf-visitor-counter .ngsf-vc-grid span{color:#e8edf5;font-size:11px}#ngsf-visitor-counter b{color:#fff;font-size:13px;margin-left:3px}@media(max-width:600px){#ngsf-visitor-counter{left:8px;bottom:12px;width:calc(100vw - 16px);max-width:250px;padding:8px 10px}#ngsf-visitor-counter .ngsf-vc-grid{gap:5px}}';
  document.head.appendChild(style);
  document.body.appendChild(box);
  async function refresh() {
    try {
      await fetch(API + '/api/visit', {
        method: 'POST', mode: 'cors', cache: 'no-store',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visitor_id: id, path: location.pathname })
      });
      var response = await fetch(API + '/api/stats', { mode: 'cors', cache: 'no-store' });
      if (!response.ok) throw new Error('stats unavailable');
      var data = await response.json();
      if (!data.ok) throw new Error('stats unavailable');
      document.getElementById('ngsf-vc-total').textContent = Number(data.total_visitors).toLocaleString('en-IN');
      document.getElementById('ngsf-vc-today').textContent = Number(data.today_visitors).toLocaleString('en-IN');
      document.getElementById('ngsf-vc-live').textContent = Number(data.live_visitors).toLocaleString('en-IN');
    } catch (e) {
      box.title = 'Visitor counter is temporarily unavailable';
    }
  }
  refresh();
  window.setInterval(function () {
    if (document.visibilityState === 'visible') refresh();
  }, 60000);
})();