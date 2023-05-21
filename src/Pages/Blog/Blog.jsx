import { Accordion } from "flowbite-react";
import AppTitle from "../../Helmet/AppTitle";

const Blog = () => {
  return (
    <div className="bg-gradient-to-l to-red-50 from-violet-100 py-16">
      <AppTitle title="- Blog" />
      <h1 className="text-4xl font-bold text-center py-5 text-slate-600">
        This is blog Page
      </h1>
      <div className="container">
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                Access tokens and refresh tokens are pieces of data that allow
                client applications to access protected resources on a server on
                behalf of a user.
              </p>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                Access tokens have a short lifetime and are used to authorize
                requests to the server. Refresh tokens have a longer lifetime
                and are used to obtain new access tokens when the current ones
                expire.
              </p>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                To get access tokens and refresh tokens, client applications
                need to follow the authorization flow of the server, which
                involves sending credentials and user consent and receiving a
                code that can be exchanged for tokens at a token endpoint.
              </p>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                o store the tokens on the client-side, client applications need
                to consider the security risks and trade-offs of different
                options. One option is to use secure HTTP-only cookies, which
                prevent XSS attacks but limit the use of tokens by client-side
                code. Another option is to use local storage or session storage,
                which allow more flexibility but are vulnerable to XSS attacks.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Compare SQL and NoSQL databases?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                SQL databases are relational databases that use structured query
                language (SQL) to store and manipulate data in tables with rows
                and columns. NoSQL databases are non-relational databases that
                use different data models to store and manipulate data, such as
                document, key-value, or graph models1
              </p>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                SQL databases have a predefined schema that requires data to be
                organized and structured before storing it. NoSQL databases have
                a dynamic schema that allows data to be stored in various
                formats without prior structuring
              </p>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                SQL databases are vertically scalable, meaning that they can
                handle more load by adding more resources to a single server.
                NoSQL databases are horizontally scalable, meaning that they can
                handle more load by adding more servers to a cluster
              </p>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                SQL databases are better suited for complex queries and
                transactions that involve multiple tables and operations. NoSQL
                databases are better suited for simple queries and operations
                that involve single documents or collections
              </p>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                SQL databases are ideal for structured data that has clear
                relations and constraints. NoSQL databases are ideal for
                unstructured or semi-structured data that has high variety and
                volume
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What is express js? What is Nest JS ?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                Express.js is a web framework for Node.js that provides a
                minimal and flexible set of features for building web
                applications and APIs. Express.js is based on JavaScript and
                supports middleware, routing, templating, error handling, and
                other common web development tasks
              </p>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                Nest.js is a web framework for Node.js that provides a
                progressive and scalable architecture for building server-side
                applications. Nest.js is based on TypeScript and JavaScript and
                combines elements of object-oriented programming, functional
                programming, and reactive programming. Nest.js is inspired by
                Angular and uses Express.js or Fastify as the underlying HTTP
                server framework32.
              </p>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                Express.js and Nest.js differ in their level of abstraction,
                structure, features, and use cases. Express.js is a low-level
                framework that gives developers more freedom and flexibility to
                customize their applications, but also requires more boilerplate
                code and configuration. Nest.js is a high-level framework that
                gives developers more guidance and productivity, but also
                requires more learning and adherence to conventions
              </p>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                Express.js is suitable for simple and lightweight applications
                that do not require complex logic or structure. Express.js is
                also good for prototyping and experimenting with different ideas
                quickly. Nest.js is suitable for complex and large-scale
                applications that require robust architecture and
                maintainability. Nest.js is also good for building
                enterprise-grade applications that follow best practices and
                standards
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What is MongoDB aggregate and how does it work?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                MongoDB is a NoSQL database that stores data in collections of
                documents. MongoDB supports various operations to manipulate and
                analyze the data in the documents, such as aggregation
              </p>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                Aggregation is a process of grouping and transforming data from
                multiple documents into a single result. MongoDB provides
                different ways to perform aggregation operations, such as
                aggregation pipelines, single purpose aggregation methods, and
                map-reduce functions
              </p>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                Aggregation pipelines are the preferred method for performing
                aggregations in MongoDB. An aggregation pipeline consists of one
                or more stages that process and transform the documents as they
                pass through the pipeline. Each stage performs a specific
                operation, such as filtering, grouping, sorting, or calculating
                values
              </p>
              <p className="mb-2 font-semibold text-md text-gray-700 dark:text-gray-400">
                To use aggregation pipelines, you can run the
                db.collection.aggregate() method on a collection or a view. You
                can specify the pipeline stages as an array of documents. You
                can also use options to control the cursor behavior, the
                execution time limit, the disk usage, and other aspects of the
                aggregation operation.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;
