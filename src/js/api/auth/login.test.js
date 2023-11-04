import { login } from "./login";
// mock replaces > window (document, fetch, localstorage) 
// mock fetch function with jest.fn() > isolates function to test

// mock fetch > jest 
global.fetch = jest.fn() 

// mock save function (storage) 
jest.mock("../../storage/index.js", () => ({
    save: jest.fn()
  }));

  const storageModule = require("../../storage/index.js");

// mock fetch response with ok status 
describe("login", () => {
    it("fetches and stores a token in browser storage", async () => {
        // fetch mock > mockResolvedValue > returns mock response 
const mockResponse = {
    ok: true,
    json: jest.fn().mockValue({
        accessToken: "mockToken"
    })
};

 global.fetch.mockFetchResponse(mockResponse);

await login("test@test.com", "password");


// Check if fetch has been called with matcher > toHaveBeenCalledWith 
// expects login function to be fetched with URL, method, body, headers
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
        },
    }

);

  // Check if save was called (chatGPT)
  expect(storageModule.save).toHaveBeenCalledWith("token", "mockToken");

  const testProfile = {
    username: "user_name",
    email: "test@test.com"
  };

  // Check if save was called with the correct arguments for "profile"
  expect(storageModule.save).toHaveBeenCalledWith("profile", testProfile);
});
});
