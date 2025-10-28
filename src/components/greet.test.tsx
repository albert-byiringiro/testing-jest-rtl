import { render, screen } from "@testing-library/react"
import Greet from "./greet"

test('Render Greet Test', () => {
    render(<Greet/>)

    const textElement = screen.getByText(/hello/i);

    expect(textElement).toBeInTheDocument()
})