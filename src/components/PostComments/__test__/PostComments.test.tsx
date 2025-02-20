import { fireEvent, render, screen } from "@testing-library/react";
import Post from "../../Post";

describe("Teste para o componente Post", ()=>{
  

    test("Renderiza o componete Post", ()=>{
        
        render(<Post imageUrl="https://cdn.awsli.com.br/2500x2500/2571/2571273/produto/246542992/000-un5fw5h2lq.jpg">
            Olha só que legal minha miniatura do Batmóvel.
          </Post>)

          expect(screen.getByText("Olha só que legal minha miniatura do Batmóvel.")).toBeInTheDocument()
    })

    test("Commenta no Post", ()=> {
        render(<Post imageUrl="https://cdn.awsli.com.br/2500x2500/2571/2571273/produto/246542992/000-un5fw5h2lq.jpg">
            Olha só que legal minha miniatura do Batmóvel.
          </Post>)

        const campoComentar = screen.getByTestId("campoComentar")
        const btnComentar = screen.getByTestId("btnComentar")

        fireEvent.change(campoComentar, {target: { value: "Comentário 001"}})
        fireEvent.click(btnComentar)

        fireEvent.change(campoComentar, {target: { value: "Comentário 002"}})
        fireEvent.click(btnComentar)

        expect(screen.getByText("Comentário 001")).toBeInTheDocument()
        expect(screen.getByText("Comentário 002")).toBeInTheDocument()
        screen.debug()
    })
})