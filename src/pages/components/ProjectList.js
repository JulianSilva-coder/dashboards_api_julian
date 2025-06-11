import { useState } from 'react';

export default function ProjectList() {
  const datos = [
    { id: 1, nombre: 'Proyecto Gamma', tareas: 14 },
    { id: 2, nombre: 'Proyecto Alpha', tareas: 10 },
    { id: 3, nombre: 'Proyecto Beta', tareas: 6 },
  ];

  const [ordenAsc, setOrdenAsc] = useState(true);

  const proyectosOrdenados = [...datos].sort((a, b) => {
    return ordenAsc
      ? a.nombre.localeCompare(b.nombre)
      : b.nombre.localeCompare(a.nombre);
  });

  return (
    <div>
      <h2>Proyectos</h2>
      <button onClick={() => setOrdenAsc(!ordenAsc)}>
        Ordenar: {ordenAsc ? 'A → Z' : 'Z → A'}
      </button>
      <ul>
        {proyectosOrdenados.map((p) => (
          <li key={p.id}>
            {p.nombre} — {p.tareas} tareas
          </li>
        ))}
      </ul>
    </div>
  );
}
