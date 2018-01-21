# Start Developing with React on Windows OS

---
	React is probably one of the hottest languages currently floating around in the app development
world and sometimes just figuring out where to start with a new language can be tiring and confusing. 
	So to save you the pain I am  documenting my exprience. Listing successful paths to using React and
its marrying parts on Windows OS step by step. Other operating systems steps may vary.

###Lets get started
----

What is needed?

1.[Git-Bash for windows](http://gitforwindows.org) //Allows you to do more linux-y things

2.[Scoop](http://scoop.sh/) //Package Manager
 
..* At this link you will be informed to run this line of code Windows Power-Shell:

```
.iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```


3. We will use scoop to install node.js 
	Run this line of code in your CLI

```
scoop install node
```

which inturn will install npm (node package manager).


Now all the parts are availabe to us lets install React

1. Run this code in your CLI

```
create-react-app [AppPath]
```

2. Move into the [AppPath] Directory from your CLI
```
cd [AppPath]
```

3. Finally we install React into the directory with:

```
npm start  (!important must be called within the App Folder)
```

------------------------------------------------------------
