import React from 'react';
import './App.module.scss';
import { H1, H2, H3, H4, H5 } from './components/base/Header';
import { Copy1, Copy2, Copy3 } from './components/base/Copy';
import { Container } from './components/base/Container';
import { Center } from './components/base/Center';
import { Button } from './components/base/Button';

export default function App() {
  return (
    <div>
      <H1>Hey, this is Jascha</H1>
      <H2>Hey, this is Jascha</H2>
      <H3>Hey, this is Jascha</H3>
      <H4>Hey, this is Jascha</H4>
      <H5>Hey, this is Jascha</H5>


      <Copy1>Hey, this is Jascha</Copy1>
      <Copy2>Hey, this is Jascha</Copy2>
      <Copy3>Hey, this is Jascha</Copy3>

      <Container>
        <H1>Wrapped by a Container</H1>
      </Container>

      <Center>
        <H1>I am Centered</H1>
      </Center>

      <Button type='primary' text='Continue' />
      <Button type='secondary' text='Continue' />
      <Button type='text' text='Continue' />

    </div>
  );
}