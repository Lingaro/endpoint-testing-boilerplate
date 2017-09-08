import "jest";
import request from "./request";

test("sample test", async () => {
  const resp = await request("/users");
  expect(resp[0].username).toBe("Bret");
  expect(resp).toMatchSnapshot();
});
