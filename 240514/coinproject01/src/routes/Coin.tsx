import { privateDecrypt } from "crypto";
import React, { useState, useEffect } from "react";
import {
  useParams,
  useLocation,
  useMatch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";

const Container = styled.div`
  padding: 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 30px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  font-style: italic;
  color: ${(props) => props.theme.textColor};
`;

const OverView = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.textColor};
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const OverViewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    &:nth-child(1) {
      color: ${(props) => props.theme.whiteColor};
      font-size: 14px;
      font-weight: 400;
      text-transform: uppercase;
      margin-bottom: 5px;
    }

    &:nth-child(2) {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Description = styled.p`
  margin: 20px 0;
  background: ${(props) => props.theme.accentColor};
  border-radius: 5px;
  padding: 5px 20px;
  text-align: center;
  span {
    color: ${(props) => props.theme.whiteColor};
  }
`;
const Taps = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0;
  gap: 10px;
`;

const Tap = styled.span<{ isActive: boolean }>`
  padding: 7px 0;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  background: ${(props) => props.theme.accentColor};
  color: ${(props) =>
    props.isActive ? props.theme.textColor : props.theme.whiteColor};
`;

interface RouterParams {
  coinId: string;
}
interface LocationState {
  state: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quote: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

interface ICoinDarkProp {
  isDark: boolean;
}

const Coin = ({ isDark }: ICoinDarkProp) => {
  const { coinId } = useParams<RouterParams | any>();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  const { state } = useLocation() as LocationState;
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
        )
      ).json();
      const priceData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
        )
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>
          Coin : {state ? state : loading ? "Loading..." : info?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <>
          <OverView>
            <OverViewItem>
              <span>Rank : </span>
              <span>{info?.rank}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Symbol : </span>
              <span>{info?.symbol}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Active : </span>
              <span>{info?.is_active ? "Yes" : "No"}</span>
            </OverViewItem>
          </OverView>
          <Description>
            <span>{info?.name}</span>
          </Description>
          <OverView>
            <OverViewItem>
              <span>Total Supply : </span>
              <span>{priceInfo?.total_supply}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Max Supply : </span>
              <span>{priceInfo?.max_supply}</span>
            </OverViewItem>
          </OverView>
          <Taps>
            <Tap isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tap>
            <Tap isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tap>
          </Taps>

          <Routes>
            <Route
              path="/chart"
              element={<Chart coinId={coinId} isDark={isDark} />}
            />
            <Route path="/price" element={<Price />} />
          </Routes>
        </>
      )}
    </Container>
  );
};

export default Coin;
