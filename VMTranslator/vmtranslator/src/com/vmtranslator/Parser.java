package com.vmtranslator;

import java.io.File;
/*
Handles the parsing of a single .vm file, and encapsulates access to the input
code. It reads VM commands, parses them, and provides convenient access to their
components. In addition, it removes all white space and comments.
*/
public class Parser {
	private File stream;
	
	public Parser(File stream) {
		this.stream = stream;
	}
	
	public boolean hasMoreCommands() {
		
	}
	
	public void advance() {
		
	}
	
	public String commandType() {
		
	}
	
	public String arg1() {
		
	}
	
	public String arg2() {
		
	}
	
}
