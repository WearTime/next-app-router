import AboutLayot from "@/app/about/layout";
import AboutPage from "@/app/about/page";
import { render, screen } from "@testing-library/react";
describe("About Page", () => {
  it("should render", () => {
    const page = render(
      <AboutLayot>
        <AboutPage />
      </AboutLayot>
    );
    expect(page).toMatchSnapshot();
  });
});
