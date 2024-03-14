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
export interface UserCreate extends Omit<User, "estado" | "activo" | "created_at" | "updated_at"> {
    password: string;
}

export interface UserLogin {
    email: string;
    password: string;
}
