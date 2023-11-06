import { login } from "./login";

// Mock fetch function
global.fetch = jest.fn();

// Mock save function in storage
jest.mock("../../storage/index.js", () => ({
    save: jest.fn(),
    load: jest.fn(),
  }));
  
const storageModule = require("../../storage/index.js");

describe("login", () => {
  it("fetches and stores a token in browser storage", async () => {
    // Mock response with OK status and a token
    const mockResponse = {
      ok: true,
      json: jest.fn().mockReturnValue({
        accessToken: "mockToken"
      })
    };

    // Mock fetch response
    global.fetch.mockResolvedValue({
      json: jest.fn().mockReturnValue(mockResponse),
      ok: true
    });

    // Call the login function
    await login("test@test.com", "password");

    // Check if fetch has been called with the expected parameters
    expect(global.fetch).toHaveBeenCalledWith(
      `${apiPath}/social/auth/login`,
      {
        method: "post",
        body: JSON.stringify({
          email: "test@test.com",
          password: "password"
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    // Check if save was called with the correct arguments for "token"
    expect(storageModule.save).toHaveBeenCalledWith("token", "mockToken");

    // Check if save for "profile" was not called (optional)
    expect(storageModule.save).not.toHaveBeenCalledWith("profile", expect.anything());
  });
});
