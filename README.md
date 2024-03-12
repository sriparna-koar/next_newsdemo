It's a news app project using Next Js where user can search  by their name and category and it shows the time and date of the publish news if the api fetch is not correct or the news for that category or country is empty then it shows error message " Error in fetchhing news. Please try again later" .


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
![WhatsApp Image 2024-03-12 at 12 47 57_09149ae8](https://github.com/sriparna-koar/next_newsdemo/assets/144530081/9e4ce8c8-2988-452a-ae13-db1e68a266f1)
![WhatsApp Image 2024-03-12 at 12 47 32_47f60094](https://github.com/sriparna-koar/next_newsdemo/assets/144530081/a2157cb3-451c-4aa0-b2cd-c7dd1eb8ffaf)
![WhatsApp Image 2024-03-12 at 12 53 36_6abea775](https://github.com/sriparna-koar/next_newsdemo/assets/144530081/f71f706f-c0c6-46dd-8d38-c5da3567a249)
![WhatsApp Image 2024-03-12 at 12 55 40_b7dfb91d](https://github.com/sriparna-koar/next_newsdemo/assets/144530081/8de38adf-382a-4623-bfa1-47facbf43973)

![WhatsApp Image 2024-03-12 at 12 54 32_dfb54bcc](https://github.com/sriparna-koar/next_newsdemo/assets/144530081/debcf535-3789-4546-abad-b968a55eade5)
![WhatsApp Image 2024-03-12 at 12 50 16_b65a22ec](https://github.com/sriparna-koar/next_newsdemo/assets/144530081/c456e3d4-bfbf-4a04-9591-3c1fcee15a6f)
![WhatsApp Image 2024-03-12 at 12 41 01_84401d30](https://github.com/sriparna-koar/next_newsdemo/assets/144530081/d82bf6ba-6e1a-4f69-bad8-1d0e259aed47)




![WhatsApp Image 2024-03-12 at 12 51 02_edaabadb](https://github.com/sriparna-koar/next_newsdemo/assets/144530081/c6404d98-bddd-44a7-af71-5a8c180322d3)

![WhatsApp Image 2024-03-12 at 12 40 03_63356de0](https://github.com/sriparna-koar/next_newsdemo/assets/144530081/bc582155-0b32-485f-8d8a-afd6b5b59dc9)
![WhatsApp Image 2024-03-12 at 12 41 44_5063292f](https://github.com/sriparna-koar/next_newsdemo/assets/144530081/330973cd-d106-47d4-976b-a090ce67b6ef)

When there problem in Api when it is not fetch properly 
![WhatsApp Image 2024-03-12 at 13 00 46_27d86d34](https://github.com/sriparna-koar/next_newsdemo/assets/144530081/c74e05bd-070a-48ab-afec-89a25029d807)
