package com.vmtranslator;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;
/*
The main program should construct a Parser to parse the VM
input file and a CodeWriter to generate code into the corresponding output file.
It should then march through the VM commands in the input file and generate assembly
code for each one of them.
If the program’s argument is a directory name rather than a file name, the main
program should process all the .vm files in this directory. In doing so, it should use a
separate Parser for handling each input file and a single CodeWriter for handling
the output.
*/
public class VMTranslator {

	public static void main(String[] args) {	
		//How to read from a file
		File file = new File("BasicTest.vm");
		Parser parser = new Parser("BasicTest.vm");
		try (BufferedReader br = new BufferedReader(new FileReader(file))) {
			String line;
			
			while ((line = br.readLine()) != null) {
				System.out.println(line);
			}
			
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
}
