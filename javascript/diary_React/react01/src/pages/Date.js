import React from "react";

import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 74px;
`;

const Calendar = styled.img`
  width: 100%;
`;

const Date = ({ Subtitle, SubtitleKR, DateInfo }) => {
  return (
    <Container>
      <DateInfo>
        <Subtitle>invitation</Subtitle>
        <SubtitleKR>
          특별한 날, <br /> 특별한 당신을 초대합니다.
        </SubtitleKR>
        <p>
          풋풋한 20살과 23살이 <br /> 캠퍼스에서 만나 9년의 시간이 흘러
          <br />
          결혼의 결실을 맺게 되었습니다.
          <br /> 처음 만났던 설렘을 간직하고 <br />
          서로에게 항상 감사하며 살겠습니다. <br />
          부부로서 새로운 출발에 축복하고
          <br />
          응원해 주신다면 감사하겠습니다.
        </p>
      </DateInfo>
      <Calendar src="./img/Calendar.png" alt="calendar" />
    </Container>
  );
};

export default Date;
