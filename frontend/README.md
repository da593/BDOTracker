# File Structure
```
frontend
│─── Dockerfile
│─── package-lock.json 
│─── package.json
│─── README.md
└─── public
│   │─── _redirects
│   │─── index.html
│   │─── manifest.json
│   │─── robots.txt
│   
└─── src
│   │─── index.js
│   │─── api
│   │─── calculations   
│   │─── components
│   │─── pages
│   │─── styles
```
# Architecture Design
The React framework promotes a [composition design pattern](https://reactjs.org/docs/composition-vs-inheritance.html).
To utilize this design pattern, components must pass props down to child components and child components must lift the state up to the parent child. The following diagram showcase how the frontend is designed.

<br/>A high-level overall design diagram:<br/>
[![Overall-Architecture-drawio.png](https://i.postimg.cc/BQgvkm6t/Overall-Architecture-drawio.png)](https://postimg.cc/vc4M6L5d)

<br/> The design for the popups:<br/>
[![Popup-Architecture-Page-2-drawio.png](https://i.postimg.cc/J4hxHd9W/Popup-Architecture-Page-2-drawio.png)](https://postimg.cc/3WPmP98L)


