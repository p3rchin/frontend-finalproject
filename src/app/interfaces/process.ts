export interface Process {

    id: number;
    programaProcedencia: string;
    programaInteres: string;
    rutaCertificadoNotas: string;
    rutaContenidoPrograma: string;
    rutaCertificadoConducta: string;
    rutaSolicitudMotivacion: string;
    idEstudiante: number;
    activo: number;
    created_at: string;
    updated_at: string;
}

export interface startProcess extends Omit<Process, "activo" | "created_at" | "updated_at"> {
}