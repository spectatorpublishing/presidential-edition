import React from "react";
import SectionTitle from "../components/SectionTitle";
import Article from "../components/Article"
import styled from "styled-components"
import { size } from "../device";

const SectionsWrapper = styled.div`
  position:relative;
  top:32rem;
  width:78%;
  padding-left:18%;
  margin-bottom:0;
  @media (max-width:${size.tablet}) {
    width:100%; 
    padding-left:0%;
    top:60rem;
  }
  bottom:0;
`

const Title = styled.h1`
  font-family:'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  text-transform: capitalize;
  color: #424242;
  opacity:0.8;
  @media (max-width:${size.tablet}) {
    text-align:center;
    font-size: 1.45rem;
    margin:0.5rem;
  }
`

const Header = styled.div`
  position:absolute;
  width:78%;
  padding-left:18%;
  @media (max-width:${size.tablet}) {
    width:100%; 
    padding-left:0%;
    margin-top:2rem;
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
    width:85%;
    margin:3rem 2rem; 
  }
`
const Hr = styled.hr`
  border: 1px solid #424242;
  margin:0;
  padding:0;
  opacity:0.8;
`
const Section = styled.div`
  height:5rem;
  @media (max-width:${size.tablet}) {
    display:none;
  }
`

const ArticleText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color:#424242;
  flex: none;
  order: 1;
  margin-left:1rem;
  margin-top:1rem;
  opacity:0.6;
  @media (max-width:${size.tablet})  {
    padding:0rem 1rem;
  }
`;

const Description = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 1rem;
  line-height: 38px;
  flex: none;
  order: 0;
  margin: 8px 0px;
`;

const Author = styled.p`
  font-family: 'EB Garamond', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 29px;
  flex: none;
  order: 1;
  margin: 20px 0px 0px 0px;
`;

const WritingSection = ({ title, articles, linePosition }) => {
  return (
    <div>
    <Header>
      <a href="https://www.columbiaspectator.com/" style={{textDecoration:'none'}}>
      <Title>Marian Abuhazi to serve as Columbia's 20th President</Title>
      </a>
      <Hr/>
      <Image src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/Z6BIOOCCKNCCNHGBIAEXDH6WXY.jpg"/>
      <ArticleText>
          <Description>Overwhelmed college counseling services struggle to offer all students immediate access to care. 
            Overwhelmed college counseling services struggle to offer all students immediate access to care. 
            Overwhelmed college counseling services struggle to offer all students immediate access to care
            Overwhelmed college counseling services struggle to offer all students immediate access to care</Description>
          <Author>Jane Doe and John Doe</Author>
        </ArticleText>
    </Header>

    <SectionsWrapper>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a id={title} style={{ "text-decoration": "none" }}>
      <Section/>
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
