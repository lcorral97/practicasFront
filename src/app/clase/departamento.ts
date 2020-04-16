export class Departamento {
    private codDepto: string;
    private nombreDepto: string;
    private ciudad: string;
    private codDirector: string;

    constructor() {

    }

    public getCodDepto() {
        return this.codDepto;
    }

    public setCodDepto(codDepto: string) {
        this.codDepto = codDepto;
    }

    public getNombreDepto() {
        return this.nombreDepto;
    }

    public setNombreDepto(nombreDepto: string) {
        this.nombreDepto = nombreDepto;
    }

    public getCiudad() {
        return this.ciudad;
    }

    public setCiudad(ciudad: string) {
        this.ciudad = ciudad;
    }

    public getCodDirector() {
        return this.codDirector;
    }

    public setCodDirector(codDirector: string) {
        this.codDirector = codDirector;
    }
}
