import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { AboutMoviePage } from "../AboutMoviePage";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const renderWithRouter = (id: string) => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/movie/${id}`]}>
        <Routes>
          <Route path="/movie/:id" element={<AboutMoviePage />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );
};

describe("AboutMoviePage", () => {
  it("render Loading...", () => {
    renderWithRouter("tt0372784");
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("render movie data", async () => {
    renderWithRouter("tt0372784");
    await waitFor(() => {
      expect(screen.getByText("Batman Begins")).toBeInTheDocument();
    });

    expect(screen.getByText(/2005/)).toBeInTheDocument();
    expect(screen.getByText(/Christopher Nolan/)).toBeInTheDocument();
    expect(screen.getByText(/Christian Bale/)).toBeInTheDocument();
  });

  it("render error", async () => {
    renderWithRouter("tt9999999");
    await waitFor(() => {
      expect(screen.getByText("Incorrect IMDb ID.")).toBeInTheDocument();
    });
  });
});
