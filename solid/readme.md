# SOLID with Typescript & Node.js

## Introduction

Los principios SOLID son un conjunto de reglas que nos ayudan a diseñar software que sea fácil de mantener y extender.
Estos principios fueron recopilado por **Robert C. Martin**, autor de "Clean Architecture", en su libro _Design Principles and Design Patterns_ (2000) y son una guía para escribir código limpio y de calidad.

## Single Responsibility Principle (SRP)

> every module, class or function in a computer program should have responsibility over a single part of that program's functionality, which it should encapsulate

Este principio establece que una clase debe tener una única responsabilidad.
Es decir, una clase debe tener un único motivo para cambiar.

Based on the **principle of cohesion**, as described by **Tom DeMarco** (_Structured Analysis and System Specification_, 1979)
Related with the term **separation of concerns**, probably coined by **Edsger W. Dijkstra** in his 1974 paper _On the role of scientific thought_

## Open/Closed Principle (OCP)

> Software entities (classes, modules, functions, and so on) should be open for extension, but closed for modification

Este principio establece que una clase debe estar abierta para extensión pero cerrada para modificación.
Es decir, una clase debe permitir que se añadan nuevas funcionalidades sin necesidad de modificar su código fuente.

**Bertrand Meyer** is generally credited for having originated the term open–closed principle, which appeared in his 1988 book _Object-Oriented Software Construction_.

## Liskov Substitution Principle (LSP)

> To build software systems from interchangeable parts, those parts must adhere to a contract that allows those parts to be substituted one for another
> Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program

Este principio establece que los objetos de una clase derivada deben poder ser sustituidos por objetos de su clase base sin afectar al correcto funcionamiento del programa.

This principle is a particular definition of a sub-typing relation, called **strong behavioral sub-typing**, that was initially introduced by **Barbara Liskov** in a 1987 conference keynote address titled _Data abstraction and hierarchy_.

## Interface Segregation Principle (ISP)

> Many client-specific interfaces are better than one general-purpose interface”.
> A client should never be forced to implement an interface that it doesn't use

Este principio establece que una clase no debe depender de interfaces que no utilice.
Es decir, una clase no debe ser forzada a implementar métodos que no necesita.

## Dependency Inversion Principle (DIP)

> High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g. interfaces).
> Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

Este principio establece que las clases de alto nivel no deben depender de las clases de bajo nivel. Ambas deben depender de abstracciones. 
Además, las abstracciones no deben depender de los detalles. Los detalles deben depender de las abstracciones.

## Conclusion

Los principios SOLID son una guía para escribir código limpio y de calidad.

- more maintainable
- flexible (easy to change)
- extensible
- more understandable
- more testable

It is only a tool with this objectives
If you don't get them or complicate the code unnecessarily, it stops making sense

## Other principles

- **DRY**: Don't Repeat Yourself
- **KISS**: Keep It Simple, Stupid
- **YAGNI**: You Aren't Gonna Need It
- **GRASP**: General Responsibility Assignment Software Patterns

## Acronyms

- **DAMP**: Descriptive And Meaningful Phrases
- **CQS**: Command Query Separation
- **CQRS**: Command Query Responsibility Segregation
- **ACID**: Atomicity, Consistency, Isolation, Durability
- **CAP**: Consistency, Availability, Partition Tolerance
- **BASE**: Basically Available, Soft state, Eventually consistent
- **CRUD**: Create, Read, Update, Delete

## Calisthenics

Un nivel de indentación por método [_Only One Level Of Indentation Per Method_]
No uses la palabra clave ELSE [_Don't use else Keyword_]
Envuelve primitivos [_Wrap All Primitives And Strings_]
Colecciones como clases de primer orden [_First Class Collections_]
No más de un punto por línea [_One Dot Per Line_]
No abrevies [_Don’t Abbreviate_]
Mantén las entidades pequeñas [_Keep All Entities Small_]
Evita más de dos atributos de instancia [_No Classes With More Than Two Instance Variables_]
Evita getters/setters o atributos públicos [_Avoid getters and setters_]
Clases con estado, evita métodos estáticos [_Avoid static methods_]

## Stupid rules

- Singleton
- Tight Coupling
- Untestability
- Premature Optimization
- Indescriptive Naming
- Duplication

## More Clean Code

- **Tell, Don't Ask**
- **Avoid negative conditionals**
- **Avoid null**
- **Avoid exceptions**
- **Avoid type checking**
- **Avoid magic numbers**
- **Avoid temporal coupling**
- **Avoid sequential coupling**
- **Avoid stringly typed**
- **Avoid singletons**
- **Avoid utility classes**
