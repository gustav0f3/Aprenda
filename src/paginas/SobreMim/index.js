import PostModelo from 'componentes/PostModelo'
import styles from './SobreMim.module.css'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.jpeg'


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo = "Sobre mim"
            >
                <h3 className={styles.subtitulo}>
                    Olá, eu sou o Gustavo Hipólito
                </h3>

                <img src={fotoSobreMim} alt='Foto do Gustavo sorrindo' className={styles.fotoSobreMim}/>

                <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou aluno de Front-end na Alura e estou feliz de te ver por aqui.</p>
                <p className={styles.paragrafo}>
                Minha história com programação começou no Colégio Militar de Campo Grande (CMCG), quando fiz o ensino médio integrado ao curso de Robótica. Eu aprendi lógica de programação e o básico de várias linguagens, como C/C++, Python, C#, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
                </p> <p className={styles.paragrafo}>
                Estou ensino superior, cursando Engenharia de Software na Unigran.  Mas com uma bagagem de Front-end (HTML, CSS, JS, TS, React), na plataforma Alura. Estou amando essa área e quero crescer cada vez mais. 
                </p><p className={styles.paragrafo}>
                Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.
                </p><p className={styles.paragrafo}>
                E estou buscando um estágio em desenvolvimento web. 
                </p>
        </PostModelo>
    )
}