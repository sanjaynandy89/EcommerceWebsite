import React, { Component } from 'react'
import { Container, Box, BoxTitle, BoxText } from "./HomeStyles";
export default class Product extends Component {
    render() {
        return (
            <Container>
      {data.map(box => (
        <Box key={box.id} bgColor={box.bgColor}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Container>
        )
    }
}
const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

const data = [
  {
    id: Math.random(),
    title: "Box titulo 1",
    text: lorem,
    bgColor: "#D5CAFA"
  },
  {
    id: Math.random(),
    title: "Box titulo 2",
    text: lorem,
    bgColor: "#EDA9A9"
  },
  {
    id: Math.random(),
    title: "Box titulo 3",
    text: lorem,
    bgColor: "#F2EE8D"
  },
  {
    id: Math.random(),
    title: "Box titulo 4",
    text: lorem,
    bgColor: "#9FEACD"
  }
];
