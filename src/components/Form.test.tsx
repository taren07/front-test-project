import { render, screen } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("Form", () => {
	it("The initial state is an empty text.", () => {
		render(<Form />);
		const input = screen.getByPlaceholderText("Enter text");
		expect(input).toBeInTheDocument();
		expect(input).toHaveTextContent("");
	});

	it("The text entered is submitted.", async () => {
		render(<Form />);
		const input = screen.getByPlaceholderText("Enter text");
		await user.type(input, "Test Text");
		expect(screen.getByDisplayValue("Test Text")).toBeInTheDocument();

		const button = screen.getByRole("button");
		await user.click(button);
	});
});
