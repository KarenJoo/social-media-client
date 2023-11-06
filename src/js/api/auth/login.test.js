import { login } from "./login";
import { apiPath } from "../constants";
import { save } from "../../storage/index.js";
import localStorageMock from "../../mocks/localStorage.mock";

// Mock fetch function
global.fetch = jest.fn();

// Mock localStorage
global.localStorage = localStorageMock;

// Mock save function in storage
jest.mock("../../storage/index.js", () => ({
    save: jest.fn(),
    load: jest.fn(),
  }));

  
// Mock apiPath
jest.mock("../constants", () => ({
    apiPath: jest.fn(),
  }));

const storageModule = require("../../storage/index.js");


describe("login", () => {
  it("fetches and stores a token in browser storage", async () => {
    // mocked value for apiPath
    apiPath.mockReturnValue(`${apiPath}/social/auth/login`);

    // Mock response with OK status and a token
    const mockResponse = {
      ok: true,
      json: jest.fn().mockReturnValue({
        accessToken: "mockToken"
      })
    };

     // Mock fetch response
     global.fetch.mockResolvedValue(mockResponse);

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
  });
});
