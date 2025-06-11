export default function PanelList() {
  const paneles = [
    { id: 1, nombre: 'Panel de Ventas', fecha: '2024-11-01', estado: 'Publicado' },
    { id: 2, nombre: 'Panel de Usuarios', fecha: '2024-10-25', estado: 'Borrador' },
    { id: 3, nombre: 'Panel de Ingresos', fecha: '2024-09-10', estado: 'Archivado' },
  ];

  return (
    <div>
      <h2>Paneles</h2>
      <ul>
        {paneles.map((panel) => (
          <li key={panel.id}>
            {panel.nombre} — Creado el: {panel.fecha} — Estado: {panel.estado}
          </li>
        ))}
      </ul>
    </div>
  );
}
