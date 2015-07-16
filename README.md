# The State of the World in Peace

## Motivation:

I am currently a student at General Assembly and I am completing the Web Development Immersive course in (July 2015).

This app is our last major project before graduation.

## What is it?

My hometown is Caracas, Venezuela and it is the 3rd. most violent city in the World. In my experience of living there I have reached the conclusion that the more violent places in the World are where the Education, Health facilities and the Equal Opportunities are not present.

My purpose when creating the app is to raise awareness about the current state of the World on the topics that I have mentioned above and to inspire conversations and possible actions about it.

## Minimal Viable Product (MVP)

A map displaying the choropleth views for the major United Nations Development Program (UNDP) indicators showing the state of the world.

## Additional Bonus Features (What to do next)

* To have the map displaying with an animated timeline showing the chronology of 150 years of conflicts and violence.

* Pay it forward tracker app to show where random act of kindness occurs, possibly in real time.

## Technologies

I built the app on Ruby on Rails and I scraped the data from UNDP Human Development Index Website using Nokogiri, which I then seeded into a PostgreSQL database.

I used D3.js library to manipulate the data and TopoJSON to render the map on the page.