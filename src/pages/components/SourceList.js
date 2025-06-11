export default function SourceList() {
  const fuentes = [
    { id: 1, nombre: 'API Finanzas', estado: 'Activa' },
    { id: 2, nombre: 'Base de Datos Usuarios', estado: 'Inactiva' },
    { id: 3, nombre: 'Servicio Clima', estado: 'Activa' },
  ];

  return (
    <div>
      <h2>Fuentes de Datos</h2>
      <button style={{ marginBottom: '10px' }}>+ Agregar fuente</button>
      <ul>
        {fuentes.map((f) => (
          <li key={f.id}>
            {f.nombre} — Estado: {f.estado}
          </li>
        ))}
      </ul>
    </div>
  );
}
