export const productos = [
  {
    id: 1,
    nombre: "Banana Ecuador Por Kg",
    precio: 2490,
    imagen:
      "https://jumboargentina.vtexassets.com/arquivos/ids/790316-1200-auto?v=638272137671900000&width=1200&height=auto&aspect=true",
    categoria: "Bananas",
  },
  {
    id: 2,
    nombre: "Manzana Roja Por Kg",
    precio: 2490,
    imagen:
      "https://jumboargentina.vtexassets.com/arquivos/ids/180100-1200-auto?v=636383390519870000&width=1200&height=auto&aspect=true",
    categoria: "Manzanas",
  },
  {
    id: 3,
    nombre: "Pera Por Kg",
    precio: 1490,
    imagen:
      "https://jumboargentina.vtexassets.com/arquivos/ids/447462-1200-auto?v=636559053682470000&width=1200&height=auto&aspect=true",
    categoria: "Peras",
  },
];

JSON.parse(localStorage.getItem("productos")) ||
  localStorage.setItem("productos", JSON.stringify(productos));
