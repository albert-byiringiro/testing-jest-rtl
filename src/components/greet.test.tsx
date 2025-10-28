import { render, screen } from "@testing-library/react"
import Greet from "./greet"

test('Render Greet Test', () => {
    render(<Greet/>)

    const textElement = screen.getByText('Hello');

    expect(textElement).toBeInTheDocument()
})