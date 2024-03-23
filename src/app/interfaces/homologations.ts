export interface Homologations {
    id: number;
    idEstudiante: number;
    idMateria: number;
    nota: string;
    observacion: string;
    estado: string;
    activo: number;
    created_at: string;
    updated_at: string;
}

export interface HomologationCreate extends Omit<Homologations, "estado" | "activo" | "created_at" | "updated_at"> {
}

