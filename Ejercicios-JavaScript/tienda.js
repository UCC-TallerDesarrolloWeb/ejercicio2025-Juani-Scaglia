const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-pie.webp",
  },
];

let cargarProductos = (prod = productos) => {
  let contenido = "";
  prod.forEach((elemento) => {
    const id = productos.findIndex((p) => p.nombre === elemento.nombre);
    contenido += `<div>
      <img src="images/${elemento.imagen}" alt="${elemento.nombre}"/>
      <h3>${elemento.nombre}</h3>
      <p>${formatPrice(elemento.precio)}</p>
      <button type="button" onclick="mostrarModal(${id})">
        Ver detalle del producto
      </button>
      <button type="button" onclick="agregarAlcarrito(${id})">
        Agregar al carrito
      </button>
    </div>`;
  });
  document.getElementById("mostrar-catalogo").innerHTML = contenido;
};

let agregarAlcarrito = (id) => {
  let carritoList = localStorage.getItem("carrito");
  if (carritoList == null) {
    carritoList = [];
  } else {
    carritoList = JSON.parse(carritoList);
  }
  carritoList.push(id);
  localStorage.setItem("carrito", JSON.stringify(carritoList));
  contarProductos();
};

let cargarCarrito = () => {
  let carritoList = localStorage.getItem("carrito");
  let contenido = "";
  let total = 0;

  if (carritoList == null) {
    contenido = "<div>Su carrito está vacío</div>";
  } else {
    carritoList = JSON.parse(carritoList);
    const listProd = [];
    const listCant = [];
    carritoList.forEach((num) => {
      if (!listProd.includes(num)) {
        listProd.push(num);
        listCant.push(1);
      } else {
        const inx = listProd.indexOf(num);
        listCant[inx] += 1;
      }
    });
    listProd.forEach((num, id) => {
      const element = productos[num];
      contenido += `<div>
        <h3>${element.nombre}</h3>
        <p>${formatPrice(element.precio)}</p>
        <p>Cantidad: ${listCant[id]}</p>
        <button type="button" onclick="eliminarProducto(${num})">Eliminar Producto</button>
      </div>`;
      total += element.precio * listCant[id];
    });
    contenido += `<h3>Total: ${formatPrice(total)}</h3>`;
    contenido += `<button type="button" onclick="vaciarCarrito()">Vaciar carrito</button>`;
  }
  document.getElementById("mostrar-carrito").innerHTML = contenido;
};

let vaciarCarrito = () => {
  localStorage.removeItem("carrito");
  window.location.reload();
  contarProductos();
};

let eliminarProducto = (id) => {
  let carritoList = localStorage.getItem("carrito");
  carritoList = JSON.parse(carritoList);
  const index = carritoList.indexOf(id);
  if (index !== -1) carritoList.splice(index, 1);
  if (carritoList.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carritoList));
  } else {
    localStorage.removeItem("carrito");
  }
  window.location.reload();
  contarProductos();
};

let mostrarModal = (id) => {
  document.getElementById("titulo-producto").innerText = productos[id].nombre;
  document.getElementById("descripcion-producto").innerText =
    productos[id].description;
  document.getElementById("modal").style.display = "block";
};

let cerrarModal = () => {
  document.getElementById("modal").style.display = "none";
};

let filtrarProductos = () => {
  let searchWord = document.getElementById("search").value;
  let min = document.getElementById("minimo").value;
  let max = document.getElementById("maximo").value;
  let marca = document.getElementById("marca").value;
  let prot = document.getElementById("protectores").checked;
  let entr = document.getElementById("entrenamiento").checked;
  let dob = document.getElementById("dobok").checked;
  let newLista = productos;
  if (searchWord) {
    newLista = newLista.filter(
      (prod) =>
        prod.nombre.toLowerCase().includes(searchWord.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchWord.toLowerCase())
    );
  }
  if (min) {
    newLista = newLista.filter((prod) => prod.precio >= min);
  }
  if (max) {
    newLista = newLista.filter((prod) => prod.precio <= max);
  }
  if (marca !== "Todas") {
    newLista = newLista.filter((prod) => prod.marca === marca);
  }
  let categoria = [];
  if (prot) categoria.push("Protectores");
  if (entr) categoria.push("Entrenamiento");
  if (dob) categoria.push("Dobok");
  if (categoria.length > 0) {
    newLista = newLista.filter((prod) => categoria.includes(prod.categoria));
  }
  cargarProductos(newLista);
};

let formatPrice = (price) => {
  return new Intl.NumberFormat("es-AR", {
    currency: "ARS",
    style: "currency",
  }).format(price);
};

let contarProductos = () => {
  const getCart = JSON.parse(localStorage.getItem("carrito"));
  if (getCart != null) {
    document.getElementById("cant-prod").innerText = getCart.length;
  } else {
    document.getElementById("cant-prod").innerText = 0;
  }
};

let orderCatalog = () => {
  const opt = document.getElementById("order").value;
  let newProductos;

  switch (opt) {
    case "menor":
      newProductos = productos.sort((a, b) => a.precio - b.precio);
      break;
    case "mayor":
      newProductos = productos.sort((a, b) => b.precio - a.precio);
      break;
    case "a-z":
      newProductos = productos.sort((a, b) =>{
        if (a.nombre.toUpperCase() < b.nombre.toUpperCase()) {
          return -1;
        }else{
          return 1;
        }
      }); 
      break;
    case "z-a":
    newProductos = productos.sort((a, b) =>{
        if (a.nombre.toUpperCase() > b.nombre.toUpperCase()) {
          return -1;
        }else{
          return 1;
        }
      });
      break;
    default:
      newProductos = [...productos];
  }

  cargarProductos(newProductos);
};
