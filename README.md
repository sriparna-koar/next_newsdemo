It's a news app project using Next Js where user can search  by their name and category and it shows the time and date of the publish news if the api fetch is not corect or the news for that category or country is empty then it shows error message " Error in fetchhing news. Please try again later" .
``` We can search by country name :
countries = [
 'us':'United States',
 'gb':'United Kingdom',
  'ca':'Canada',
  'au':'Australia',
  'de':'Germany',
  'fr':'France',
  'in':'India',
  'jp':'Japan',
  'br':'Brazil',
  'mx':'Mexico'
##Can input more countries
];

We can search by category:
 categories = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology',
    'politics', 
  ##can input more categories
  ];
To run the code :
```
npm run dev
```
To set up the project first 
```
npx create-next-app@12.0.7 projectname

```


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. 

to start the project 

npm run dev
