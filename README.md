# Hiking CO

Hiking CO is a web application that displays information about hikes in Colorado. The site has three pages that users can navigate to through a menu bar on each page: 

- The **Home** page introduces the site. 
- The **All Hikes** page displays a list of current hikes with a name, image, and desciption for each hike.
- The **Add a Hike** page contains a form that allows users to submit their own hikes, which will then appear on the All Hikes page. 

Each page has its own client-side route. There is also an **Error** page that appears if a user tries to navigate to a route that does not exist. 

The following components make up the content and functionality of the site's pages: 

- App
- Header
- Hike Card
- Hike Form
- Hikes List
- Navigation Bar

Here is a demonstration of the site's content and functionality: 

<img src="Hiking-CO.gif" alt="Alt Text" width="501" height="222"><br>

## Data Source

The application fetches data from a db.json file. With `json-server` installed globally, users can run the following command to run the server: 

```console
$ json-server --watch db.json
```

The application will make a GET request to `http://localhost:3001/hikes` to fetch data from the db.json file each time the All Hikes page refreshes. 

Hikes submitted through the form on the Add a Hike page will be added to the db.json file through a POST request to `http://localhost:3001/hikes`.  

## References

The background image of the **Home** page and all images on the **All Hikes** page were taken by the application's author.

The application was built using the React JavaScript library and the <a href="https://react.dev/reference/react">React reference documentation</a>. 

The following MDN Web Documents were also referenced in the making of this application: 

- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList">MDN Web Docs: Element: classList property</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener">MDN Web Docs: EventTarget: addEventListener() method</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/fetch">MDN Web Docs: fetch() global function</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then">MDN Web Docs: Promise.prototype.then()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST">MDN Web Docs: POST Method</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Response/json">MDN Web Docs: Response: json() method</a>