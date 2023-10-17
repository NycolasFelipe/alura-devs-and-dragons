import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magaJulia = new Mago("Julia", "gelo", 7, 10)
const arqueiroBruno = new Arqueiro("Bruno", 8)
const arqueiroMagoChico = new ArqueiroMago("Chico", 10, "ar", 4, 8)
const guerreiroJorge = new Guerreiro("Jorge", 5)

const personagens = [magaJulia, arqueiroBruno, arqueiroMagoChico, guerreiroJorge]

new PersonagemView(personagens).render()
