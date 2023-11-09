import { logout } from "./logout";
import { remove } from "../../storage/index.js";

// Mock remove function in storage
jest.mock("../../storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  it("clears the token from browser storage", () => {
    // Call the logout function
    logout();

    // toHaveBeenCalledWith > checks if remove was called with the correct argument for "token"
    expect(remove).toHaveBeenCalledWith("token");
  });
});

