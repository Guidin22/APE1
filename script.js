const detalleProducto = document.querySelector('.detalle-producto');

const productos = [
  { id: 1, nombre: 'Zapato Casual', descripcion: 'Zapatos comodos para el dia a dia.', precio: 50 },
  { id: 2, nombre: 'Bota de Cuero', descripcion: 'Botas elegantes de cuero genuino.', precio: 80 },
  { id: 3, nombre: 'Zapatillas Deportivas', descripcion: 'Zapatillas para ejercicios.', precio: 60 },
  // Agrega más productos aquí
];

function mostrarDetalleProducto(id) {
  const productoSeleccionado = productos.find(producto => producto.id === id);

  if (productoSeleccionado) {
    detalleProducto.innerHTML = `
      <h2>${productoSeleccionado.nombre}</h2>
      <p>${productoSeleccionado.descripcion}</p>
      <p>Precio: $${productoSeleccionado.precio}</p>
    `;
  } else {
    detalleProducto.innerHTML = '<p>Producto no encontrado</p>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const botonesProductos = document.querySelectorAll('.product button');

  botonesProductos.forEach(boton => {
    boton.addEventListener('click', event => {
      const productoId = parseInt(event.target.dataset.id);
      mostrarDetalleProducto(productoId);
    });
  });
});

    const formulario = document.getElementById('Formulario');

    formulario.addEventListener('submit', function(event) {
     const nombre = document.getElementById('nombre').value.trim();
      const apellido = document.getElementById('apellido').value.trim();
      const direccion = document.getElementById('direccion').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      // Validación de campos vacíos
      const campos = [nombre, apellido, direccion, correo, mensaje];
      const camposVacios = campos.filter(campo => campo === '').length;

      if (camposVacios > 0) {
        alert('Por favor, completa todos los campos.');
      } 
    });