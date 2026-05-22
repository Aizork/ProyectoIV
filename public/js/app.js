const products = [
  {
    name: "Manzanas orgánicas",
    price: 45,
    category: "Alimentos",
    img: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg"
  },
  {
    name: "Miel artesanal",
    price: 120,
    category: "Alimentos",
    img: "https://images.pexels.com/photos/162712/honey-jar-honey-food-sweet-162712.jpeg"
  },
  {
    name: "Café de grano",
    price: 150,
    category: "Alimentos",
    img: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg"
  },
  {
    name: "Té verde matcha",
    price: 190,
    category: "Alimentos",
    img: "https://images.pexels.com/photos/5946973/pexels-photo-5946973.jpeg"
  },
  {
    name: "Granola casera",
    price: 90,
    category: "Alimentos",
    img: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
  },
  {
    name: "Pan integral",
    price: 55,
    category: "Alimentos",
    img: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg"
  },
  {
    name: "Avena orgánica",
    price: 30,
    category: "Alimentos",
    img: "https://images.pexels.com/photos/8105030/pexels-photo-8105030.jpeg"
  },
  {
    name: "Jugo verde",
    price: 40,
    category: "Alimentos",
    img: "https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg"
  },

  {
    name: "Jabón artesanal",
    price: 80,
    category: "Cuidado personal",
    img: "https://images.pexels.com/photos/4210376/pexels-photo-4210376.jpeg"
  },
  {
    name: "Cepillo de bambú",
    price: 35,
    category: "Cuidado personal",
    img: "https://images.pexels.com/photos/6621461/pexels-photo-6621461.jpeg"
  },
  {
    name: "Shampoo sólido",
    price: 85,
    category: "Cuidado personal",
    img: "https://images.pexels.com/photos/3737600/pexels-photo-3737600.jpeg"
  },
  {
    name: "Aceite de coco",
    price: 95,
    category: "Cuidado personal",
    img: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg"
  },

  {
    name: "Bolsa ecológica",
    price: 60,
    category: "Hogar",
    img: "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg"
  },
  {
    name: "Vela de soya",
    price: 110,
    category: "Hogar",
    img: "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg"
  },
  {
    name: "Plantas aromáticas",
    price: 50,
    category: "Hogar",
    img: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg"
  },
  {
    name: "Leche de almendras",
    price: 45,
    category: "Alimentos",
    img: "https://images.pexels.com/photos/3735190/pexels-photo-3735190.jpeg"
  },
  {
    name: "Crema de cacahuate",
    price: 75,
    category: "Alimentos",
    img: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg"
  },
  {
    name: "Tomates cherry",
    price: 35,
    category: "Alimentos",
    img: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg"
  },
  {
    name: "Bolsa de tela premium",
    price: 95,
    category: "Hogar",
    img: "https://images.pexels.com/photos/6347547/pexels-photo-6347547.jpeg"
  },
  {
    name: "Kit zero waste",
    price: 210,
    category: "Hogar",
    img: "https://images.pexels.com/photos/7262897/pexels-photo-7262897.jpeg"
  }
];
const menuToggle=document.getElementById('menuToggle'),navLinks=document.getElementById('navLinks');if(menuToggle&&navLinks)menuToggle.addEventListener('click',()=>navLinks.classList.toggle('active'));
function renderProducts(items){const grid=document.getElementById('productGrid');if(!grid)return;grid.innerHTML='';if(!items.length){grid.innerHTML='<p>No se encontraron productos.</p>';return}items.forEach(p=>{const card=document.createElement('article');card.className='product-card';card.innerHTML=`<img src="${p.img}" alt="${p.name}"><div class="product-info"><p class="product-category">${p.category}</p><h3>${p.name}</h3><p class="product-price">$${p.price}.00</p><div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div><button class="btn btn-primary" onclick="addProduct('${p.name}')">Agregar al carrito</button></div>`;grid.appendChild(card)})}
function filterProducts(){const s=document.getElementById('searchInput'),c=document.getElementById('categoryFilter');if(!s||!c)return;const text=s.value.toLowerCase(),cat=c.value;renderProducts(products.filter(p=>p.name.toLowerCase().includes(text)&&(cat==='Todos'||p.category===cat)))}
function addProduct(name){alert(`Producto agregado: ${name}`)}
const searchInput=document.getElementById('searchInput'),categoryFilter=document.getElementById('categoryFilter');if(searchInput&&categoryFilter){searchInput.addEventListener('input',filterProducts);categoryFilter.addEventListener('change',filterProducts);renderProducts(products)}
const slides=[{img:'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200',title:'Productos frescos y responsables',text:'Compra productos naturales seleccionados para un consumo más consciente.'},{img:'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=1200',title:'Apoyo a productores locales',text:'Impulsamos el comercio justo y el crecimiento de pequeños productores.'},{img:'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200',title:'Catálogo ecológico completo',text:'Alimentos, cuidado personal y productos para el hogar en un solo lugar.'}];let currentSlide=0;function renderSlide(){const img=document.getElementById('sliderImage'),title=document.getElementById('sliderTitle'),txt=document.getElementById('sliderText');if(!img||!title||!txt)return;img.src=slides[currentSlide].img;title.textContent=slides[currentSlide].title;txt.textContent=slides[currentSlide].text}const next=document.getElementById('nextSlide'),prev=document.getElementById('prevSlide');if(next&&prev){next.addEventListener('click',()=>{currentSlide=(currentSlide+1)%slides.length;renderSlide()});prev.addEventListener('click',()=>{currentSlide=(currentSlide-1+slides.length)%slides.length;renderSlide()});renderSlide();setInterval(()=>{currentSlide=(currentSlide+1)%slides.length;renderSlide()},5000)}
const contactForm=document.getElementById('contactForm');if(contactForm)contactForm.addEventListener('submit',e=>{e.preventDefault();alert('Mensaje enviado correctamente. Gracias por contactar a EcoMarket.');e.target.reset()});
const loginForm=document.getElementById('loginForm');if(loginForm)loginForm.addEventListener('submit',async e=>{e.preventDefault();const username=document.getElementById('adminUser').value,password=document.getElementById('adminPass').value,msg=document.getElementById('loginMessage'),dash=document.getElementById('dashboard');try{const r=await fetch('/api/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username,password})});const data=await r.json();if(!r.ok){msg.textContent=data.message;msg.className='login-message error';if(dash)dash.classList.remove('active');return}msg.textContent=`${data.message} Bienvenido: ${data.user.name}`;msg.className='login-message success';document.getElementById('statProducts').textContent=data.dashboard.stats.products;document.getElementById('statOrders').textContent=data.dashboard.stats.orders;document.getElementById('statPending').textContent=data.dashboard.stats.pending;document.getElementById('statSales').textContent=`$${data.dashboard.stats.sales}`;const body=document.getElementById('orderBody');body.innerHTML='';data.dashboard.orders.forEach(o=>{const tr=document.createElement('tr'),cls=o.status==='Pendiente'?'pending':o.status==='Preparando'?'preparing':'sent';tr.innerHTML=`<td>${o.id}</td><td>${o.client}</td><td>$${o.total}</td><td><span class="badge ${cls}">${o.status}</span></td>`;body.appendChild(tr)});if(dash)dash.classList.add('active');e.target.reset()}catch(err){msg.textContent='No fue posible conectar con el servidor.';msg.className='login-message error';if(dash)dash.classList.remove('active')}});
const logoutBtn=document.getElementById('logoutBtn');if(logoutBtn)logoutBtn.addEventListener('click',()=>{document.getElementById('dashboard').classList.remove('active');document.getElementById('loginMessage').textContent='Sesión cerrada.';document.getElementById('loginMessage').className='login-message'});
const chatButton=document.getElementById('chatButton'),chatWindow=document.getElementById('chatWindow'),closeChat=document.getElementById('closeChat');if(chatButton&&chatWindow&&closeChat){chatButton.addEventListener('click',()=>chatWindow.classList.toggle('active'));closeChat.addEventListener('click',()=>chatWindow.classList.remove('active'))}
