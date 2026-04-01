import styled from "styled-components";

const Listlink = styled.div`
    display: flex;
    flex-direction: column;

`
const Linha = styled.hr`
    width: 250px;
    height: 2px;
    background: #000;
`

const TitleList = styled.summary`
    color: #000;
    font-family: "Roboto Mono";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
`

const Paragraph = styled.p`
    color: #000;
    font-family: "Roboto Mono";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`
export default function ListSearch({ title, subtitle }) {
    return (
        <div>
            <Paragraph>{title}</Paragraph>
            <details>
                <TitleList>{subtitle}</TitleList>
                <Listlink>
                    <a href="#">test</a>
                    <a href="#">test</a>
                </Listlink>
            </details>
            <Linha/>

        </div>

    )
}