export default function DashboardList() {
  const tableros = [
    { id: 1, nombre: 'Tablero Ejecutivo', ultimaActualizacion: '2025-06-01' },
    { id: 2, nombre: 'Tablero Comercial', ultimaActualizacion: '2025-05-27' },
    { id: 3, nombre: 'Tablero Técnico', ultimaActualizacion: '2025-05-15' },
  ];

  return (
    <div>
      <h2>Tableros</h2>
      <ul>
        {tableros.map((t) => (
          <li key={t.id}>
            {t.nombre} — Última actualización: {t.ultimaActualizacion}
          </li>
        ))}
      </ul>
    </div>
  );
}
