(()=>{"use strict";
if(document.getElementById("ngsf-ai-chat-root"))return;
const URL_BASE="https://oqelvpojoaylmwdbmwcn.supabase.co",PUB="sb_publishable_rgbSAlgeSBnVaBtYWlQOdA_ltIW3Hka";
const s=document.createElement("style");
s.textContent=`
/* NGSF unified round contact dock */
.floating{display:none!important}
#ngsf-ai-chat-root{font-family:Arial,sans-serif;position:fixed;right:14px;left:auto;bottom:18px;z-index:2147483647;color:#152b3b;display:flex!important;flex-direction:column;align-items:flex-end;gap:9px;visibility:visible!important}
#ngsf-ai-chat-panel{display:none;width:min(360px,calc(100vw - 28px));height:min(520px,68vh);margin-bottom:5px;background:#fff;border:1px solid #d3a52b;border-radius:16px;box-shadow:0 10px 34px #0004;overflow:hidden;flex-direction:column}
#ngsf-ai-chat-panel.open{display:flex}
#ngsf-ai-chat-head{background:#102d46;color:#fff;padding:13px;border-bottom:3px solid #d3a52b;display:flex;justify-content:space-between;align-items:center}
#ngsf-ai-chat-head small{display:block;color:#f5d77b;margin-top:3px}
#ngsf-ai-chat-close{background:none;border:0;color:white;font-size:24px;cursor:pointer}
#ngsf-ai-chat-messages{padding:12px;flex:1;overflow:auto;background:#f4f7fa}
.ngsf-ai-msg{white-space:pre-wrap;overflow-wrap:anywhere;padding:10px 12px;border-radius:12px;margin:8px 0;max-width:90%;font-size:14px;line-height:1.45}
.ngsf-ai-msg.bot{background:#fff;border:1px solid #dbe4ec}.ngsf-ai-msg.user{background:#102d46;color:#fff;margin-left:auto}
#ngsf-ai-chat-form{display:flex;gap:7px;padding:10px;border-top:1px solid #dbe4ec}
#ngsf-ai-chat-input{min-width:0;flex:1;border:1px solid #c7d3df;border-radius:10px;padding:10px;font-size:14px}
#ngsf-ai-chat-send{border:0;border-radius:10px;background:#d3a52b;color:#102d46;padding:0 13px;font-weight:bold;cursor:pointer}
#ngsf-ai-chat-note{font-size:11px;color:#566979;padding:0 12px 9px}
#ngsf-contact-dock{display:flex;flex-direction:column;align-items:center;gap:9px}
.ngsf-dock-btn{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid #d3a52b;background:#102d46;color:#fff;text-decoration:none;box-shadow:0 5px 18px #0004;cursor:pointer;font-size:23px;font-weight:800;transition:transform .18s,background .18s}
.ngsf-dock-btn:hover{transform:scale(1.07);background:#1b496f}
.ngsf-dock-btn.ai{background:#d3a52b;color:#102d46;font-size:25px}
.ngsf-dock-btn.wa{background:#128c54;color:#fff}
.ngsf-dock-btn.call{background:#102d46;color:#fff}
.ngsf-dock-btn:focus-visible{outline:3px solid #f5d77b;outline-offset:3px}
@media(max-width:480px){#ngsf-ai-chat-root{right:10px;bottom:12px;gap:8px}#ngsf-ai-chat-panel{height:min(64vh,500px);width:min(350px,calc(100vw - 24px))}.ngsf-dock-btn{width:49px;height:49px;font-size:21px}#ngsf-contact-dock{gap:8px}}
`;
document.head.appendChild(s);
const root=document.createElement("div");root.id="ngsf-ai-chat-root";
root.innerHTML='<section id="ngsf-ai-chat-panel" role="dialog" aria-label="NGSF AI Chat"><header id="ngsf-ai-chat-head"><div><strong>NGSF AI Seva Assistant</strong><small>Punjabi • हिन्दी • English</small></div><button id="ngsf-ai-chat-close" type="button" aria-label="Close">×</button></header><div id="ngsf-ai-chat-messages" aria-live="polite"><div class="ngsf-ai-msg bot">ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ! 🙏 ਮੈਂ NGSF ਬਾਰੇ ਜਾਣਕਾਰੀ, ਮੈਂਬਰਸ਼ਿਪ, ID Card ਅਤੇ ਇਮਤਿਹਾਨ ਸਬੰਧੀ ਸਵਾਲਾਂ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ। Password ਜਾਂ OTP ਸਾਂਝਾ ਨਾ ਕਰੋ।</div></div><form id="ngsf-ai-chat-form"><input id="ngsf-ai-chat-input" maxlength="1500" autocomplete="off" placeholder="ਆਪਣਾ ਸਵਾਲ ਲਿਖੋ…" aria-label="Your question" required><button id="ngsf-ai-chat-send" type="submit">Send</button></form><div id="ngsf-ai-chat-note">AI ਜਾਣਕਾਰੀ ਗਲਤ ਹੋ ਸਕਦੀ ਹੈ। ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਸਾਂਝੀ ਨਾ ਕਰੋ।</div></section><nav id="ngsf-contact-dock" aria-label="NGSF quick contact"><button class="ngsf-dock-btn ai" id="ngsf-ai-chat-launch" type="button" aria-label="Open AI Chat" title="AI Chat" aria-expanded="false">✦</button><a class="ngsf-dock-btn call" href="tel:+917087993724" aria-label="Call NGSF" title="Call NGSF">☎</a><a class="ngsf-dock-btn wa" href="https://wa.me/917597384624" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp NGSF" title="WhatsApp NGSF">◉</a></nav>';
document.body.appendChild(root);
const panel=root.querySelector("#ngsf-ai-chat-panel"),launch=root.querySelector("#ngsf-ai-chat-launch"),input=root.querySelector("#ngsf-ai-chat-input"),send=root.querySelector("#ngsf-ai-chat-send"),messages=root.querySelector("#ngsf-ai-chat-messages"),history=[];
function toggle(v){panel.classList.toggle("open",v);launch.setAttribute("aria-expanded",String(v));if(v)input.focus()}
function add(t,w){const e=document.createElement("div");e.className="ngsf-ai-msg "+w;e.textContent=t;messages.appendChild(e);messages.scrollTop=messages.scrollHeight;return e}
launch.onclick=()=>toggle(!panel.classList.contains("open"));
root.querySelector("#ngsf-ai-chat-close").onclick=()=>toggle(false);
root.querySelector("#ngsf-ai-chat-form").onsubmit=async e=>{e.preventDefault();const m=input.value.trim();if(!m||send.disabled)return;add(m,"user");input.value="";send.disabled=true;send.textContent="…";const pending=add("ਜਵਾਬ ਤਿਆਰ ਹੋ ਰਿਹਾ ਹੈ…","bot");try{const r=await fetch(URL_BASE+"/functions/v1/ngsf-ai-chat",{method:"POST",headers:{"Content-Type":"application/json","apikey":PUB,"Authorization":"Bearer "+PUB},body:JSON.stringify({message:m,history:history.slice(-8)})});const d=await r.json().catch(()=>({}));if(!r.ok)throw Error(d.error||"AI ਸੇਵਾ ਇਸ ਵੇਲੇ ਉਪਲਬਧ ਨਹੀਂ।");const a=String(d.reply||"ਜਵਾਬ ਨਹੀਂ ਮਿਲਿਆ।").slice(0,6000);pending.textContent=a;history.push({role:"user",content:m},{role:"assistant",content:a});if(history.length>12)history.splice(0,history.length-12)}catch(x){pending.textContent=x.message||"ਕਨੈਕਸ਼ਨ ਦੀ ਸਮੱਸਿਆ ਹੈ।"}finally{send.disabled=false;send.textContent="Send";messages.scrollTop=messages.scrollHeight;input.focus()}};
})();