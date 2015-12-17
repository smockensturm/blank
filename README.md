#Getting Started

Download ZIP of this project.

Open Gruntfile.js, index.php and package.json and change file names from **blank** to **yourprojectname**.

In terminal:
```
cd Desktop/blank
npm install
```

Compile bootstrap for the first time:
```
cd bootstrap
npm install
grunt dist
```

Initialize a new repository and commit files:
```
cd ../
git init
git add .
git commit -m 'your commit message'
```

Start grunt:
```
grunt 
```

#Bootstrap 4 Instructions

Only change variables in bootstrap/scss/_variables.scss

To recompile bootstrap files after a change is made: 
```
cd bootstrap
grunt dist
cd ../
grunt
```

The _variables.scss file is imported to the main stylesheet, so the variables are available for use there.

#Available Plugins

zoom.js
owl carousel 2
modernizr (dev config)
