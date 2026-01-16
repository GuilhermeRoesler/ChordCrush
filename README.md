# Chord Crush 🎵

**Chord Crush** é um jogo web interativo desenvolvido para músicos que desejam treinar o seu ouvido relativo. O objetivo principal é identificar progressões de acordes dentro de um campo harmónico ouvindo sequências musicais.

Este projeto funciona como uma ferramenta de treino auditivo ("Ear Training"), gamificada com sistemas de pontuação, vidas e níveis de dificuldade.

![](img/demo.png)

## 🚀 Funcionalidades

- **Reconhecimento de Progressões:** O jogo toca uma sequência de 4 acordes. O primeiro é sempre a Tónica (I), e o jogador deve identificar os graus dos 3 acordes seguintes (ex: ii, IV, V, vi).
- **Identificação da Tónica (Bónus):** Um campo extra permite ao jogador tentar adivinhar qual é a nota tónica da escala (ex: C, D, F#) para ganhar pontos extra.
- **4 Níveis de Dificuldade:**
- **EASY:** A tónica é fixa (geralmente Dó/C).
- **MEDIUM:** A tónica é aleatória entre as 12 notas musicais.
- **HARD:** Introduz variações/inversões nos acordes.
- **IMPOSSIBLE:** Aumenta a complexidade e a aleatoriedade das progressões.

- **Sistema de Vidas:** O jogador começa com 10 "vidas" (representadas por corações). Errar uma progressão retira vida.
- **Pontuação e Combos:**
- Pontos por acertar acordes individuais.
- Bónus por acertar a progressão completa.
- Multiplicador de pontos por acertos seguidos (Win Streak).

- **Menu de Configurações:** Permite alterar a dificuldade e ligar/desligar o modo de "Corações" (vidas).

## 🎮 Como Jogar

1. **Início:** Clique no botão **PLAY** no ecrã inicial.
2. **Ouvir:** Clique no botão **LISTEN**. O jogo tocará uma sequência de 4 acordes.

- O primeiro acorde é sempre o grau **I** (Tónica).

3. **Responder:**

- Nos 3 campos de texto, insira os graus correspondentes aos acordes que ouviu (use números árabes como 2, 3, 4, 5, 6 ou numeração romana se preferir, o jogo converte internamente).
- _Exemplo:_ Se a progressão for I - V - vi - IV, deve inserir `5`, `6` e `4` (ou `V`, `vi`, `IV`).

4. **Bónus:** Se souber a tonalidade, insira a nota no campo "bónus" (ex: `C`, `Gb`, `Am`).
5. **Verificar:** Clique em **VERIFY**.

- 🟩 **Verde:** Resposta correta.
- 🟥 **Vermelho:** Resposta incorreta (perde vidas se o modo estiver ativo).

6. **Game Over:** Se perder todos os corações, o jogo termina e a pontuação é reiniciada.

## 🛠️ Instalação e Execução

Este é um projeto estático (Front-end), o que significa que não necessita de instalação de servidores ou bases de dados complexas para correr localmente.

### Pré-requisitos

- Um navegador web moderno (Chrome, Firefox, Edge, etc.).

### Passos

1. Faça o download ou clone este repositório.
2. Certifique-se de que a estrutura de pastas está correta (o ficheiro `.html` deve estar no mesmo nível das pastas `img`, `music`, `fonts` e dos ficheiros `.css` e `.js`).
3. Abra o ficheiro `ChordCrush.html` diretamente no seu navegador.

## 💻 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da aplicação.
- **CSS3:** Estilização, animações e layout responsivo.
- **JavaScript (Vanilla):** Lógica do jogo, manipulação do DOM, gestão de áudio e sistema de pontuação.

## 📂 Estrutura do Projeto

- `ChordCrush.html`: O ponto de entrada da aplicação.
- `ChordCrush.js`: Contém toda a lógica de programação (funções `play`, `verify`, `listen`, cálculo de escalas, etc.).
- `ChordCrush.css`: Ficheiro de estilos (aparência visual).
- `/music`: Contém os ficheiros de áudio `.mp3` para os acordes (ex: `C1.mp3`, `Am2.mp3`).
- `/img`: Imagens utilizadas na interface (corações, fundos, ícones).

---

_Desenvolvido por Guilherme Roesler._
