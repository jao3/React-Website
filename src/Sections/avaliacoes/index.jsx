import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick"
import Card from '../../components/Card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Avaliacoes = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 5%;
    margin-bottom: 3rem;
`;
const Titulo = styled.h1`
    font-size: 2.5rem;
    color: var(--titulo);
    text-align: center;
    position: relative;
    &::before{
        content: "";
        height: 1px;
        width: 50%;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0.5rem);
        border-bottom: 2px solid var(--btn-icon);
    }
`;
const Carousel = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .slick-slide.slick-active{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        bottom: 0;
    }
    .slick-slider .slick-dots button:before {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
        padding: 0;
        margin-bottom: 3rem;
    }
    .slick-slider .slick-dots button:before {
    color: var(--btn-icon);
    font-size: 1.5rem;
    margin-top: 1rem;
  }
    .slick-slider .slick-arrow:before {
    color:var(--btn-icon);
    font-size: 2.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
}
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
  };

function AvaliacoesSection() {
    return (
    <Avaliacoes>
        <Titulo>Avaliações</Titulo>
        <Carousel>
            <Slider {...settings}>
                <Card
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam atque voluptatibus nihil eligendi, minus quis eaque? "
                    name="Joao Araújo"
                    image="joao"
                />
                <Card
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam atque voluptatibus nihil eligendi, minus quis eaque? "
                    name="Joao Araújo"
                    image="joao"
                />
                <Card
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam atque voluptatibus nihil eligendi, minus quis eaque? "
                    name="Joao Araújo"
                    image="joao"
                />
                <Card
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam atque voluptatibus nihil eligendi, minus quis eaque? "
                    name="Joao Araújo"
                    image="joao"
                />
                <Card
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam atque voluptatibus nihil eligendi, minus quis eaque? "
                    name="Joao Araújo"
                    image="joao"
                />
                <Card
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam atque voluptatibus nihil eligendi, minus quis eaque? "
                    name="Joao Araújo"
                    image="joao"
                />
            </Slider>
        </Carousel>
    </Avaliacoes>
    );
}

export default AvaliacoesSection;