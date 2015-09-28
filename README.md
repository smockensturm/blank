#Bootstrap 4 Instructions

Set defaults in bootstrap/scss/_variables.scss

To compile minified bootstrap files: 
```
cd blank/bootstrap
grunt dist
```

The _variables.scss file is imported to the main stylesheet, so the variables are available for use there.

#Mixins
##background-opacity

The background opactiy mixin allows you to set the background to a rgba value using a color variable.

```
div {
  @include background-opacity($brand-color, 0.7);
}
```
