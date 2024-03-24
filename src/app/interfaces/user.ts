export interface User {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    id_tipo_identificacion: number;
    numero_identificacion: string;
    id_rol: number;
    email: string;
    direccion: string;
    estado: string;
    activo: number;
    created_at: string;
    updated_at: string;
}
export interface UserProcess {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    id_tipo_identificacion: number;
    numero_identificacion: string;
    id_rol: number;
    email: string;
    direccion: string;
    activo: number;
    created_at: string;
    updated_at: string;
    programa_procedencia: string;
    programa_interes: string;
    ruta_certificado_notas: string;
    ruta_contenido_programa: string;
    ruta_certificado_conducta: string;
    ruta_solicitud_motivacion: string;
    id_estudiante: number;
    isOpen?:boolean;
}

export interface UserCreate extends Omit<User, "estado" | "activo" | "created_at" | "updated_at"> {
    password: string;
}

export interface UserLogin {
    email: string;
    password: string;
}
