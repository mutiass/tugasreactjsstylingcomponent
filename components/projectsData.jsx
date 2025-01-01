import covidindo from '../assets/images/covid-indo.png'; 
import covidglobal from '../assets/images/covid-global.png';
import telco from '../assets/images/telco.png';

export const projects = [
  {
    imgSrc: covidindo,
    title: 'COVID-19 Data Exploration and Analysis in Indonesia',
    text: 'Goal: To explore and analyze COVID-19 data in Indonesia, focusing on the overall national statistics and specific details for Jawa Barat province, identifying trends and dynamics in the data over time.',
    alt: 'COVID-19 Indonesia Analysis',
    link: '/fileprojects/covidindo/covidindo.html',
  },
  {
    imgSrc: covidglobal,
    title: 'COVID-19 Data Analysis Worldwide & ASEAN',
    text: 'Goal: To analyze and visualize COVID-19 data globally and specifically for ASEAN countries, identifying patterns such as fatality rates and the timing of the first cases in ASEAN.',
    alt: 'COVID-19 Global Analysis',
    link: '/fileprojects/covidglobal/covidglobal.html',
  },
  {
    imgSrc: telco,
    title: 'Customer Churn Prediction in Telecommunication Industry',
    text: 'Goal: To reduce customer churn in the telecommunications industry by applying machine learning techniques to predict and prevent it.',
    alt: 'Customer Churn Prediction',
    link: '/fileprojects/churnpred/churnpred.html',
  },
];
