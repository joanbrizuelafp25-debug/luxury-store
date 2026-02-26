document.querySelectorAll('.btn-comprar').forEach(boton => {
    boton.addEventListener('click', () => {
        const producto = boton.dataset.producto;
        const mensaje = encodeURIComponent(`Hola, quiero comprar: ${producto}`);
        window.open(`https://wa.me/34695957300?text=${mensaje}`, "_blank");
    });
});
