
const AppState = {
  products: [
    { id: 1, name: "Obsidian Pro ANC Headphones", price: 950.00, category: "Audio", supplier: "TechCorp", rating: 4.8, inventory: 50, details: "Carbon fiber chassis, hybrid ANC, 40h battery.", image: "headphones_obsidian.jpg", specs:{weight:"260g",color:"Matte Black",connectivity:"Bluetooth 5.3"}, reviews: [{user:"Lena",text:"Best ANC I've used.",rate:5}] },
    { id: 2, name: "Leica M11 Rangefinder", price: 8990.00, category: "Photography", supplier: "LuxuryGear", rating: 5.0, inventory: 5, details: "Full-frame rangefinder, classic Leica rendering.", image: "camera_leica.jpg", specs:{sensor:"60MP",lensMount:"M",weight:"570g"}, reviews: [{user:"Marco",text:"Craftsmanship is unreal.",rate:5}] },
    { id: 3, name: "60% Aluminum Keyboard Kit", price: 380.00, category: "Electronics", supplier: "TechCorp", rating: 4.9, inventory: 150, details: "Aircraft-grade aluminum, hot-swap PCB.", image: "keyboard_60.jpg", specs:{material:"Aluminum",layout:"60%",weight:"1.2kg"}, reviews: [{user:"June",text:"Feels premium.",rate:5}] },
    { id: 4, name: "Ceramic Smart Watch V2", price: 1450.00, category: "Wearables", supplier: "WearableTech", rating: 4.7, inventory: 300, details: "Ceramic bezel, sapphire glass, advanced health sensors.", image: "watch_ceramic.jpg", specs:{battery:"48h",water:"5ATM",os:"ProOS"}, reviews: [{user:"Sam",text:"Stylish and snappy.",rate:4}] },
    { id: 5, name: "Eames Replica Lounge Chair", price: 1200.00, category: "Home & Furniture", supplier: "HomeLux", rating: 4.3, inventory: 80, details: "Mid-century aesthetic, walnut finish.", image: "chair_lounge.jpg", specs:{material:"Plywood",color:"Walnut",dimensions:"84x84x76cm"}, reviews: [{user:"Ana",text:"Comfortable and iconic.",rate:4}] },
    { id: 6, name: "Analogue Pocket Console", price: 299.00, category: "Gaming", supplier: "GamingHub", rating: 4.7, inventory: 200, details: "FPGA based, cartridge compatibility.", image: "console_pocket.jpg", specs:{screen:"3.5in",cpu:"FPGA",battery:"8h"}, reviews: [{user:"Kyle",text:"Retro heaven.",rate:5}] },
    { id: 7, name: "Industrial Grade CNC Machine", price: 15000.00, category: "Industrial", supplier: "ManuTech", rating: 4.2, inventory: 10, details: "3-axis precision cutting machine for shops.", image: "cnc_machine.jpg", specs:{power:"3.5kW",bed:"1200x800mm",weight:"850kg"}, reviews: [{user:"Ravi",text:"Workhorse.",rate:4}] },
    { id: 8, name: "Aurora Studio Monitor Pair", price: 2200.00, category: "Audio", supplier: "StudioPro", rating: 4.9, inventory: 35, details: "Active studio monitors with DSP tuning.", image: "monitors_aurora.jpg", specs:{power:"200W",size:"7in",freq:"20Hz-40kHz"}, reviews: [{user:"Maya",text:"Transparent sound.",rate:5}] },
    { id: 9, name: "Titanium Fountain Pen", price: 420.00, category: "Stationery", supplier: "WriteCraft", rating: 4.6, inventory: 120, details: "Ti body, gold nib, hand-polished.", image: "pen_titanium.jpg", specs:{material:"Titanium",nib:"14k",weight:"28g"}, reviews: [{user:"Omar",text:"Writes like silk.",rate:5}] },
    { id: 10, name: "Horizon Ceramic Lamp", price: 220.00, category: "Home & Furniture", supplier: "LightForm", rating: 4.4, inventory: 90, details: "Minimal ceramic lamp with warm LED.", image: "lamp_horizon.jpg", specs:{lumens:"800lm",colorTemp:"2700K",material:"Ceramic"}, reviews: [{user:"Ivy",text:"Warm and sculptural.",rate:4}] },
    { id: 11, name: "Vanguard Travel Bag (Leather)", price: 680.00, category: "Accessories", supplier: "CarryPro", rating: 4.7, inventory: 45, details: "Full-grain leather travel duffel.", image: "bag_vanguard.jpg", specs:{material:"Full-grain leather",capacity:"45L",weight:"1.8kg"}, reviews: [{user:"Nate",text:"A lifetime bag.",rate:5}] },
    { id: 12, name: "Solstice Sunglasses", price: 210.00, category: "Accessories", supplier: "ShadeCo", rating: 4.5, inventory: 250, details: "Polarized lenses with titanium hinges.", image: "sunglasses_solstice.jpg", specs:{uv:"UV400",material:"Acetate",weight:"22g"}, reviews: [{user:"Lia",text:"Classic shape.",rate:4}] },
    { id: 13, name: "Ceramic Sous Vide Set", price: 185.00, category: "Kitchen", supplier: "GastroLab", rating: 4.6, inventory: 150, details: "Precision cooking for enthusiasts.", image: "sousvide_ceramic.jpg", specs:{tempRange:"0.1°C",power:"800W",capacity:"5L"}, reviews: [{user:"Ben",text:"Cooked steak perfect.",rate:5}] },
    { id: 14, name: "Auric Wireless Charger", price: 79.00, category: "Electronics", supplier: "ChargeIt", rating: 4.4, inventory: 999, details: "Fast Qi charging with aluminium pad.", image: "charger_auric.jpg", specs:{power:"15W",connectivity:"Qi",size:"120mm"}, reviews: [{user:"Zoe",text:"Fast and neat.",rate:4}] },
    { id: 15, name: "Observer Field Jacket", price: 520.00, category: "Apparel", supplier: "UrbanForge", rating: 4.6, inventory: 60, details: "Weatherproof field jacket with wool lining.", image: "jacket_observer.jpg", specs:{material:"GoreTex",sizes:"S-XXL",weight:"950g"}, reviews: [{user:"Hana",text:"Perfect winter layer.",rate:5}] },
    { id: 16, name: "Nebula Smart Lamp (RGB)", price: 139.00, category: "Home & Furniture", supplier: "LightForm", rating: 4.5, inventory: 230, details: "Smart WiFi lamp with app scenes.", image: "lamp_nebula.jpg", specs:{connectivity:"WiFi",power:"12W",color:"RGB"}, reviews: [{user:"Eve",text:"Love the scenes.",rate:4}] },
    { id: 17, name: "Atlas Travel Drone (Mini)", price: 999.00, category: "Photography", supplier: "FlyTech", rating: 4.8, inventory: 40, details: "Foldable, 4K60, 34min flight.", image: "drone_atlas.jpg", specs:{camera:"4K60",flightTime:"34min",weight:"860g"}, reviews: [{user:"Rex",text:"Fantastic stabilization.",rate:5}] },
    { id: 18, name: "Graphite Chef Knife", price: 260.00, category: "Kitchen", supplier: "GastroLab", rating: 4.9, inventory: 300, details: "High-carbon steel, hand finished.", image: "knife_graphite.jpg", specs:{steel:"VG-10",length:"210mm",weight:"220g"}, reviews: [{user:"Sora",text:"Edge stays long.",rate:5}] },
    { id: 19, name: "Prism OLED Monitor 27\"", price: 1299.00, category: "Electronics", supplier: "StudioPro", rating: 4.9, inventory: 30, details: "27\" OLED, 4K, true color.", image: "monitor_prism.jpg", specs:{size:"27in",resolution:"4K",panel:"OLED"}, reviews: [{user:"Alex",text:"Color is buttery.",rate:5}] },
    { id: 20, name: "Harbor Minimal Desk", price: 890.00, category: "Home & Furniture", supplier: "HomeLux", rating: 4.6, inventory: 25, details: "Solid oak desk with cable channel.", image: "desk_harbord.jpg", specs:{material:"Oak",size:"160x75cm",weight:"48kg"}, reviews: [{user:"Tess",text:"Sturdy and warm.",rate:5}] }
  ],
  cart: JSON.parse(localStorage.getItem('elevate_cart')||'[]'),
  filters: { searchTerm:'', categories:[], sort:'price_desc' },
  ui: { dark: (localStorage.getItem('elevate_dark')==='1') }
};


function $(sel){return document.querySelector(sel)}
function $all(sel){return Array.from(document.querySelectorAll(sel))}
function formatPrice(n){return `$${n.toLocaleString(undefined,{minimumFractionDigits:2})}`}


document.addEventListener('DOMContentLoaded',()=>{
  if(AppState.ui.dark) document.body.classList.add('dark');

  setTimeout(()=>document.body.classList.add('loaded'), 800);


  if(document.getElementById('product-grid-container')) {
    renderProducts(AppState.products.slice(0,8),'product-grid-container');
    renderCategories();
  }

  updateCartCount();
  const y = new Date().getFullYear(); const yEl = document.getElementById('current-year'); if(yEl) yEl.textContent = y;

  const search = document.getElementById('dynamic-search-input');
  if(search) search.addEventListener('input', e=>{AppState.filters.searchTerm = e.target.value.toLowerCase(); debounceApplyFilters();});

 
  const dt = document.getElementById('dark-toggle');
  if(dt) dt.addEventListener('click', toggleDark);


  if(document.getElementById('home-feature-grid')) renderProducts(AppState.products.slice(0,6),'home-feature-grid');
});


function renderCategories(){
  const cats = [...new Set(AppState.products.map(p=>p.category))].sort();
  const list = document.querySelector('.category-list');
  if(!list) return;
  list.innerHTML = cats.map(c=>`<li><a href="#" onclick="setFilterCategory('${c}');return false;">${c}<span class="text-mono">(${AppState.products.filter(p=>p.category===c).length})</span></a></li>`).join('');
}

function setFilterCategory(cat){
  AppState.filters.categories = [cat];

  if(location.pathname.includes('shop.html')) applyFilters();
  else location.href = `shop.html?cat=${encodeURIComponent(cat)}`;
}

function renderProducts(list, containerId){
  const container = document.getElementById(containerId);
  if(!container) return;
  if(list.length===0){ container.innerHTML = `<div class="empty">No products match the criteria.</div>`; return; }
  container.innerHTML = list.map(p=>`
    <div class="product-card ripple" data-id="${p.id}">
      <a class="product-image" href="product-detail.html?id=${p.id}">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </a>
      <div class="product-meta">
        <div class="product-cat">${p.category} / ${p.supplier}</div>
        <a class="product-title" href="product-detail.html?id=${p.id}">${p.name}</a>
        <div class="product-rating">${renderStars(p.rating)} <span class="text-mono">(${p.rating.toFixed(1)})</span></div>
        <div class="product-price">${formatPrice(p.price)}</div>
        <button class="add-btn" onclick="addToCart(${p.id}); rippleEffect(this,event)">ADD TO BAG</button>
      </div>
    </div>
  `).join('');

  $all('.ripple').forEach(el=>{
    el.addEventListener('click', e=>{ if(!e.target.closest('.add-btn')) rippleEffect(el,e); });
  });
}

function renderStars(r){
  const full = Math.round(r);
  let out='';
  for(let i=0;i<5;i++) out += (i<full?'<i class="fas fa-star"></i>':'<i class="far fa-star"></i>');
  return out;
}


let filterTimeout = null;
function debounceApplyFilters(){ clearTimeout(filterTimeout); filterTimeout = setTimeout(()=>{ if(location.pathname.includes('shop.html')) applyFilters(); }, 260) }

function applyFilters(){
  let res = AppState.products.slice();
  const f = AppState.filters;
  if(f.searchTerm) res = res.filter(p=> (p.name+' '+p.category+' '+p.supplier+' '+p.details).toLowerCase().includes(f.searchTerm));
  if(f.categories && f.categories.length) res = res.filter(p=> f.categories.includes(p.category));
  if(f.sort==='price_asc') res.sort((a,b)=>a.price-b.price);
  else if(f.sort==='price_desc') res.sort((a,b)=>b.price-a.price);
  else if(f.sort==='rating_desc') res.sort((a,b)=>b.rating-a.rating);

  const target = document.getElementById('shop-grid') || document.getElementById('product-grid-container');
  if(target) renderProducts(res, target.id);
}


function addToCart(id){
  const item = AppState.products.find(p=>p.id===id);
  if(!item) return;
  const exists = AppState.cart.find(i=>i.id===id);
  if(exists) exists.qty++;
  else AppState.cart.push({...item, qty:1});
  localStorage.setItem('elevate_cart', JSON.stringify(AppState.cart));
  updateCartCount();

  showToast(`Added "${item.name}" to Bag`);
}

function updateCartCount(){
  const count = AppState.cart.reduce((acc,i)=>acc + (i.qty||0),0);
  $all('.cart-count').forEach(el=>el.innerText = count);
}


function toggleDark(){
  const enabled = document.body.classList.toggle('dark');
  AppState.ui.dark = enabled;
  localStorage.setItem('elevate_dark', enabled ? '1':'0');
}


function showToast(msg, type='info'){
  let t = document.getElementById('elevate-toast');
  if(!t){
    t = document.createElement('div'); t.id='elevate-toast'; t.className='toast'; document.body.appendChild(t);
  }
  t.textContent = msg; t.classList.add('show');
  setTimeout(()=> t.classList.remove('show'), 2400);
}


function rippleEffect(el,event){
  const target = (el.tagName? el : el.closest('.ripple')) || el;
  const rect = target.getBoundingClientRect();
  const circle = document.createElement('span');
  circle.className = 'ripple-effect';
  const size = Math.max(rect.width, rect.height);
  circle.style.width = circle.style.height = size + 'px';
  circle.style.left = (event.clientX - rect.left - size/2) + 'px';
  circle.style.top = (event.clientY - rect.top - size/2) + 'px';
  target.appendChild(circle);
  setTimeout(()=> circle.remove(), 600);
}


function renderProductDetailById(id){
  const p = AppState.products.find(x=>x.id===Number(id));
  const root = document.getElementById('product-detail-root');
  if(!p || !root) return root && (root.innerHTML = '<div class="empty">Product not found</div>');
  root.innerHTML = `
    <div class="product-detail-grid container">
      <div class="media">
        <img src="${p.image}" alt="${p.name}" />
      </div>
      <div class="info">
        <h1>${p.name}</h1>
        <div class="meta"><span class="product-cat">${p.category}</span> • <span>${p.supplier}</span></div>
        <div class="rating">${renderStars(p.rating)} <span class="text-mono">(${p.rating.toFixed(1)})</span></div>
        <div class="price">${formatPrice(p.price)}</div>
        <p class="lead">${p.details}</p>
        <div class="specs">
          <h4>Specifications</h4>
          <ul>${Object.entries(p.specs).map(([k,v])=>`<li><strong>${k}:</strong> ${v}</li>`).join('')}</ul>
        </div>
        <div class="actions">
          <button class="add-btn" onclick="addToCart(${p.id}); rippleEffect(this,event)">Add to Bag</button>
          <a class="btn outline" href="shop.html">Back to Shop</a>
        </div>
      </div>
    </div>
  `;

  const reviewsRoot = document.getElementById('product-reviews');
  if(reviewsRoot){
    reviewsRoot.innerHTML = `<div class="container"><h3>Customer Reviews</h3>${p.reviews.map(r=>`<div class="review"><strong>${r.user}</strong><div class="stars">${renderStars(r.rate)}</div><p>${r.text}</p></div>`).join('')}</div>`;
  }
}


function getQueryParam(name){
  const u = new URLSearchParams(window.location.search);
  return u.get(name);
}


if(location.pathname.includes('shop.html')){
  document.addEventListener('DOMContentLoaded',()=>{

    const catRoot = document.getElementById('category-filters');
    if(catRoot){
      const cats = [...new Set(AppState.products.map(p=>p.category))].sort();
      catRoot.innerHTML = cats.map(c=>`<label><input type="checkbox" value="${c}" onchange="shopToggleCategory(this)"> ${c}</label>`).join('');
    }

    const sort = document.getElementById('sort-select');
    if(sort) sort.addEventListener('change', e=>{AppState.filters.sort = e.target.value; applyFilters();});
 
    const s = document.getElementById('shop-search'); if(s) s.addEventListener('input', e=>{AppState.filters.searchTerm = e.target.value.toLowerCase(); debounceApplyFilters();});

    const qc = getQueryParam('cat'); if(qc){AppState.filters.categories=[qc]; applyFilters();}
 
    renderProducts(AppState.products.slice(0,20),'shop-grid') || renderProducts(AppState.products.slice(0,8),'product-grid-container');
  });
}

function shopToggleCategory(el){
  const val = el.value;
  if(el.checked) AppState.filters.categories.push(val);
  else AppState.filters.categories = AppState.filters.categories.filter(c=>c!==val);
  applyFilters();
}


if(location.pathname.includes('product-detail.html')){
  document.addEventListener('DOMContentLoaded',()=>{
    const id = getQueryParam('id');
    if(id) renderProductDetailById(id);
  });
}


if(location.pathname.includes('cart.html')){
  document.addEventListener('DOMContentLoaded',()=>{
    const root = document.getElementById('cart-root') || document.body;
   
    const items = AppState.cart;
    const subtotal = items.reduce((s,i)=>s + (i.qty||1)*i.price,0);
    const html = `
      <div class="container checkout-grid">
        <div class="cart-items">
          <h2>Your Bag</h2>
          ${items.length? items.map(i=>`<div class="cart-item"><img src="${i.image}" alt="${i.name}"><div><strong>${i.name}</strong><div>${formatPrice(i.price)} x ${i.qty}</div></div></div>`).join('') : '<p class="muted">Your bag is empty.</p>'}
        </div>
        <aside class="checkout-summary">
          <h3>Summary</h3>
          <div>Subtotal: <strong>${formatPrice(subtotal)}</strong></div>
          <div class="checkout-actions"><a href="checkout.html" class="btn primary">Proceed to Checkout</a></div>
        </aside>
      </div>
    `;
    root.innerHTML = html;
  });
}


window.ELEVATE = {AppState, renderProductDetailById, formatPrice};
