# Aesop Test

### Started 3 November 2021, Completed 5 November 2021

Using the endpoint [here](https://data.sa.gov.au/data/api/3/action/datastore_search?resource_id=590083cd-be2f-4a6c-871e-0ec4c717717b), build a react application to display a list of records grouped by suburbs using the accordion UI, which expands and contracts on click.

Commit your code to a Github repository as you develop, so we can see how you progressed.

Please make sure that you cover the following as part of this exercise:

- Unit testing
- Styling

Optional task

Implement a button to make the list to be regrouped by ‘Offence Level 2 Description’ on click.

## Getting Started

### Prerequisites

- Node v14.x.x

### Build/ Run

1. `npm i`
2. `npm run build`
3. `npm run start`
4. navigate to `http://localhost:<port>` (defaults to 3000)

## Post Mortem

### Thoughts

This was my first time working with an API that did not have camelCase keys so initially I was a little stumped. I then decided to trawl through the json file and realized there was a fields array at the bottom that I could use to match and retrieve the main records.

I first sorted the "Suburb - Incidents" into an array of it's own and decided that the data stored will be the headers for the accordion titles. (Eg: "Adelaide", "Adelaide Airport") Afterwards I filtered the data so that if the content's "Suburb - Incidents" key matched the corresponding header, the content will only then be showed.

The retrieved records data were first rendered into a table, but I felt like the data was not presented in the correct way so I changed to a listing view instead.

Adding in the optional button involved mainly refactoring a lot of code to readily receive the selected data to be passed and rendered. I started with the highest parent and toggled the data there to be passed down to the children.

Unfortunately I have no prior experience with testing so I was unable to incorporate it into my code.

Overall I felt that it was a fun challenge to work on and I really enjoyed it.

### Improvements

I could have modularize reusable components a bit more, for example: shifting the Accordion component into the assets folder, refactor passable props (eg: title/ content).

Design-wise I could have probably worked on bettering the user experience in regards of the data placement.
