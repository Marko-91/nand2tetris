// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/04/Mult.asm

// Multiplies R0 and R1 and stores the result in R2.
// (R0, R1, R2 refer to RAM[0], RAM[1], and RAM[2], respectively.)

// Put your code here.
// DECLARE AND INIT VARIABLES
      // Init iterator
      @i
      M=0
      // Init Ram[2]
      @R2
      M=0
// LOOP
(LOOP)
      @R0
      D=M // In the data register, store the value of R0
      @i
      D=D-M // Overwrite the constant value in the data register; D becomes D - iterator
      @END
      D;JEQ // If D = 0, jump to @end in memory location RAM[end]
      @R1
      D=M // Store the content of R1 to the Data register
      @R2
      M=D+M // Add the content of Data Register to the content of RAM[2]
      @i
      M=M+1 // Increment the iterator
      @LOOP
      0;JMP // Return to the loop
(END)
      @END
      0;JMP // End it with an infinite loop
