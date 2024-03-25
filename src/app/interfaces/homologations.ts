export interface Homologations {
    id: number;
    id_estudiante: number;
    id_materia: number;
    nota: string;
    observacion: string;
    estado: string;
    activo: number;
    created_at: string;
    updated_at: string; 
    nombre_materia: string; 
}

export interface HomologationView {
    id: number;
    id_estudiante: number;
    id_materia: number;
    nota: string;
    observacion: string;
    estado: string;
    activo: number;
    created_at: string;
    updated_at: string;
    materia: {
        id: number;
        nombre: string;
        descripcion: string;
        semestre: string;
        creditos: number;
        id_programa: number;
        activo: number;
        created_at: string;
        updated_at: string;
        programa: {
            id: number;
            nombre: string;
        };
    };
}


export interface HomologationCreate extends Omit<Homologations, "estado" | "activo" | "created_at" | "updated_at"> {
}

export interface Homologacion {
    id_estudiante: number;
    id_materia: number;
    nota: string;
    observacion: string;
}

export interface HomologacionesRequest {
    homologaciones: Homologacion[];
}

