export class Empleado {
    private nDIEmp: string;
    private nomEmp: string;
    private sexEmp: string;
    private fecNac: Date;
    private fecIncorporacion: Date;
    private salEmp: number;
    private cargoE: string;
    private jefeId: string;
    private codDepto: string;
    private comisionE: number;
    private ciudad: string;
    private coord: string;
    private password: string;

    constructor() {

    }

    public getNDIEmp() {
        return this.nDIEmp;
    }

    public setNDIEmp(nDIEmp: string){
        this.nDIEmp = nDIEmp;
    }

    public getNomEmp() {
        return this.nomEmp;
    }

    public setNomEmp(nomEmp: string) {
        this.nomEmp = nomEmp;
    }

    public getSexEmp() {
        return this.sexEmp;
    }

    public setSexEmp(sexEmp: string) {
        this.sexEmp = sexEmp;
    }

    public getFecNac() {
        return this.fecNac;
    }

    public setFecNac(fecNac: Date) {
        this.fecNac = fecNac;
    }

    public getFecIncorporacion() {
        return this.fecIncorporacion;
    }

    public setFecIncorporacion(fecIncorporacion: Date) {
        this.fecIncorporacion = fecIncorporacion;
    }

    public getSalEmp() {
        return this.salEmp;
    }

    public setSalEmp(salEmp: number) {
        this.salEmp = salEmp;
    }

    public getCargoE() {
        return this.cargoE;
    }

    public setCargoE(cargoE: string) {
        this.cargoE = cargoE;
    }

    public getJefeId() {
        return this.jefeId;
    }

    public setJefeId(jefeId: string) {
        this.jefeId = jefeId;
    }

    public getCodDepto() {
        return this.codDepto;
    }

    public setCodDepto(codDepto: string) {
        this.codDepto = codDepto;
    }

    public getComisionE() {
        return this.comisionE;
    }

    public setComisionE(comisionE: number) {
        this.comisionE = comisionE;
    }
    
    public getCiudad() {
        return this.ciudad;
    }

    public setCiudad(ciudad: string) {
        this.ciudad = ciudad;
    }
    
    public getCoord() {
        return this.coord;
    }

    public setCoord(coord: string) {
        this.coord = coord;
    }
    
    public getPassword() {
        return this.password;
    }

    public setPassword(password: string) {
        this.password = password;
    }
}
