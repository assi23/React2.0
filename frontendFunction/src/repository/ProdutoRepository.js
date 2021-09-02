class ProdutoRepository{
    list;
    inscritos;

    constructor(){
        this.list = [];
        this.inscritos = [];
    }
    inscrever(func){
        // ... pega todo os itens que tinha antes nalista
        this.inscritos = [...this.inscritos, func];
    }
    desinscrever(func){
        let x = this.inscritos.findIndex(func);
        //splice remove element
        this.inscritos.splice(x,1);
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