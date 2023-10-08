import React, { useEffect, useState } from "react";
import {Box, Flex, Heading, Container, Text, Grid, Card, Inset, Strong, Tabs, Link } from '@radix-ui/themes';
import './App.css';

function App() {
  return (
    <>

    <Box
      style={{
        background: 'var(--gray-8)', borderRadius: 'var(--radius-3) var(--radius-3) 0 0',
        maxWidth: 1300
      }}
      p="4"
      
    >
      <Heading mb="1" size="6">
        Aurora Fade
      </Heading>
      <Text>
        Aurora prediction based on magnetic field phenomena observation.
      </Text>
    </Box>

    <Tabs.Root defaultValue="prediction"
    style={{
      maxWidth: 1300
    }}
    >
      <Tabs.List
      style={{
        background: 'var(--gray-8)', borderRadius: '0 0 var(--radius-3) var(--radius-3)', marginBottom: 10
      }}>
        <Tabs.Trigger value="prediction">Aurora Prediction</Tabs.Trigger>
        <Tabs.Trigger value="about">About phenomenon called Aurora</Tabs.Trigger>
      </Tabs.List>

      <Box px="4" pt="3" pb="2">
        <Tabs.Content value="prediction">
          <Box>
            <Card size="2" style={{ maxWidth: 1300 }}>
              <Inset clip="padding-box" side="top" pb="current">
                <img
                  src="./api/images/data.png"
                  alt="Plots of agnetic field and plasma stream speed gathered by ACE satelite"
                  style={{
                    display: 'block',
                    objectFit: 'contain',
                    width: '100%',
                    backgroundColor: 'var(--gray-5)',
                  }}
                />
              </Inset>
              <Text  as="div" size="1" align={'right'} style={{width:'100%'}}>Dataset available on: <a href="https://omniweb.gsfc.nasa.gov/ftpbrowser/wind_min_merge.html">omniweb.gsfc.nasa.gov</a></Text>
              <Text as="p" size="3">
                <Strong>Northern Lights Prediction:</Strong><br/>
                From the data plotted in the picture above one can see, that the increase of the magnetic flux was followed by the growth of the plasma flow speed. Thereby, magnetic reconnection has occured and we can expect the aurorae to occur in the following days
                as the plasma burst will be reaching Earth's atmosphere.
              </Text>
            </Card>
          </Box>
        </Tabs.Content>

        <Tabs.Content value="about">
        <Flex direction={"column"} justify="center" style={{
                      display: 'block',
                      objectFit: 'contain',
                      width: '100%',
                      backgroundColor: 'var(--gray-a10)',
                      borderRadius: 'var(--radius-3)',
                      color:'silver',
                      textIndent: '1em'
                    }}
                    p="4"
                    >
          <Text as="p" size="3">
            <Strong>Have you ever wondered about the fascinating phenomenon behind the beautiful Northern Lights, also known as the Aurora?</Strong>
          </Text>
          <Text as="p" size="3">
            It's all thanks to phenomenon called magnetic reconnection. In the simplest words: it happens when magnetic fields that are pointing in opposite directions come into contact with each other.
          </Text>
          <Inset clip="padding-box" side="top" pb="current" m="4">
            <img
              src="./api/images/field.PNG"
              alt="Plots of agnetic field and plasma stream speed gathered by ACE satelite"
              style={{
                display: 'block',
                objectFit: 'contain',
                height: '320px',
                width: '100%',
                backgroundColor: 'var(--gray-a0)',
              }}
            />
          </Inset>
          
          <Text as="p" size="3">
            Imagine that red and blue lines are representing magnetic fields. They're originally pointing in different directions, but when they connect, you get these lines with mixed colors. On the left picture, you can see the lines just before they connect, and on the right, you can see the moment after they've connected.
          </Text>


          <Text as="p" size="3">
            In our part of the solar system, magnetic reconnection occurs when Earth's magnetic field and the Sun's magnetic field, which have opposite polarizations, come together. When this happens, it can cause plasma and other components of the solar wind to be ejected towards Earth. These particles have the potential to disrupt the operation of satellites and energy grids. That's why it's crucial to keep an eye on space weather and develop tools that can give us a warning before such an event occurs.
          </Text>
          <Text as="p" size="3">

          
            Fortunately, not all of the particles from this reconnection are sent towards Earth. And even when they are, they often transform into something both harmless and beautiful: the Aurora, those stunning lights that grace our night skies.
          </Text>
          <Text  as="div" size="1" align={'right'} style={{width:'100%'}}>Picture taken from: <a href="https://en.wikipedia.org/wiki/Magnetic_reconnection">wikipedia.org/wiki/Magnetic_reconnection</a></Text>

        </Flex>
        

          

        </Tabs.Content>
      </Box>
    </Tabs.Root>

    
    

    
    
    

      
    </>
  )
}


export default App;

