import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
import { useQuery } from "@tanstack/react-query";

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 20px;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinList = styled.ul``;
const Coin = styled.li`
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.textColor};
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 16px;
  font-size: 18px;
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
    transition: all 0.2s;
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.accentColor};
      text-decoration: underline;
    }
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 30px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  font-size: 28px;
  font-weight: 600;
  font-style: italic;
  color: ${(props) => props.theme.textColor};
  display: block;
  text-align: center;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;

interface ICoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
interface ICoinProps {
  toggleDark: () => void;
}

const Coins = ({ toggleDark }: ICoinProps) => {
  const [coins, setCoins] = useState<ICoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/Divjason/coinlist/coins"
      );
      const json = await response.json();
      setCoins(json);
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
        <button onClick={toggleDark}>Toggle Mode</button>
      </Header>
      {loading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <CoinList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                Now Rank : {coin.rank}
                <Img
                  src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} ({coin.symbol}) &rarr; {coin.name}상세정보 보러가기
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
