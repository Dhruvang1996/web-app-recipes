# web-app-recipes

# Getting Started

If you like to clone the repo and install dependencies using ```npm i``` from the root directory.
   1) prepare the .env file for the backend server as per .env.example in server directory (eg. PORT = 4000). 
      Then write the url to connecting the MongoDb Atlas (eg. mongodb+srv://username:password@cluster0.hqqia.mongodb.net/Db_Name?retryWrites=true&w=majority).
   2) prepare the .env.local file for the frontend client as per .env.local.example in client directory (eg. NEXT_PUBLIC_BASE_URL = http://localhost:4000). 

Then, run the app in development mode using following command (this command will run frontend and backend both), but make sure run command from root directory:

```bash
npm run dev
```

Open [http://localhost:3000] with your browser to see the result.

# Tech Stack

frontend Framework: React and Next JS
Here, on frontend Next js allows us to use SSR (Server Side Rendering) which will improves page loading time along with user experience. Along with that we can use getStaticProps and getStaticPaths; so getStaticProps will pre-render the page during build time at that make app more efficient (faster)(getStaticProps is run on our build server (Node.js environment), so the code will not be included in the client-side JavaScript bundle. This means you can directly query your database.), and same for the getStaticPaths (This is used in conjunction with getStaticProps when dynamic paths are used in order to define a list of paths that are to be static rendered at build time.)

Styling: CSS
For styling I used Modular CSS based styling pattern. Modular CSS allows us to write more maintainable and readable code. But apart from that we can use component based libraries like antd (Ant Design) or Material-UI.

backend Framework: Node + express
1) The first and most important advantage of using Express.JS is that we would be able to get fast application development experience with it.
2) Several such platforms are unable to handle a higher level of requests, but with the help of Express.JS, we would be able to handle requests efficiently as it offers you the support of I/Q request handling.
3) Express.JS is open source backend framework, so it is cost effective and it has widespread community for supporting.
4) We would be able to integrate several third-party applications and services with Express.JS.
5) We can use same language to code Frontend, which makes life easy to maintain or understand full stack app.

database: Mongo Atlas (mongoose ODM)
1) Easy to connect with cloud storage.
2) No-Sql database allows us to scale the daata model easily.
3) Mongoose ODM allows us to make partial relational database.
4) Light weight, easy to use and faster than RDBMS.

<img src="https://firebasestorage.googleapis.com/v0/b/recipe-aae31.appspot.com/o/Image1.JPG?alt=media&token=6127729b-eeb8-4e20-bc68-950375e3d16b" />
<img src="https://firebasestorage.googleapis.com/v0/b/recipe-aae31.appspot.com/o/Image2.png?alt=media&token=95f04f36-33a1-406f-b229-b9b458e812c7" />
<img src="https://firebasestorage.googleapis.com/v0/b/recipe-aae31.appspot.com/o/Image3.png?alt=media&token=4593c9f9-be8d-404f-9edc-c76d305b6050" />
<img src="https://firebasestorage.googleapis.com/v0/b/recipe-aae31.appspot.com/o/Image4.png?alt=media&token=c9019721-77fd-4fe3-bc24-976c9b7136ec" />
<img src="https://firebasestorage.googleapis.com/v0/b/recipe-aae31.appspot.com/o/Image5.png?alt=media&token=bda950c2-0c4b-4cf9-8b26-231185c57bee" />
<img src="https://firebasestorage.googleapis.com/v0/b/recipe-aae31.appspot.com/o/Image6.png?alt=media&token=beed1a05-b080-4b4a-8c1c-5c19a58c6227" />