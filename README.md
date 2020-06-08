# inversifyjs-demo

This project demonstrates the usage of 
[InversifyJS](https://github.com/inversify/InversifyJS) to create inversion
of control container. 

But, before we start using InversifyJS, let's take some time to understand some
basic concepts. 

### What is Dependency Injection?
In simple words, dependency injection is providing an object with everything
that it needs(dependencies) to do some work instead of letting the object
create those dependencies.

For example,
```
class ArtSupplies {
  constructor() {
    this.paints = new ArcylicPaints();
  }
} 
```

In the above example, `paints` is the dependency for `ArtSupplies`. 

### Why do we need Dependency Injection?
Do you see any problem with the above code?

If we want to test the code shown above, we would have to somehow mock the
object of `paints` and then intercept all the methods that `paints` will be 
calling. This makes testing difficult and messy. 

This is where the dependency injection comes into the picture. We can simply 
delegate the work of creating dependencies to someone else. 

One way to inject dependency to the class is through constructors.

```
class ArtSupplies {
  constructor(AcrylicPaints paints) {
    this.paints = paints;
  }
} 
```

There are other ways too, like injecting dependencies through setter methods
and through interfaces.

### Inversion of Control

See any problem with the dependency injection in the code above? 

Yes, the problem with this is, it gets very difficult to manage dependencies. 

For example, 
Before we create an object of `ArtSupplies`, we need to create the object of
`AcrylicPaints`. 

Now if we add another dependency to `ArtSupplies` class, let's
say `PaintBrushes`, we would need to create an object of `PaintBrushes` before
creating an object of `AcrylicPaints`. 

It might not seem like a big problem
right now, but a real-life application can have tons of dependencies, mostly
spread throughout the codebase.  

So here is where the Inversion of Control principle comes to our rescue. 
In simple terms, Inversion of control is all about letting someone else create
the objects.

With Inversion of Control, all the dependencies are managed by the container 
and us programmers can free ourselves of worrying about managing dependencies.

Main tasks of the container are 
* Create objects
* Know dependencies of all the classes 
* Be read to provide dependencies when asked 