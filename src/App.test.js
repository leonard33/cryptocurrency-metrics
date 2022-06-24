import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../reduxcaptone/space-travelers-hub/src/redux/configureStore";
import App from "./App";
import Cryptoitem from "./components/Cryptoitem";
import Nav from "./components/Nav";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const heading = screen.getByText(/ryptometrics/i);
  expect(heading).toBeInTheDocument();
});

// test snapshot
const MockApp = () => {
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>;
};

it("matches snapshot", () => {
  const tree = renderer.create(<MockApp />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test the cryptoitem card
const cryptoitem = [
  {
    uuid: "Qwsogvtv82FCd",
    symbol: "BTC",
    name: "Bitcoin",
    coinrankingUrl: "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
    marketCap: "388246262375",
  },
];

const MockCryptoitem = () => (
  <Provider store={store}>
    <Cryptoitem missioncard={cryptoitem} />
  </Provider>
);

test("renders data in the item as from API", () => {
  const tree = renderer.create(<MockCryptoitem />).toJSON();
  expect(tree).toMatchSnapshot();
});
