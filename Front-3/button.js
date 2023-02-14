// Método para crear elementos dentro de React
const e = React.createElement;

// Componente
const Button = () => e(
    'button', 
    {onClick: () => alert("Has hecho click!")},
    'Haz Click'
);

// Seleccionar div
const domContainer = document.querySelector('#button_container');

// Método react crea la base para poder utilizar la librería dentro de nuestro <div>
const root = ReactDOM.createRoot(domContainer);

// Método render: mostrar el componente button
root.render(e(Button));