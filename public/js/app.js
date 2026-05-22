const products = [
  {
    name: "Manzanas orgánicas",
    price: 45,
    category: "Alimentos",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Red_Apple.jpg"
  },
  {
    name: "Miel artesanal",
    price: 120,
    category: "Alimentos",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Honey_jar_(411317929).jpg"
  },
  {
    name: "Café de grano",
    price: 150,
    category: "Alimentos",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Roasted_coffee_beans.jpg"
  },
  {
    name: "Té verde matcha",
    price: 190,
    category: "Alimentos",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Matcha_powder.jpg"
  },
  {
    name: "Granola casera",
    price: 90,
    category: "Alimentos",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Crunchy_Granola_(4623394272).jpg"
  },
  {
    name: "Pan integral",
    price: 55,
    category: "Alimentos",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Whole_Wheat_Bread_01.jpg"
  },
  {
    name: "Avena orgánica",
    price: 30,
    category: "Alimentos",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Rolled_oats_in_bowl_2.jpg"
  },
  {
    name: "Jugo verde",
    price: 40,
    category: "Alimentos",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Green_Smoothie_(3652108873).jpg"
  },
  {
    name: "Jabón artesanal",
    price: 80,
    category: "Cuidado personal",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Handmade_soap.jpg"
  },
  {
    name: "Cepillo de bambú",
    price: 35,
    category: "Cuidado personal",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Humble_Brush.jpg"
  },
  {
    name: "Shampoo sólido",
    price: 85,
    category: "Cuidado personal",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Lush_shampoo_bar.jpg"
  },
  {
    name: "Aceite de coco",
    price: 95,
    category: "Cuidado personal",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Coconut_Oil_amp_30050.jpg"
  },
  {
    name: "Bolsa ecológica",
    price: 60,
    category: "Hogar",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Totebag.jpg"
  },
  {
    name: "Vela de soya",
    price: 110,
    category: "Hogar",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Single_plain_soy_candle.jpg"
  },
  {
    name: "Plantas aromáticas",
    price: 50,
    category: "Hogar",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Basil_plant_in_a_pot_01.jpg"
  },
  {
    name: "Leche de almendras",
    price: 45,
    category: "Alimentos",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Raw_almond_milk.jpg"
  },
  {
    name: "Crema de cacahuate",
    price: 75,
    category: "Alimentos",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/PeanutButter.jpg"
  },
  {
    name: "Tomates cherry",
    price: 35,
    category: "Alimentos",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Cherry-Tomatoes-in-Pack.jpg"
  },
  {
    name: "Bolsa de tela premium",
    price: 95,
    category: "Hogar",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tote_bag.jpg"
  },
  {
    name: "Kit zero waste",
    price: 210,
    category: "Hogar",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/Bamboo_made_tools,_Srimongol.jpg"
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

// Foro de comentarios con almacenamiento en backend
const forumForm = document.getElementById("forumForm");
const commentsList = document.getElementById("commentsList");
const forumStatus = document.getElementById("forumStatus");
const refreshComments = document.getElementById("refreshComments");

async function loadComments() {
  if (!commentsList) return;

  try {
    const response = await fetch("/api/comments");
    const comments = await response.json();

    if (!comments.length) {
      commentsList.innerHTML = "<p>Aún no hay comentarios. Sé el primero en publicar.</p>";
      return;
    }

    commentsList.innerHTML = comments.map(comment => `
      <article class="comment-item">
        <div class="comment-top">
          <span class="comment-name"><i class="fa-solid fa-user"></i> ${escapeHtml(comment.name)}</span>
          <span class="comment-date">${escapeHtml(comment.date)}</span>
        </div>
        <p class="comment-message">${escapeHtml(comment.message)}</p>
        ${comment.reply ? `
          <div class="admin-reply-public">
            <strong><i class="fa-solid fa-reply"></i> Respuesta de EcoMarket:</strong>
            <p>${escapeHtml(comment.reply)}</p>
            <small>${escapeHtml(comment.replyDate || "")}</small>
          </div>
        ` : ""}
      </article>
    `).join("");
  } catch (error) {
    commentsList.innerHTML = "<p>No fue posible cargar los comentarios.</p>";
  }
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

if (forumForm) {
  loadComments();

  forumForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("forumName").value;
    const message = document.getElementById("forumMessage").value;

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, message })
      });

      const data = await response.json();

      if (!response.ok) {
        forumStatus.textContent = data.message || "No se pudo publicar el comentario.";
        forumStatus.className = "forum-status error";
        return;
      }

      forumStatus.textContent = "Comentario publicado correctamente.";
      forumStatus.className = "forum-status success";
      forumForm.reset();
      loadComments();
    } catch (error) {
      forumStatus.textContent = "No se pudo conectar con el servidor.";
      forumStatus.className = "forum-status error";
    }
  });
}

if (refreshComments) {
  refreshComments.addEventListener("click", loadComments);
}


// Panel admin: responder foro
const adminCommentsList = document.getElementById("adminCommentsList");
const adminRefreshComments = document.getElementById("adminRefreshComments");

async function loadAdminComments() {
  if (!adminCommentsList) return;

  try {
    const response = await fetch("/api/comments");
    const comments = await response.json();

    if (!comments.length) {
      adminCommentsList.innerHTML = "<p>No hay comentarios para responder.</p>";
      return;
    }

    adminCommentsList.innerHTML = comments.map(comment => `
      <article class="admin-comment-item">
        <div class="comment-top">
          <span class="comment-name"><i class="fa-solid fa-user"></i> ${escapeHtml(comment.name)}</span>
          <span class="comment-date">${escapeHtml(comment.date)}</span>
        </div>

        <p class="comment-message">${escapeHtml(comment.message)}</p>

        ${comment.reply ? `
          <div class="admin-reply-public">
            <strong>Respuesta actual:</strong>
            <p>${escapeHtml(comment.reply)}</p>
            <small>${escapeHtml(comment.replyDate || "")}</small>
          </div>
        ` : ""}

        <form class="reply-form" data-id="${comment.id}">
          <textarea placeholder="Escribe la respuesta del administrador..." required>${comment.reply ? escapeHtml(comment.reply) : ""}</textarea>
          <button type="submit" class="btn btn-primary">Guardar respuesta</button>
        </form>
      </article>
    `).join("");

    document.querySelectorAll(".reply-form").forEach(form => {
      form.addEventListener("submit", submitReply);
    });

  } catch (error) {
    adminCommentsList.innerHTML = "<p>No fue posible cargar los comentarios.</p>";
  }
}

async function submitReply(event) {
  event.preventDefault();

  const form = event.target;
  const id = form.dataset.id;
  const reply = form.querySelector("textarea").value;

  try {
    const response = await fetch(`/api/comments/${id}/reply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ reply })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "No se pudo guardar la respuesta.");
      return;
    }

    alert("Respuesta guardada correctamente.");
    loadAdminComments();
  } catch (error) {
    alert("No fue posible conectar con el servidor.");
  }
}

if (adminRefreshComments) {
  adminRefreshComments.addEventListener("click", loadAdminComments);
}
