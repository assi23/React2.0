class ProdutoRepository{
    list;
    inscritos;

    constructor(){
        this.list = [];
        this.inscritos = [];
    }
    inscrever(func){
        this.inscritos = [...this.inscritos, func];
    }
    desinscrever(func){
        let y = this.inscritos.findIndex(func);
        this.inscritos.splice(y,1);
    }
    notificar(){
        this.inscritos.forEach(insc=>{
            insc(this.list);
        });
    }
    create(produto){
        this.list = [...this.list,produto]
        this.notificar();
    }
    list(){
        return this.list;
    }
}
export default ProdutoRepository;