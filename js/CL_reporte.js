export default class CL_reporte{
    constructor (){
        this.contpersonas = 0;
        this.acumedad = 0.0;
        this.mayor = 0;
    }
    procesarpersonas(per){
        this.contpersonas++;
        this.acumedad += per.edad;
        if(per.sexo=="F")
            if(per.edad>this.mayor){
                this.mayor = per.edad;
            }
    }
    edadpromedio(){
        return this.acumedad / this.contpersonas;
    }
    mayoredad(){
        return this.mayor;
    }
}