import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
	it("The initial state is an empty text.", () => {
		render(<Form />);
		const input = screen.getByPlaceholderText("Enter text");
		expect(input).toBeInTheDocument();
		expect(input).toHaveTextContent("");
	});
});
