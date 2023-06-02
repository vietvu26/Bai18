import React from "react";
import { render, screen } from "@testing-library/react";
import UserDetails from "../Details";
const userInfo = {
  userName: "viet",
  email: "viet@123.com",
  phone: "0123456789",
};
test("test", () => {
  render(<UserDetails info={userInfo} />);

  expect(screen.getByText("User Details")).toBeInTheDocument();
  expect(
    screen.getByText(`Username: ${userInfo.userName}`)
  ).toBeInTheDocument();
  expect(screen.getByText(`Email: ${userInfo.email}`)).toBeInTheDocument();
  expect(screen.getByText(`Phone: ${userInfo.phone}`)).toBeInTheDocument();
});