import styled from "styled-components";

const Listlink = styled.div`
    display: flex;
    flex-direction: column;

`
 export default function ButtonList ({ title }) {
    return(
         <details>
          <summary>{title}</summary>
             <Listlink>
                 <a href="#">test</a>
                 <a href="#">test</a>
             </Listlink>
         </details>
    )
 }