import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Insurance | Hinduja Global Solutions (HGS)',
        description: "Me and my team built an Developed Ionic-based web app for insurance management with user authentication, cart functionality, payment gateway integration, and order history. Implemented third-party APIs for streamlined data retrieval, policy management, and claims processing, reducing manual errors. Designed and developed feature-rich API using Node.js and Express, enhancing system functionality and performance.",
        tools: ['Angular','Ionic','TypeScript', 'Express', 'MongoDB', 'Node', 'HTML', 'SCSS' ,'RXJS', 'Material UI','NPM','RESTful APIs','JSON','AWS'],
        role: 'Fullstack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Stocks | Hinduja Global Solutions (HGS)',
        description: 'Led development of a real-time stock trading platform using Angular, Node.js, Express.js, MongoDB, HTML, and CSS. Enabled dynamic buying, selling, and portfolio tracking. Integrated WebSockets for live market up- dates and TradingView charts, enhancing real-time user portfolio management.Managed API development, maintenance, bug analysis, and collaboration with the dev team for defect resolution and issue tracking.',
        tools: ['Angular','Ionic','TypeScript','Express', 'MongoDB', 'Node', 'Javascript','RESTful APIs',' CSS', 'HTML','JSON','Postman'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Colors | Intellect Design Arena (eMach.ai)',
        description: 'Led UI enhancement with Angular, boosting real-time user experience and streamlining corporate loan processes. Implemented Engineered robust Express.js APIs facilitating seamless real-time data flow and efficient communication between frontend and backend systems in the corporate loan application. Developed Jasper reports to provide comprehensive insights and implemented patches separately for bug fixes and feature enhancements.',
        tools: ['Angular', 'JavaScript', 'Express', 'HTML', 'CSS','MySQL', 'Jasper'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'pinterest-clone',
        description: "At the core of this application lies the authentication system, meticulously crafted using Passport.js. This ensures secure user authentication and authorization, safeguarding user data and providing a seamless login experience. Leveraging Express's powerful routing capabilities, I've designed a scalable and intuitive navigation system, enabling users to effortlessly explore the application's features. Modeling data structures using MongoDB, I've constructed a flexible and scalable database schema, allowing for efficient storage and retrieval of user-generated content. Each interaction, from pinning images to creating boards, is meticulously handled through RESTful APIs, ensuring smooth communication between the client and server.",
        tools: ['Node.Js', 'Express', 'MOngoDb', 'EJS', "Routes",'PostMan',"Tailwind Css"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },