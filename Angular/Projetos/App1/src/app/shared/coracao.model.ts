export class Coracao{
    constructor(
        public Cheio: boolean = true,
        public UrlCoracaoCheio: string = "assets/coracao_cheio.png",
        public UrlCoracaoVazio: string = "assets/coracao_vazio.png"
    ){}

    public exibeCoracao(): string{
        if (this.Cheio){
            return this.UrlCoracaoCheio
        }else{
            return this.UrlCoracaoVazio
        }
    }
}