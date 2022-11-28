export default function Article() {
    return (
        <>
        <img src="http://creatorhome.herokuapp.com/static/img/react-icon-0.8122358dfcc3.png"></img>
        <h1>Welcome to React</h1>
        <p>
            We'll be using the create-react-app generator for this tutorial.
            To use the generator as well as run the React application server, you'll need Node.js JavaScript runtime and npm (Node.js package manager) installed.
            npm is included with Node.js which you can download and install from Node.js downloads.
        </p>
        <p>
            You can now create a new React application by typing:
        </p>
        <code>npx create-react-app my-app</code>
        <p>
            where <span>my-app</span> is the name of the folder for your application. This may take a few minutes to create the React application and install its dependencies.
        </p>
        <p>
            Let's quickly run our React application by navigating to the new folder and typing npm start to start the web server and open the application in a browser:
        </p>
        <code>
            cd my-app
            npm start
        </code>
        <p>You should see the React logo and a link to "Learn React" on <span> http://localhost:3000</span> in your browser. We'll leave the web server running while we look at the application with VS Code.

            To open your React application in VS Code, open another terminal or command prompt window, navigate to the my-app folder and type code .:
        </p>
    </>

    );
}