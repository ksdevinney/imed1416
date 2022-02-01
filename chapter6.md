# Chapter 6: Adding Links

Anchor tag makes it possible to link pages together:
<a></a>

Can wrap *a* around text or images, or any html content

href: hypertext reference - provides the address of the linked resource

URLs for href can be absolute (full URL, includes http) or relative (linking to another document on the same server)

External link: to a page outside of your own server

Fun fact: only <li> elements can be children of lists

Without the http pathname, the browser will search the server first

* When linking within the same directory, you only need the filename
* For a lower directory, specify the directory name, then the filename
* Higher directory: ../ directs up one directory level (parent folder)

Root directory: directory that contains all directories
Site root relative: uses / at the beginning, to signifify returning to the root directory
Won't work on local machine, since the root folder will be your hard drive- can only test once on the final server

Pathnames to images work similarly

Linking to a fragment: identify the destination, then create a link to it
* Use an id tag on the destination section
* use "#destination" in the href

Fragment in another document: use document path as normal, with #destination after filename

target="_blank" will open a page in a new window
target=display in all links will open all links in the same "display" window

mailto: for linking to an email address

tel: for linking to a phone number (include full international dialing number)

For phone and email, also include the target in the link text so it is available to everyone, even without an email client or smartphone