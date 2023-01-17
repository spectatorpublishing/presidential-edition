import React from "react";
import SectionTitle from "../components/SectionTitle";
import Article from "../components/Article"
import styled from "styled-components"
import { size } from "../device";

const SectionsWrapper = styled.div`
  position:relative;
  top:22rem;
  width:78%;
  padding-left:18%;
  @media (max-width:${size.tablet}) {
    width:100%; 
    padding-left:0%;
    top:40rem;
  }
`

const Title = styled.h1`
  font-family:'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  color: black;
  opacity:0.8;
  @media (max-width:${size.tablet}) {
    text-align:center;
    font-size: 2rem;
  }
`

const Header = styled.div`
  position:absolute;
  width:78%;
  padding-left:18%;
  @media (max-width:${size.tablet}) {
    width:100%; 
    padding-left:0%;
    margin-top:1rem;
  }
  margin-top:3rem;
  top:10rem;
`

const Image = styled.img`
  width:40rem;
  height:auto;
  margin-left:1rem;
  margin-top:2rem;
  box-shadow: 2px 2px 10px rgba(115, 115, 115, 0.9);
  @media (max-width:${size.tablet}) {
    display:block;
    width:30rem;
    margin:auto; 
    margin-top:3rem;
  }
`
const Hr = styled.hr`
  border: 1px solid black;
  margin:0;
  padding:0;
  opacity:0.8;
`

const WritingSection = ({ title, articles, linePosition }) => {
  return (
    <div>
    <Header>
      <Title>Marian Abuhazi to serve as Columbia's 20th President</Title>
      <Hr></Hr>
      <Image src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/Z6BIOOCCKNCCNHGBIAEXDH6WXY.jpg"/>
    </Header>

    <SectionsWrapper>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a id={title} style={{ "text-decoration": "none" }}>
        <SectionTitle title={title} linePosition={linePosition} />
      </a>
      {articles.map((article) => (
        <Article article={article} />
      ))}
    </SectionsWrapper>
    </div>
  );
};

export default WritingSection;
