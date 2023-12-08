# Hiking CO

Hiking CO is a web application that displays information about hikes in Colorado. The site has three pages that users can navigate to through a menu bar on each page: 

- The **Home** page introduces the site. 
- The **All Hikes** page contains a list of current hikes with a name, image, and desciption for each hike.
- The **Add a Hike** page contains a form that allows users to submit their own hikes, which will then appear on the All Hikes page. 

Each of these three pages have their own client-side route. There is also an **Error** page that displays if a user tries to navigate to a route that does not exist. 

The following components make up the content and functionality of the site's pages: 

- App
- Header
- Hike Card
- Hike Form
- Hikes List
- Navigation Bar

## Data Source

The application fetches data from its db.json file. With `json-server` installed globally, users can run the following command to run the server: 

```console
$ json-server --watch db.json
```

The application will then make a GET request to `http://localhost:3001/hikes` to fetch data from the db.json file each time the page refreshes. 

Hikes submitted through the form on the Add a Hike page will be added to the db.json file through a POST request to `http://localhost:3001/hikes`.  

## References

The background image of the **Home** page and all images on the **All Hikes** page were taken by the application's author

The following MDN Web Documents were also referenced in the making of this application: 

- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList">MDN Web Docs: Element: classList property</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener">MDN Web Docs: EventTarget: addEventListener() method</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/fetch">MDN Web Docs: fetch() global function</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt">MDN Web Docs: parseInt()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then">MDN Web Docs: Promise.prototype.then()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Response/json">MDN Web Docs: Response: json() method</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace">MDN Web Docs: String.prototype.replace()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim">MDN Web Docs: String.prototype.trim()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">MDN Web Docs: The Anchor element</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body">MDN Web Docs: The Document Body element</a>