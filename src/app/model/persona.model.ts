export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    titulo:string;
    imgPerfil: string;

    constructor(nombre: string,apellido: string, titulo:string,imgPerfil: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo=titulo;
        this.imgPerfil = imgPerfil;
    }
}