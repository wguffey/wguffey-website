@startuml
actor User
participant "Python Source Code" as Source
participant "Lexer (Tokenizer)" as Lexer
participant "Parser (AST)" as Parser
participant "Compiler (Bytecode)" as Compiler
participant "Python Virtual Machine (PVM)" as PVM
participant "CPU & Memory" as System

User -> Source : Writes Python Code
Source -> Lexer : Tokenize source code
Lexer -> Parser : Generate AST (Abstract Syntax Tree)
Parser -> Compiler : Convert AST to Bytecode
Compiler -> PVM : Load and execute bytecode
PVM -> System : Run bytecode instructions on CPU
System -> PVM : Return results
PVM -> User : Display output

@enduml
