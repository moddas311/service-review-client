import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-5'>
            <div className="card text-black">
                <div className="card-body">
                    <h2 className="card-title text-blue-500">Difference between SQL and NoSQL</h2>
                    <p>
                        You sent
                        Key-Value stores are dictionaries which access diverse objects with a key unique to each.SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.

                        NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users.

                        SQL is available to most major platforms, from operating systems to architectures and programming languages. Compatibility varies more widely for NoSQL, and dependencies need to be investigated more carefully.
                        You sent
                        SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.</p>
                </div>
            </div>
            <div className="card text-black">
                <div className="card-body  ">
                    <h2 className="card-title text-blue-500">What is JWT, and how does it work?
                    </h2>
                    <p>JWT or JSON Web Tokens are the new industry standards for securing APIs to and from the server. But what exactly is JWT? How does it work? Let us understand it more in detail. Token-based authentication is probably the most common method for authenticating requests to REST API endpoints. It works like this:

                        A user logs in to an application with a username and password, or otherwise proves her identity.
                        The server confirms her identity and sends back an access token containing a reference to her identity (e.g. a private key pointing to a unique User instance).
                        The client then includes this access token with every request to the server.
                        For protected routes, REST API authentication middleware asserts the presence of a valid access token. The server can further use the identity asserted by the validated token to implement more granular permissions, such as acting on resources belonging to that particular user.
                        A JWT’s characteristics make it a great choice for token-based authentication. We want a lightweight package, since it will be included on every single request to our REST API. </p>
                </div>
            </div>
            <div className="card ">
                <div className="card-body text-black">
                    <h2 className="card-title text-blue-500">What is the difference between javascript and NodeJS?</h2>
                    <p>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML. JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side developmentJavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.</p>
                </div>
            </div>
            <div className="card text-black">
                <div className="card-body">
                    <h2 className="card-title text-blue-500">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
                        No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;