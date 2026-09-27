/* ================= INTERFACES ================= */

export interface Especialidad {
  id: string;
  nombre: string;
  descripcion: string;
}

export interface Medico {
  id: number;
  nombre: string;
  apellido: string;
  especialidad: string;
  subespecialidades: string;
  motivacion: string;
  imagen: string;
}

/* ================= ESPECIALIDADES ================= */

export const especialidades: Especialidad[] = [
  {
    id: 'todas',
    nombre: 'Todas',
    descripcion: 'Conoce el equipo de profesionales de Clínica Vida Sana.',
  },
  {
    id: 'terapia-neural',
    nombre: 'Terapia neural',
    descripcion:
      'Servicio orientado a la valoración y atención mediante técnicas de terapia neural. Consulta con el profesional para conocer indicaciones y alcance.',
  },
  {
    id: 'quiropraxia',
    nombre: 'Quiropraxia',
    descripcion:
      'Área enfocada en la valoración y atención del sistema musculoesquelético, especialmente de la columna y las articulaciones.',
  },
  {
    id: 'fisioterapia',
    nombre: 'Fisioterapia',
    descripcion:
      'Servicio de evaluación y acompañamiento en movimiento, movilidad funcional y procesos de rehabilitación.',
  },
  {
    id: 'nutricion',
    nombre: 'Nutrición y Dietética Terapéutica',
    descripcion:
      'Atención relacionada con hábitos alimentarios y orientación nutricional individualizada.',
  },
];

/* ================= MÉDICOS ================= */

export const medicos: Medico[] = [
  {
    id: 1,
    nombre: 'Laura',
    apellido: 'Gómez Ramírez',
    especialidad: 'terapia-neural',
    subespecialidades: 'Terapia neural y bienestar integral',
    motivacion: 'Acompañar a cada persona en el cuidado de su bienestar.',
    imagen: 'assets/img/medicos/1.avif',
  },
  {
    id: 2,
    nombre: 'Andrea',
    apellido: 'Martínez López',
    especialidad: 'quiropraxia',
    subespecialidades: 'Quiropraxia y sistema musculoesquelético',
    motivacion: 'Promover el movimiento y el cuidado corporal.',
    imagen: 'assets/img/medicos/2.avif',
  },
  {
    id: 3,
    nombre: 'Camilo',
    apellido: 'Torres Muñoz',
    especialidad: 'fisioterapia',
    subespecialidades: 'Fisioterapia y rehabilitación funcional',
    motivacion:
      'Apoyar a las personas en sus procesos de recuperación.',
    imagen: 'assets/img/medicos/3.avif',
  },
  {
    id: 4,
    nombre: 'Daniel',
    apellido: 'Rodríguez Pérez',
    especialidad: 'nutricion',
    subespecialidades: 'Nutrición y dietética terapéutica',
    motivacion:
      'Fomentar hábitos de alimentación informados y sostenibles.',
    imagen: 'assets/img/medicos/4.avif',
  },
  {
    id: 5,
    nombre: 'JUAN CARLOS',
    apellido: 'Hernández Díaz',
    especialidad: 'fisioterapia',
    subespecialidades: 'Fisioterapia y movilidad',
    motivacion: 'Contribuir al bienestar mediante el movimiento.',
    imagen: 'assets/img/medicos/5.avif',
  },
  {
    id: 6,
    nombre: 'Mateo',
    apellido: 'Castro Valencia',
    especialidad: 'quiropraxia',
    subespecialidades: 'Quiropraxia y valoración corporal',
    motivacion:
      'Ofrecer una atención cercana y centrada en la persona.',
    imagen: 'assets/img/medicos/6.avif',
  },
  {
    id: 7,
    nombre: 'Jorge Enrique ',
    apellido: 'Bayter Marína',
    especialidad: 'nutricion',
    subespecialidades: 'Nutrición y educación alimentaria',
    motivacion:
      'Ayudar a construir hábitos saludables con orientación profesional.',
    imagen: 'assets/img/medicos/7.webp',
  },
  {
    id: 8,
    nombre: 'Santiago',
    apellido: 'Paredes Rojas',
    especialidad: 'terapia-neural',
    subespecialidades: 'Terapia neural y valoración integral',
    motivacion:
      'Brindar acompañamiento respetuoso y personalizado.',
    imagen: 'assets/img/medicos/8.webp',
  },
];