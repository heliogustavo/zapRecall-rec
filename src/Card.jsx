import React, { useState } from "react";
import styled from "styled-components";
import seta from "./img/seta_play.png";
import virar from "./img/seta_virar.png";
import certo from "./img/icone_certo.png";
import quase from "./img/icone_quase.png";
import erro from "./img/icone_erro.png";


export default function Card(props) {

    const [renderizacaoAtual, setRenderizacaoAtual] = useState("inicial");
    const [iconeResposta, setIconeResposta] = useState(null);

    function finalizarCard(resposta) {
        setRenderizacaoAtual(resposta)
        props.setContador(props.contador + 1 )
        if (resposta == "erro") {
            setIconeResposta(erro)
        }
        else if (resposta == "quase") {
            setIconeResposta(quase)
        }
        else {
            setIconeResposta(certo)
        }
    }
    if (renderizacaoAtual == "inicial") {
        return (
            <BoxInicialStyle>
                <h3>Pergunta {props.numero + 1}</h3>
                <img onClick={() => setRenderizacaoAtual("mostrandoPergunta")} src={seta} alt="seta"></img>
            </BoxInicialStyle>
        )
    }
    else if (renderizacaoAtual == "mostrandoPergunta") {
        return (
            <BoxMostrandoPerguntaStyle>
                <p>{props.pergunta}</p>
                <img onClick={() => setRenderizacaoAtual("mostrandoResposta")} src={virar} alt="vira"></img>
            </BoxMostrandoPerguntaStyle>
        )
    }
    else if (renderizacaoAtual == "mostrandoResposta") {
        return (
            <BoxMostrandoRespostaStyle>
                <p>{props.resposta}</p>
                <BoxErroStyle onClick={() => finalizarCard("erro")} > <p>Não Lembrei</p> </BoxErroStyle>
                <BoxQuaseStyle onClick={() => finalizarCard("quase")} > <p>Quase Não Lembrei</p> </BoxQuaseStyle>
                <BoxCertoStyle onClick={() => finalizarCard("certo")} > <p>Zap! </p> </BoxCertoStyle>
            </BoxMostrandoRespostaStyle>
        )
    }
    else {
        return (
            <BoxInicialStyle>
                <h3>Pergunta {props.numero + 1}</h3>
                <img src={iconeResposta} alt="erro"></img>
            </BoxInicialStyle>
        )
    }
}

const BoxInicialStyle = styled.div`
width: 300px;
height: 100%;
margin-left: 33px;
display: flex;
align-items: center;
width: 300px;
height: 65px;
margin-top: 25px;
background: #FFFFFF;
font-family: 'Recursive';
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
justify-content: space-between;
padding-left: 15px;
padding-right: 15px;
h3{
    width: 87px;
height: 19px;

font-family: 'Recursive';
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #333333;
}
img{
width: 20px;
height: 23px;
}
`

const BoxMostrandoPerguntaStyle = styled.div`
width: 300px;
height: 100%;
margin-left: 33px;
display: flex;
align-items: center;
width: 300px;
height: 131px;
margin-top: 25px;
background: #FFFFFF;
font-family: 'Recursive';
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
justify-content: space-between;
padding-left: 15px;
padding-right: 15px;
h3{
    width: 87px;
height: 19px;

font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #333333;
}
img{
    width: 30px;
height: 20px;
}
`
const BoxMostrandoRespostaStyle = styled.div`
width: 300px;
height: 100%;
margin-left: 33px;
display: flex;
align-items: center;
width: 300px;
height: 131px;
margin-top: 25px;
background: #FFFFFF;
font-family: 'Recursive';
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
justify-content: space-between;
padding-left: 15px;
padding-right: 15px;
flex-wrap: wrap;
h3{
width: 87px;
height: 19px;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
}
`
const BoxErroStyle = styled.button`
width: 85.17px;
height: 37.17px;

background: #FF3030;
border-radius: 5px;
p{
width: 75.88px;
height: 37.17px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
}
`
const BoxQuaseStyle = styled.button`
width: 85.17px;
height: 37.17px;
background: #FF922E;
border-radius: 5px;

p{
width: 75.88px;
height: 37.17px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
justify-content: center;
}
`
const BoxCertoStyle = styled.button`
width: 85.17px;
height: 37.17px;
background: #2FBE34;
border-radius: 5px;

p{
width: 75.88px;
height: 37.17px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
color: #FFFFFF;
}
`


