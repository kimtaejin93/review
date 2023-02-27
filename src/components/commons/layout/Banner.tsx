import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';

const BannerStyle1 = styled.div`
  background-color: ${(props) => props.color};
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 700;
`;

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    accessibility: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div style={{ width: '100%' }}>
      <Slider {...settings}>
        <div>
          <BannerStyle1 color='skyblue'>
            <div>상단배너1</div>
          </BannerStyle1>
        </div>
        <div>
          <BannerStyle1 color='pink'>
            <div>상단배너2</div>
          </BannerStyle1>
        </div>
        <div>
          <BannerStyle1 color='ivory'>
            <div>상단배너3</div>
          </BannerStyle1>
        </div>
      </Slider>
    </div>
  );
}
