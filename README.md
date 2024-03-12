It's a news app project using Next Js where user can search  by their name and category and it shows the time and date of the publish news if the api fetch is not corect or the news for that category or country is empty then it shows error message " Error in fetchhing news. Please try again later" .


```
We need env file to protect out api key for that
.env.local :  are set setup to fetch the News Api key

To install the .env file we need to
npm install dotenv

```
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
We set up project like that in folder: components
1.file CategorySelector.js file contains different category of news.
2.file CountrySelector.js file contains different country name for the news in example we have taken country name .
3.NewsList.js file displays the article news by Article Headlines, Date published, News Description, News Image and if we clik ont he news we can view the Full News of any country with category.

If any news are not here or problem in fetching it displays error message.

In folder pages:
file index.js contains all the details of th ecomponents to execute the code and get the output. All the details are together fetch in index.js to get the output.


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

When we search news by country and category
![WhatsApp Image 2024-03-12 at 12 40 03_63356de0](https://github.com/sriparna-koar/next_newsdemo/assets/144530081/bc582155-0b32-485f-8d8a-afd6b5b59dc9)
