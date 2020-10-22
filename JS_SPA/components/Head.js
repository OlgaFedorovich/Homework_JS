const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');

const metaViewPort = document.createElement('meta');
metaViewPort.setAttribute('name', 'viewport');
metaViewPort.setAttribute('content', 'width=device-width, initial-scale=1.0');

const title = document.createElement('title');

const linkStyles = document.createElement('link');
linkStyles.setAttribute('rel', 'stylesheet');
linkStyles.setAttribute('href', 'style.css');

document.head.appendChild(metaCharset);
document.head.appendChild(metaViewPort);
document.head.appendChild(title);
document.head.appendChild(linkStyles);

export {title}